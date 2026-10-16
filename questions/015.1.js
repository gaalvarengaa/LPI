// 015.1
// --- Usuários e privilégios ---
Q("015.1", "Qual é o UID do usuário **root**?", [
  "*0",
  "1",
  "1000",
  "65534",
], "O kernel trata o UID 0 como superusuário, com acesso irrestrito.");

Q("015.1", "Qual afirmação sobre o usuário **root** está correta?", [
  "*Tem acesso irrestrito ao sistema e pode alterar qualquer arquivo ou configuração",
  "Só pode acessar o próprio diretório pessoal",
  "Não pode instalar programas",
  "Só existe em servidores",
], "Por isso deve ser usado apenas quando necessário.");

Q("015.1", "O que são **usuários de sistema**?", [
  "*Contas usadas para executar serviços (como www-data ou sshd), geralmente com UID baixo e sem login interativo",
  "Usuários que têm acesso de root",
  "Usuários criados pelo administrador para pessoas",
  "Usuários que só usam o ambiente gráfico",
], "Normalmente usam UIDs abaixo de 1000 e shell `/usr/sbin/nologin` ou `/bin/false`.");

Q("015.1", "Por que serviços como o servidor web rodam com um usuário próprio (ex.: `www-data`) e não como root?", [
  "*Para limitar os danos caso o serviço seja comprometido",
  "Porque o root não pode iniciar serviços",
  "Para o serviço ficar mais rápido",
  "Porque é exigência da licença GPL",
], "É o princípio do menor privilégio: cada componente só tem as permissões de que precisa.");

Q("015.1", "O que é o **princípio do menor privilégio**?", [
  "*Dar a usuários e programas apenas as permissões estritamente necessárias para suas tarefas",
  "Dar acesso de root a todos os usuários",
  "Usar a menor senha possível",
  "Instalar o menor número de programas",
], "Por isso trabalha-se como usuário comum e usa-se `sudo` só para tarefas administrativas.");

Q("015.1", "O que faz o comando `sudo apt update`?", [
  "*Executa `apt update` com privilégios de root, pedindo a senha do próprio usuário",
  "Executa `apt update` como o usuário atual sem privilégios",
  "Troca permanentemente para o usuário root",
  "Pede a senha do root e abre um shell",
], "O sudo verifica se o usuário tem permissão em `/etc/sudoers`.");

Q("015.1", "Qual senha o `sudo` normalmente solicita?", [
  "*A senha do próprio usuário que está executando o sudo",
  "A senha do root",
  "A senha do administrador da rede",
  "Nenhuma senha",
], "Isso evita compartilhar a senha do root entre os administradores.");

Q("015.1", "Qual senha o comando `su` (sem argumentos) solicita?", [
  "*A senha do usuário de destino, no caso o root",
  "A senha do usuário atual",
  "Nenhuma senha",
  "A senha do sudo",
], "`su` = substitute user. Sem argumentos, o destino é o root.");

Q("015.1", "Qual é a diferença entre `su` e `su -`?", [
  "*`su -` inicia um shell de login, carregando o ambiente completo do usuário de destino (PATH, HOME, diretório inicial)",
  "`su -` não pede senha",
  "`su` troca para root e `su -` volta ao usuário anterior",
  "Não há diferença",
], "Com `su -` você vai para o diretório pessoal do usuário de destino e com o ambiente dele.");

Q("015.1", "Qual comando troca para o usuário `ana`, com o ambiente de login dela?", [
  "*`su - ana`",
  "`sudo ana`",
  "`su ana -root`",
  "`login -s ana`",
], "Será pedida a senha da ana (a menos que você seja root).");

Q("015.1", "Qual comando abre um shell interativo de root usando o sudo?", [
  "*`sudo -i`",
  "`sudo -r`",
  "`su -sudo`",
  "`sudo exit`",
], "`sudo -i` simula um login de root. Use `exit` para voltar.");

Q("015.1", "Qual comando executa `whoami` como o usuário `postgres` usando sudo?", [
  "*`sudo -u postgres whoami`",
  "`sudo postgres whoami`",
  "`su -c postgres whoami`",
  "`sudo -p postgres whoami`",
], "`-u` define o usuário de destino; o padrão é root.");

Q("015.1", "Qual arquivo define quem pode usar o sudo e quais comandos?", [
  "*`/etc/sudoers`",
  "`/etc/passwd`",
  "`/etc/shadow`",
  "`/etc/group.sudo`",
], "Também pode haver arquivos adicionais em `/etc/sudoers.d/`.");

