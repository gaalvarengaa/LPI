// 013.3
// --- Shebang e execução ---
Q("013.3", "Qual é a função da linha `#!/bin/bash` no início de um script?", [
  "*Indicar ao sistema qual interpretador deve executar o script",
  "Transformar o resto do arquivo em comentário",
  "Dar permissão de execução ao script",
  "Importar variáveis do sistema",
], "Essa linha é chamada de shebang. Quando o script é executado diretamente (`./script.sh`), o kernel usa o interpretador indicado.");

Q("013.3", "Como é chamada a sequência `#!` no início de um script?", [
  "*Shebang",
  "Hashtag",
  "Pipe",
  "Prompt",
], "Também chamada de hashbang. Deve estar na primeira linha, nos primeiros caracteres do arquivo.");

Q("013.3", "Em qual posição do script a linha shebang precisa estar para funcionar?", [
  "*Na primeira linha, começando no primeiro caractere",
  "Em qualquer linha antes do primeiro comando",
  "Na última linha",
  "Logo após o primeiro comentário",
], "Se houver qualquer coisa antes (até uma linha em branco), o `#!` vira um comentário comum.");

Q("013.3", "Qual shebang executa o script com o primeiro `bash` encontrado no PATH, o que ajuda na portabilidade?", [
  "*`#!/usr/bin/env bash`",
  "`#!bash`",
  "`#/bin/bash!`",
  "`!#/bin/bash`",
], "`env` procura o interpretador no PATH, útil quando o bash não está em `/bin`.");

Q("013.3", "Qual é a forma correta da linha shebang para um script Bash?", [
  "*`#!/bin/bash`",
  "`!#/bin/bash`",
  "`#/bin/bash`",
  "`//bin/bash`",
], "Primeiro `#`, depois `!` e o caminho absoluto do interpretador.");

Q("013.3", "Você criou o script `ola.sh` e, ao executar `./ola.sh`, recebe `Permission denied`. Como resolver?", [
  "*Executar `chmod +x ola.sh`",
  "Executar `export ola.sh`",
  "Renomear para `ola.exe`",
  "Adicionar `#!/bin/bash` no final do arquivo",
], "Para ser executado diretamente, o arquivo precisa da permissão de execução.");

Q("013.3", "Qual comando executa `script.sh` mesmo **sem** permissão de execução?", [
  "*`bash script.sh`",
  "`./script.sh`",
  "`script.sh`",
  "`exec script.sh`",
], "Ao chamar `bash script.sh`, o bash é o programa executado; o script é apenas lido como argumento.");

Q("013.3", "Por que um script no diretório atual normalmente precisa ser chamado como `./script.sh` e não só `script.sh`?", [
  "*Porque o diretório atual não está no PATH",
  "Porque scripts não podem ser executados de outra forma",
  "Porque o ponto ativa a permissão de execução",
  "Porque `./` indica que o script é de root",
], "O `./` informa o caminho do arquivo, dispensando a busca no PATH.");

Q("013.3", "Quais passos permitem executar um novo script `backup.sh` digitando `./backup.sh`? (Escolha duas.)", [
  "*Colocar `#!/bin/bash` na primeira linha",
  "*Dar permissão de execução com `chmod +x backup.sh`",
  "Compilar o script com `gcc`",
  "Mover o script para `/dev`",
  "Usar a extensão `.exe`",
], "O shebang define o interpretador e a permissão `x` permite a execução.");

Q("013.3", "Qual é a extensão de arquivo **obrigatória** para scripts de shell no Linux?", [
  "*Nenhuma; `.sh` é apenas uma convenção",
  "`.sh`",
  "`.bash`",
  "`.exe`",
], "O Linux não usa a extensão para decidir como executar o arquivo.");

Q("013.3", "Qual é a diferença entre executar `./script.sh` e `source script.sh`?", [
  "*`./script.sh` roda em um novo processo; `source` executa os comandos no shell atual, mantendo variáveis definidas pelo script",
  "Não há diferença",
  "`source` exige permissão de execução e `./` não exige",
  "`./script.sh` só funciona como root",
], "`source` (ou `.`) é usado para carregar configurações, como `source ~/.bashrc`.");

Q("013.3", "Como se escreve um comentário em um script Bash?", [
  "*Começando a linha (ou o trecho) com `#`",
  "Entre `/* */`",
  "Começando com `//`",
  "Começando com `REM`",
], "Tudo após `#` é ignorado, exceto na linha do shebang.");

// --- Variáveis ---
Q("013.3", "Em um script, qual linha cria corretamente a variável `DESTINO` com o valor `/backup`?", [
  "*`DESTINO=/backup`",
  "`DESTINO = /backup`",
  "`$DESTINO=/backup`",
  "`set $DESTINO /backup`",
], "Sem espaços em volta do `=` e sem `$` na atribuição.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nNOME=\"Mundo\"\necho \"Olá, $NOME!\"\n```", [
  "*`Olá, Mundo!`",
  "`Olá, $NOME!`",
  "`Olá, NOME!`",
  "`Olá, !`",
], "Dentro de aspas duplas a variável é expandida.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nNOME=\"Mundo\"\necho 'Olá, $NOME'\n```", [
  "*`Olá, $NOME`",
  "`Olá, Mundo`",
  "`Olá, `",
  "Erro de sintaxe",
], "Aspas simples impedem a expansão.");

