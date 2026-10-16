#!/usr/bin/env python3
"""Valida o banco de questões (questions/*.js) e mostra a contagem por objetivo.

Uso: python3 tools/check.py
Os arquivos de questões usam só chamadas Q(...)/F(...) com literais que
também são Python válido, então dá para executá-los aqui.
"""
import collections, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
WEIGHTS = dict(re.findall(r'\["(\d{3}\.\d)", "[^"]+", (\d)\]', (ROOT / "js/data.js").read_text()))
errors, seen, count, fills = [], {}, collections.Counter(), collections.Counter()

def where():
    return f"{cur_file}"

def Q(obj, q, opts, exp):
    count[obj] += 1
    check_common(obj, q, exp)
    if len(opts) < 3: errors.append(f"{where()}: menos de 3 opções: {q[:60]}")
    if not any(o.startswith("*") for o in opts): errors.append(f"{where()}: sem opção correta: {q[:60]}")
    if all(o.startswith("*") for o in opts): errors.append(f"{where()}: todas corretas: {q[:60]}")
    if len(set(o.lstrip("*") for o in opts)) != len(opts): errors.append(f"{where()}: opções repetidas: {q[:60]}")
    n = sum(o.startswith("*") for o in opts)
    if n > 1 and not re.search(r"[Ee]scolha (duas|três|quatro)", q): errors.append(f"{where()}: {n} corretas sem 'Escolha N': {q[:60]}")
    m = re.search(r"Escolha (duas|três|quatro)", q)
    if m and {"duas": 2, "três": 3, "quatro": 4}[m.group(1)] != n: errors.append(f"{where()}: 'Escolha' não bate com {n} corretas: {q[:60]}")

def F(obj, q, answers, exp):
    count[obj] += 1; fills[obj] += 1
    check_common(obj, q, exp)
    if not answers or any(not a.strip() for a in answers): errors.append(f"{where()}: resposta vazia: {q[:60]}")

def check_common(obj, q, exp):
    if obj not in WEIGHTS: errors.append(f"{where()}: objetivo desconhecido {obj}")
    if not exp.strip(): errors.append(f"{where()}: sem explicação: {q[:60]}")
    if q.count("`") % 2 or exp.count("`") % 2: errors.append(f"{where()}: crases desbalanceadas: {q[:60]}")
    key = re.sub(r"\s+", " ", q.lower()).strip()
    if key in seen: errors.append(f"{where()}: enunciado duplicado (também em {seen[key]}): {q[:60]}")
    seen[key] = where()

index = (ROOT / "index.html").read_text()
for path in sorted((ROOT / "questions").glob("*.js")):
    cur_file = path.name
    if f'questions/{path.name}"' not in index: errors.append(f"{path.name}: não está no index.html")
    code = "\n".join(l for l in path.read_text().splitlines() if not l.lstrip().startswith("//"))
    try:
        exec(compile(code, path.name, "exec"), {"Q": Q, "F": F})
    except Exception as e:
        errors.append(f"{path.name}: erro de sintaxe/execução: {e}")

total = sum(count.values())
print(f"{'obj':6} {'peso':>4} {'qtd':>5} {'meta':>5} {'fill':>5}")
for obj, w in WEIGHTS.items():
    print(f"{obj:6} {w:>4} {count[obj]:>5} {int(w) * 25:>5} {fills[obj]:>5}")
print(f"total: {total}")
for e in errors: print("ERRO:", e)
sys.exit(1 if errors else 0)