Q("015.1", "Qual comando deve ser usado para editar o arquivo `/etc/sudoers` com segurança?", [
  "*`visudo`",
  "`nano /etc/sudoers` diretamente, sempre",
  "`sudoedit --all`",
  "`chmod sudoers`",
], "O `visudo` verifica a sintaxe antes de salvar, evitando que um erro bloqueie o uso do sudo.");

Q("015.1", "Em quais grupos os usuários normalmente recebem permissão de usar o sudo? (Escolha duas.)", [
  "*`sudo` (Debian/Ubuntu)",
  "*`wheel` (Fedora/RHEL)",
  "`users`",
  "`nogroup`",
], "Adicionar um usuário a esses grupos lhe dá acesso administrativo via sudo.");

Q("015.1", "Ao usar sudo, aparece: `ana is not in the sudoers file. This incident will be reported.` O que isso significa?", [
  "*A usuária ana não tem permissão para usar o sudo",
  "A senha digitada estava errada",
  "O comando não existe",
  "O sistema está sem rede",
], "Um administrador precisa incluí-la no grupo adequado ou em `/etc/sudoers`.");

Q("015.1", "Quais são vantagens de usar `sudo` em vez de fazer login diretamente como root? (Escolha duas.)", [
  "*Os comandos executados com sudo ficam registrados nos logs, permitindo auditoria",
  "*Não é necessário compartilhar a senha do root entre os administradores",
  "Os comandos executam mais rápido",
  "O sudo dispensa qualquer senha",
], "Também reduz o risco de erros, pois só os comandos necessários são executados como root.");

Q("015.1", "Após digitar a senha no sudo, por que comandos seguintes com sudo não pedem a senha de novo por algum tempo?", [
  "*O sudo guarda temporariamente a autenticação por alguns minutos",
  "Porque o usuário virou root permanentemente",
  "Porque a senha foi removida",
  "Porque o sudo só pede senha uma vez por dia",
], "O tempo é configurável em `/etc/sudoers` (timestamp_timeout).");

Q("015.1", "O prompt mudou de `ana@pc:~$` para `root@pc:~#`. O que isso indica?", [
  "*Que agora o shell está sendo executado como root",
  "Que o computador foi reiniciado",
  "Que a rede caiu",
  "Que o diretório atual mudou para /root obrigatoriamente",
], "O `#` indica o superusuário.");

Q("015.1", "Como sair de um shell aberto com `su -` ou `sudo -i` e voltar ao usuário anterior?", [
  "*`exit` (ou Ctrl+D)",
  "`logout root --all`",
  "`su -back`",
  "`sudo -k`",
], "Esses comandos abrem um novo shell; ao encerrá-lo você volta ao anterior.");

// --- SSH ---
Q("015.1", "Qual comando conecta ao servidor `srv.exemplo.com` como o usuário `ana` via SSH?", [
  "*`ssh ana@srv.exemplo.com`",
  "`ssh srv.exemplo.com@ana`",
  "`ssh -u ana srv.exemplo.com` (obrigatoriamente)",
  "`telnet ana@srv.exemplo.com`",
], "Sem `usuario@`, o ssh usa o mesmo nome de usuário local. `ssh -l ana srv.exemplo.com` também funciona.");

Q("015.1", "O servidor SSH escuta na porta 2222. Qual comando conecta a ele?", [
  "*`ssh -p 2222 ana@srv`",
  "`ssh -P 2222 ana@srv`",
  "`ssh ana@srv:2222`",
  "`ssh --port=2222:ana@srv` sempre",
], "No `ssh` a porta é `-p` (minúsculo); no `scp` é `-P` (maiúsculo).");

Q("015.1", "O que faz `ssh ana@srv uptime`?", [
  "*Conecta ao servidor, executa o comando `uptime` lá e mostra o resultado localmente",
  "Mostra o uptime da máquina local",
  "Mede o tempo de conexão",
  "Copia o comando uptime para o servidor",
], "Após executar o comando, a conexão é encerrada.");

Q("015.1", "Por que o SSH é preferível ao Telnet para acesso remoto?", [
  "*Porque criptografa toda a comunicação, incluindo senhas",
  "Porque é mais antigo",
  "Porque não precisa de rede",
  "Porque não exige autenticação",
], "O Telnet envia tudo em texto puro.");

Q("015.1", "Na primeira conexão SSH a um servidor, o cliente pergunta se você confia na impressão digital (fingerprint) da chave do servidor. Onde essa chave é guardada ao aceitar?", [
  "*Em `~/.ssh/known_hosts`",
  "Em `~/.ssh/authorized_keys`",
  "Em `/etc/passwd`",
  "Em `~/.ssh/id_ed25519`",
], "Nas próximas conexões o cliente compara a chave do servidor com a guardada.");

