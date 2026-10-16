// 012.3
Q("012.3", "Como um arquivo ou diretório se torna **oculto** no Linux?", [
  "*Quando seu nome começa com um ponto (`.`)",
  "Quando recebe a permissão `h`",
  "Quando é colocado em `/hidden`",
  "Quando seu nome termina com `~`",
], "Não existe atributo de \"oculto\": o `ls` simplesmente não mostra nomes iniciados por ponto, a menos que se use `-a`.");

Q("012.3", "Qual comando lista **todos** os arquivos de um diretório, incluindo os ocultos?", [
  "*`ls -a`",
  "`ls -l`",
  "`ls -h`",
  "`ls -R`",
], "`-a` (all) mostra também os nomes iniciados por ponto, incluindo `.` e `..`.");

Q("012.3", "Qual é a diferença entre `ls -a` e `ls -A`?", [
  "*`ls -A` mostra os ocultos mas omite as entradas `.` e `..`",
  "`ls -A` mostra apenas os arquivos ocultos",
  "`ls -A` lista em ordem alfabética reversa",
  "Não há diferença",
], "`-A` (almost all) é útil quando `.` e `..` não interessam.");

Q("012.3", "Qual opção do `ls` exibe o formato longo, com permissões, dono, grupo, tamanho e data?", [
  "*`-l`",
  "`-a`",
  "`-R`",
  "`-1`",
], "`ls -l` mostra uma linha detalhada por arquivo.");

Q("012.3", "Qual opção do `ls` lista o conteúdo de diretórios **recursivamente**, incluindo todos os subdiretórios?", [
  "*`-R`",
  "`-r`",
  "`-d`",
  "`-a`",
], "Atenção: `-R` (maiúsculo) é recursivo; `-r` (minúsculo) inverte a ordem.");

Q("012.3", "Qual comando mostra os tamanhos dos arquivos em formato legível (K, M, G)?", [
  "*`ls -lh`",
  "`ls -la`",
  "`ls -lR`",
  "`ls -ld`",
], "`-h` (human-readable) só tem efeito junto com uma listagem que mostra tamanhos, como `-l`.");

Q("012.3", "Qual comando lista os arquivos ordenados pela data de modificação, do mais recente para o mais antigo?", [
  "*`ls -lt`",
  "`ls -lS`",
  "`ls -lr`",
  "`ls -lR`",
], "`-t` ordena por tempo de modificação. Combine com `-r` para inverter (mais antigo primeiro).");

Q("012.3", "O que faz a opção `-r` (minúscula) do `ls`?", [
  "*Inverte a ordem da listagem",
  "Lista recursivamente",
  "Remove arquivos",
  "Mostra apenas diretórios",
], "`ls -ltr` mostra os arquivos mais recentes no final, muito útil em diretórios de logs.");

Q("012.3", "Qual opção do `ls` ordena os arquivos por **tamanho**, do maior para o menor?", [
  "*`-S`",
  "`-s`",
  "`-t`",
  "`-z`",
], "`ls -lS` lista os maiores primeiro.");

Q("012.3", "Qual comando mostra as informações do **próprio diretório** `/etc`, e não do seu conteúdo?", [
  "*`ls -ld /etc`",
  "`ls -l /etc`",
  "`ls -R /etc`",
  "`ls -a /etc`",
], "`-d` trata diretórios como entradas comuns, sem listar o que há dentro.");

Q("012.3", "Qual opção do `ls` lista um arquivo por linha, sem detalhes?", [
  "*`-1`",
  "`-l`",
  "`-i`",
  "`-o`",
], "`ls -1` é útil para enviar nomes a outros comandos.");

Q("012.3", "O que caracteriza um **caminho absoluto**?", [
  "*Começa com `/`, partindo da raiz do sistema de arquivos",
  "Começa com o nome do diretório atual",
  "Sempre termina com `/`",
  "Contém obrigatoriamente `..`",
], "Exemplo: `/home/ana/docs/relatorio.txt` funciona de qualquer diretório.");

Q("012.3", "O que é um **caminho relativo**?", [
  "*Um caminho interpretado a partir do diretório de trabalho atual",
  "Um caminho que sempre começa com `/`",
  "Um caminho que aponta para outro computador",
  "Um link simbólico",
], "Exemplo: estando em `/home/ana`, o caminho `docs/relatorio.txt` aponta para `/home/ana/docs/relatorio.txt`.");

