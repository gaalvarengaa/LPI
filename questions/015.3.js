// 015.3
Q("015.3", "Na permissão `-rwxr-x---`, como os caracteres após o primeiro estão divididos?", [
  "*Em três grupos de três: dono (rwx), grupo (r-x) e outros (---)",
  "Em dois grupos: leitura e escrita",
  "Em três grupos: root, usuário e convidado",
  "Cada letra é um usuário diferente",
], "O primeiro caractere é o tipo do arquivo; depois vêm as permissões de user (u), group (g) e others (o).");

Q("015.3", "O que significam `r`, `w` e `x` para um **arquivo**?", [
  "*Ler o conteúdo, alterar o conteúdo e executar o arquivo como programa",
  "Remover, gravar e exportar",
  "Renomear, escrever e excluir",
  "Ler, mover e copiar",
], "r = read, w = write, x = execute.");

Q("015.3", "Um arquivo tem `-rw-r--r--`, dono `ana` e grupo `devs`. O que um usuário que não é ana nem membro de devs pode fazer?", [
  "*Apenas ler o arquivo",
  "Ler e alterar",
  "Nada",
  "Executar",
], "A terceira trinca (`r--`) vale para os outros.");

Q("015.3", "Um script tem `-rwxr-x---`, dono `ana` e grupo `devs`. Quem pode executá-lo?", [
  "*A dona ana e os membros do grupo devs",
  "Apenas ana",
  "Todos os usuários",
  "Somente os outros",
], "Dono: rwx; grupo: r-x; outros: nenhuma permissão. (O root também pode.)");

Q("015.3", "Quais são os valores octais das permissões `r`, `w` e `x`?", [
  "*r = 4, w = 2, x = 1",
  "r = 1, w = 2, x = 4",
  "r = 3, w = 2, x = 1",
  "r = 4, w = 1, x = 2",
], "Somando os valores obtém-se cada dígito: rwx = 7, rw- = 6, r-x = 5, r-- = 4.");

Q("015.3", "Qual é a permissão simbólica equivalente a `755`?", [
  "*`rwxr-xr-x`",
  "`rwxrwxr-x`",
  "`rw-r--r--`",
  "`rwxr--r--`",
], "7 = rwx, 5 = r-x, 5 = r-x. Comum em scripts e diretórios.");

Q("015.3", "Qual é a permissão simbólica equivalente a `644`?", [
  "*`rw-r--r--`",
  "`rwxr--r--`",
  "`rw-rw-r--`",
  "`r--r--r--`",
], "6 = rw-, 4 = r--. Padrão comum para arquivos de texto.");

Q("015.3", "Qual é a permissão simbólica equivalente a `600`?", [
  "*`rw-------`",
  "`rwx------`",
  "`rw-r-----`",
  "`r--------`",
], "Somente o dono lê e escreve. Usado para arquivos privados, como chaves SSH.");

Q("015.3", "Qual é a permissão simbólica equivalente a `750`?", [
  "*`rwxr-x---`",
  "`rwxr-xr-x`",
  "`rwx-w----`",
  "`rw-r-x---`",
], "7 = rwx, 5 = r-x, 0 = ---.");

Q("015.3", "Qual é o valor octal de `rw-r-----`?", [
  "*640",
  "644",
  "604",
  "740",
], "rw- = 6, r-- = 4, --- = 0.");

Q("015.3", "Qual é a permissão simbólica equivalente a `754`?", [
  "*`rwxr-xr--`",
  "`rwxr--r-x`",
  "`rwxrwxr--`",
  "`rw-r-xr--`",
], "7 = rwx, 5 = r-x, 4 = r--.");

Q("015.3", "Qual é o valor octal de `rwx------`?", [
  "*700",
  "600",
  "007",
  "777",
], "Somente o dono tem todas as permissões. Comum para diretórios privados como `~/.ssh`.");

Q("015.3", "Por que `chmod 777` em arquivos e diretórios é considerado uma má prática?", [
  "*Porque qualquer usuário do sistema passa a poder ler, alterar e executar (ou apagar conteúdo de diretórios)",
  "Porque deixa o arquivo invisível",
  "Porque só o root pode usar o arquivo depois",
  "Porque apaga o conteúdo do arquivo",
], "Permissões devem ser as mínimas necessárias.");

