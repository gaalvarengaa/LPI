(function () {
  "use strict";

  const EXAM_SIZE = 40;
  const EXAM_MINUTES = 60;

  const app = document.getElementById("app");
  const timerEl = document.getElementById("timer");

  // ---------- Dados ----------

  const OBJ = {};
  LPI.topics.forEach(function (t) {
    t.objectives.forEach(function (o) {
      OBJ[o[0]] = { id: o[0], name: o[1], weight: o[2], topic: t.id };
    });
  });

  function hash(s) {
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }

  const BANK = LPI.questions.map(function (q) {
    const out = Object.assign({}, q);
    out.id = q.obj + "-" + hash(q.q + JSON.stringify(q.opts || q.answers));
    if (q.type === "mc") {
      out.options = q.opts.map(function (o) {
        const ok = o.charAt(0) === "*";
        return { text: ok ? o.slice(1) : o, ok: ok };
      });
    }
    return out;
  });

  function countObj(id) {
    return BANK.filter(function (q) { return q.obj === id; }).length;
  }

  // ---------- Armazenamento local ----------

  const store = {
    get: function (k, d) {
      try { const v = JSON.parse(localStorage.getItem("lpi010:" + k)); return v == null ? d : v; }
      catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem("lpi010:" + k, JSON.stringify(v)); } catch (e) { /* sem storage */ }
    },
  };

  function record(q, correct) {
    const stats = store.get("stats", {});
    const s = stats[q.obj] || { n: 0, ok: 0 };
    s.n++;
    if (correct) s.ok++;
    stats[q.obj] = s;
    store.set("stats", stats);

    const wrong = store.get("wrong", {});
    if (correct) delete wrong[q.id];
    else wrong[q.id] = (wrong[q.id] || 0) + 1;
    store.set("wrong", wrong);
  }

  // ---------- Utilidades ----------

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function inline(s) {
    return esc(s).replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
  }
  function fmt(s) {
    return String(s).split("```").map(function (part, i) {
      return i % 2 ? "<pre>" + esc(part.replace(/^\n+|\n+$/g, "")) + "</pre>" : inline(part);
    }).join("");
  }
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pct(ok, n) { return n ? Math.round((ok / n) * 100) : 0; }
  function norm(s) { return s.trim().replace(/\s+/g, " ").replace(/^sudo /, ""); }

  // ---------- Itens de sessão ----------

  function makeItem(q) {
    return {
      q: q,
      order: q.type === "mc" ? shuffle(q.options.map(function (_, i) { return i; })) : null,
      answer: q.type === "mc" ? [] : "",
      checked: false,
      flag: false,
    };
  }
  function answered(it) {
    return it.q.type === "mc" ? it.answer.length > 0 : it.answer.trim() !== "";
  }
  function isCorrect(it) {
    const q = it.q;
    if (q.type === "fill") {
      const a = norm(it.answer);
      return q.answers.some(function (x) { return norm(x) === a; });
    }
    const right = [];
    q.options.forEach(function (o, i) { if (o.ok) right.push(i); });
    return it.answer.length === right.length && right.every(function (i) { return it.answer.indexOf(i) >= 0; });
  }

  function renderQuestion(it, idx, total, locked) {
    const q = it.q;
    const o = OBJ[q.obj];
    let body;
    if (q.type === "mc") {
      const n = q.options.filter(function (x) { return x.ok; }).length;
      const type = n > 1 ? "checkbox" : "radio";
      body = (n > 1 ? '<p class="hint">Escolha ' + n + " respostas.</p>" : "") +
        '<div class="opts">' + it.order.map(function (i) {
          const op = q.options[i];
          const sel = it.answer.indexOf(i) >= 0;
          let cls = "";
          if (locked) cls = op.ok ? "ok" : sel ? "bad" : "";
          return '<label class="opt ' + cls + '"><input type="' + type + '" name="opt" value="' + i + '"' +
            (sel ? " checked" : "") + (locked ? " disabled" : "") + "><span>" + inline(op.text) + "</span></label>";
        }).join("") + "</div>";
    } else {
      body = '<p class="hint">Digite a resposta.</p>' +
        '<input type="text" id="fill" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" value="' +
        esc(it.answer) + '"' + (locked ? " disabled" : "") + ">" +
        (locked ? '<p class="answer">Resposta aceita: ' + q.answers.map(function (a) { return "<code>" + esc(a) + "</code>"; }).join(" ou ") + "</p>" : "");
    }
    let html = '<div class="meta">Questão ' + (idx + 1) + " de " + total + " · " + o.id + " " + esc(o.name) + "</div>" +
      '<div class="qtext">' + fmt(q.q) + "</div>" + body;
    if (locked) {
      const ok = isCorrect(it);
      html += '<div class="exp ' + (ok ? "good" : "wrong") + '"><strong>' + (ok ? "Correto!" : "Incorreto.") + "</strong> " + fmt(q.exp) + "</div>";
    }
    return html;
  }

  function bindInputs(it) {
    const opts = app.querySelectorAll("input[name=opt]");
    opts.forEach(function (el) {
      el.addEventListener("change", function () {
        it.answer = Array.prototype.filter.call(opts, function (e) { return e.checked; })
          .map(function (e) { return +e.value; });
      });
    });
    const f = document.getElementById("fill");
    if (f) {
      f.addEventListener("input", function () { it.answer = f.value; });
      if (!f.disabled) f.focus();
    }
  }

  // ---------- Estado ----------

  let S = null;
  let timerId = null;

  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
    timerEl.hidden = true;
  }

  // ---------- Tela inicial ----------

  function home() {
    stopTimer();
    S = null;
    const stats = store.get("stats", {});
    const wrong = store.get("wrong", {});
    const wrongQs = BANK.filter(function (q) { return wrong[q.id]; });

    let totN = 0, totOk = 0;
    const rows = Object.keys(OBJ).map(function (id) {
      const o = OBJ[id];
      const s = stats[id] || { n: 0, ok: 0 };
      totN += s.n; totOk += s.ok;
      const p = pct(s.ok, s.n);
      return "<tr><td>" + id + " " + esc(o.name) + '</td><td class="num">' + o.weight +
        '</td><td class="num">' + countObj(id) + '</td><td class="num">' + s.n +
        '</td><td class="num">' + (s.n ? p + "%" : "–") + '</td><td><div class="bar"><span style="width:' + p + '%"></span></div></td></tr>';
    }).join("");

    app.innerHTML =
      '<section class="card"><h1>Banco de questões LPI Linux Essentials</h1>' +
      '<p class="muted">' + BANK.length + " questões cobrindo todos os objetivos do exame 010-200 (versão 2.0).</p></section>" +

      '<section class="card"><h2>Simulado</h2>' +
      "<p>" + EXAM_SIZE + " questões sorteadas na mesma proporção dos pesos oficiais, com " + EXAM_MINUTES +
      " minutos de prova. A correção aparece só no final, como no exame real.</p>" +
      '<button class="primary" id="go-exam">Iniciar simulado</button></section>' +

      '<section class="card"><h2>Estudo por tópico</h2><p>Correção imediata com explicação após cada questão.</p>' +
      LPI.topics.map(function (t) {
        return '<fieldset><legend><label><input type="checkbox" class="tsel" data-t="' + t.id + '" checked> ' +
          t.id + " " + esc(t.name) + "</label></legend>" +
          t.objectives.map(function (o) {
            return '<label><input type="checkbox" class="osel" value="' + o[0] + '" data-t="' + t.id + '" checked> ' +
              o[0] + " " + esc(o[1]) + " <small>(" + countObj(o[0]) + ")</small></label>";
          }).join("") + "</fieldset>";
      }).join("") +
      '<div class="row"><label>Quantidade <select id="qty"><option>10</option><option selected>20</option>' +
      '<option>40</option><option value="0">Todas</option></select></label>' +
      '<label><input type="checkbox" id="unseen"> Priorizar questões erradas</label>' +
      '<span class="spacer"></span><button class="primary" id="go-study">Começar</button></div></section>' +

      '<section class="card"><h2>Revisar erros</h2><p>' + wrongQs.length +
      " questões que você errou e ainda não acertou depois. Ao acertar, a questão sai da lista.</p>" +
      '<button id="go-wrong"' + (wrongQs.length ? "" : " disabled") + ">Revisar erros</button></section>" +

      '<section class="card"><h2>Seu desempenho</h2>' +
      "<p>Total: " + totN + " respostas, " + (totN ? pct(totOk, totN) + "% de acerto" : "nenhuma ainda") +
      '. Fica salvo só neste navegador.</p><div style="overflow-x:auto"><table><thead><tr><th>Objetivo</th>' +
      '<th class="num">Peso</th><th class="num">Banco</th><th class="num">Resp.</th><th class="num">Acerto</th><th></th></tr></thead><tbody>' +
      rows + '</tbody></table></div><div class="actions"><button id="reset">Zerar histórico</button></div></section>';

    document.getElementById("go-exam").onclick = startExam;
    document.getElementById("go-wrong").onclick = function () {
      startStudy(shuffle(wrongQs), "Revisão de erros");
    };
    document.getElementById("reset").onclick = function () {
      if (confirm("Apagar todo o histórico e a lista de erros?")) {
        store.set("stats", {});
        store.set("wrong", {});
        home();
      }
    };
    app.querySelectorAll(".tsel").forEach(function (t) {
      t.addEventListener("change", function () {
        app.querySelectorAll('.osel[data-t="' + t.dataset.t + '"]').forEach(function (o) { o.checked = t.checked; });
      });
    });
    document.getElementById("go-study").onclick = function () {
      const sel = Array.prototype.map.call(app.querySelectorAll(".osel:checked"), function (e) { return e.value; });
      if (!sel.length) { alert("Selecione pelo menos um objetivo."); return; }
      const qty = +document.getElementById("qty").value;
      const prio = document.getElementById("unseen").checked;
      let pool = shuffle(BANK.filter(function (q) { return sel.indexOf(q.obj) >= 0; }));
      if (prio) {
        pool = pool.filter(function (q) { return wrong[q.id]; })
          .concat(pool.filter(function (q) { return !wrong[q.id]; }));
      }
      startStudy(qty ? pool.slice(0, qty) : pool, "Estudo");
    };
  }

  // ---------- Modo estudo ----------

  function startStudy(list, title) {
    stopTimer();
    S = { mode: "study", title: title, items: list.map(makeItem), i: 0 };
    renderStudy();
  }

  function renderStudy() {
    const it = S.items[S.i];
    const last = S.i + 1 >= S.items.length;
    const done = S.items.filter(function (x) { return x.checked; });
    const okCount = done.filter(isCorrect).length;
    app.innerHTML = '<section class="card">' +
      '<div class="meta"><strong>' + esc(S.title) + "</strong> · acertos: " + okCount + "/" + done.length + "</div>" +
      renderQuestion(it, S.i, S.items.length, it.checked) +
      '<div class="actions">' +
      (it.checked
        ? '<button class="primary" id="next">' + (last ? "Ver resumo" : "Próxima") + "</button>"
        : '<button class="primary" id="check">Responder</button>') +
      '<span class="spacer"></span><button id="quit">Encerrar</button></div></section>';
    bindInputs(it);

    const check = document.getElementById("check");
    if (check) check.onclick = function () {
      if (!answered(it)) return;
      it.checked = true;
      record(it.q, isCorrect(it));
      renderStudy();
    };
    const next = document.getElementById("next");
    if (next) {
      next.onclick = function () {
        if (last) results();
        else { S.i++; renderStudy(); window.scrollTo(0, 0); }
      };
      next.focus();
    }
    document.getElementById("quit").onclick = function () {
      S.items = S.items.filter(function (x) { return x.checked; });
      if (S.items.length) results(); else home();
    };
  }

  // ---------- Simulado ----------

  function buildExam() {
    const picked = [];
    const used = {};
    Object.keys(OBJ).forEach(function (id) {
      shuffle(BANK.filter(function (q) { return q.obj === id; }))
        .slice(0, OBJ[id].weight)
        .forEach(function (q) { picked.push(q); used[q.id] = true; });
    });
    if (picked.length < EXAM_SIZE) {
      shuffle(BANK.filter(function (q) { return !used[q.id]; }))
        .slice(0, EXAM_SIZE - picked.length)
        .forEach(function (q) { picked.push(q); });
    }
    return shuffle(picked);
  }

  function startExam() {
    S = { mode: "exam", title: "Simulado", items: buildExam().map(makeItem), i: 0, end: Date.now() + EXAM_MINUTES * 60000 };
    timerEl.hidden = false;
    tick();
    timerId = setInterval(tick, 1000);
    renderExam();
  }

  function tick() {
    const left = Math.max(0, Math.round((S.end - Date.now()) / 1000));
    const m = Math.floor(left / 60), s = left % 60;
    timerEl.textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    timerEl.classList.toggle("low", left < 300);
    if (left === 0) {
      alert("Tempo esgotado! O simulado será corrigido.");
      finishExam();
    }
  }

  function renderExam() {
    const it = S.items[S.i];
    const n = S.items.length;
    app.innerHTML = '<section class="card">' + renderQuestion(it, S.i, n, false) +
      '<div class="actions">' +
      '<button id="prev"' + (S.i ? "" : " disabled") + ">Anterior</button>" +
      '<button id="next"' + (S.i + 1 < n ? "" : " disabled") + ">Próxima</button>" +
      '<button id="flag">' + (it.flag ? "Desmarcar revisão" : "Marcar p/ revisão") + "</button>" +
      '<span class="spacer"></span><button class="primary" id="finish">Finalizar</button></div>' +
      '<div class="grid">' + S.items.map(function (x, i) {
        const cls = [answered(x) ? "done" : "", x.flag ? "flag" : "", i === S.i ? "cur" : ""].join(" ");
        return '<button class="' + cls + '" data-i="' + i + '">' + (i + 1) + "</button>";
      }).join("") + "</div>" +
      '<p class="hint">Cinza = respondida · laranja = marcada para revisão.</p></section>';
    bindInputs(it);

    function go(i) { S.i = i; renderExam(); window.scrollTo(0, 0); }
    document.getElementById("prev").onclick = function () { go(S.i - 1); };
    document.getElementById("next").onclick = function () { go(S.i + 1); };
    document.getElementById("flag").onclick = function () { it.flag = !it.flag; renderExam(); };
    document.getElementById("finish").onclick = function () {
      const blank = S.items.filter(function (x) { return !answered(x); }).length;
      const msg = blank ? "Ainda há " + blank + " questões sem resposta. Finalizar mesmo assim?" : "Finalizar o simulado?";
      if (confirm(msg)) finishExam();
    };
    app.querySelectorAll(".grid button").forEach(function (b) {
      b.onclick = function () { go(+b.dataset.i); };
    });
  }

  function finishExam() {
    stopTimer();
    S.items.forEach(function (it) {
      it.checked = true;
      record(it.q, isCorrect(it));
    });
    results();
  }

  // ---------- Resultado ----------

  function results() {
    stopTimer();
    const items = S.items;
    const ok = items.filter(isCorrect).length;
    const p = pct(ok, items.length);
    const byTopic = {};
    items.forEach(function (it) {
      const t = OBJ[it.q.obj].topic;
      byTopic[t] = byTopic[t] || { n: 0, ok: 0 };
      byTopic[t].n++;
      if (isCorrect(it)) byTopic[t].ok++;
    });
    const wrongItems = items.filter(function (it) { return !isCorrect(it); });

    app.innerHTML = '<section class="card"><h2>Resultado: ' + esc(S.title) + "</h2>" +
      '<div class="score ' + (p >= 70 ? "pass" : "fail") + '">' + ok + "/" + items.length + " (" + p + "%)</div>" +
      '<p class="muted">O exame oficial usa escala de 200 a 800 e aprova com 500. A conversão não é linear, então mire em 70% ou mais aqui antes de marcar a prova.</p>' +
      "<table><thead><tr><th>Tópico</th><th class=\"num\">Acertos</th><th class=\"num\">%</th></tr></thead><tbody>" +
      LPI.topics.filter(function (t) { return byTopic[t.id]; }).map(function (t) {
        const b = byTopic[t.id];
        return "<tr><td>" + t.id + " " + esc(t.name) + '</td><td class="num">' + b.ok + "/" + b.n + '</td><td class="num">' + pct(b.ok, b.n) + "%</td></tr>";
      }).join("") + "</tbody></table>" +
      '<div class="actions"><button class="primary" id="home">Início</button>' +
      (wrongItems.length ? '<button id="redo">Refazer as erradas</button>' : "") + "</div></section>" +
      '<section class="card"><div class="row"><h2 style="margin:0">Revisão</h2><span class="spacer"></span>' +
      '<label><input type="checkbox" id="only-wrong"' + (wrongItems.length ? " checked" : "") + "> Só as erradas</label></div>" +
      '<div id="review"></div></section>';

    function renderReview() {
      const only = document.getElementById("only-wrong").checked;
      document.getElementById("review").innerHTML = items.map(function (it, i) {
        const good = isCorrect(it);
        if (only && good) return "";
        const first = it.q.q.split("\n")[0].replace(/`|\*\*/g, "");
        return "<details><summary><span class=\"" + (good ? "tag-ok" : "tag-bad") + '">' + (good ? "✓" : "✗") +
          "</span> " + (i + 1) + ". " + esc(first.length > 90 ? first.slice(0, 90) + "…" : first) +
          '</summary><div class="card">' + renderQuestion(it, i, items.length, true) + "</div></details>";
      }).join("") || '<p class="muted">Nenhuma questão errada. 🎉</p>';
    }
    renderReview();
    document.getElementById("only-wrong").onchange = renderReview;
    document.getElementById("home").onclick = home;
    const redo = document.getElementById("redo");
    if (redo) redo.onclick = function () {
      startStudy(shuffle(wrongItems.map(function (it) { return it.q; })), "Refazendo erradas");
    };
    window.scrollTo(0, 0);
  }

  // ---------- Eventos globais ----------

  document.getElementById("home-link").onclick = function (e) {
    e.preventDefault();
    if (S && S.mode === "exam" && timerId && !confirm("Abandonar o simulado em andamento?")) return;
    home();
  };

  // Enter responde / avança no modo estudo.
  document.addEventListener("keydown", function (e) {
    if (!S || S.mode !== "study" || e.key !== "Enter") return;
    const b = document.getElementById("check") || document.getElementById("next");
    if (b) { e.preventDefault(); b.click(); }
  });

  window.addEventListener("beforeunload", function (e) {
    if (S && S.mode === "exam" && timerId) { e.preventDefault(); e.returnValue = ""; }
  });

  home();
})();
