// 012.2
Q("012.2", "Qual comando exibe a página de manual do comando `ls`?", [
  "*`man ls`",
  "`help ls`",
  "`ls --man`",
  "`doc ls`",
], "`man` abre o manual do comando, formatado e paginado.");

Q("012.2", "A seção **1** do manual (man) contém documentação de:", [
  "*Comandos e programas de usuário",
  "Formatos de arquivos de configuração",
  "Comandos de administração do sistema",
  "Chamadas de sistema do kernel",
], "Seções principais: 1 comandos de usuário, 2 chamadas de sistema, 3 funções de biblioteca, 4 arquivos especiais (/dev), 5 formatos de arquivos, 6 jogos, 7 diversos, 8 administração.");

Q("012.2", "Qual seção do manual documenta **formatos de arquivos** e arquivos de configuração, como `/etc/passwd`?", [
  "*5",
  "1",
  "8",
  "3",
], "`man 5 passwd` mostra o formato do arquivo /etc/passwd.");

Q("012.2", "Qual seção do manual documenta **comandos de administração do sistema**, normalmente executados pelo root?", [
  "*8",
  "1",
  "5",
  "2",
], "Exemplos: `useradd(8)`, `mount(8)`.");

Q("012.2", "Qual seção do manual documenta **chamadas de sistema** (system calls) do kernel?", [
  "*2",
  "3",
  "5",
  "8",
], "Exemplos: `open(2)`, `read(2)`. A seção 3 documenta funções de biblioteca, como `printf(3)`.");

Q("012.2", "Qual seção do manual documenta **funções de biblioteca** da linguagem C, como `printf`?", [
  "*3",
  "1",
  "2",
  "7",
], "`man 3 printf` mostra a função da biblioteca C; `man 1 printf` mostra o comando de shell.");

Q("012.2", "Existe um comando `passwd` e também um arquivo `/etc/passwd`. Qual comando mostra a documentação do **arquivo**?", [
  "*`man 5 passwd`",
  "`man passwd`",
  "`man 1 passwd`",
  "`man passwd --file`",
], "Especificar a seção 5 seleciona a página do formato de arquivo.");

Q("012.2", "Ao executar `man passwd`, sem informar a seção, qual página é exibida?", [
  "*A da primeira seção em que o nome é encontrado, normalmente a seção 1 (comando passwd)",
  "A página da seção 5",
  "Todas as páginas ao mesmo tempo",
  "Uma mensagem de erro pedindo a seção",
], "O man percorre as seções em ordem e exibe a primeira encontrada. `man -a passwd` mostra todas, uma após a outra.");

Q("012.2", "Qual comando procura páginas de manual cujo nome ou descrição contenham uma palavra-chave? (Escolha duas.)", [
  "*`apropos palavra`",
  "*`man -k palavra`",
  "`man -f palavra`",
  "`help palavra`",
  "`history palavra`",
], "`apropos` e `man -k` buscam nas descrições curtas das páginas de manual.");

Q("012.2", "O que faz `whatis ls` (equivalente a `man -f ls`)?", [
  "*Mostra a descrição de uma linha da página de manual de `ls`",
  "Mostra o caminho do executável ls",
  "Executa o ls com ajuda",
  "Abre a página completa de manual",
], "Exemplo de saída: `ls (1) - list directory contents`.");

Q("012.2", "Dentro de uma página de manual, como procurar a palavra `recursive`?", [
  "*Digitar `/recursive` e pressionar Enter",
  "Digitar `find recursive`",
  "Pressionar `Ctrl+F` e digitar a palavra",
  "Digitar `:search recursive`",
], "O man usa o paginador `less`: `/` busca para frente, `n` vai para a próxima ocorrência e `N` para a anterior.");

Q("012.2", "Qual tecla sai da visualização de uma página de manual?", [
  "*`q`",
  "`x`",
  "`Esc`",
  "`Ctrl+X`",
], "No paginador less, `q` sai.");

Q("012.2", "Ao ler uma página de manual, qual tecla avança uma tela?", [
  "*Barra de espaço",
  "`q`",
  "`/`",
  "`h`",
], "Espaço avança uma página, `b` volta uma página, setas movem linha a linha.");