Q("013.3", "Qual linha guarda a data atual (formato AAAA-MM-DD) na variável `HOJE`?", [
  "*`HOJE=$(date +%F)`",
  "`HOJE=date +%F`",
  "`HOJE=\"date +%F\"`",
  "`$HOJE=(date +%F)`",
], "`$(comando)` substitui pela saída do comando.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nA=7\nB=3\necho $((A + B))\n```", [
  "*`10`",
  "`7 + 3`",
  "`73`",
  "`A + B`",
], "A expansão aritmética `$(( ))` soma números inteiros. Dentro dela, o `$` antes das variáveis é opcional.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nA=7\nB=3\necho \"$A+$B\"\n```", [
  "*`7+3`",
  "`10`",
  "`$A+$B`",
  "`A+B`",
], "Sem `$(( ))` não há cálculo: as variáveis são apenas substituídas no texto.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nARQ=dados\necho \"${ARQ}_2024.csv\"\n```", [
  "*`dados_2024.csv`",
  "`_2024.csv`",
  "`${ARQ}_2024.csv`",
  "`ARQ_2024.csv`",
], "As chaves delimitam o nome da variável. Sem elas o shell procuraria `ARQ_2024`.");

Q("013.3", "Qual comando lê uma linha digitada pelo usuário e guarda na variável `RESPOSTA`?", [
  "*`read RESPOSTA`",
  "`input RESPOSTA`",
  "`echo RESPOSTA`",
  "`get RESPOSTA`",
], "`read -p \"Pergunta: \" RESPOSTA` também exibe uma mensagem antes.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nX=5\nX=10\necho $X\n```", [
  "*`10`",
  "`5`",
  "`5 10`",
  "`15`",
], "A segunda atribuição substitui o valor anterior.");

Q("013.3", "Um script executado com `./script.sh` define `export DEBUG=1`. Após o script terminar, a variável `DEBUG` existe no shell que o chamou?", [
  "*Não, o script roda em um processo filho e não altera o ambiente do processo pai",
  "Sim, pois foi exportada",
  "Sim, mas só para o root",
  "Depende da shebang",
], "`export` passa variáveis para filhos, nunca para o pai. Para afetar o shell atual use `source script.sh`.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nQTD=$(ls /etc/hostname | wc -l)\necho \"Total: $QTD\"\n```", [
  "*`Total: 1`",
  "`Total: $QTD`",
  "`Total: ls /etc/hostname | wc -l`",
  "`Total: 0`",
], "O pipeline dentro de `$( )` é executado e sua saída (1 linha) vai para QTD.");

// --- Argumentos ---
Q("013.3", "Em um script, o que contém a variável `$1`?", [
  "*O primeiro argumento passado ao script",
  "O nome do script",
  "O número de argumentos",
  "O status de saída do último comando",
], "`$1`, `$2`... são os parâmetros posicionais.");

Q("013.3", "Em um script, o que contém a variável `$0`?", [
  "*O nome (caminho) com que o script foi chamado",
  "O primeiro argumento",
  "O número de argumentos",
  "O PID do script",
], "Se chamado como `./backup.sh`, `$0` vale `./backup.sh`.");

Q("013.3", "Em um script, o que contém a variável `$#`?", [
  "*A quantidade de argumentos passados ao script",
  "O último argumento",
  "O status de saída",
  "Todos os argumentos",
], "Útil para verificar se o usuário passou os argumentos necessários.");

Q("013.3", "Em um script, o que contém `$@`?", [
  "*Todos os argumentos passados, como palavras separadas",
  "Apenas o primeiro argumento",
  "O nome do usuário",
  "A quantidade de argumentos",
], "`\"$@\"` (com aspas) preserva cada argumento separadamente, mesmo os que contêm espaços.");

Q("013.3", "O script `info.sh` contém `echo $2`. Qual é a saída de `./info.sh vermelho verde azul`?", [
  "*`verde`",
  "`vermelho`",
  "`azul`",
  "`2`",
], "`$2` é o segundo argumento.");

Q("013.3", "O script `conta.sh` contém `echo $#`. Qual é a saída de `./conta.sh a b c d`?", [
  "*`4`",
  "`3`",
  "`a b c d`",
  "`d`",
], "Foram passados quatro argumentos.");

Q("013.3", "O script `conta.sh` contém `echo $#`. Qual é a saída de `./conta.sh \"a b\" c`?", [
  "*`2`",
  "`3`",
  "`1`",
  "`a b c`",
], "As aspas fazem `a b` ser um único argumento.");

Q("013.3", "O script `todos.sh` contém `echo \"$@\"`. Qual é a saída de `./todos.sh um dois tres`?", [
  "*`um dois tres`",
  "`3`",
  "`um`",
  "`$@`",
], "`$@` expande para todos os argumentos.");

Q("013.3", "O script `nome.sh` contém `echo $0`. Qual é a saída de `./nome.sh teste`?", [
  "*`./nome.sh`",
  "`teste`",
  "`nome`",
  "`1`",
], "`$0` é o nome usado para chamar o script.");

