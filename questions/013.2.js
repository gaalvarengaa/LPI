// 013.2
Q("013.2", "O que faz `ls > lista.txt`?", [
  "*Grava a saída do ls em `lista.txt`, substituindo o conteúdo anterior",
  "Acrescenta a saída do ls ao final de `lista.txt`",
  "Lê `lista.txt` como entrada do ls",
  "Mostra a saída na tela e grava no arquivo",
], "`>` redireciona a saída padrão (stdout) e sobrescreve o arquivo (ou cria, se não existir).");

Q("013.2", "O que faz `date >> registro.log`?", [
  "*Acrescenta a saída do date ao final de `registro.log`, sem apagar o conteúdo",
  "Substitui o conteúdo de `registro.log`",
  "Lê a data de `registro.log`",
  "Apaga `registro.log`",
], "`>>` faz append. Se o arquivo não existir, é criado.");

Q("013.2", "O que faz o operador `<` em `sort < nomes.txt`?", [
  "*Usa o conteúdo de `nomes.txt` como entrada padrão (stdin) do sort",
  "Grava a saída do sort em `nomes.txt`",
  "Compara o sort com o arquivo",
  "Acrescenta dados a nomes.txt",
], "`<` redireciona a entrada padrão a partir de um arquivo.");

Q("013.2", "Quais são os números dos descritores de arquivo padrão?", [
  "*0 = entrada padrão (stdin), 1 = saída padrão (stdout), 2 = saída de erro (stderr)",
  "0 = stdout, 1 = stderr, 2 = stdin",
  "1 = stdin, 2 = stdout, 3 = stderr",
  "0 = stderr, 1 = stdin, 2 = stdout",
], "Por isso `2>` redireciona erros e `1>` (ou só `>`) redireciona a saída normal.");

Q("013.2", "Qual comando grava apenas as **mensagens de erro** de `find / -name core` no arquivo `erros.txt`?", [
  "*`find / -name core 2> erros.txt`",
  "`find / -name core > erros.txt`",
  "`find / -name core | erros.txt`",
  "`find / -name core < erros.txt`",
], "`2>` redireciona o descritor 2 (stderr).");

Q("013.2", "O que faz `comando > saida.txt 2>&1`?", [
  "*Envia a saída padrão e a saída de erro para `saida.txt`",
  "Envia só os erros para `saida.txt`",
  "Envia a saída para `saida.txt` e os erros para o arquivo `1`",
  "Gera erro de sintaxe",
], "`2>&1` significa \"envie o descritor 2 para onde o 1 aponta agora\". Como o 1 já aponta para o arquivo, ambos vão para lá.");

Q("013.2", "No Bash, qual forma resumida envia stdout **e** stderr para o mesmo arquivo?", [
  "*`comando &> arquivo`",
  "`comando 3> arquivo`",
  "`comando |& arquivo`",
  "`comando <> arquivo`",
], "`&> arquivo` equivale a `> arquivo 2>&1` no Bash.");

Q("013.2", "Qual é a diferença entre `cmd > f 2>&1` e `cmd 2>&1 > f`?", [
  "*No primeiro, stdout e stderr vão para `f`; no segundo, só o stdout vai para `f` e os erros continuam no terminal",
  "Os dois são idênticos",
  "No segundo, os dois vão para f e no primeiro nada vai",
  "O segundo é um erro de sintaxe",
], "Os redirecionamentos são processados da esquerda para a direita. No segundo caso, `2>&1` copia o destino do stdout quando ele ainda era o terminal.");

Q("013.2", "Qual comando executa `atualizar.sh` descartando **toda** a saída (normal e de erro)?", [
  "*`./atualizar.sh > /dev/null 2>&1`",
  "`./atualizar.sh > /dev/null`",
  "`./atualizar.sh 2> /dev/null`",
  "`./atualizar.sh < /dev/null`",
], "`/dev/null` descarta tudo o que é escrito nele.");

Q("013.2", "O que faz o **pipe** (`|`) em `ls -l | less`?", [
  "*Conecta a saída padrão do `ls -l` à entrada padrão do `less`",
  "Grava a saída do ls em um arquivo chamado less",
  "Executa ls e less ao mesmo tempo, sem relação",
  "Executa less somente se ls falhar",
], "Pipes permitem combinar comandos simples em tarefas complexas.");