Q("015.1", "O cliente SSH exibe o aviso `REMOTE HOST IDENTIFICATION HAS CHANGED!`. O que isso pode indicar?", [
  "*Que a chave do servidor mudou: ele pode ter sido reinstalado ou pode ser um ataque man-in-the-middle",
  "Que a senha do usuário expirou",
  "Que a conexão está mais rápida",
  "Que a chave privada do usuário foi apagada",
], "Antes de remover a entrada antiga de known_hosts, confirme com o administrador que a mudança é legítima.");

Q("015.1", "Qual comando gera um novo par de chaves SSH?", [
  "*`ssh-keygen`",
  "`ssh-copy-id`",
  "`ssh-agent`",
  "`sshd -k`",
], "Exemplo: `ssh-keygen -t ed25519`.");

Q("015.1", "Qual comando gera um par de chaves SSH do tipo Ed25519?", [
  "*`ssh-keygen -t ed25519`",
  "`ssh-keygen -k ed25519`",
  "`ssh -t ed25519`",
  "`keygen ed25519`",
], "`-t` define o tipo de chave (ed25519, rsa, ecdsa).");

Q("015.1", "Após `ssh-keygen -t ed25519` com as opções padrão, quais arquivos são criados?", [
  "*`~/.ssh/id_ed25519` (chave privada) e `~/.ssh/id_ed25519.pub` (chave pública)",
  "`~/.ssh/authorized_keys` e `~/.ssh/known_hosts`",
  "`/etc/ssh/sshd_config`",
  "`~/.ssh/private.key` e `~/.ssh/public.key`",
], "O arquivo `.pub` é o público, que pode ser compartilhado.");

Q("015.1", "Na autenticação SSH por chave, qual chave deve ser copiada para o servidor?", [
  "*A chave **pública** (`.pub`)",
  "A chave privada",
  "As duas chaves",
  "Nenhuma, basta a senha",
], "A chave privada nunca deve sair do seu computador.");

Q("015.1", "Em qual arquivo do servidor ficam as chaves públicas autorizadas a acessar uma conta via SSH?", [
  "*`~/.ssh/authorized_keys` no diretório pessoal do usuário de destino",
  "`~/.ssh/known_hosts`",
  "`/etc/ssh/ssh_host_keys`",
  "`/etc/passwd`",
], "Cada linha contém uma chave pública autorizada.");

Q("015.1", "Qual comando copia sua chave pública para o `authorized_keys` de um servidor remoto?", [
  "*`ssh-copy-id ana@srv`",
  "`ssh-keygen ana@srv`",
  "`scp ~/.ssh/id_ed25519 ana@srv:`",
  "`ssh-add ana@srv`",
], "O `ssh-copy-id` acrescenta a chave pública ao `~/.ssh/authorized_keys` remoto, com as permissões corretas.");

Q("015.1", "Para que serve a **passphrase** definida ao gerar uma chave SSH?", [
  "*Criptografar a chave privada no disco, protegendo-a caso o arquivo seja roubado",
  "Substituir a chave pública",
  "Definir a senha do root no servidor",
  "Acelerar a conexão",
], "Com o `ssh-agent`, a passphrase é digitada uma vez por sessão.");

Q("015.1", "Quais permissões são recomendadas para a chave privada `~/.ssh/id_ed25519`?", [
  "*`600` (leitura e escrita apenas para o dono)",
  "`644`",
  "`777`",
  "`755`",
], "O cliente SSH recusa chaves privadas legíveis por outros usuários. O diretório `~/.ssh` deve ter `700`.");

Q("015.1", "Qual é a principal vantagem da autenticação SSH por chave em relação à senha?", [
  "*É muito mais resistente a ataques de força bruta e não envia segredo reutilizável ao servidor",
  "Dispensa a criptografia da conexão",
  "Funciona sem rede",
  "Permite acesso sem qualquer configuração no servidor",
], "Muitos administradores desativam a autenticação por senha após configurar chaves.");

Q("015.1", "Qual programa guarda chaves privadas desbloqueadas na memória, para não digitar a passphrase a cada conexão?", [
  "*`ssh-agent`",
  "`sshd`",
  "`ssh-keygen`",
  "`scp`",
], "Chaves são adicionadas ao agente com `ssh-add`.");

Q("015.1", "Qual arquivo configura o **servidor** SSH (por exemplo, a porta e se o root pode fazer login)?", [
  "*`/etc/ssh/sshd_config`",
  "`/etc/ssh/ssh_config`",
  "`~/.ssh/config`",
  "`~/.ssh/authorized_keys`",
], "`sshd_config` é do servidor (daemon); `ssh_config` e `~/.ssh/config` são do cliente.");