Q("013.3", "Como acessar o **décimo** argumento de um script?", [
  "*`${10}`",
  "`$10`",
  "`$(10)`",
  "`$#10`",
], "`$10` seria interpretado como `$1` seguido do caractere 0.");

Q("013.3", "O script `ola.sh` contém:\n```\n#!/bin/bash\necho \"Olá, $1. Você tem $2 anos.\"\n```\nQual é a saída de `./ola.sh Ana 30`?", [
  "*`Olá, Ana. Você tem 30 anos.`",
  "`Olá, $1. Você tem $2 anos.`",
  "`Olá, Ana 30. Você tem  anos.`",
  "`Olá, ./ola.sh. Você tem Ana anos.`",
], "`$1` = Ana e `$2` = 30.");

Q("013.3", "O script `s.sh` contém `echo \"[$3]\"`. Qual é a saída de `./s.sh a b`?", [
  "*`[]`",
  "`[b]`",
  "`[3]`",
  "Um erro, pois o terceiro argumento não existe",
], "Parâmetros não informados se expandem para texto vazio, sem erro.");

Q("013.3", "Qual trecho verifica se o script recebeu **nenhum** argumento?", [
  "*`if [ $# -eq 0 ]; then`",
  "`if [ $0 -eq 0 ]; then`",
  "`if [ $1 = 0 ]; then`",
  "`if [ $? -eq 0 ]; then`",
], "`$#` é a quantidade de argumentos.");

// --- Status de saída ---
Q("013.3", "O que contém a variável `$?`?", [
  "*O status de saída (exit status) do último comando executado",
  "O número de argumentos",
  "O PID do shell",
  "O último argumento",
], "0 indica sucesso; qualquer outro valor indica erro ou condição falsa.");

Q("013.3", "Qual valor de status de saída indica **sucesso** no Linux?", [
  "*0",
  "1",
  "255",
  "-1",
], "Por convenção, 0 = sucesso e 1 a 255 = algum tipo de falha.");

Q("013.3", "Qual é a saída de:\n```\nls /etc > /dev/null\necho $?\n```", [
  "*`0`",
  "`1`",
  "`2`",
  "A listagem de /etc",
], "O ls funcionou, então o status é 0.");

Q("013.3", "Qual é o resultado de `ls /diretorio_inexistente; echo $?`?", [
  "*Uma mensagem de erro e depois um número diferente de 0",
  "Somente `0`",
  "Uma linha vazia",
  "`true`",
], "O ls retorna status 2 quando o arquivo/diretório não existe (diferente de zero).");

Q("013.3", "Qual comando encerra um script imediatamente com status de **erro** 1?", [
  "*`exit 1`",
  "`return error`",
  "`stop 1`",
  "`exit -error`",
], "`exit N` termina o script e devolve N ao processo que o chamou.");

Q("013.3", "Se um script termina sem um comando `exit` explícito, qual será seu status de saída?", [
  "*O status do último comando executado no script",
  "Sempre 0",
  "Sempre 1",
  "Indefinido",
], "Por isso é boa prática usar `exit` explicitamente nos pontos de saída.");

Q("013.3", "Qual é a faixa de valores possíveis para um status de saída?", [
  "*0 a 255",
  "0 a 1",
  "-128 a 127",
  "0 a 65535",
], "Status de saída são inteiros de 8 bits.");

Q("013.3", "Qual é o status de saída de `grep usuario_inexistente /etc/passwd`, quando o texto não é encontrado?", [
  "*1",
  "0",
  "2",
  "127",
], "grep: 0 = encontrou, 1 = não encontrou, 2 = erro (ex.: arquivo inexistente).");

Q("013.3", "Qual é o status de saída quando o shell não encontra o comando digitado (`command not found`)?", [
  "*127",
  "0",
  "1",
  "255",
], "127 indica comando não encontrado; 126 indica que foi encontrado mas não pode ser executado (ex.: sem permissão).");

Q("013.3", "Qual é a saída de `true; echo $?` seguida de `false; echo $?`?", [
  "*`0` e depois `1`",
  "`1` e depois `0`",
  "`true` e depois `false`",
  "`0` e `0`",
], "`true` sempre retorna 0 e `false` sempre retorna 1.");

Q("013.3", "Em um script, qual linha mostra `OK` somente se o `cp` funcionar?", [
  "*`cp a.txt b.txt && echo OK`",
  "`cp a.txt b.txt || echo OK`",
  "`cp a.txt b.txt | echo OK`",
  "`cp a.txt b.txt ; echo OK`",
], "`&&` depende de status 0 do comando anterior.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\ngrep -q root /etc/passwd\necho $?\n```", [
  "*`0`",
  "`1`",
  "A linha do root",
  "`root`",
], "O usuário root sempre existe em `/etc/passwd`; `-q` faz o grep não imprimir nada, só retornar o status.");

Q("013.3", "Após executar `./script.sh`, como verificar o status com que ele terminou?", [
  "*`echo $?` imediatamente depois",
  "`echo $#`",
  "`echo $0`",
  "`status script.sh`",
], "`$?` é sobrescrito a cada comando, então deve ser lido logo em seguida.");