Q("013.2", "Em `comando | grep erro`, as mensagens que o `comando` escreve na **saída de erro** passam pelo pipe?", [
  "*Não, o pipe conecta apenas a saída padrão (stdout); o stderr continua indo para o terminal",
  "Sim, o pipe conecta stdout e stderr",
  "Sim, apenas o stderr passa pelo pipe",
  "Depende do grep",
], "Para enviar ambos pelo pipe use `comando 2>&1 | grep erro` (ou `|&` no Bash).");

Q("013.2", "O arquivo `notas.txt` tem 50 linhas. O que acontece após `echo teste > notas.txt`?", [
  "*O arquivo passa a ter apenas a linha `teste`",
  "O arquivo fica com 51 linhas",
  "O comando falha porque o arquivo já existe",
  "O arquivo continua igual",
], "`>` trunca (esvazia) o arquivo antes de escrever.");

Q("013.2", "O que faz o comando `> log.txt` (apenas o redirecionamento, sem comando)?", [
  "*Cria `log.txt` vazio ou esvazia seu conteúdo se ele existir",
  "Mostra o conteúdo de log.txt",
  "Apaga o arquivo do disco",
  "Gera erro de sintaxe",
], "É uma forma rápida de zerar um arquivo de log.");

Q("013.2", "Qual comando mostra a saída de `ls` na tela **e** ao mesmo tempo a grava em `lista.txt`?", [
  "*`ls | tee lista.txt`",
  "`ls > lista.txt`",
  "`ls >> lista.txt`",
  "`ls < lista.txt`",
], "`tee` copia a entrada para a saída padrão e para arquivos. `tee -a` acrescenta.");

Q("013.2", "O diretório `existe` existe, mas `naoexiste` não. O que aparece na tela após `ls existe naoexiste > saida.txt`?", [
  "*Apenas a mensagem de erro sobre `naoexiste`",
  "Nada, tudo vai para saida.txt",
  "A listagem de `existe`",
  "A listagem e o erro",
], "Só o stdout foi redirecionado; o erro vai para o stderr, que continua no terminal.");

Q("013.2", "O que exibe `wc -l < relatorio.txt`, considerando que o arquivo tem 42 linhas?", [
  "*`42`",
  "`42 relatorio.txt`",
  "`relatorio.txt`",
  "As 42 linhas",
], "Com redirecionamento de entrada, o wc não conhece o nome do arquivo e mostra só o número.");

Q("013.2", "O que é um **here document** (`<<`) no shell?", [
  "*Uma forma de fornecer várias linhas de texto como entrada de um comando, até uma palavra delimitadora",
  "Uma forma de acrescentar ao final de um arquivo",
  "Um tipo de pipe duplo",
  "Um redirecionamento de erros",
], "Exemplo: `cat << FIM` seguido de linhas e terminado com `FIM`.");

Q("013.2", "O que faz `cat arquivo.txt`?", [
  "*Exibe o conteúdo do arquivo na saída padrão",
  "Cria um arquivo vazio",
  "Conta as linhas do arquivo",
  "Apaga o arquivo",
], "`cat` vem de concatenate.");

Q("013.2", "O que faz `cat parte1.txt parte2.txt > completo.txt`?", [
  "*Junta o conteúdo dos dois arquivos, em ordem, no arquivo `completo.txt`",
  "Copia apenas parte1.txt",
  "Compara os dois arquivos",
  "Gera erro, pois cat aceita só um arquivo",
], "Concatenar arquivos é a função original do cat.");

Q("013.2", "Qual opção do `cat` numera as linhas da saída?", [
  "*`-n`",
  "`-l`",
  "`-c`",
  "`-v`",
], "`cat -n arquivo` mostra cada linha precedida de seu número.");

Q("013.2", "Quantas linhas o `head` mostra por padrão?", [
  "*10",
  "5",
  "20",
  "Todas",
], "O mesmo vale para o `tail`: 10 linhas por padrão.");

Q("013.2", "Qual comando mostra as **3 primeiras** linhas de `dados.csv`?", [
  "*`head -n 3 dados.csv`",
  "`tail -n 3 dados.csv`",
  "`cat -3 dados.csv`",
  "`less -3 dados.csv`",
], "Também funciona `head -3 dados.csv`.");

