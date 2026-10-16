// 012.1
Q("012.1", "O que é um **shell** no Linux?", [
  "*Um interpretador de comandos que recebe o que o usuário digita e executa programas",
  "O núcleo do sistema operacional",
  "Um editor de texto gráfico",
  "Um sistema de arquivos",
], "O shell (como o Bash) lê comandos, faz expansões (variáveis, curingas) e executa os programas solicitados.");

Q("012.1", "O que significa o nome **Bash**?", [
  "*Bourne Again Shell",
  "Basic Shell",
  "Binary Access Shell",
  "Boot Administration Shell",
], "O Bash é uma evolução do Bourne Shell (sh), feita pelo projeto GNU. É o shell padrão de muitas distribuições.");

Q("012.1", "No prompt do Bash, qual caractere normalmente indica que você está logado como **root**?", [
  "*`#`",
  "`$`",
  "`%`",
  "`>`",
], "Por convenção, `$` indica usuário comum e `#` indica o superusuário root.");

Q("012.1", "Qual variável contém o caminho do shell de login do usuário?", [
  "*`SHELL`",
  "`PATH`",
  "`HOME`",
  "`PS1`",
], "`echo $SHELL` mostra, por exemplo, `/bin/bash`.");

Q("012.1", "No comando `ls -l /etc`, o que é `-l` e o que é `/etc`?", [
  "*`-l` é uma opção e `/etc` é um argumento",
  "`-l` é um argumento e `/etc` é uma opção",
  "Os dois são variáveis",
  "`-l` é o comando e `/etc` é a opção",
], "A sintaxe geral é `comando [opções] [argumentos]`. Opções mudam o comportamento; argumentos indicam sobre o que o comando atua.");

Q("012.1", "Qual afirmação sobre opções curtas e longas está correta?", [
  "*Opções curtas usam um hífen (`-a`) e opções longas usam dois hífens (`--all`)",
  "Opções longas usam um hífen e opções curtas usam dois",
  "Opções longas só existem no Windows",
  "Opções curtas não podem ser combinadas",
], "Exemplo: `ls -a` e `ls --all` fazem a mesma coisa.");

Q("012.1", "Quais comandos têm o mesmo efeito que `ls -l -a -h`? (Escolha duas.)", [
  "*`ls -lah`",
  "*`ls -hal`",
  "`ls -l-a-h`",
  "`ls --lah`",
  "`ls lah`",
], "Opções curtas podem ser agrupadas após um único hífen, em qualquer ordem.");

Q("012.1", "Um usuário digita `LS` em vez de `ls` e recebe `command not found`. Por quê?", [
  "*Comandos e nomes de arquivos no Linux diferenciam maiúsculas de minúsculas",
  "O comando ls foi removido do sistema",
  "O usuário não tem permissão de root",
  "O PATH está vazio",
], "O Linux é case-sensitive: `LS`, `Ls` e `ls` são nomes diferentes.");

Q("012.1", "O que faz a linha `cd /tmp; ls`?", [
  "*Executa `cd /tmp` e depois `ls`, um após o outro",
  "Executa `ls` somente se `cd /tmp` falhar",
  "Envia a saída de `cd` para `ls`",
  "Gera um erro de sintaxe",
], "O ponto e vírgula separa comandos executados em sequência, independentemente do resultado do anterior.");

Q("012.1", "No comando `mkdir dados && cd dados`, quando o `cd dados` é executado?", [
  "*Somente se `mkdir dados` terminar com sucesso",
  "Somente se `mkdir dados` falhar",
  "Sempre, antes do mkdir",
  "Nunca",
], "`&&` executa o segundo comando apenas se o primeiro retornar status 0 (sucesso).");

Q("012.1", "No comando `ping -c1 servidor || echo \"fora do ar\"`, quando a mensagem é exibida?", [
  "*Somente se o ping falhar",
  "Somente se o ping funcionar",
  "Sempre",
  "Nunca, pois `||` é um pipe duplo",
], "`||` executa o segundo comando apenas se o primeiro falhar (status diferente de 0).");