Q("012.2", "Qual programa o `man` normalmente usa para exibir as páginas (paginador)?", [
  "*`less`",
  "`cat`",
  "`nano`",
  "`vi`",
], "Por isso os atalhos de navegação são os mesmos do `less`.");

Q("012.2", "Qual seção de uma página de manual mostra a **sintaxe** de uso do comando, com suas opções e argumentos?", [
  "*SYNOPSIS",
  "NAME",
  "SEE ALSO",
  "AUTHOR",
], "Seções comuns: NAME, SYNOPSIS, DESCRIPTION, OPTIONS, EXAMPLES, FILES, SEE ALSO, AUTHOR.");

Q("012.2", "Na SYNOPSIS `ls [OPTION]... [FILE]...`, o que significam os colchetes `[ ]`?", [
  "*O item é opcional",
  "O item é obrigatório",
  "O item deve ser digitado entre colchetes",
  "O item é uma variável de ambiente",
], "Os colchetes indicam algo opcional e as reticências `...` indicam que o item pode se repetir.");

Q("012.2", "Na SYNOPSIS de uma página de manual, o que indicam as reticências `...` após um argumento?", [
  "*Que o argumento pode ser repetido várias vezes",
  "Que o argumento é obrigatório",
  "Que a documentação está incompleta",
  "Que o comando é perigoso",
], "Exemplo: `rm [OPTION]... [FILE]...` aceita vários arquivos.");

Q("012.2", "Qual seção de uma página de manual lista páginas relacionadas que podem ser consultadas?", [
  "*SEE ALSO",
  "NAME",
  "SYNOPSIS",
  "BUGS",
], "SEE ALSO mostra referências como `chmod(1)`, `stat(2)`.");

Q("012.2", "Qual seção de uma página de manual costuma listar os arquivos de configuração usados pelo programa?", [
  "*FILES",
  "SYNOPSIS",
  "AUTHOR",
  "NAME",
], "Por exemplo, a página do ssh lista `~/.ssh/config` e `/etc/ssh/ssh_config` em FILES.");

Q("012.2", "O que a opção `--help` faz na maioria dos comandos?", [
  "*Exibe um resumo do uso e das opções diretamente no terminal",
  "Abre a página de manual",
  "Envia uma pergunta para os desenvolvedores",
  "Instala a documentação do pacote",
], "Exemplo: `cp --help`. É mais curto que a página de manual.");

Q("012.2", "Por que nem sempre a opção `-h` exibe ajuda?", [
  "*Porque em alguns comandos `-h` tem outro significado, como em `ls -h` e `df -h` (tamanhos legíveis)",
  "Porque `-h` só funciona para o root",
  "Porque `-h` apaga o histórico",
  "Porque `-h` exige conexão com a internet",
], "`--help` é a forma mais consistente. `-h` significa ajuda em muitos comandos, mas não em todos.");

Q("012.2", "Como obter ajuda sobre um comando **interno** (builtin) do Bash, como `cd`?", [
  "*`help cd`",
  "`man cd` sempre funciona igual",
  "`cd --manual`",
  "`info /bin/cd`",
], "`help` mostra a documentação dos builtins. Eles também estão descritos na página `man bash`.");

Q("012.2", "O que é o sistema **info**?", [
  "*Um sistema de documentação do projeto GNU, com páginas organizadas em nós e links de navegação",
  "Um comando que mostra informações do hardware",
  "Um arquivo de log do sistema",
  "Uma variável de ambiente",
], "`info coreutils` abre o manual GNU das ferramentas básicas, geralmente mais detalhado que as man pages.");

Q("012.2", "Qual diretório contém documentação adicional dos pacotes instalados, como README, changelogs e exemplos?", [
  "*`/usr/share/doc/`",
  "`/etc/doc/`",
  "`/var/log/`",
  "`/usr/bin/doc/`",
], "Cada pacote costuma ter um subdiretório, como `/usr/share/doc/bash/`.");