// --- if ---
Q("013.3", "Qual é a estrutura correta de um `if` no Bash?", [
  "*`if [ condição ]; then comandos; fi`",
  "`if [ condição ] { comandos }`",
  "`if (condição) then comandos end`",
  "`if [ condição ]: comandos; endif`",
], "O bloco começa com `then` e termina com `fi` (if ao contrário).");

Q("013.3", "Qual palavra encerra um bloco `if` no Bash?", [
  "*`fi`",
  "`end`",
  "`endif`",
  "`done`",
], "`done` encerra laços (for, while); `esac` encerra `case`.");

Q("013.3", "Qual condição testa se `/etc/hosts` existe **e é um arquivo comum**?", [
  "*`[ -f /etc/hosts ]`",
  "`[ -d /etc/hosts ]`",
  "`[ -z /etc/hosts ]`",
  "`[ /etc/hosts ]` sempre",
], "`-f` = arquivo comum existe; `-d` = diretório existe; `-e` = existe (qualquer tipo).");

Q("013.3", "Qual condição testa se `/backup` existe **e é um diretório**?", [
  "*`[ -d /backup ]`",
  "`[ -f /backup ]`",
  "`[ -x /backup ]`",
  "`[ -n /backup ]`",
], "`-d` verifica diretórios.");

Q("013.3", "Qual condição testa se um caminho **existe**, seja arquivo, diretório ou outro tipo?", [
  "*`[ -e caminho ]`",
  "`[ -f caminho ]`",
  "`[ -s caminho ]`",
  "`[ -z caminho ]`",
], "`-e` = exists.");

Q("013.3", "Qual condição é verdadeira quando o arquivo `config.ini` **não** existe?", [
  "*`[ ! -e config.ini ]`",
  "`[ -e !config.ini ]`",
  "`[ -ne config.ini ]`",
  "`[ -e config.ini ] !`",
], "`!` nega a condição seguinte.");

Q("013.3", "Por que `if [-f arquivo]; then` gera erro?", [
  "*Faltam espaços depois de `[` e antes de `]`",
  "A opção `-f` não existe",
  "O `then` deve ficar antes do `if`",
  "O nome do arquivo precisa de aspas sempre",
], "`[` é um comando (equivalente a `test`) e seus argumentos precisam ser separados por espaços.");

Q("013.3", "O que é o `[` usado nas condições do shell?", [
  "*Um comando equivalente a `test`, que avalia a expressão e retorna status 0 (verdadeiro) ou 1 (falso)",
  "Um caractere de agrupamento sem significado",
  "Um operador de redirecionamento",
  "Uma variável especial",
], "`[ -f x ]` é o mesmo que `test -f x`. O `if` executa o bloco quando o status é 0.");

Q("013.3", "Qual condição compara se a variável `RESP` é igual ao texto `sim`?", [
  "*`[ \"$RESP\" = \"sim\" ]`",
  "`[ $RESP -eq sim ]`",
  "`[ RESP = sim ]`",
  "`[ \"$RESP\" -is \"sim\" ]`",
], "Para texto, use `=` (ou `==` no Bash). `-eq` compara números inteiros.");

Q("013.3", "Qual condição testa se a variável `USUARIO` é **diferente** de `root`?", [
  "*`[ \"$USUARIO\" != \"root\" ]`",
  "`[ \"$USUARIO\" <> \"root\" ]`",
  "`[ \"$USUARIO\" -ne \"root\" ]`",
  "`[ ! \"$USUARIO\" ]`",
], "`!=` compara textos; `-ne` é para números.");

Q("013.3", "Qual condição testa se o número em `N` é **igual** a 10?", [
  "*`[ \"$N\" -eq 10 ]`",
  "`[ \"$N\" == 10 ]` é a única forma",
  "`[ N -eq 10 ]`",
  "`[ \"$N\" -is 10 ]`",
], "Operadores numéricos: `-eq` (igual), `-ne` (diferente), `-lt` (menor), `-le`, `-gt` (maior), `-ge`.");

Q("013.3", "Qual condição testa se o número em `IDADE` é **maior** que 17?", [
  "*`[ \"$IDADE\" -gt 17 ]`",
  "`[ \"$IDADE\" > 17 ]`",
  "`[ \"$IDADE\" -lt 17 ]`",
  "`[ \"$IDADE\" -ge 17 ]`",
], "Dentro de `[ ]`, `>` seria interpretado como redirecionamento! Use `-gt`.");

Q("013.3", "Qual condição é verdadeira quando a variável `NOME` está **vazia**?", [
  "*`[ -z \"$NOME\" ]`",
  "`[ -n \"$NOME\" ]`",
  "`[ -e \"$NOME\" ]`",
  "`[ -f \"$NOME\" ]`",
], "`-z` = comprimento zero; `-n` = não vazia.");

Q("013.3", "Por que é recomendado escrever `[ \"$VAR\" = \"abc\" ]` com a variável entre aspas?", [
  "*Se a variável estiver vazia ou contiver espaços, sem aspas o teste fica malformado e gera erro",
  "Porque o Bash não reconhece variáveis sem aspas",
  "Para comparar ignorando maiúsculas",
  "Para converter a variável em número",
], "Com VAR vazia, `[ $VAR = abc ]` vira `[ = abc ]`, o que causa erro \"unary operator expected\".");