Q("012.1", "Para que serve uma barra invertida `\\` no final de uma linha de comando?", [
  "*Continuar o comando na próxima linha",
  "Executar o comando em segundo plano",
  "Comentar o restante da linha",
  "Redirecionar a saída",
], "A barra invertida \"escapa\" a quebra de linha, permitindo dividir comandos longos.");

Q("012.1", "Qual é a forma correta de atribuir o valor `azul` à variável `COR` no Bash?", [
  "*`COR=azul`",
  "`COR = azul`",
  "`$COR=azul`",
  "`set COR azul`",
], "Na atribuição não pode haver espaços ao redor do `=` e não se usa `$` antes do nome.");

Q("012.1", "O que acontece ao executar `COR = azul` (com espaços) no Bash?", [
  "*O shell tenta executar um comando chamado `COR` com os argumentos `=` e `azul`",
  "A variável COR recebe o valor azul normalmente",
  "A variável COR recebe o valor \" azul\"",
  "O shell cria um arquivo chamado COR",
], "Com espaços o Bash interpreta a primeira palavra como comando, gerando `COR: command not found`.");

Q("012.1", "Como se exibe o valor da variável `COR`?", [
  "*`echo $COR`",
  "`echo COR`",
  "`print COR`",
  "`echo %COR%`",
], "O `$` antes do nome faz o shell substituí-lo pelo valor. `%COR%` é sintaxe do Windows.");

Q("012.1", "Após `ARQ=relatorio`, qual comando imprime `relatorio_final`?", [
  "*`echo ${ARQ}_final`",
  "`echo $ARQ_final`",
  "`echo $(ARQ)_final`",
  "`echo ARQ_final`",
], "Sem chaves o shell procura a variável `ARQ_final`, que não existe. `${ARQ}` delimita o nome da variável.");

Q("012.1", "Após executar `nome=Ana` e `NOME=Bia`, o que `echo $nome $NOME` exibe?", [
  "*`Ana Bia`",
  "`Bia Bia`",
  "`Ana Ana`",
  "Um erro, pois a variável foi redefinida",
], "Nomes de variáveis diferenciam maiúsculas e minúsculas: são duas variáveis distintas.");

Q("012.1", "Qual é a função do comando `export`?", [
  "*Tornar uma variável disponível para os processos filhos (variável de ambiente)",
  "Salvar a variável em um arquivo",
  "Apagar uma variável",
  "Mostrar o valor de uma variável",
], "Variáveis comuns existem só no shell atual. Com `export` elas são herdadas pelos programas iniciados a partir dele.");

Q("012.1", "Observe:\n```\n$ CIDADE=Recife\n$ bash -c 'echo \"Cidade: $CIDADE\"'\n```\nO que é exibido?", [
  "*`Cidade: ` (vazio), pois a variável não foi exportada",
  "`Cidade: Recife`",
  "`Cidade: $CIDADE`",
  "Um erro de sintaxe",
], "O `bash -c` é um processo filho. Como `CIDADE` não foi exportada, o filho não a vê.");

Q("012.1", "Qual comando cria a variável `EDITOR` com o valor `nano` e já a exporta, em um único passo?", [
  "*`export EDITOR=nano`",
  "`EDITOR=nano export`",
  "`export $EDITOR=nano`",
  "`env EDITOR nano`",
], "`export VAR=valor` atribui e exporta ao mesmo tempo.");

Q("012.1", "Quais comandos listam as variáveis de ambiente? (Escolha duas.)", [
  "*`env`",
  "*`printenv`",
  "`history`",
  "`type`",
  "`ls /env`",
], "`env` e `printenv` mostram as variáveis exportadas. `set` mostra todas as variáveis do shell, incluindo as não exportadas, e funções.");

Q("012.1", "Qual comando remove a variável `TEMP` do shell atual?", [
  "*`unset TEMP`",
  "`rm TEMP`",
  "`export -r TEMP`",
  "`del TEMP`",
], "`unset` apaga a variável.");