Q("013.2", "Qual comando mostra as **5 últimas** linhas de `/var/log/syslog`?", [
  "*`tail -n 5 /var/log/syslog`",
  "`head -n 5 /var/log/syslog`",
  "`tail -f 5 /var/log/syslog`",
  "`cut -5 /var/log/syslog`",
], "`tail` mostra o final do arquivo.");

Q("013.2", "Qual comando acompanha em tempo real as novas linhas que forem sendo adicionadas a um log?", [
  "*`tail -f /var/log/syslog`",
  "`head -f /var/log/syslog`",
  "`cat -f /var/log/syslog`",
  "`less -n /var/log/syslog`",
], "`-f` (follow) mantém o arquivo aberto e mostra as linhas novas. Encerre com Ctrl+C.");

Q("013.2", "O que faz `tail -n +2 dados.csv`?", [
  "*Mostra o arquivo a partir da linha 2, útil para pular o cabeçalho",
  "Mostra as 2 últimas linhas",
  "Mostra as 2 primeiras linhas",
  "Acrescenta 2 linhas ao arquivo",
], "Com `+N`, o tail começa na linha N.");

Q("013.2", "Qual comando mostra apenas a linha 10 de um arquivo, combinando head e tail?", [
  "*`head -n 10 arquivo | tail -n 1`",
  "`tail -n 10 arquivo | head -n 10`",
  "`head -n 1 arquivo | tail -n 10`",
  "`cat arquivo | head -10 -1`",
], "O head pega as 10 primeiras linhas e o tail fica com a última delas.");

Q("013.2", "Para que serve o `less`?", [
  "*Visualizar arquivos ou saídas longas página por página, com rolagem e busca",
  "Diminuir o tamanho de um arquivo",
  "Remover linhas repetidas",
  "Contar palavras",
], "Diferente do cat, o less não despeja tudo de uma vez e permite navegar para trás.");

Q("013.2", "No `less`, quais teclas, respectivamente, buscam um texto para frente e saem do programa?", [
  "*`/` e `q`",
  "`?` e `x`",
  "`Ctrl+F` e `Esc`",
  "`s` e `e`",
], "`/texto` busca para frente, `?texto` busca para trás, `n` próxima ocorrência, `q` sai.");

Q("013.2", "No `less`, qual tecla vai para o **final** do arquivo?", [
  "*`G`",
  "`g`",
  "`q`",
  "`e`",
], "`G` vai ao final e `g` ao início.");

Q("013.2", "O que faz `sort nomes.txt`?", [
  "*Exibe as linhas do arquivo em ordem alfabética, sem alterar o arquivo",
  "Ordena e salva o resultado no próprio arquivo",
  "Remove as linhas duplicadas",
  "Conta as linhas",
], "O sort escreve na saída padrão. Para salvar, use redirecionamento ou `-o`.");

Q("013.2", "O arquivo contém os números 9, 10 e 100, um por linha. Qual é a saída de `sort` (sem opções)?", [
  "*`10`, `100`, `9`",
  "`9`, `10`, `100`",
  "`100`, `10`, `9`",
  "`9`, `100`, `10`",
], "Sem `-n`, a ordenação é textual: compara caractere a caractere, e \"1\" vem antes de \"9\".");

Q("013.2", "Qual opção faz o `sort` ordenar **numericamente**?", [
  "*`-n`",
  "`-r`",
  "`-u`",
  "`-k`",
], "`sort -n` coloca 9 antes de 10.");

Q("013.2", "Qual comando ordena as linhas em ordem **decrescente**?", [
  "*`sort -r`",
  "`sort -d`",
  "`sort -u`",
  "`sort -z`",
], "`-r` inverte a ordem. Combine com `-n` para números: `sort -nr`.");

Q("013.2", "O que faz `sort -u lista.txt`?", [
  "*Ordena e mostra cada linha repetida uma única vez",
  "Ordena em maiúsculas",
  "Ordena por usuário",
  "Desfaz a ordenação",
], "`sort -u` tem efeito semelhante a `sort | uniq`.");