Q("015.1", "Qual configuração do `sshd_config` impede que o root faça login diretamente via SSH?", [
  "*`PermitRootLogin no`",
  "`RootAccess false`",
  "`DenyUsers all`",
  "`PasswordAuthentication yes`",
], "Os administradores entram como usuários comuns e usam sudo.");

Q("015.1", "Qual opção do `ssh` indica um arquivo de chave privada específico?", [
  "*`-i`",
  "`-k`",
  "`-p`",
  "`-f`",
], "Exemplo: `ssh -i ~/.ssh/chave_servidor ana@srv`.");

// --- scp ---
Q("015.1", "Qual comando copia `relatorio.pdf` para o diretório `/tmp` do servidor `srv`, como usuária `ana`?", [
  "*`scp relatorio.pdf ana@srv:/tmp/`",
  "`scp ana@srv:/tmp/ relatorio.pdf`",
  "`ssh relatorio.pdf ana@srv:/tmp/`",
  "`cp relatorio.pdf ana@srv:/tmp/`",
], "Sintaxe: `scp ORIGEM DESTINO`, onde o lado remoto é `usuario@host:caminho`.");

Q("015.1", "Qual comando copia `/var/log/syslog` do servidor `srv` para o diretório atual da máquina local?", [
  "*`scp ana@srv:/var/log/syslog .`",
  "`scp . ana@srv:/var/log/syslog`",
  "`scp syslog ana@srv`",
  "`ssh ana@srv:/var/log/syslog .`",
], "O `.` representa o diretório atual local.");

Q("015.1", "Qual opção do `scp` copia um diretório inteiro recursivamente?", [
  "*`-r`",
  "`-R`",
  "`-a`",
  "`-d`",
], "Exemplo: `scp -r site/ ana@srv:/var/www/`.");

Q("015.1", "Qual opção define a porta do servidor no `scp`?", [
  "*`-P` (maiúsculo)",
  "`-p` (minúsculo)",
  "`--port` apenas",
  "`:porta` após o host",
], "No scp, `-p` (minúsculo) preserva datas e permissões.");

Q("015.1", "Qual protocolo o `scp` usa para transferir arquivos?", [
  "*SSH, com a conexão criptografada",
  "FTP sem criptografia",
  "HTTP",
  "Telnet",
], "O `sftp` também usa SSH, mas oferece uma sessão interativa de transferência.");

Q("015.1", "Qual comando abre uma sessão interativa de transferência de arquivos sobre SSH, com comandos como `get` e `put`?", [
  "*`sftp ana@srv`",
  "`scp -i ana@srv`",
  "`ftp -s ana@srv`",
  "`ssh -t ana@srv`",
], "SFTP é o protocolo de transferência de arquivos do SSH.");

// --- Preencher ---
F("015.1", "Digite o comando que gera um par de chaves SSH (só o nome do comando).", [
  "ssh-keygen",
], "Use `-t ed25519` para escolher o tipo.");

F("015.1", "Digite o caminho (usando ~) do arquivo no servidor que lista as chaves públicas autorizadas.", [
  "~/.ssh/authorized_keys",
], "Uma chave pública por linha.");

F("015.1", "Digite o comando completo que conecta via SSH ao host `srv` como usuário `ana`.", [
  "ssh ana@srv", "ssh -l ana srv",
], "Sintaxe: `ssh usuario@host`.");

F("015.1", "Digite o comando completo que copia `nota.txt` para o diretório pessoal da usuária `ana` no host `srv` (use `~`).", [
  "scp nota.txt ana@srv:~", "scp nota.txt ana@srv:~/", "scp nota.txt ana@srv:",
], "`ana@srv:` sem caminho também indica o diretório pessoal.");

F("015.1", "Digite o comando completo que troca para o usuário root com ambiente de login usando su.", [
  "su -", "su - root", "su -l", "su --login", "su -l root",
], "O `-` carrega o ambiente completo do root.");

F("015.1", "Digite o UID do usuário root.", [
  "0",
], "UID 0 = superusuário.");

F("015.1", "Digite o comando usado para editar `/etc/sudoers` com verificação de sintaxe.", [
  "visudo",
], "Evita erros que bloqueariam o sudo.");

F("015.1", "Digite o comando completo que copia sua chave pública SSH para o servidor `srv` como `ana`.", [
  "ssh-copy-id ana@srv",
], "Ele acrescenta a chave a `~/.ssh/authorized_keys` no servidor.");