Q("012.3", "Quais destes são caminhos **absolutos**? (Escolha duas.)", [
  "*`/etc/hosts`",
  "*`/home/ana/../joao`",
  "`docs/notas.txt`",
  "`../imagens`",
  "`./script.sh`",
], "Qualquer caminho iniciado por `/` é absoluto, mesmo contendo `..`.");

Q("012.3", "O que representam `.` e `..` em um caminho?", [
  "*`.` é o diretório atual e `..` é o diretório pai",
  "`.` é a raiz e `..` é o diretório pessoal",
  "`.` é um arquivo oculto e `..` é um diretório oculto",
  "`.` é o diretório pai e `..` é o diretório avô",
], "Todo diretório contém essas duas entradas especiais.");

Q("012.3", "O que acontece ao executar `cd` sem nenhum argumento?", [
  "*O usuário vai para o seu diretório pessoal (home)",
  "O usuário vai para `/`",
  "Nada acontece",
  "Aparece uma mensagem de erro",
], "`cd` sozinho equivale a `cd ~` ou `cd $HOME`.");

Q("012.3", "O que faz `cd -`?", [
  "*Volta para o diretório anterior",
  "Vai para o diretório pai",
  "Vai para a raiz",
  "Apaga o diretório atual",
], "`cd -` alterna entre o diretório atual e o anterior (usando a variável OLDPWD).");

Q("012.3", "Você está em `/var/log/apt`. Qual comando leva você para `/var/log`?", [
  "*`cd ..`",
  "`cd .`",
  "`cd /log`",
  "`cd ~`",
], "`..` é o diretório pai.");

Q("012.3", "Para qual diretório `cd ~maria` leva, considerando a configuração padrão?", [
  "*Para o diretório pessoal da usuária maria, normalmente `/home/maria`",
  "Para `/maria`",
  "Para um diretório chamado `~maria` dentro do diretório atual",
  "Para `/root/maria`",
], "`~usuario` expande para o diretório pessoal desse usuário.");

Q("012.3", "Qual comando mostra o caminho absoluto do diretório de trabalho atual?", [
  "*`pwd`",
  "`cd`",
  "`ls -d`",
  "`whoami`",
], "`pwd` = print working directory.");

Q("012.3", "Você está em `/home/ana/docs` e executa `cd ../fotos`. Em qual diretório você fica?", [
  "*`/home/ana/fotos`",
  "`/home/fotos`",
  "`/home/ana/docs/fotos`",
  "`/fotos`",
], "`..` sobe para `/home/ana` e então entra em `fotos`.");

Q("012.3", "Você está em `/usr/share/doc` e executa `cd ../..`. Em qual diretório você fica?", [
  "*`/usr`",
  "`/usr/share`",
  "`/`",
  "`/doc`",
], "Cada `..` sobe um nível: `/usr/share` e depois `/usr`.");

Q("012.3", "Você está em `/home/ana` e executa `cd ./projetos/../musicas`. Onde você fica?", [
  "*`/home/ana/musicas`",
  "`/home/ana/projetos/musicas`",
  "`/home/musicas`",
  "`/musicas`",
], "`./projetos` entra em projetos, `..` volta para `/home/ana` e então entra em `musicas`.");

Q("012.3", "O que é o diretório `/`?", [
  "*A raiz de toda a árvore de diretórios do sistema",
  "O diretório pessoal do root",
  "O diretório de arquivos temporários",
  "O diretório atual",
], "No Linux há uma única árvore iniciada em `/`. Discos e partições são montados em diretórios dessa árvore, e não em letras como `C:`.");

Q("012.3", "Onde ficam, normalmente, os diretórios pessoais dos usuários comuns?", [
  "*Em `/home`",
  "Em `/root`",
  "Em `/usr`",
  "Em `/etc`",
], "Exemplo: o usuário `joao` tem `/home/joao`.");

Q("012.3", "Qual é o diretório pessoal do usuário **root**?", [
  "*`/root`",
  "`/home/root`",
  "`/`",
  "`/etc/root`",
], "O root tem diretório pessoal fora de `/home`, para que esteja disponível mesmo se `/home` estiver em outra partição que não montou.");