Q("012.1", "O que contém a variável de ambiente `PATH`?", [
  "*Uma lista de diretórios onde o shell procura os programas executáveis",
  "O caminho do diretório atual",
  "O diretório pessoal do usuário",
  "O caminho do último arquivo aberto",
], "Ao digitar `ls`, o shell procura um executável chamado `ls` em cada diretório do PATH, na ordem.");

Q("012.1", "Qual caractere separa os diretórios dentro da variável `PATH`?", [
  "*`:` (dois-pontos)",
  "`;` (ponto e vírgula)",
  "`,` (vírgula)",
  "espaço",
], "Exemplo: `/usr/local/bin:/usr/bin:/bin`. No Windows o separador é `;`.");

Q("012.1", "Qual comando acrescenta `/opt/app/bin` ao **final** do PATH, mantendo os diretórios atuais?", [
  "*`export PATH=$PATH:/opt/app/bin`",
  "`export PATH=/opt/app/bin`",
  "`PATH+/opt/app/bin`",
  "`export $PATH=/opt/app/bin`",
], "Usar `$PATH:` preserva o conteúdo atual. Sem isso, o PATH seria substituído e comandos comuns deixariam de ser encontrados.");

Q("012.1", "Existem dois programas chamados `ferramenta`: um em `/usr/bin` e outro em `/opt/bin`. Com `PATH=/opt/bin:/usr/bin`, qual é executado ao digitar `ferramenta`?", [
  "*O de `/opt/bin`, pois aparece primeiro no PATH",
  "O de `/usr/bin`, pois é um diretório do sistema",
  "Os dois, em sequência",
  "Nenhum, por conflito de nomes",
], "O shell percorre o PATH da esquerda para a direita e executa o primeiro que encontrar.");

Q("012.1", "Você está no diretório onde existe o script executável `backup.sh`. Ao digitar `backup.sh`, aparece `command not found`. Como executá-lo?", [
  "*`./backup.sh`",
  "`run backup.sh`",
  "`exec backup`",
  "`cd backup.sh`",
], "O diretório atual normalmente não está no PATH. `./` indica explicitamente o caminho do arquivo.");

Q("012.1", "Qual arquivo costuma ser usado para definir variáveis e aliases que devem valer em todos os novos shells interativos de um usuário?", [
  "*`~/.bashrc`",
  "`/etc/passwd`",
  "`~/.bash_history`",
  "`/tmp/bash`",
], "O `~/.bashrc` é lido a cada novo shell interativo. Variáveis definidas só na linha de comando somem quando o shell é fechado.");

Q("012.1", "Qual variável contém o diretório pessoal (home) do usuário atual?", [
  "*`HOME`",
  "`PWD`",
  "`USER`",
  "`PATH`",
], "`echo $HOME` mostra algo como `/home/ana`.");

Q("012.1", "Qual variável contém o diretório de trabalho atual?", [
  "*`PWD`",
  "`HOME`",
  "`OLDPWD`",
  "`DIR`",
], "`PWD` é atualizada a cada `cd`. `OLDPWD` guarda o diretório anterior.");

Q("012.1", "Qual variável define a aparência do prompt principal do Bash?", [
  "*`PS1`",
  "`PROMPT_DIR`",
  "`SHELL`",
  "`TERM`",
], "Exemplo: `PS1='\\u@\\h:\\w\\$ '` mostra usuário, host e diretório.");

Q("012.1", "Qual variável contém o nome do usuário atual?", [
  "*`USER`",
  "`HOME`",
  "`UID_NAME`",
  "`LOGIN_DIR`",
], "`echo $USER` exibe o nome de login. O comando `whoami` dá o mesmo resultado.");

