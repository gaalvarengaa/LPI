// 015.2
Q("015.2", "Qual arquivo contém a lista de contas de usuário do sistema, com UID, GID, diretório pessoal e shell?", [
  "*`/etc/passwd`",
  "`/etc/shadow`",
  "`/etc/group`",
  "`/etc/users`",
], "Apesar do nome, as senhas não ficam mais nesse arquivo; elas ficam em `/etc/shadow`.");

Q("015.2", "Qual é a ordem dos 7 campos de uma linha de `/etc/passwd`?", [
  "*usuário : senha (x) : UID : GID : comentário (GECOS) : diretório pessoal : shell",
  "usuário : UID : GID : senha : shell : diretório pessoal : comentário",
  "UID : usuário : senha : grupo : shell : home : GECOS",
  "usuário : senha : grupo : home : UID : GID : shell",
], "Os campos são separados por dois-pontos.");

Q("015.2", "Considere a linha `ana:x:1001:1001:Ana Souza:/home/ana:/bin/bash`. Qual é o UID da usuária?", [
  "*1001",
  "0",
  "1000",
  "x",
], "O terceiro campo é o UID e o quarto é o GID do grupo primário.");

Q("015.2", "Considere a linha `ana:x:1001:1001:Ana Souza:/home/ana:/bin/bash`. Qual é o shell de login?", [
  "*`/bin/bash`",
  "`/home/ana`",
  "`Ana Souza`",
  "`x`",
], "O último campo define o shell executado no login.");

Q("015.2", "Considere a linha `ana:x:1001:1001:Ana Souza:/home/ana:/bin/bash`. O que é `Ana Souza`?", [
  "*O campo de comentário (GECOS), geralmente com o nome completo",
  "A senha",
  "O nome do grupo",
  "O diretório pessoal",
], "O campo GECOS pode conter nome, telefone, sala etc.");

Q("015.2", "O que significa o `x` no segundo campo de `/etc/passwd`?", [
  "*Que a senha (hash) está armazenada em `/etc/shadow`",
  "Que o usuário não tem senha",
  "Que a conta está bloqueada",
  "Que o usuário é administrador",
], "O `/etc/passwd` precisa ser legível por todos; por isso os hashes ficam no shadow, protegido.");

Q("015.2", "Por que os hashes de senha ficam em `/etc/shadow` e não em `/etc/passwd`?", [
  "*Porque `/etc/passwd` precisa ser legível por todos os usuários, enquanto `/etc/shadow` é legível só pelo root",
  "Porque o shadow é criptografado com a senha do root",
  "Porque o passwd não suporta textos longos",
  "Por nenhum motivo de segurança",
], "Com os hashes inacessíveis, fica mais difícil tentar quebrá-los por força bruta.");

Q("015.2", "Que informações o `/etc/shadow` armazena? (Escolha duas.)", [
  "*O hash da senha de cada usuário",
  "*Dados de validade da senha, como data da última troca e prazo de expiração",
  "O diretório pessoal",
  "O shell de login",
  "Os membros de cada grupo",
], "Diretório pessoal e shell ficam em `/etc/passwd`; membros de grupos em `/etc/group`.");

Q("015.2", "Em `/etc/shadow`, o campo de senha de uma conta começa com `!`. O que isso indica?", [
  "*Que a conta está bloqueada para login por senha",
  "Que a senha é muito forte",
  "Que o usuário é root",
  "Que a senha está em texto puro",
], "`passwd -l usuario` acrescenta `!` ao hash. Contas de sistema costumam ter `*` ou `!`.");

Q("015.2", "No `/etc/shadow`, um hash começando com `$6$` ou `$y$` indica:", [
  "*O algoritmo de hash usado (SHA-512 ou yescrypt)",
  "O UID do usuário",
  "Que a senha tem 6 caracteres",
  "Que a conta expira em 6 dias",
], "O prefixo identifica o algoritmo; distribuições atuais usam SHA-512 ou yescrypt.");

Q("015.2", "Qual arquivo define os grupos do sistema e seus membros?", [
  "*`/etc/group`",
  "`/etc/passwd`",
  "`/etc/shadow`",
  "`/etc/members`",
], "Formato: `nome:senha:GID:lista,de,membros`.");

