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