Q("012.1", "Para que serve o comando `type`?", [
  "*Mostrar como o shell interpreta um nome: alias, função, comando interno (builtin) ou arquivo executável",
  "Digitar texto em um arquivo",
  "Mostrar o tipo de um arquivo (texto, imagem etc.)",
  "Mudar o tipo de shell",
], "Exemplo: `type cd` → `cd is a shell builtin`; `type ls` pode mostrar que é um alias.");

Q("012.1", "Qual é a saída típica de `type cd`?", [
  "*`cd is a shell builtin`",
  "`cd is /usr/bin/cd`",
  "`cd: directory`",
  "`cd is aliased to ls`",
], "`cd` precisa ser interno ao shell, porque muda o diretório do próprio processo do shell.");

Q("012.1", "O que significa um comando ser **builtin** (interno) do shell?", [
  "*Ele é implementado dentro do próprio shell, sem executar um arquivo separado no disco",
  "Ele está instalado em `/usr/bin`",
  "Ele só pode ser executado pelo root",
  "Ele foi compilado junto com o kernel",
], "Builtins como `cd`, `export`, `echo`, `history` e `type` são executados pelo próprio shell.");

Q("012.1", "Quais destes são comandos internos (builtins) do Bash? (Escolha duas.)", [
  "*`cd`",
  "*`export`",
  "`ls`",
  "`grep`",
  "`tar`",
], "`ls`, `grep` e `tar` são programas externos (arquivos em `/usr/bin`).");

Q("012.1", "Qual comando mostra o caminho completo do executável que seria usado ao digitar `python3`?", [
  "*`which python3`",
  "`man python3`",
  "`history python3`",
  "`export python3`",
], "`which` procura no PATH. `type python3` também informa o caminho.");

Q("012.1", "O que faz `alias ll='ls -l'`?", [
  "*Cria um atalho: digitar `ll` passa a executar `ls -l`",
  "Renomeia o comando ls permanentemente",
  "Cria um arquivo chamado ll",
  "Exporta a variável ll",
], "Aliases valem para o shell atual; para torná-los permanentes, coloque-os no `~/.bashrc`.");

Q("012.1", "Qual comando exibe a lista de comandos digitados anteriormente?", [
  "*`history`",
  "`last`",
  "`log`",
  "`previous`",
], "`history` lista os comandos com números. `last` mostra os logins de usuários.");

Q("012.1", "Em qual arquivo o Bash salva o histórico de comandos de cada usuário?", [
  "*`~/.bash_history`",
  "`/var/log/history`",
  "`/etc/history`",
  "`~/.history.log`",
], "O histórico é gravado em `~/.bash_history` quando o shell é encerrado (por padrão).");

Q("012.1", "O que faz `!!` no Bash?", [
  "*Repete o último comando",
  "Nega o último comando",
  "Limpa o histórico",
  "Executa o comando como root",
], "Muito usado como `sudo !!` para repetir o último comando com sudo.");

Q("012.1", "No `history`, o comando 105 é `tar -czf backup.tar.gz docs`. Como executá-lo novamente?", [
  "*`!105`",
  "`history 105`",
  "`#105`",
  "`run 105`",
], "`!n` executa o comando de número n do histórico.");

Q("012.1", "O que faz `!ssh` no Bash?", [
  "*Executa o comando mais recente do histórico que começa com `ssh`",
  "Executa todos os comandos ssh do histórico",
  "Bloqueia o comando ssh",
  "Remove os comandos ssh do histórico",
], "`!texto` repete o último comando iniciado por aquele texto.");

Q("012.1", "Qual atalho de teclado faz uma busca reversa interativa no histórico de comandos do Bash?", [
  "*`Ctrl+R`",
  "`Ctrl+C`",
  "`Ctrl+D`",
  "`Ctrl+Z`",
], "Digite `Ctrl+R` e parte do comando para encontrar comandos anteriores.");

Q("012.1", "Qual comando apaga o histórico de comandos da sessão atual?", [
  "*`history -c`",
  "`history --delete-all`",
  "`rm history`",
  "`unset history`",
], "`history -c` limpa a lista em memória.");