Q("013.3", "Qual palavra-chave introduz uma condição alternativa adicional em um `if`?", [
  "*`elif`",
  "`elseif`",
  "`else if` sem nada mais",
  "`orif`",
], "Estrutura: `if ...; then ...; elif ...; then ...; else ...; fi`.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nN=5\nif [ $N -gt 3 ]; then\n  echo \"grande\"\nelse\n  echo \"pequeno\"\nfi\n```", [
  "*`grande`",
  "`pequeno`",
  "`grande` e `pequeno`",
  "Nada",
], "5 é maior que 3.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nCOR=azul\nif [ \"$COR\" = \"verde\" ]; then\n  echo A\nelif [ \"$COR\" = \"azul\" ]; then\n  echo B\nelse\n  echo C\nfi\n```", [
  "*`B`",
  "`A`",
  "`C`",
  "`A` e `B`",
], "A primeira condição é falsa e a segunda é verdadeira.");

Q("013.3", "Qual é a saída do script abaixo, sabendo que `/tmp` existe?\n```\n#!/bin/bash\nif [ -f /tmp ]; then\n  echo arquivo\nelif [ -d /tmp ]; then\n  echo diretorio\nfi\n```", [
  "*`diretorio`",
  "`arquivo`",
  "`arquivo` e `diretorio`",
  "Nada",
], "/tmp é um diretório, então `-f` é falso e `-d` é verdadeiro.");

Q("013.3", "Qual script exibe `Faltando` se `/etc/app.conf` não existir?", [
  "*`if [ ! -f /etc/app.conf ]; then echo Faltando; fi`",
  "`if [ -f /etc/app.conf ]; then echo Faltando; fi`",
  "`if [ -f ! /etc/app.conf ] then echo Faltando fi`",
  "`if ! /etc/app.conf; echo Faltando; done`",
], "O `!` nega o teste de existência.");

Q("013.3", "O `if` pode testar diretamente o resultado de um comando. O que faz o trecho abaixo?\n```\nif grep -q ana /etc/passwd; then\n  echo \"existe\"\nfi\n```", [
  "*Mostra `existe` se o grep encontrar `ana` (status 0)",
  "Mostra `existe` sempre",
  "Gera erro, pois falta `[ ]`",
  "Mostra a linha da ana",
], "O `if` avalia o status de qualquer comando; `[ ]` é só mais um comando.");

Q("013.3", "Qual é a saída do script abaixo, executado como `./s.sh`?\n```\n#!/bin/bash\nif [ -z \"$1\" ]; then\n  echo \"Uso: $0 arquivo\"\n  exit 1\nfi\necho \"Processando $1\"\n```", [
  "*`Uso: ./s.sh arquivo`",
  "`Processando `",
  "`Uso: $0 arquivo`",
  "Nada",
], "Sem argumentos, `$1` está vazio, a mensagem é exibida e o script termina com `exit 1`.");

Q("013.3", "No Bash, qual é uma característica do teste `[[ ]]` em relação ao `[ ]`?", [
  "*É uma palavra-chave do Bash, mais tolerante com variáveis sem aspas e com recursos extras como `&&` dentro do teste",
  "Só funciona com números",
  "É obrigatório em todos os scripts",
  "Não aceita comparação de textos",
], "`[ ]` é POSIX e funciona em qualquer shell sh; `[[ ]]` é uma extensão do Bash.");

Q("013.3", "Qual operador do `[ ]` compara se dois números são **diferentes**?", [
  "*`-ne`",
  "`!=`",
  "`-df`",
  "`<>`",
], "`!=` também funciona, mas compara como texto (`[ 01 != 1 ]` é verdadeiro, enquanto `[ 01 -ne 1 ]` é falso).");

Q("013.3", "Qual condição testa se o arquivo `relatorio.txt` existe e **não está vazio**?", [
  "*`[ -s relatorio.txt ]`",
  "`[ -z relatorio.txt ]`",
  "`[ -e -n relatorio.txt ]`",
  "`[ -f -v relatorio.txt ]`",
], "`-s` = existe e tem tamanho maior que zero.");

// --- for ---
Q("013.3", "Qual é a estrutura correta de um laço `for` no Bash?", [
  "*`for VAR in lista; do comandos; done`",
  "`for VAR in lista { comandos }`",
  "`for (VAR in lista) comandos end`",
  "`foreach VAR lista; done`",
], "O corpo do laço fica entre `do` e `done`.");

Q("013.3", "Qual palavra encerra o corpo de um laço `for`?", [
  "*`done`",
  "`fi`",
  "`end`",
  "`next`",
], "`fi` encerra o `if`.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nfor FRUTA in maçã banana uva; do\n  echo $FRUTA\ndone\n```", [
  "*Três linhas: `maçã`, `banana` e `uva`",
  "Uma linha: `maçã banana uva`",
  "`FRUTA` três vezes",
  "Nada",
], "O laço percorre a lista separada por espaços, um item por vez.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nfor i in 1 2 3; do\n  echo -n \"$i \"\ndone\necho\n```", [
  "*`1 2 3 ` em uma única linha",
  "Três linhas com 1, 2 e 3",
  "`i i i`",
  "`123`",
], "`echo -n` não quebra a linha; o `echo` final apenas pula a linha.");