Q("012.3", "No shell, o que representa o caractere `~` sozinho em um caminho?", [
  "*O diretório pessoal do usuário atual",
  "O diretório raiz",
  "O diretório anterior",
  "Um arquivo de backup",
], "`~/docs` equivale a `$HOME/docs`.");

Q("012.3", "Arquivos como `~/.bashrc` e `~/.profile` são exemplos de:", [
  "*Arquivos ocultos de configuração no diretório pessoal",
  "Arquivos executáveis do sistema",
  "Arquivos temporários apagados no boot",
  "Dispositivos de hardware",
], "Muitos programas guardam configurações do usuário em arquivos e diretórios ocultos dentro do home, como `~/.config/`.");

Q("012.3", "Como criar um arquivo vazio e **oculto** chamado `segredo` no diretório atual?", [
  "*`touch .segredo`",
  "`touch -h segredo`",
  "`hide segredo`",
  "`touch segredo.hidden`",
], "Basta o nome começar com ponto.");

Q("012.3", "Qual comando procura, em `/etc` e seus subdiretórios, todos os arquivos terminados em `.conf`?", [
  "*`find /etc -name \"*.conf\"`",
  "`find *.conf /etc`",
  "`ls /etc *.conf`",
  "`grep /etc .conf`",
], "Sintaxe: `find <onde> <critérios>`. O find é recursivo por padrão.");

Q("012.3", "Por que se deve colocar o padrão entre aspas em `find . -name \"*.txt\"`?", [
  "*Para impedir que o shell expanda o `*` antes de o find recebê-lo",
  "Porque o find só aceita texto entre aspas",
  "Para tornar a busca insensível a maiúsculas",
  "Para buscar somente em arquivos ocultos",
], "Sem aspas, se houver `.txt` no diretório atual, o shell substitui o padrão pelos nomes encontrados e a busca fica errada.");

Q("012.3", "Qual opção do `find` busca pelo nome **ignorando** maiúsculas e minúsculas?", [
  "*`-iname`",
  "`-name`",
  "`-type`",
  "`-ignore`",
], "`find . -iname \"foto*\"` encontra `Foto1.jpg` e `FOTO2.png`.");

Q("012.3", "Qual comando encontra apenas **diretórios** chamados `backup` dentro de `/srv`?", [
  "*`find /srv -type d -name backup`",
  "`find /srv -type f -name backup`",
  "`find /srv -dir backup`",
  "`ls -d /srv/backup`",
], "`-type d` = diretório; `-type f` = arquivo comum; `-type l` = link simbólico.");

Q("012.3", "O que faz `find . -name \"relatorio*\"`?", [
  "*Procura, no diretório atual e em todos os subdiretórios, nomes que começam com `relatorio`",
  "Procura apenas no diretório atual, sem entrar em subdiretórios",
  "Procura dentro do conteúdo dos arquivos a palavra relatorio",
  "Cria arquivos chamados relatorio",
], "O find desce recursivamente a partir do ponto indicado.");

Q("012.3", "Ao executar `find / -name passwd` como usuário comum, aparecem muitas mensagens \"Permission denied\". Como ocultá-las?", [
  "*`find / -name passwd 2>/dev/null`",
  "`find / -name passwd >/dev/null`",
  "`find / -name passwd -quiet`",
  "`find / -name passwd | less`",
], "Mensagens de erro vão para a saída de erro (descritor 2). Redirecioná-la para `/dev/null` as descarta.");

Q("012.3", "Qual comando encontra arquivos maiores que 100 MB em `/home`?", [
  "*`find /home -size +100M`",
  "`find /home -name 100M`",
  "`ls -S /home 100M`",
  "`find /home -big 100`",
], "`-size +N` significa maior que N; `-size -N` menor que N.");

Q("012.3", "Qual comando encontra arquivos em `/var/log` modificados nos últimos 7 dias?", [
  "*`find /var/log -mtime -7`",
  "`find /var/log -mtime +7`",
  "`find /var/log -days 7`",
  "`ls -t7 /var/log`",
], "`-mtime -7` = modificado há menos de 7 dias; `+7` = há mais de 7 dias.");

Q("012.3", "Na saída de `ls -l`, a linha começa com `drwxr-xr-x`. O que o primeiro caractere `d` indica?", [
  "*Que a entrada é um diretório",
  "Que o arquivo foi apagado",
  "Que é um arquivo de dispositivo",
  "Que o dono é o root",
], "`-` = arquivo comum, `d` = diretório, `l` = link simbólico, `b`/`c` = dispositivos.");