Q("012.1", "Qual variável define quantos comandos o Bash mantém no histórico em memória?", [
  "*`HISTSIZE`",
  "`HISTFILE`",
  "`PATH`",
  "`PS2`",
], "`HISTSIZE` é a quantidade em memória; `HISTFILESIZE` é o limite no arquivo; `HISTFILE` é o caminho do arquivo.");

Q("012.1", "Após `NOME=Linux`, o que exibe `echo 'Olá $NOME'`?", [
  "*`Olá $NOME`",
  "`Olá Linux`",
  "`Olá`",
  "`'Olá Linux'`",
], "Aspas simples impedem qualquer expansão: o texto é exibido literalmente.");

Q("012.1", "Após `NOME=Linux`, o que exibe `echo \"Olá $NOME\"`?", [
  "*`Olá Linux`",
  "`Olá $NOME`",
  "`\"Olá Linux\"`",
  "`Olá`",
], "Aspas duplas permitem a expansão de variáveis (`$`), mas preservam espaços e evitam a expansão de curingas.");

Q("012.1", "O que exibe `echo \\$HOME`?", [
  "*`$HOME`",
  "O caminho do diretório pessoal",
  "`\\$HOME`",
  "Uma linha vazia",
], "A barra invertida escapa o caractere seguinte, então o `$` perde o significado especial.");

Q("012.1", "Qual comando exibe exatamente `Preço: $5`?", [
  "*`echo 'Preço: $5'`",
  "`echo \"Preço: $5\"`",
  "`echo Preço: $5`",
  "`echo $Preço: 5`",
], "Sem aspas simples, `$5` é interpretado como o quinto parâmetro posicional (vazio). Também funciona `echo \"Preço: \\$5\"`.");

Q("012.1", "O que faz `echo \"Hoje é $(date +%A)\"`?", [
  "*Executa o comando `date +%A` e insere sua saída no texto (substituição de comando)",
  "Exibe literalmente `$(date +%A)`",
  "Cria uma variável chamada date",
  "Gera erro, pois parênteses não são permitidos",
], "`$(comando)` é substituído pela saída do comando. A forma antiga com crases também funciona.");

Q("012.1", "Qual é a saída de `echo $((3 * 4))`?", [
  "*`12`",
  "`3 * 4`",
  "`$((3 * 4))`",
  "`34`",
], "`$(( ))` faz expansão aritmética de números inteiros.");

Q("012.1", "Qual é a saída de `echo Linux     Essentials` (com vários espaços entre as palavras)?", [
  "*`Linux Essentials` (com um único espaço)",
  "`Linux     Essentials` (com todos os espaços)",
  "`LinuxEssentials`",
  "Um erro",
], "Sem aspas, o shell separa as palavras e o echo as recebe como dois argumentos, imprimindo-os com um espaço. Com aspas os espaços seriam preservados.");

Q("012.1", "Qual opção faz o `echo` **não** imprimir a quebra de linha no final?", [
  "*`-n`",
  "`-e`",
  "`-l`",
  "`-x`",
], "`echo -n` mantém o cursor na mesma linha.");

Q("012.1", "Qual opção faz o `echo` do Bash interpretar sequências como `\\n` (nova linha) e `\\t` (tabulação)?", [
  "*`-e`",
  "`-n`",
  "`-i`",
  "`-r`",
], "`echo -e \"a\\tb\"` imprime a e b separados por tabulação.");

Q("012.1", "Em um diretório com os arquivos `a.txt` e `b.txt`, o que exibe `echo *.txt`?", [
  "*`a.txt b.txt`",
  "`*.txt`",
  "O conteúdo dos arquivos",
  "Um erro",
], "O shell expande o curinga antes de executar o echo.");

Q("012.1", "Em um diretório com os arquivos `a.txt` e `b.txt`, o que exibe `echo '*.txt'`?", [
  "*`*.txt`",
  "`a.txt b.txt`",
  "O conteúdo dos arquivos",
  "Nada",
], "Dentro de aspas simples (ou duplas) o curinga não é expandido.");