Q("013.2", "Qual comando ordena `/etc/passwd` numericamente pelo terceiro campo (UID), usando `:` como separador?", [
  "*`sort -t: -k3 -n /etc/passwd`",
  "`sort -d: -f3 /etc/passwd`",
  "`sort -n3 /etc/passwd`",
  "`cut -d: -f3 /etc/passwd | sort`",
], "`-t` define o separador e `-k` a coluna (chave) de ordenação.");

Q("013.2", "O que o `uniq` faz?", [
  "*Remove linhas repetidas **consecutivas**",
  "Remove todas as linhas repetidas, mesmo distantes",
  "Ordena as linhas",
  "Conta as palavras",
], "Por isso geralmente se usa `sort` antes: `sort arquivo | uniq`.");

Q("013.2", "O arquivo contém as linhas `a`, `b`, `a`. Qual é a saída de `uniq arquivo`?", [
  "*`a`, `b`, `a` (nada muda, pois não há repetições consecutivas)",
  "`a`, `b`",
  "`b`",
  "`a`",
], "Como as duas linhas `a` não são vizinhas, o uniq não as considera duplicadas.");

Q("013.2", "O que faz a opção `-c` do `uniq`?", [
  "*Mostra quantas vezes cada linha aparece consecutivamente",
  "Remove linhas vazias",
  "Ignora maiúsculas",
  "Mostra apenas a contagem total",
], "Exemplo: `sort acessos.log | uniq -c`.");

Q("013.2", "Qual pipeline mostra as linhas mais frequentes de `ips.txt`, da mais comum para a menos comum?", [
  "*`sort ips.txt | uniq -c | sort -nr`",
  "`uniq -c ips.txt | sort`",
  "`sort -nr ips.txt | uniq`",
  "`cat ips.txt | uniq | sort -c`",
], "Ordena para agrupar, conta com `uniq -c` e ordena numericamente de forma decrescente.");

Q("013.2", "Qual opção do `uniq` mostra apenas as linhas que aparecem repetidas?", [
  "*`-d`",
  "`-u`",
  "`-c`",
  "`-i`",
], "`-d` mostra uma cópia de cada linha duplicada; `-u` mostra só as que não se repetem.");

Q("013.2", "Qual comando mostra apenas os nomes de usuário (primeiro campo) de `/etc/passwd`?", [
  "*`cut -d: -f1 /etc/passwd`",
  "`cut -f1 /etc/passwd`",
  "`cut -c: -d1 /etc/passwd`",
  "`sort -f1 /etc/passwd`",
], "`-d` define o delimitador e `-f` os campos.");

Q("013.2", "Qual é o delimitador padrão do `cut` quando se usa `-f` sem `-d`?", [
  "*Tabulação (TAB)",
  "Espaço",
  "Vírgula",
  "Dois-pontos",
], "Para outros separadores é preciso indicar `-d`.");

Q("013.2", "Qual comando mostra os 5 primeiros caracteres de cada linha de `codigos.txt`?", [
  "*`cut -c1-5 codigos.txt`",
  "`cut -f1-5 codigos.txt`",
  "`head -c5 codigos.txt`",
  "`cut -d5 codigos.txt`",
], "`-c` seleciona posições de caracteres. `head -c5` mostraria apenas os 5 primeiros bytes do arquivo inteiro.");

Q("013.2", "Qual comando extrai a 2ª e a 4ª colunas de um arquivo CSV separado por vírgulas?", [
  "*`cut -d, -f2,4 dados.csv`",
  "`cut -d, -f2-4 dados.csv`",
  "`cut -c2,4 dados.csv`",
  "`cut -f2,4 dados.csv`",
], "`-f2,4` seleciona os campos 2 e 4; `-f2-4` seria do 2 ao 4.");

Q("013.2", "Qual comando conta o número de **linhas** de `texto.txt`?", [
  "*`wc -l texto.txt`",
  "`wc -w texto.txt`",
  "`wc -c texto.txt`",
  "`count texto.txt`",
], "`-l` linhas, `-w` palavras, `-c` bytes, `-m` caracteres.");

Q("013.2", "Qual comando conta o número de **palavras** de `texto.txt`?", [
  "*`wc -w texto.txt`",
  "`wc -l texto.txt`",
  "`wc -p texto.txt`",
  "`grep -c texto.txt`",
], "Palavras são sequências separadas por espaços, tabulações ou quebras de linha.");

