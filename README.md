# Banco de questões LPI Linux Essentials (010-200)

Banco com mais de 1000 questões em português para estudar para o exame **LPI Linux Essentials 010**, objetivos **versão 2.0**. Site estático (HTML, CSS e JavaScript puro), sem build e sem dependências.

## Recursos

- **Simulado**: 40 questões em 60 minutos, sorteadas na proporção dos pesos oficiais (os pesos somam 40). A correção só aparece no final, com nota por tópico e revisão das questões.
- **Estudo por tópico**: você escolhe os objetivos e a quantidade. Cada questão é corrigida na hora e vem com explicação.
- **Revisar erros**: as questões que você errou ficam salvas até você acertá-las.
- **Desempenho**: taxa de acerto por objetivo. Os dados ficam no `localStorage` do navegador.
- Questões de múltipla escolha, de múltiplas respostas ("Escolha duas") e de digitar o comando, como no exame real.

## Estrutura

```
index.html            página única
css/style.css         estilos (tema claro/escuro automático)
js/data.js            objetivos, pesos e funções Q()/F() de cadastro
js/app.js             lógica do app
questions/011.1.js    um arquivo por objetivo do exame
...
tools/check.py        validador do banco
```

## Adicionar questões

Edite o arquivo do objetivo em `questions/`:

```js
// múltipla escolha: opções com * no início são as corretas
Q("012.1", "Qual comando mostra o diretório atual?", [
  "*`pwd`",
  "`cd`",
  "`ls`",
], "Explicação exibida após responder.");

// várias corretas: o enunciado deve dizer "(Escolha duas.)"
// preencher: lista de respostas aceitas
F("012.1", "Digite o comando que mostra o diretório atual.", ["pwd"], "Explicação.");
```

Use `` `crases` `` para código e ` ``` ` para blocos de código. Depois rode o validador:

```
python3 tools/check.py
```

Ele confere a sintaxe, se há resposta correta, duplicatas, se o "Escolha N" bate com o número de alternativas corretas e mostra a contagem por objetivo.

## Publicar no GitHub Pages

```
git init
git add .
git commit -m "Banco de questões LPI Linux Essentials"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, escolha `main` e a pasta `/ (root)`. O site fica em `https://SEU_USUARIO.github.io/SEU_REPO/`.

Para usar localmente, basta abrir o `index.html` no navegador.

## Aviso

Material não oficial, sem vínculo com o Linux Professional Institute. As questões foram escritas a partir dos objetivos públicos do exame 010 v2.0 e não são questões reais da prova.