Q("015.2", "Considere a linha `devs:x:1005:ana,bruno` em `/etc/group`. Qual afirmação está correta?", [
  "*O grupo devs tem GID 1005 e ana e bruno são membros (grupo secundário)",
  "ana é dona do grupo e bruno é convidado",
  "O UID de ana é 1005",
  "O grupo devs não tem membros",
], "O último campo lista os membros adicionais (supplementary).");

Q("015.2", "Onde é definido o **grupo primário** de um usuário?", [
  "*No quarto campo (GID) da linha do usuário em `/etc/passwd`",
  "No último campo de `/etc/group`",
  "Em `/etc/shadow`",
  "Em `/etc/skel`",
], "Novos arquivos criados pelo usuário recebem por padrão o grupo primário.");

Q("015.2", "Qual é a diferença entre grupo **primário** e grupos **secundários** (suplementares)?", [
  "*O primário é o grupo padrão do usuário, atribuído a novos arquivos; os secundários dão acesso adicional a recursos desses grupos",
  "O primário é sempre o root",
  "O usuário só pode ter grupos secundários",
  "Não há diferença",
], "Um usuário tem um único grupo primário e pode ter vários secundários.");

Q("015.2", "Ao criar o usuário `carlos` com `useradd`, na maioria das distribuições também é criado:", [
  "*Um grupo chamado `carlos`, que se torna seu grupo primário",
  "Um grupo chamado `users` obrigatoriamente",
  "Nenhum grupo",
  "Um grupo chamado `root`",
], "Esse esquema é chamado de User Private Group.");

Q("015.2", "Para que serve o diretório `/etc/skel`?", [
  "*Contém arquivos modelo (como `.bashrc` e `.profile`) copiados para o diretório pessoal de novos usuários",
  "Guarda os diretórios de usuários excluídos",
  "Contém as chaves SSH do servidor",
  "Armazena os hashes de senha",
], "Ao criar a conta com `useradd -m`, o conteúdo de `/etc/skel` é copiado para o novo home.");

Q("015.2", "O administrador quer que todo novo usuário receba um arquivo `LEIA-ME.txt` no diretório pessoal. Onde colocar esse arquivo?", [
  "*Em `/etc/skel/`",
  "Em `/home/`",
  "Em `/etc/passwd`",
  "Em `/tmp/`",
], "Usuários já existentes não são afetados; só os criados depois.");

Q("015.2", "Qual comando mostra o UID, o GID e os grupos do usuário atual?", [
  "*`id`",
  "`whoami`",
  "`w`",
  "`last`",
], "Exemplo: `uid=1001(ana) gid=1001(ana) groups=1001(ana),27(sudo)`.");

Q("015.2", "Qual comando mostra o UID e os grupos do usuário `bruno`?", [
  "*`id bruno`",
  "`whoami bruno`",
  "`passwd bruno`",
  "`w bruno` apenas",
], "`id` aceita um nome de usuário como argumento.");

Q("015.2", "Qual comando lista apenas os nomes dos grupos dos quais o usuário atual participa?", [
  "*`groups`",
  "`groupadd`",
  "`id -u`",
  "`who`",
], "`groups ana` mostra os grupos da ana.");

Q("015.2", "Qual comando mostra quem está logado no sistema e o que cada usuário está fazendo?", [
  "*`w`",
  "`id`",
  "`last`",
  "`passwd`",
], "O `w` também mostra o uptime e o load average no cabeçalho. `who` mostra uma lista mais simples.");

Q("015.2", "Qual comando mostra o histórico de logins (e reinicializações) a partir do registro wtmp?", [
  "*`last`",
  "`w`",
  "`who`",
  "`history`",
], "`last` lê o arquivo de registro de logins; `history` mostra comandos do shell.");

Q("015.2", "Em distribuições mais recentes que trocaram o arquivo `/var/log/wtmp` por um banco de dados (para resolver o problema do ano 2038), qual comando mostra o histórico de logins?", [
  "*`wtmpdb last`",
  "`journalctl last`",
  "`sqlite last`",
  "`lastdb show`",
], "O wtmpdb armazena os registros de login em um banco SQLite. Em muitos sistemas, `last` passa a ser fornecido por ele.");