Q("013.2", "A saída de `wc texto.txt` é `12 85 512 texto.txt`. O que significam os números?", [
  "*12 linhas, 85 palavras e 512 bytes",
  "12 palavras, 85 linhas e 512 caracteres",
  "12 bytes, 85 palavras e 512 linhas",
  "12 parágrafos, 85 linhas e 512 palavras",
], "Sem opções, o wc mostra linhas, palavras e bytes, nessa ordem.");

Q("013.2", "Qual comando conta quantas entradas existem no diretório `/etc`?", [
  "*`ls /etc | wc -l`",
  "`wc -l /etc`",
  "`ls -c /etc`",
  "`cat /etc | wc`",
], "Quando a saída do ls vai para um pipe, sai um nome por linha.");

Q("013.2", "O que faz `grep root /etc/passwd`?", [
  "*Mostra as linhas de `/etc/passwd` que contêm o texto `root`",
  "Mostra apenas a palavra root",
  "Conta quantos usuários existem",
  "Altera a senha do root",
], "O grep filtra linhas que correspondem a um padrão.");

Q("013.2", "Qual opção do `grep` ignora diferenças entre maiúsculas e minúsculas?", [
  "*`-i`",
  "`-v`",
  "`-c`",
  "`-n`",
], "`grep -i erro` encontra `erro`, `Erro` e `ERRO`.");

Q("013.2", "Qual opção do `grep` mostra as linhas que **não** contêm o padrão?", [
  "*`-v`",
  "`-i`",
  "`-n`",
  "`-x`",
], "`-v` inverte a seleção.");

Q("013.2", "Qual opção do `grep` mostra apenas **quantas** linhas correspondem ao padrão?", [
  "*`-c`",
  "`-n`",
  "`-l`",
  "`-w`",
], "`grep -c erro log.txt` exibe só o número.");

Q("013.2", "Qual opção do `grep` mostra o número de cada linha encontrada?", [
  "*`-n`",
  "`-c`",
  "`-l`",
  "`-h`",
], "Saída no formato `27:linha encontrada`.");

Q("013.2", "Qual comando procura o texto `senha` em todos os arquivos dentro de `/etc` e seus subdiretórios?", [
  "*`grep -r senha /etc`",
  "`grep senha /etc`",
  "`find /etc senha`",
  "`grep -v senha /etc`",
], "`-r` faz a busca recursiva.");

Q("013.2", "Qual opção do `grep` mostra apenas os **nomes dos arquivos** que contêm o padrão?", [
  "*`-l`",
  "`-n`",
  "`-c`",
  "`-o`",
], "Útil com `-r`: `grep -rl TODO projeto/`.");

Q("013.2", "Qual opção do `grep` ativa as **expressões regulares estendidas** (ERE)?", [
  "*`-E`",
  "`-e`",
  "`-x`",
  "`-r`",
], "`grep -E` substitui o antigo `egrep`. Em ERE, caracteres como `?`, `+`, `|` e `()` têm significado especial sem barra invertida.");

Q("013.2", "Qual opção do `grep` busca o padrão apenas como **palavra inteira**?", [
  "*`-w`",
  "`-x`",
  "`-i`",
  "`-o`",
], "`grep -w ana` encontra `ana`, mas não `banana`.");

Q("013.2", "Em uma expressão regular, o que significa o ponto `.`?", [
  "*Qualquer caractere único",
  "Um ponto literal",
  "O fim da linha",
  "Zero ou mais caracteres",
], "Para um ponto literal, use `\\.`.");

Q("013.2", "Em uma expressão regular, o que significa o asterisco `*`?", [
  "*Zero ou mais ocorrências do item anterior",
  "Qualquer sequência de caracteres, como no shell",
  "Exatamente uma ocorrência do item anterior",
  "Um asterisco literal",
], "Em regex, `a*` = zero ou mais `a`. Para \"qualquer coisa\" use `.*`.");

Q("013.2", "Em uma expressão regular estendida (`grep -E`), o que significa `?`", [
  "*Zero ou uma ocorrência do item anterior (item opcional)",
  "Exatamente um caractere qualquer, como no shell",
  "Uma ou mais ocorrências",
  "Um ponto de interrogação literal",
], "`colou?r` corresponde a `color` e `colour`.");