Q("013.3", "Qual laço percorre todos os arquivos `.log` do diretório atual?", [
  "*`for f in *.log; do echo \"$f\"; done`",
  "`for f in ls *.log; do echo $f; done`",
  "`for *.log in f; do echo $f; done`",
  "`for f = *.log; do echo $f; done`",
], "O shell expande `*.log` para a lista de arquivos correspondentes.");

Q("013.3", "O que faz o script abaixo?\n```\nfor arq in /etc/*.conf; do\n  cp \"$arq\" /backup/\ndone\n```", [
  "*Copia cada arquivo `.conf` de `/etc` para `/backup/`",
  "Copia o diretório /etc inteiro",
  "Cria um arquivo chamado `*.conf` em /backup",
  "Apaga os arquivos .conf",
], "O glob é expandido para a lista de arquivos e cada um é copiado.");

Q("013.3", "Em um diretório com `a.txt` e `b.txt`, qual é a saída do script?\n```\nfor f in *.txt; do\n  echo \"Arquivo: $f\"\ndone\n```", [
  "*`Arquivo: a.txt` e `Arquivo: b.txt`, em linhas separadas",
  "`Arquivo: *.txt`",
  "`Arquivo: a.txt b.txt`",
  "Nada",
], "Uma iteração para cada arquivo encontrado.");

Q("013.3", "Em um diretório **sem** nenhum arquivo `.pdf`, qual é a saída de `for f in *.pdf; do echo \"$f\"; done` (configuração padrão do Bash)?", [
  "*`*.pdf`",
  "Nada",
  "Um erro de sintaxe",
  "Todos os arquivos do diretório",
], "Sem correspondências, o padrão é mantido literalmente. Por isso scripts costumam testar `[ -e \"$f\" ]` dentro do laço.");

Q("013.3", "Qual laço percorre os números de 1 a 5 no Bash?", [
  "*`for n in {1..5}; do echo $n; done`",
  "`for n in 1-5; do echo $n; done`",
  "`for n in [1..5]; do echo $n; done`",
  "`for n to 5; do echo $n; done`",
], "A expansão de chaves `{1..5}` gera `1 2 3 4 5`. `$(seq 1 5)` também funciona.");

Q("013.3", "Qual é a saída do script abaixo?\n```\nfor n in $(seq 1 3); do\n  echo \"Linha $n\"\ndone\n```", [
  "*`Linha 1`, `Linha 2` e `Linha 3`, em linhas separadas",
  "`Linha seq 1 3`",
  "`Linha 1 2 3`",
  "`Linha $n` três vezes",
], "`seq 1 3` gera os números 1, 2 e 3.");

Q("013.3", "Qual laço percorre todos os argumentos passados ao script, preservando os que têm espaços?", [
  "*`for arg in \"$@\"; do echo \"$arg\"; done`",
  "`for arg in $#; do echo $arg; done`",
  "`for arg in \"$0\"; do echo $arg; done`",
  "`for arg in $?; do echo $arg; done`",
], "`\"$@\"` expande cada argumento como uma palavra separada.");

Q("013.3", "Qual é a saída do script abaixo?\n```\nTOTAL=0\nfor n in 2 4 6; do\n  TOTAL=$((TOTAL + n))\ndone\necho $TOTAL\n```", [
  "*`12`",
  "`246`",
  "`6`",
  "`0`",
], "0 + 2 + 4 + 6 = 12.");

Q("013.3", "Qual é a saída do script abaixo?\n```\nfor x in \"a b\" c; do\n  echo \"[$x]\"\ndone\n```", [
  "*`[a b]` e `[c]`",
  "`[a]`, `[b]` e `[c]`",
  "`[a b c]`",
  "`[x]` duas vezes",
], "Itens entre aspas formam um único elemento da lista.");

Q("013.3", "Qual é a saída do script abaixo?\n```\nLISTA=\"x y z\"\nfor item in $LISTA; do\n  echo $item\ndone\n```", [
  "*Três linhas: `x`, `y` e `z`",
  "Uma linha: `x y z`",
  "`LISTA`",
  "`$LISTA`",
], "Sem aspas, `$LISTA` é dividida em palavras pelos espaços. Com `\"$LISTA\"` haveria uma única iteração.");

Q("013.3", "Qual é a saída do script abaixo?\n```\nLISTA=\"x y z\"\nfor item in \"$LISTA\"; do\n  echo \"[$item]\"\ndone\n```", [
  "*`[x y z]`",
  "`[x]`, `[y]` e `[z]`",
  "`[LISTA]`",
  "Nada",
], "As aspas impedem a divisão em palavras: há uma única iteração.");

Q("013.3", "O que faz o script abaixo?\n```\nfor u in ana bia carlos; do\n  mkdir -p /home/compartilhado/$u\ndone\n```", [
  "*Cria um diretório para cada nome em `/home/compartilhado`",
  "Cria os usuários ana, bia e carlos",
  "Cria um único diretório chamado `$u`",
  "Apaga os diretórios dos usuários",
], "A cada iteração, `$u` recebe um nome da lista.");