Q("012.2", "Onde costumam ficar arquivos de **exemplo** de configuração fornecidos pelos pacotes?", [
  "*Em `/usr/share/doc/<pacote>/examples/` ou diretórios semelhantes",
  "Em `/tmp/examples/`",
  "Em `/dev/examples/`",
  "Em `/proc/examples/`",
], "Esses exemplos ajudam a criar arquivos de configuração em `/etc`.");

Q("012.2", "Alguns arquivos em `/usr/share/doc` terminam em `.gz`. Como lê-los sem descompactar manualmente?", [
  "*Com `zless` ou `zcat`",
  "Com `man`",
  "Com `cd`",
  "Não é possível lê-los",
], "`zless arquivo.gz` exibe o conteúdo compactado com gzip diretamente.");

Q("012.2", "Em qual diretório ficam normalmente os arquivos das páginas de manual?", [
  "*`/usr/share/man/`",
  "`/usr/share/doc/`",
  "`/etc/man/`",
  "`/var/man/`",
], "Os arquivos ficam em subdiretórios por seção, como `/usr/share/man/man1/`.");

Q("012.2", "O que faz `man -a passwd`?", [
  "*Exibe, em sequência, todas as páginas de manual chamadas passwd",
  "Mostra apenas a página da seção 1",
  "Mostra o caminho do comando passwd",
  "Altera a senha do usuário",
], "`-a` (all) percorre todas as seções que tiverem aquela página.");

Q("012.2", "O comando `apropos` não retorna nada, mesmo para palavras comuns. Qual a causa provável?", [
  "*O banco de dados (índice) das páginas de manual ainda não foi criado ou atualizado, o que se resolve com `mandb`",
  "O usuário não tem conexão com a internet",
  "O comando apropos só funciona para o root",
  "O PATH está errado",
], "`apropos` e `whatis` consultam um índice gerado pelo `mandb`.");

F("012.2", "Qual número de seção do manual documenta formatos de arquivos de configuração? (apenas o número)", [
  "5",
], "Exemplo: `man 5 fstab`, `man 5 passwd`.");

F("012.2", "Qual número de seção do manual documenta comandos de administração do sistema? (apenas o número)", [
  "8",
], "Exemplo: `man 8 useradd`.");

F("012.2", "Digite o comando que procura páginas de manual por palavra-chave (só o nome do comando, sem argumentos).", [
  "apropos", "man -k",
], "`apropos rede` ou `man -k rede`.");

F("012.2", "Digite o comando completo para ler o manual do `tar`.", [
  "man tar",
], "`man tar` abre a página de manual do tar.");

F("012.2", "Digite o caminho do diretório que guarda documentação extra dos pacotes instalados.", [
  "/usr/share/doc", "/usr/share/doc/",
], "Exemplo: `ls /usr/share/doc/openssh-client`.");

F("012.2", "Digite o comando completo para ver a ajuda do builtin `cd` do Bash.", [
  "help cd",
], "`help` documenta os comandos internos do shell.");

F("012.2", "Digite o comando completo que abre a página de manual do arquivo `/etc/passwd` (seção 5).", [
  "man 5 passwd",
], "Sem o 5, o man abriria a página do comando passwd (seção 1).");

F("012.2", "Digite o comando completo que mostra a descrição de uma linha do comando `ls` (sem usar man).", [
  "whatis ls",
], "`whatis ls` equivale a `man -f ls`.");

Q("012.2", "Qual é a diferença principal entre `cp --help` e `man cp`?", [
  "*`--help` mostra um resumo direto no terminal; `man` mostra a documentação completa e paginada",
  "`--help` exige internet; `man` funciona offline",
  "`man` mostra só a versão do programa",
  "Não há diferença",
], "Ambos são locais. O `--help` é útil para lembrar rapidamente uma opção.");

Q("012.2", "Qual comando abre o manual do próprio comando `man`?", [
  "*`man man`",
  "`help man`",
  "`man --self`",
  "`info help`",
], "A página `man(1)` explica seções, opções e o uso do man.");