Q("013.2", "Em uma expressão regular, o que significa `[aeiou]`?", [
  "*Um único caractere que seja uma das vogais listadas",
  "A sequência exata aeiou",
  "Qualquer caractere exceto vogais",
  "Cinco caracteres quaisquer",
], "Colchetes definem uma lista (classe) de caracteres.");

Q("013.2", "Em uma expressão regular, o que significa `[^0-9]`?", [
  "*Um caractere que **não** seja dígito",
  "Uma linha que começa com dígito",
  "Um dígito qualquer",
  "O caractere ^ seguido de um dígito",
], "Quando `^` é o primeiro caractere dentro dos colchetes, a lista é negada.");

Q("013.2", "Em uma expressão regular, o que significam `^` e `$` fora de colchetes?", [
  "*Início e fim da linha, respectivamente",
  "Fim e início da linha",
  "Qualquer caractere e nenhum caractere",
  "Variáveis do shell",
], "`^erro` = linhas que começam com erro; `fim$` = linhas que terminam com fim.");

Q("013.2", "Qual comando mostra as linhas de `config.conf` que **não** são comentários (não começam com `#`)?", [
  "*`grep -v '^#' config.conf`",
  "`grep '^#' config.conf`",
  "`grep -v '#$' config.conf`",
  "`grep -c '#' config.conf`",
], "`^#` corresponde a linhas iniciadas por `#` e `-v` inverte a seleção.");

Q("013.2", "Qual expressão encontra **linhas vazias**?", [
  "*`^$`",
  "`$^`",
  "`.*`",
  "`[ ]`",
], "Uma linha vazia começa e termina sem nada no meio. `grep -v '^$'` remove linhas vazias.");

Q("013.2", "Quais palavras correspondem à regex `grep -E 'colou?r'`? (Escolha duas.)", [
  "*`color`",
  "*`colour`",
  "`colouur`",
  "`colr`",
], "`u?` torna o `u` opcional (zero ou uma vez).");

Q("013.2", "Quais textos correspondem à regex `a.c`? (Escolha duas.)", [
  "*`abc`",
  "*`a-c`",
  "`ac`",
  "`abbc`",
], "O ponto exige exatamente um caractere entre `a` e `c`.");

Q("013.2", "Quais textos correspondem por inteiro à regex `^ab*c$`? (Escolha três.)", [
  "*`ac`",
  "*`abc`",
  "*`abbbc`",
  "`abd`",
  "`aabc`",
], "`b*` significa zero ou mais `b`, então `ac`, `abc` e `abbbc` correspondem.");

Q("013.2", "Qual comando mostra as linhas de `lista.txt` que começam com um dígito?", [
  "*`grep '^[0-9]' lista.txt`",
  "`grep '[0-9]$' lista.txt`",
  "`grep '^0-9' lista.txt`",
  "`grep -v '[0-9]' lista.txt`",
], "`^` ancora no início e `[0-9]` aceita um dígito.");

Q("013.2", "Como procurar o texto literal `1.5` sem que o ponto signifique \"qualquer caractere\"?", [
  "*`grep '1\\.5' arquivo`",
  "`grep '1.5' arquivo`",
  "`grep '1*5' arquivo`",
  "`grep '1?5' arquivo`",
], "A barra invertida torna o ponto literal. `grep -F` também desativa as expressões regulares.");

Q("013.2", "Quais palavras correspondem à regex `b[aeiou]t`? (Escolha duas.)", [
  "*`bat`",
  "*`but`",
  "`bt`",
  "`boot`",
], "Entre b e t deve haver exatamente uma vogal.");

Q("013.2", "Qual comando encontra tanto `gray` quanto `grey`?", [
  "*`grep 'gr[ae]y' arquivo`",
  "`grep 'gr[^ae]y' arquivo`",
  "`grep 'gr(a|e)y' arquivo` (sem -E)",
  "`grep 'gray|grey' arquivo` (sem -E)",
], "`[ae]` aceita a ou e; `[^ae]` aceita qualquer caractere exceto esses. Sem `-E`, parênteses e `|` são tratados como caracteres literais pelo grep (GNU grep só os interpreta em BRE como `\\(`, `\\|`).");

Q("013.2", "Em regex, o que significa `.*`?", [
  "*Qualquer sequência de caracteres, inclusive vazia",
  "Um ponto seguido de um asterisco literal",
  "Exatamente um caractere",
  "Nenhum caractere",
], "O ponto (qualquer caractere) repetido zero ou mais vezes.");