Q("013.3", "Qual é a saída do script abaixo?\n```\nfor i in 1 2 3; do\n  if [ $i -eq 2 ]; then\n    echo \"dois\"\n  else\n    echo $i\n  fi\ndone\n```", [
  "*`1`, `dois` e `3`, em linhas separadas",
  "`1`, `2` e `3`",
  "`dois`",
  "`1 dois 3` em uma linha",
], "Apenas na segunda iteração a condição é verdadeira.");

Q("013.3", "Qual é a saída do script abaixo?\n```\nCONT=0\nfor f in a b c d; do\n  CONT=$((CONT + 1))\ndone\necho \"$CONT itens\"\n```", [
  "*`4 itens`",
  "`0 itens`",
  "`abcd itens`",
  "`1 itens`",
], "O contador é incrementado em cada uma das 4 iterações.");

Q("013.3", "Qual comando dentro de um laço o interrompe imediatamente, saindo dele?", [
  "*`break`",
  "`exit 0` (apenas sai do laço)",
  "`stop`",
  "`done`",
], "`break` sai do laço; `continue` pula para a próxima iteração; `exit` encerra o script inteiro.");

// --- Scripts completos ---
Q("013.3", "O script `verifica.sh` contém:\n```\n#!/bin/bash\nif [ -e \"$1\" ]; then\n  echo \"$1 existe\"\nelse\n  echo \"$1 não existe\"\n  exit 2\nfi\n```\nQual é a saída e o status de `./verifica.sh /naoexiste; echo $?`?", [
  "*`/naoexiste não existe` e depois `2`",
  "`/naoexiste existe` e depois `0`",
  "`/naoexiste não existe` e depois `0`",
  "Apenas `2`",
], "O caminho não existe, então o else é executado e o script sai com status 2.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nA=\"10\"\nB=\"10\"\nif [ \"$A\" = \"$B\" ]; then\n  echo iguais\nfi\n```", [
  "*`iguais`",
  "Nada",
  "Erro de sintaxe",
  "`10`",
], "Os dois textos são idênticos.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nfor d in /etc /naoexiste; do\n  if [ -d \"$d\" ]; then\n    echo \"$d: ok\"\n  else\n    echo \"$d: falta\"\n  fi\ndone\n```", [
  "*`/etc: ok` e `/naoexiste: falta`",
  "`/etc: falta` e `/naoexiste: ok`",
  "`/etc: ok` apenas",
  "Erro, pois não se pode usar if dentro de for",
], "Estruturas podem ser aninhadas livremente.");

Q("013.3", "O que o script abaixo faz?\n```\n#!/bin/bash\nfor f in *.txt; do\n  mv \"$f\" \"$f.bak\"\ndone\n```", [
  "*Renomeia cada arquivo `.txt`, acrescentando `.bak` ao final (ex.: `a.txt.bak`)",
  "Troca a extensão .txt por .bak (ex.: `a.bak`)",
  "Cria cópias de segurança mantendo os originais",
  "Apaga os arquivos .txt",
], "`mv` renomeia; o novo nome é o antigo com `.bak` acrescentado.");

Q("013.3", "Qual linha deve ficar no topo de um script que precisa ser executado pelo Bash, e não por outro shell?", [
  "*`#!/bin/bash`",
  "`#!/bin/sh`",
  "`# bash`",
  "`#include bash`",
], "`/bin/sh` pode ser outro shell (como o dash no Debian), sem os recursos específicos do Bash.");

Q("013.3", "O que acontece se um script com `#!/bin/bash` contiver um comando que falha no meio, sem nenhum tratamento?", [
  "*Por padrão, o script continua executando os comandos seguintes",
  "O script para imediatamente",
  "O sistema é reiniciado",
  "O script volta ao início",
], "O Bash só para em erros se configurado (ex.: `set -e`). Por isso é comum verificar `$?` ou usar `&&`/`||`.");

Q("013.3", "Qual comando é o mais usado em scripts para mostrar mensagens na tela?", [
  "*`echo`",
  "`cat`",
  "`read`",
  "`print`",
], "`echo` escreve seus argumentos na saída padrão. `printf` oferece mais formatação.");

Q("013.3", "Qual linha em um script envia uma mensagem para a **saída de erro**?", [
  "*`echo \"Erro: arquivo não encontrado\" >&2`",
  "`echo \"Erro\" > 2`",
  "`echo \"Erro\" 2>&1`",
  "`error \"Erro\"`",
], "`>&2` redireciona o stdout do echo para o descritor 2. `> 2` criaria um arquivo chamado 2.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\necho \"Início\"\nexit 0\necho \"Fim\"\n```", [
  "*Apenas `Início`",
  "`Início` e `Fim`",
  "Apenas `Fim`",
  "Nada",
], "`exit` encerra o script; as linhas seguintes não são executadas.");

Q("013.3", "Um script de backup deve copiar `dados/` apenas se o diretório `/mnt/backup` existir. Qual trecho faz isso?", [
  "*`if [ -d /mnt/backup ]; then cp -r dados /mnt/backup/; fi`",
  "`if [ -f /mnt/backup ]; then cp -r dados /mnt/backup/; fi`",
  "`for /mnt/backup; do cp -r dados; done`",
  "`if -d /mnt/backup then cp dados fi`",
], "`-d` testa se é diretório; a sintaxe precisa de `[ ]`, `then` e `fi`.");