Q("015.2", "Qual comando mostra as reinicializações registradas do sistema?", [
  "*`last reboot`",
  "`w reboot`",
  "`id reboot`",
  "`uptime -r`",
], "O pseudo-usuário `reboot` é registrado a cada boot.");

Q("015.2", "Qual comando cria um novo usuário (comando de baixo nível presente em todas as distribuições)?", [
  "*`useradd`",
  "`groupadd`",
  "`passwd -n`",
  "`mkuser`",
], "No Debian/Ubuntu existe também o `adduser`, um script interativo mais amigável.");

Q("015.2", "Qual comando cria o usuário `joao` **com** diretório pessoal?", [
  "*`useradd -m joao`",
  "`useradd -h joao`",
  "`useradd joao /home`",
  "`mkdir /home/joao`",
], "`-m` cria o home e copia o conteúdo de `/etc/skel`. Em algumas distribuições isso já é o padrão.");

Q("015.2", "Qual comando cria a usuária `maria` com diretório pessoal e shell `/bin/bash`?", [
  "*`useradd -m -s /bin/bash maria`",
  "`useradd -m -b /bin/bash maria`",
  "`useradd -shell bash maria`",
  "`useradd maria -bash`",
], "`-s` define o shell de login.");

Q("015.2", "Qual comando cria o usuário `pedro` já incluído nos grupos secundários `devs` e `docker`?", [
  "*`useradd -m -G devs,docker pedro`",
  "`useradd -m -g devs docker pedro`",
  "`useradd -m pedro devs docker`",
  "`groupadd pedro devs docker`",
], "`-G` (maiúsculo) define grupos secundários, separados por vírgula; `-g` define o grupo primário.");

Q("015.2", "Qual opção do `useradd` define o UID do novo usuário?", [
  "*`-u`",
  "`-g`",
  "`-i`",
  "`-n`",
], "Exemplo: `useradd -u 1500 -m ana`.");

Q("015.2", "Qual opção do `useradd` define o comentário (nome completo) do usuário?", [
  "*`-c`",
  "`-n`",
  "`-f`",
  "`-x`",
], "Exemplo: `useradd -m -c \"Ana Souza\" ana`.");

Q("015.2", "Após `useradd -m lucas`, o usuário ainda não consegue fazer login com senha. Por quê?", [
  "*Porque nenhuma senha foi definida; é preciso executar `passwd lucas`",
  "Porque o home não foi criado",
  "Porque o usuário precisa reiniciar o computador",
  "Porque falta adicioná-lo ao grupo root",
], "Sem senha definida, a conta fica bloqueada para login por senha.");

Q("015.2", "O que faz o comando `passwd` executado por um usuário comum, sem argumentos?", [
  "*Altera a senha do próprio usuário, pedindo a senha atual",
  "Mostra o arquivo /etc/passwd",
  "Altera a senha do root",
  "Lista todos os usuários",
], "Usuários comuns só podem alterar a própria senha.");

Q("015.2", "Qual comando o root usa para definir a senha da usuária `ana`?", [
  "*`passwd ana`",
  "`useradd -p ana`",
  "`id ana`",
  "`chpass root ana`",
], "O root não precisa saber a senha atual do usuário.");

Q("015.2", "Uma usuária comum executa `passwd bruno`. O que acontece?", [
  "*O comando é negado, pois apenas o root pode alterar a senha de outros usuários",
  "A senha do bruno é alterada",
  "A senha da usuária é alterada para bruno",
  "O bruno é removido",
], "Esse controle protege as contas dos demais usuários.");

Q("015.2", "Qual comando bloqueia a senha da conta `estagiario`, impedindo login por senha?", [
  "*`passwd -l estagiario`",
  "`passwd -d estagiario`",
  "`userdel estagiario`",
  "`passwd -u estagiario`",
], "`-l` bloqueia (lock); `-u` desbloqueia (unlock).");

Q("015.2", "Qual comando cria o grupo `financeiro`?", [
  "*`groupadd financeiro`",
  "`useradd -g financeiro`",
  "`addgroup -u financeiro` obrigatoriamente",
  "`mkdir /etc/group/financeiro`",
], "O novo grupo é acrescentado a `/etc/group`.");