Q("012.2", "Em textos técnicos aparece a notação `crontab(5)`. O que o número entre parênteses indica?", [
  "*A seção do manual onde está a página",
  "A versão do programa",
  "A quantidade de opções",
  "O número da linha do arquivo",
], "`crontab(5)` é o formato do arquivo; `crontab(1)` é o comando. Acesse com `man 5 crontab`.");

Q("012.2", "Qual comando mostra a documentação do formato do arquivo `/etc/hosts`?", [
  "*`man 5 hosts`",
  "`man 1 hosts`",
  "`hosts --help`",
  "`cat /usr/share/hosts`",
], "Arquivos de configuração estão na seção 5.");

Q("012.2", "A seção **7** do manual contém:", [
  "*Assuntos diversos, como convenções, protocolos e visões gerais (ex.: `regex(7)`)",
  "Comandos de usuário",
  "Formatos de arquivos",
  "Jogos",
], "Exemplos: `man 7 regex`, `man 7 hier` (hierarquia do sistema de arquivos). Jogos ficam na seção 6.");

Q("012.2", "Qual página do manual descreve a hierarquia padrão de diretórios do Linux (como /etc, /usr, /var)?", [
  "*`man 7 hier`",
  "`man 5 passwd`",
  "`man 1 ls`",
  "`man 8 mount`",
], "`hier(7)` explica o propósito de cada diretório.");

Q("012.2", "Na SYNOPSIS de uma página de manual, o que normalmente indica um texto em **negrito**?", [
  "*Texto que deve ser digitado exatamente como aparece",
  "Um parâmetro que deve ser substituído por um valor",
  "Uma opção obsoleta",
  "Um comentário",
], "Negrito indica texto literal; texto sublinhado ou em itálico indica algo a ser substituído pelo valor apropriado.");

Q("012.2", "Qual opção mostra a **versão** instalada de muitos programas de linha de comando?", [
  "*`--version`",
  "`--help`",
  "`-h`",
  "`--man`",
], "Exemplo: `bash --version`, `tar --version`. Em alguns comandos também existe `-V` ou `-v`.");

Q("012.2", "Qual comando mostra a localização do binário e da página de manual de um comando?", [
  "*`whereis ls`",
  "`whatis ls`",
  "`help ls`",
  "`type -p man`",
], "Exemplo de saída: `ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz`.");

Q("012.2", "Por que `man cd` pode não exibir uma página de manual em algumas distribuições?", [
  "*Porque `cd` é um comando interno do shell, documentado no manual do bash e acessível com `help cd`",
  "Porque `cd` não existe no Linux",
  "Porque `cd` é um comando de root",
  "Porque o man só mostra comandos gráficos",
], "Builtins não são arquivos separados, então nem sempre têm página de manual própria.");

Q("012.2", "Você não lembra qual comando lista o conteúdo de diretórios. Qual comando ajuda a descobrir isso?", [
  "*`apropos directory` (ou `man -k directory`)",
  "`whatis`",
  "`man directory`",
  "`help`",
], "A busca por palavra-chave lista as páginas com descrições que mencionam o termo.");

Q("012.2", "Além da documentação instalada no sistema, quais são boas fontes de ajuda para usuários Linux? (Escolha duas.)", [
  "*Wikis e documentação oficial das distribuições",
  "*Fóruns e listas de discussão das comunidades",
  "Arquivos em `/dev/null`",
  "O arquivo `/etc/shadow`",
], "Comunidades de software livre mantêm documentação, fóruns, listas de e-mail e canais de chat.");

Q("012.2", "Qual comando abre o manual GNU detalhado das ferramentas básicas (ls, cp, mv etc.)?", [
  "*`info coreutils`",
  "`man coreutils --all`",
  "`help coreutils`",
  "`doc coreutils`",
], "O pacote coreutils contém as ferramentas básicas de arquivos e texto do GNU.");

Q("012.2", "Dentro do visualizador do `man`, após uma busca com `/termo`, qual tecla leva à próxima ocorrência?", [
  "*`n`",
  "`q`",
  "`b`",
  "`Tab`",
], "`n` (next) avança; `N` volta para a ocorrência anterior.");