Q("013.3", "Qual é a saída do script abaixo, executado como `./s.sh um dois`?\n```\n#!/bin/bash\nfor a in \"$@\"; do\n  echo \"Arg: $a\"\ndone\necho \"Total: $#\"\n```", [
  "*`Arg: um`, `Arg: dois` e `Total: 2`",
  "`Arg: um dois` e `Total: 1`",
  "`Arg: ./s.sh`, `Arg: um`, `Arg: dois` e `Total: 3`",
  "`Total: 2` apenas",
], "`$@` não inclui `$0`.");

// --- Preencher ---
F("013.3", "Digite a linha shebang que indica o interpretador `/bin/bash`.", [
  "#!/bin/bash", "#! /bin/bash",
], "Deve ser a primeira linha do script.");

F("013.3", "Digite a variável especial que contém o número de argumentos passados ao script.", [
  "$#",
], "`$#` é a quantidade de parâmetros posicionais.");

F("013.3", "Digite a variável especial que contém o status de saída do último comando.", [
  "$?",
], "0 = sucesso.");

F("013.3", "Digite a palavra-chave que encerra um bloco `if`.", [
  "fi",
], "if ... then ... fi.");

F("013.3", "Digite a palavra-chave que encerra o corpo de um laço `for`.", [
  "done",
], "for ... in ... do ... done.");

F("013.3", "Digite a variável especial que contém o primeiro argumento do script.", [
  "$1", "${1}",
], "Os argumentos são `$1`, `$2`, ..., `${10}`...");

F("013.3", "Digite o comando completo que encerra um script com status de sucesso.", [
  "exit 0",
], "`exit` sem número usa o status do último comando.");

F("013.3", "Digite o comando completo que dá permissão de execução a `script.sh` para todos.", [
  "chmod +x script.sh", "chmod a+x script.sh", "chmod ugo+x script.sh",
], "`+x` acrescenta a permissão de execução.");

F("013.3", "Qual opção de teste (com hífen) verifica se um arquivo comum existe?", [
  "-f",
], "`[ -f arquivo ]`.");

F("013.3", "Qual opção de teste (com hífen) verifica se um diretório existe?", [
  "-d",
], "`[ -d diretorio ]`.");

F("013.3", "Qual operador de teste (com hífen) compara se dois números inteiros são iguais?", [
  "-eq",
], "`[ \"$A\" -eq \"$B\" ]`.");

F("013.3", "Digite a palavra-chave que inicia o bloco de comandos de um laço `for` (após a lista).", [
  "do",
], "for i in 1 2 3; do ...; done.");

F("013.3", "Digite a variável especial que contém o nome com que o script foi chamado.", [
  "$0",
], "`$0` é o nome do script.");

F("013.3", "Digite a palavra-chave usada após a condição do `if` para iniciar o bloco de comandos.", [
  "then",
], "if [ ... ]; then ... fi.");

Q("013.3", "Qual valor `$?` terá logo após `[ 5 -lt 3 ]`?", [
  "*`1`, pois a condição é falsa",
  "`0`, pois a condição é falsa",
  "`5`",
  "`3`",
], "O teste retorna 0 para verdadeiro e 1 para falso. 5 não é menor que 3.");

Q("013.3", "Qual é o erro no trecho abaixo?\n```\nif [ \"$X\" = \"a\" ]\n  echo ok\nfi\n```", [
  "*Falta o `then` após a condição",
  "Falta o `done`",
  "O `=` deveria ser `-eq`",
  "Não pode haver aspas na condição",
], "A sintaxe correta é `if [ ... ]; then` (ou `then` na linha seguinte).");

Q("013.3", "Qual é o erro no trecho abaixo?\n```\nfor i in 1 2 3\n  echo $i\ndone\n```", [
  "*Falta o `do` antes do corpo do laço",
  "Falta o `fi`",
  "A lista deveria estar entre colchetes",
  "O `$i` deveria ser `i`",
], "O correto é `for i in 1 2 3; do` ou `do` na linha seguinte.");

Q("013.3", "Qual é a saída do script abaixo?\n```\n#!/bin/bash\nV=\"\"\nif [ -n \"$V\" ]; then\n  echo cheio\nelse\n  echo vazio\nfi\n```", [
  "*`vazio`",
  "`cheio`",
  "Erro",
  "Nada",
], "`-n` é verdadeiro para texto não vazio; V está vazia.");

Q("013.3", "Qual é a saída de `./s.sh 3`, sendo o script:\n```\n#!/bin/bash\nif [ \"$1\" -ge 3 ]; then\n  echo aprovado\nelse\n  echo reprovado\nfi\n```", [
  "*`aprovado`",
  "`reprovado`",
  "Erro de sintaxe",
  "`3`",
], "`-ge` = maior ou igual; 3 ≥ 3.");

Q("013.3", "Em um script, qual linha guarda em `LINHAS` o número de linhas de `/etc/passwd`?", [
  "*`LINHAS=$(wc -l < /etc/passwd)`",
  "`LINHAS=wc -l /etc/passwd`",
  "`LINHAS=\"wc -l /etc/passwd\"`",
  "`$LINHAS=$(wc -l /etc/passwd)`",
], "A substituição de comando captura a saída. Com `<`, o wc não mostra o nome do arquivo.");