Q("015.2", "Qual comando cria o grupo `suporte` com o GID 2000?", [
  "*`groupadd -g 2000 suporte`",
  "`groupadd -u 2000 suporte`",
  "`groupadd suporte 2000`",
  "`groupadd -G 2000 suporte`",
], "`-g` define o GID.");

Q("015.2", "Qual comando adiciona o usuário existente `ana` ao grupo secundário `devs`, **mantendo** os grupos atuais?", [
  "*`usermod -aG devs ana`",
  "`usermod -G devs ana`",
  "`groupadd ana devs`",
  "`useradd -G devs ana`",
], "Sem `-a` (append), o `-G` substituiria a lista de grupos secundários pela nova.");

Q("015.2", "A usuária foi adicionada a um novo grupo, mas `id` ainda não mostra esse grupo na sessão atual. Por quê?", [
  "*Os grupos são carregados no login; é preciso sair e entrar novamente (ou abrir nova sessão)",
  "O grupo foi criado com erro",
  "É necessário reiniciar o computador obrigatoriamente",
  "O comando id não mostra grupos secundários",
], "Os processos já em execução mantêm a lista de grupos do momento do login.");

Q("015.2", "Qual comando remove o usuário `temp` e também o seu diretório pessoal?", [
  "*`userdel -r temp`",
  "`userdel temp`",
  "`rm -r /home/temp`",
  "`passwd -d temp`",
], "Sem `-r`, a conta é removida mas os arquivos do home permanecem.");

Q("015.2", "Na maioria das distribuições atuais, a partir de qual UID começam os usuários comuns (pessoas)?", [
  "*1000",
  "0",
  "100",
  "500 em todas as distribuições",
], "UID 0 é root; 1 a 999 são normalmente reservados a contas de sistema. Distribuições antigas da Red Hat começavam em 500.");

Q("015.2", "Qual shell de login é usado em contas de sistema para impedir login interativo?", [
  "*`/usr/sbin/nologin` (ou `/bin/false`)",
  "`/bin/bash`",
  "`/bin/zsh`",
  "`/etc/shell`",
], "A conta continua podendo executar serviços, mas não abre um shell para login.");

Q("015.2", "Quais permissões são típicas dos arquivos de contas? (Escolha duas.)", [
  "*`/etc/passwd` pode ser lido por todos os usuários",
  "*`/etc/shadow` só pode ser lido pelo root (e eventualmente pelo grupo shadow)",
  "`/etc/shadow` pode ser lido por todos",
  "`/etc/passwd` só pode ser lido pelo root",
], "Muitos programas precisam consultar `/etc/passwd` para traduzir UIDs em nomes.");

Q("015.2", "Qual comando mostra o nome do usuário atual?", [
  "*`whoami`",
  "`w -u`",
  "`last -1`",
  "`groups -u`",
], "`id -un` dá o mesmo resultado.");

F("015.2", "Digite o comando que mostra UID, GID e grupos do usuário atual.", [
  "id",
], "`id usuario` mostra os dados de outro usuário.");

F("015.2", "Digite o comando completo que cria o grupo `devs`.", [
  "groupadd devs",
], "O GID é escolhido automaticamente, a menos que se use `-g`.");

F("015.2", "Digite o comando completo que cria o usuário `joao` com diretório pessoal.", [
  "useradd -m joao", "useradd --create-home joao",
], "`-m` cria o home a partir de /etc/skel.");

F("015.2", "Digite o comando completo que define/altera a senha da usuária `ana` (executado como root).", [
  "passwd ana",
], "O root pode alterar a senha de qualquer usuário.");

F("015.2", "Digite o caminho do arquivo que guarda os hashes das senhas dos usuários.", [
  "/etc/shadow",
], "Legível somente pelo root.");

F("015.2", "Digite o caminho do diretório cujos arquivos são copiados para o home de novos usuários.", [
  "/etc/skel", "/etc/skel/",
], "skel = skeleton (esqueleto).");

F("015.2", "Digite o comando que mostra o histórico de logins dos usuários (o tradicional, que lê o wtmp).", [
  "last",
], "Em sistemas com wtmpdb, `wtmpdb last` mostra o mesmo tipo de informação.");

F("015.2", "Digite o caminho do arquivo que define os grupos e seus membros.", [
  "/etc/group",
], "Formato: `nome:x:GID:membros`.");