Q("012.3", "No Linux, as extensões de arquivo (como `.txt` ou `.sh`) são:", [
  "*Apenas parte do nome; o sistema não depende delas para saber o tipo do arquivo",
  "Obrigatórias para todo arquivo",
  "O que determina se um arquivo pode ser executado",
  "Proibidas em nomes de diretórios",
], "O que torna um arquivo executável é a permissão `x`. O comando `file` identifica o tipo pelo conteúdo.");

Q("012.3", "Qual comando identifica o tipo de um arquivo analisando seu conteúdo?", [
  "*`file`",
  "`type`",
  "`ls -t`",
  "`find -type`",
], "Exemplo: `file foto` → `foto: JPEG image data`.");

Q("012.3", "Qual caractere **não** pode fazer parte do nome de um arquivo no Linux?", [
  "*`/`",
  "espaço",
  "`-`",
  "`.`",
], "A barra separa diretórios no caminho. Espaços são permitidos, mas exigem aspas ou escape no shell.");

Q("012.3", "Como listar o conteúdo de um diretório chamado `Meus Documentos`?", [
  "*`ls \"Meus Documentos\"`",
  "`ls Meus Documentos`",
  "`ls Meus-Documentos`",
  "`ls (Meus Documentos)`",
], "Sem aspas, o shell passaria dois argumentos: `Meus` e `Documentos`. Também funciona `ls Meus\\ Documentos`.");

Q("012.3", "Qual comando lista, em formato longo, inclusive os arquivos ocultos do diretório pessoal?", [
  "*`ls -la ~`",
  "`ls -l /`",
  "`ls -R /home`",
  "`ls -d ~`",
], "`-l` formato longo, `-a` todos, `~` diretório pessoal.");

Q("012.3", "Em `/home/ana`, existem `docs/` e `docs/2024/notas.txt`. Qual comando mostra `notas.txt` sem sair de `/home/ana`?", [
  "*`ls -R docs`",
  "`ls docs`",
  "`ls -d docs`",
  "`ls -a`",
], "A listagem recursiva mostra também o conteúdo de `docs/2024`.");

Q("012.3", "Qual afirmação sobre diretórios no Linux está correta?", [
  "*Um diretório é um tipo especial de arquivo que contém a lista de nomes de seus arquivos e subdiretórios",
  "Diretórios não têm permissões",
  "Diretórios não podem conter arquivos ocultos",
  "Cada disco tem sua própria árvore separada, como C: e D:",
], "No Linux \"tudo é arquivo\": diretórios, dispositivos e links são tipos de arquivos.");

F("012.3", "Digite o comando que mostra o diretório de trabalho atual.", [
  "pwd",
], "`pwd` = print working directory.");

F("012.3", "Digite o comando completo para subir ao diretório pai.", [
  "cd ..", "cd ../",
], "`..` é o diretório pai.");

F("012.3", "Digite o comando completo para voltar ao diretório em que você estava anteriormente.", [
  "cd -",
], "`cd -` usa a variável OLDPWD.");

F("012.3", "Digite o caminho absoluto do diretório pessoal do usuário root.", [
  "/root", "/root/",
], "O root não usa `/home/root`.");

F("012.3", "Digite o comando com a opção que lista também os arquivos ocultos do diretório atual (sem `.` e `..`).", [
  "ls -A", "ls --almost-all",
], "`ls -a` incluiria também `.` e `..`.");

F("012.3", "Qual opção do `find` faz a busca pelo nome ignorando maiúsculas/minúsculas? (só a opção)", [
  "-iname",
], "Exemplo: `find ~ -iname \"*.JPG\"`.");

F("012.3", "Digite o comando completo que lista o diretório atual de forma recursiva.", [
  "ls -R", "ls -R .", "ls --recursive",
], "`ls -R` desce por todos os subdiretórios.");

Q("012.3", "Estando em `/tmp`, qual comando abre `/home/ana/docs` usando o atalho para o diretório pessoal (supondo que você seja a usuária ana)?", [
  "*`cd ~/docs`",
  "`cd /docs`",
  "`cd ./docs`",
  "`cd ../docs`",
], "`~/docs` expande para `/home/ana/docs`, independentemente de onde você esteja.");