Q("012.1", "Qual é a forma correta de guardar o texto `Ana Maria` em uma variável?", [
  "*`NOME=\"Ana Maria\"`",
  "`NOME=Ana Maria`",
  "`NOME=(Ana Maria)` para texto simples",
  "`NOME:Ana Maria`",
], "Sem aspas, o shell entende `NOME=Ana` como atribuição temporária e tenta executar o comando `Maria`.");

Q("012.1", "Qual diretório contém principalmente comandos de **administração do sistema**, usados geralmente pelo root?", [
  "*`/usr/sbin`",
  "`/usr/bin`",
  "`/home`",
  "`/usr/share/doc`",
], "`/sbin` e `/usr/sbin` guardam binários de sistema (ex.: `useradd`, `ip`); `/bin` e `/usr/bin` guardam comandos de usuário.");

Q("012.1", "Em muitas distribuições modernas (com o \"usr merge\"), o que é `/bin`?", [
  "*Um link simbólico para `/usr/bin`",
  "Um diretório vazio",
  "O diretório de lixeira",
  "Um arquivo binário do kernel",
], "Debian, Ubuntu, Fedora e outras unificaram `/bin` com `/usr/bin` e `/sbin` com `/usr/sbin`.");

Q("012.1", "Onde normalmente ficam programas instalados manualmente pelo administrador, fora do gerenciador de pacotes?", [
  "*`/usr/local/bin`",
  "`/usr/bin`",
  "`/etc`",
  "`/dev`",
], "`/usr/local` é reservado para software local, evitando conflitos com arquivos gerenciados pela distribuição.");

Q("012.1", "Quais diretórios tradicionalmente contêm comandos executáveis? (Escolha três.)", [
  "*`/bin`",
  "*`/usr/bin`",
  "*`/usr/sbin`",
  "`/etc`",
  "`/var/log`",
], "`/etc` contém configurações e `/var/log` contém logs.");

Q("012.1", "Ao digitar `programaxyz`, o shell responde `programaxyz: command not found`. Quais são causas possíveis? (Escolha duas.)", [
  "*O programa não está instalado",
  "*O diretório do programa não está no PATH",
  "O usuário digitou o comando em letras minúsculas",
  "O disco está cheio",
], "O shell só encontra executáveis que estejam em algum diretório do PATH (ou chamados por caminho).");

Q("012.1", "Qual tecla completa automaticamente nomes de comandos, arquivos e diretórios no Bash?", [
  "*`Tab`",
  "`Esc`",
  "`F1`",
  "`Ctrl+A`",
], "Pressionar `Tab` duas vezes lista as opções quando há mais de uma possibilidade.");

Q("012.1", "Qual atalho interrompe (cancela) o comando em execução no terminal?", [
  "*`Ctrl+C`",
  "`Ctrl+D`",
  "`Ctrl+L`",
  "`Ctrl+R`",
], "`Ctrl+C` envia o sinal SIGINT ao processo em primeiro plano.");

Q("012.1", "O que acontece ao pressionar `Ctrl+D` em um prompt vazio do Bash?", [
  "*O shell recebe fim de entrada (EOF) e é encerrado, como com `exit`",
  "O comando atual é cancelado",
  "A tela é limpa",
  "O histórico é apagado",
], "`Ctrl+D` sinaliza fim de arquivo. `Ctrl+L` limpa a tela, assim como o comando `clear`.");

Q("012.1", "Na linha `ls -l # lista os arquivos`, o que acontece com o texto após o `#`?", [
  "*É tratado como comentário e ignorado pelo shell",
  "É passado como argumento ao ls",
  "Gera um erro",
  "É gravado em um arquivo",
], "Tudo após `#` (quando inicia uma palavra) é comentário.");

Q("012.1", "Após `X=5`, qual é a saída de `echo \"$X$X\"`?", [
  "*`55`",
  "`10`",
  "`$X$X`",
  "`5 5`",
], "As variáveis são apenas texto concatenado; não há soma.");