Q("015.3", "Qual comando acrescenta a permissão de **execução** apenas para o dono do arquivo `deploy.sh`?", [
  "*`chmod u+x deploy.sh`",
  "`chmod o+x deploy.sh`",
  "`chmod +r deploy.sh`",
  "`chown u+x deploy.sh`",
], "u = user (dono), g = group, o = others, a = all.");

Q("015.3", "Qual comando remove a permissão de escrita do **grupo** em `relatorio.txt`?", [
  "*`chmod g-w relatorio.txt`",
  "`chmod -w relatorio.txt` (somente do grupo)",
  "`chmod o-w relatorio.txt`",
  "`chgrp -w relatorio.txt`",
], "`-` remove, `+` acrescenta e `=` define exatamente.");

Q("015.3", "Qual comando remove **todas** as permissões dos outros usuários em `salarios.ods`?", [
  "*`chmod o-rwx salarios.ods`",
  "`chmod o+rwx salarios.ods`",
  "`chmod a-rwx salarios.ods`",
  "`chmod u-rwx salarios.ods`",
], "`chmod o= salarios.ods` tem o mesmo efeito.");

Q("015.3", "Qual comando dá permissão de leitura a **todos** (dono, grupo e outros) em `aviso.txt`?", [
  "*`chmod a+r aviso.txt`",
  "`chmod u+r aviso.txt`",
  "`chmod o+r aviso.txt`",
  "`chmod r+a aviso.txt`",
], "`a` = all (ugo).");

Q("015.3", "O que faz `chmod u=rw,g=r,o= notas.txt`?", [
  "*Define exatamente `rw-r-----` (equivalente a 640)",
  "Acrescenta rw ao dono e r ao grupo, mantendo o resto",
  "Remove todas as permissões",
  "Gera erro de sintaxe",
], "O `=` substitui as permissões daquela classe; `o=` deixa os outros sem permissão.");

Q("015.3", "Quais comandos deixam `script.sh` com as permissões `rwxr-xr-x`? (Escolha duas.)", [
  "*`chmod 755 script.sh`",
  "*`chmod u=rwx,go=rx script.sh`",
  "`chmod 644 script.sh`",
  "`chmod a=rwx script.sh`",
  "`chmod 557 script.sh`",
], "Notações numérica e simbólica podem produzir o mesmo resultado.");

Q("015.3", "Qual opção do `chmod` altera as permissões de um diretório e de todo o seu conteúdo?", [
  "*`-R`",
  "`-r`",
  "`-a`",
  "`-d`",
], "Exemplo: `chmod -R g+w projeto/`.");

Q("015.3", "O que a permissão `r` (leitura) permite em um **diretório**?", [
  "*Listar os nomes dos arquivos contidos nele",
  "Ler o conteúdo de todos os arquivos dentro dele",
  "Entrar no diretório com cd",
  "Criar arquivos dentro dele",
], "Para ler o conteúdo de um arquivo, valem as permissões do próprio arquivo.");

Q("015.3", "O que a permissão `x` permite em um **diretório**?", [
  "*Entrar no diretório (cd) e acessar os arquivos dentro dele pelo nome",
  "Executar todos os arquivos do diretório",
  "Listar o conteúdo",
  "Apagar o diretório",
], "Sem `x` no diretório, não é possível acessar nada dentro dele, mesmo conhecendo os nomes.");

Q("015.3", "O que a permissão `w` permite em um **diretório** (junto com `x`)?", [
  "*Criar, apagar e renomear arquivos dentro dele",
  "Alterar o conteúdo dos arquivos existentes",
  "Mudar o dono do diretório",
  "Listar arquivos ocultos",
], "Alterar o conteúdo de um arquivo depende do `w` do próprio arquivo.");

Q("015.3", "Um usuário consegue apagar um arquivo sobre o qual ele **não** tem permissão de escrita?", [
  "*Sim, se tiver permissão de escrita e execução no diretório que contém o arquivo (e não houver sticky bit)",
  "Não, nunca",
  "Sim, sempre, sem nenhuma condição",
  "Somente se o arquivo estiver vazio",
], "Apagar é alterar o diretório (remover uma entrada), não o arquivo. O `rm` pede confirmação nesses casos.");

Q("015.3", "Um diretório tem permissão `r--` para você, sem `x`. O que acontece?", [
  "*Você consegue ver os nomes dos arquivos, mas não consegue entrar nem acessar os arquivos",
  "Você consegue entrar mas não listar",
  "Você tem acesso total",
  "Você não consegue nem ver os nomes",
], "Para usar um diretório normalmente são necessárias `r` e `x`.");