Q("013.2", "Por que é recomendado colocar a expressão regular entre aspas simples, como em `grep 'a.*b' arquivo`?", [
  "*Para evitar que o shell interprete caracteres como `*`, `?` e `[ ]` como curingas de arquivos",
  "Porque o grep exige aspas",
  "Para tornar a busca insensível a maiúsculas",
  "Para buscar em arquivos ocultos",
], "Sem aspas, o shell pode expandir o padrão para nomes de arquivos antes de o grep recebê-lo.");

Q("013.2", "Qual é a diferença entre o `*` nos curingas do shell e o `*` em expressões regulares?", [
  "*No shell, `*` significa qualquer sequência; em regex, significa zero ou mais repetições do item anterior",
  "São idênticos",
  "No shell significa um caractere; em regex significa vários",
  "Em regex, `*` não existe",
], "O equivalente em regex do `*` do shell é `.*`.");

Q("013.2", "Qual pipeline mostra quantos usuários usam cada shell, a partir de `/etc/passwd`?", [
  "*`cut -d: -f7 /etc/passwd | sort | uniq -c`",
  "`cut -d: -f7 /etc/passwd | uniq -c | sort`",
  "`sort /etc/passwd | cut -f7 | wc -l`",
  "`grep shell /etc/passwd | wc -c`",
], "O 7º campo é o shell; ordenar antes do uniq agrupa as linhas iguais.");

Q("013.2", "Qual pipeline mostra os 3 maiores arquivos do diretório atual?", [
  "*`ls -S | head -n 3`",
  "`ls -S | tail -n 3`",
  "`ls | sort | head -3`",
  "`ls -t | head -n 3`",
], "`ls -S` ordena por tamanho decrescente e o head pega os três primeiros.");

F("013.2", "Digite o comando completo para contar as linhas do arquivo `log.txt`.", [
  "wc -l log.txt", "wc -l < log.txt", "cat log.txt | wc -l", "wc --lines log.txt",
], "`wc -l` conta linhas.");

F("013.2", "Digite o comando completo que mostra as 20 últimas linhas de `app.log`.", [
  "tail -n 20 app.log", "tail -20 app.log", "tail -n20 app.log", "tail --lines=20 app.log",
], "`tail` mostra o final do arquivo.");

F("013.2", "Digite o comando completo que mostra as 5 primeiras linhas de `dados.txt`.", [
  "head -n 5 dados.txt", "head -5 dados.txt", "head -n5 dados.txt", "head --lines=5 dados.txt",
], "`head` mostra o início do arquivo.");

F("013.2", "Qual operador acrescenta a saída de um comando ao final de um arquivo, sem apagá-lo?", [
  ">>", "1>>",
], "`>` sobrescreve, `>>` acrescenta.");

F("013.2", "Qual caractere conecta a saída de um comando à entrada de outro?", [
  "|",
], "Esse é o pipe.");

F("013.2", "Digite o redirecionamento (sem o comando) que descarta apenas as mensagens de erro.", [
  "2>/dev/null", "2> /dev/null",
], "O descritor 2 é o stderr e `/dev/null` descarta os dados.");

F("013.2", "Digite o comando completo que mostra o primeiro campo (nome de usuário) de cada linha do `/etc/passwd`.", [
  "cut -d: -f1 /etc/passwd", "cut -d : -f 1 /etc/passwd", "cut -d: -f 1 /etc/passwd", "cut -f1 -d: /etc/passwd", "cut -d':' -f1 /etc/passwd",
], "Os campos de /etc/passwd são separados por dois-pontos.");

F("013.2", "Qual opção do `grep` (com hífen) mostra as linhas que NÃO correspondem ao padrão?", [
  "-v",
], "`-v` inverte o resultado da busca.");

F("013.2", "Qual opção do `sort` (com hífen) ordena numericamente?", [
  "-n",
], "Sem `-n`, `10` vem antes de `9`.");

F("013.2", "Digite o comando completo que mostra as linhas de `nomes.txt` em ordem alfabética sem repetições, usando só o sort.", [
  "sort -u nomes.txt", "sort --unique nomes.txt",
], "Também daria certo `sort nomes.txt | uniq`.");