Q("012.1", "Após `A=Linux`, qual é a saída de `echo \"$AEssentials\"`?", [
  "*Uma linha vazia, pois o shell procura a variável `AEssentials`, que não existe",
  "`LinuxEssentials`",
  "`$AEssentials`",
  "`Linux Essentials`",
], "Para concatenar, use `${A}Essentials`.");

Q("012.1", "O que exibe `echo ~` para o usuário `ana`, cujo diretório pessoal é `/home/ana`?", [
  "*`/home/ana`",
  "`~`",
  "`/root`",
  "`/home`",
], "O shell expande `~` para o diretório pessoal do usuário.");

Q("012.1", "Qual variável contém o diretório em que você estava antes do último `cd`?", [
  "*`OLDPWD`",
  "`PWD`",
  "`HOME`",
  "`LASTDIR`",
], "`cd -` usa `OLDPWD` para voltar ao diretório anterior.");

Q("012.1", "Qual comando exibe o nome do usuário atual?", [
  "*`whoami`",
  "`whereis`",
  "`type`",
  "`pwd`",
], "`whoami` mostra o usuário efetivo. `pwd` mostra o diretório atual.");

Q("012.1", "Ao executar `/usr/bin/ls` em vez de `ls`, o que muda?", [
  "*O programa é chamado pelo caminho absoluto, sem consultar o PATH nem aliases",
  "O ls é executado como root",
  "O ls passa a mostrar arquivos ocultos",
  "Nada pode ser executado com caminho absoluto",
], "Quando o nome contém `/`, o shell executa exatamente aquele arquivo.");

Q("012.1", "Em `echo $HOME`, quem substitui `$HOME` pelo valor da variável?", [
  "*O shell, antes de executar o echo",
  "O próprio comando echo",
  "O kernel",
  "O terminal gráfico",
], "As expansões são feitas pelo shell; o echo recebe já o texto expandido.");

F("012.1", "Digite o nome da variável de ambiente que lista os diretórios onde o shell procura comandos executáveis.", [
  "PATH", "$PATH",
], "`PATH` contém diretórios separados por dois-pontos.");

F("012.1", "Digite o comando interno do Bash que torna uma variável disponível para processos filhos.", [
  "export",
], "Exemplo: `export LANG=pt_BR.UTF-8`.");

F("012.1", "Digite o comando que exibe a lista de comandos executados anteriormente no Bash.", [
  "history",
], "Use `history 10` para ver só os 10 últimos.");

F("012.1", "Digite a sequência do Bash que repete o último comando executado.", [
  "!!",
], "Exemplo: `sudo !!`.");

F("012.1", "Digite o comando completo para descobrir se `cd` é um alias, builtin ou arquivo executável.", [
  "type cd",
], "`type cd` responde `cd is a shell builtin`.");

F("012.1", "Digite o comando completo que exibe o valor da variável HOME.", [
  "echo $HOME", "echo \"$HOME\"", "echo ${HOME}", "printenv HOME",
], "`echo $HOME` mostra o diretório pessoal do usuário.");

F("012.1", "Digite o comando completo que remove a variável `TMPVAR` do shell atual.", [
  "unset TMPVAR",
], "`unset` remove variáveis.");

Q("012.1", "Qual é o resultado de `echo \"Diretório: $(pwd)\"` se o diretório atual for `/var/log`?", [
  "*`Diretório: /var/log`",
  "`Diretório: $(pwd)`",
  "`Diretório: pwd`",
  "`/var/log`",
], "A substituição de comando insere a saída do `pwd` no texto.");

Q("012.1", "O que faz o comando `exit` digitado no shell?", [
  "*Encerra o shell atual (e, se for o único, fecha a sessão do terminal)",
  "Desliga o computador",
  "Sai do usuário root e volta para o login gráfico",
  "Apaga o histórico",
], "`exit` também aceita um código de status, como `exit 1`.");