Q("015.3", "O arquivo `dados.txt` pertence à usuária `ana` e tem permissões `----rw-rw-`. A ana pode ler o arquivo?", [
  "*Não, pois como dona valem apenas as permissões do dono, que estão vazias",
  "Sim, pois ela também está nos \"outros\"",
  "Sim, pois a dona sempre pode ler",
  "Sim, se estiver no grupo",
], "O sistema verifica dono, depois grupo, depois outros, e aplica somente a primeira categoria que corresponder. (A ana pode, porém, mudar as permissões com chmod, pois é a dona.)");

Q("015.3", "O arquivo `plano.txt` tem `-rw-r-----`, dono `ana`, grupo `devs`. O usuário `bruno`, membro de `devs`, pode alterá-lo?", [
  "*Não, o grupo só tem leitura",
  "Sim, pois está no grupo",
  "Sim, pois todos podem escrever",
  "Não, e também não pode ler",
], "Grupo: `r--` = apenas leitura.");

Q("015.3", "O arquivo `plano.txt` tem `-rw-r-----`, dono `ana`, grupo `devs`. A usuária `carla`, que não está em `devs`, pode lê-lo?", [
  "*Não, os outros não têm nenhuma permissão",
  "Sim, a leitura é liberada a todos",
  "Sim, mas só a primeira linha",
  "Sim, se estiver no mesmo diretório",
], "Outros: `---`.");

Q("015.3", "Qual afirmação sobre o usuário root e as permissões de arquivos está correta?", [
  "*O root ignora as permissões de leitura e escrita e pode acessar qualquer arquivo",
  "O root também é bloqueado por permissões `---`",
  "O root só acessa arquivos com permissão 777",
  "O root não pode alterar permissões",
], "Para execução, o root precisa que pelo menos uma das classes tenha `x`.");

Q("015.3", "Quem pode alterar as permissões (chmod) de um arquivo?", [
  "*O dono do arquivo e o root",
  "Qualquer membro do grupo do arquivo",
  "Qualquer usuário com permissão de leitura",
  "Somente o root",
], "Mesmo sem nenhuma permissão de leitura, o dono pode usar chmod no próprio arquivo.");

Q("015.3", "Qual comando muda o dono de `site.conf` para o usuário `www-data`?", [
  "*`chown www-data site.conf`",
  "`chmod www-data site.conf`",
  "`chgrp www-data site.conf` apenas",
  "`useradd site.conf www-data`",
], "chown = change owner.");

Q("015.3", "Qual comando muda o dono para `ana` e o grupo para `devs` no arquivo `projeto.md`?", [
  "*`chown ana:devs projeto.md`",
  "`chown devs:ana projeto.md`",
  "`chmod ana:devs projeto.md`",
  "`chown ana devs projeto.md`",
], "Formato `dono:grupo`. A forma antiga `ana.devs` ainda é aceita, mas não é recomendada.");

Q("015.3", "Qual comando muda **apenas o grupo** de `relatorio.pdf` para `financeiro`?", [
  "*`chown :financeiro relatorio.pdf`",
  "`chown financeiro relatorio.pdf`",
  "`chmod g=financeiro relatorio.pdf`",
  "`chown financeiro: relatorio.pdf`",
], "`chgrp financeiro relatorio.pdf` faz o mesmo. `financeiro:` mudaria o dono.");

Q("015.3", "Qual comando muda o grupo de um arquivo, sem alterar o dono?", [
  "*`chgrp`",
  "`chmod`",
  "`groupadd`",
  "`newgrp`",
], "Exemplo: `chgrp devs codigo.py`.");

Q("015.3", "Qual comando muda o dono e o grupo de `/var/www/site` e de todo o seu conteúdo?", [
  "*`chown -R www-data:www-data /var/www/site`",
  "`chown www-data:www-data /var/www/site`",
  "`chmod -R www-data /var/www/site`",
  "`chown -r www-data /var/www/site`",
], "`-R` (maiúsculo) é recursivo.");

Q("015.3", "Quem pode transferir a posse (dono) de um arquivo para outro usuário com `chown`?", [
  "*Apenas o root",
  "O dono atual do arquivo",
  "Qualquer usuário",
  "Os membros do grupo do arquivo",
], "Isso impede que usuários \"deem\" arquivos a outros para burlar cotas, por exemplo.");

Q("015.3", "Na saída `-rw-r--r-- 1 ana devs 2048 mar 10 09:15 notas.txt`, quais informações são `ana`, `devs` e `2048`?", [
  "*Dono, grupo e tamanho em bytes",
  "Grupo, dono e permissões",
  "Usuário logado, máquina e PID",
  "Dono, grupo e número de linhas",
], "O número `1` após as permissões é a contagem de links físicos.");

Q("015.3", "Qual comando mostra as permissões e o dono do **próprio diretório** `/srv/dados`, e não do seu conteúdo?", [
  "*`ls -ld /srv/dados`",
  "`ls -l /srv/dados`",
  "`ls -la /srv/dados`",
  "`ls -R /srv/dados`",
], "`-d` lista o diretório como uma entrada.");

Q("015.3", "Qual comando mostra, em formato longo, inclusive os arquivos ocultos do diretório atual?", [
  "*`ls -la`",
  "`ls -l`",
  "`ls -ld`",
  "`ls -h`",
], "`-a` inclui nomes iniciados por ponto.");

Q("015.3", "Para executar diretamente um script de shell (`./script.sh`), quais permissões o usuário precisa ter no arquivo?", [
  "*Leitura e execução (`r` e `x`)",
  "Somente execução (`x`)",
  "Somente escrita (`w`)",
  "Nenhuma",
], "O interpretador (bash) precisa ler o conteúdo do script. Programas binários precisam apenas de `x`.");

Q("015.3", "Com o umask padrão `022`, quais permissões recebem normalmente os novos arquivos e diretórios?", [
  "*Arquivos `644` (rw-r--r--) e diretórios `755` (rwxr-xr-x)",
  "Arquivos `777` e diretórios `777`",
  "Arquivos `600` e diretórios `700`",
  "Arquivos `755` e diretórios `644`",
], "O umask remove permissões do padrão (666 para arquivos, 777 para diretórios).");

Q("015.3", "O comando `passwd` aparece como `-rwsr-xr-x root root`. O que significa o `s` no lugar do `x` do dono?", [
  "*O bit SUID: o programa é executado com os privilégios do dono (root), permitindo alterar `/etc/shadow`",
  "Que o arquivo é um link simbólico",
  "Que o arquivo é um socket",
  "Que o arquivo está compactado",
], "O SUID deve ser usado com muito cuidado, pois concede privilégios elevados.");

Q("015.3", "O que faz `chmod -x arquivo` (sem indicar u, g ou o)?", [
  "*Remove a permissão de execução de todas as classes (dono, grupo e outros)",
  "Remove somente do dono",
  "Remove somente dos outros",
  "Gera erro",
], "Sem classe, equivale a `a` (respeitando o umask ao acrescentar permissões).");

F("015.3", "Digite o comando completo que acrescenta permissão de execução somente ao dono do arquivo `script.sh`.", [
  "chmod u+x script.sh",
], "u = dono.");

F("015.3", "Digite o valor octal correspondente a `rwxr-x---`.", [
  "750", "0750",
], "7 (rwx) 5 (r-x) 0 (---).");

F("015.3", "Digite o valor octal correspondente a `rw-r--r--`.", [
  "644", "0644",
], "6 (rw-) 4 (r--) 4 (r--).");

F("015.3", "Digite o comando completo que define o dono `ana` e o grupo `devs` para o arquivo `app.py`.", [
  "chown ana:devs app.py", "chown ana.devs app.py",
], "Formato `dono:grupo`.");

F("015.3", "Digite a representação simbólica (9 caracteres) da permissão octal `640`.", [
  "rw-r-----",
], "6 = rw-, 4 = r--, 0 = ---.");

F("015.3", "Digite o comando completo que deixa a chave `id_ed25519` legível e gravável apenas pelo dono (modo octal).", [
  "chmod 600 id_ed25519", "chmod 0600 id_ed25519",
], "Chaves privadas devem ter 600.");

F("015.3", "Digite o comando completo que muda somente o grupo de `dados.csv` para `analistas` usando chgrp.", [
  "chgrp analistas dados.csv",
], "Equivale a `chown :analistas dados.csv`.");

F("015.3", "Digite a representação simbólica (9 caracteres) da permissão octal `755`.", [
  "rwxr-xr-x",
], "Típica de programas e diretórios públicos.");
