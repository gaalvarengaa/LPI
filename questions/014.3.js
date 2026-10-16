// 014.3
// --- Programas, configuração e processos ---
Q("014.3", "Qual é a diferença entre um **programa** e um **processo**?", [
  "*Programa é o arquivo executável no disco; processo é uma instância desse programa em execução na memória",
  "São a mesma coisa",
  "Processo é o arquivo no disco; programa é o que está em execução",
  "Programas só existem no Windows",
], "Um mesmo programa pode ter vários processos simultâneos, cada um com seu PID.");

Q("014.3", "Onde ficam, por convenção, os arquivos de configuração **do sistema** e dos serviços?", [
  "*Em `/etc`",
  "Em `/bin`",
  "Em `/var/log`",
  "Em `/proc`",
], "Exemplos: `/etc/ssh/sshd_config`, `/etc/hosts`, `/etc/fstab`. São arquivos de texto editáveis.");

Q("014.3", "Onde normalmente ficam as configurações **pessoais** de cada usuário para os programas?", [
  "*Em arquivos e diretórios ocultos no diretório pessoal, como `~/.bashrc` e `~/.config/`",
  "Em `/etc/passwd`",
  "Em `/var/log`",
  "Em `/boot`",
], "Configurações do usuário sobrepõem as configurações globais de `/etc`.");

Q("014.3", "Qual é o formato típico dos arquivos de configuração em `/etc`?", [
  "*Arquivos de texto puro, editáveis com editores como nano ou vi",
  "Arquivos binários que só podem ser alterados por programas especiais",
  "Planilhas",
  "Imagens",
], "Isso facilita editar, comparar, versionar e automatizar configurações.");

Q("014.3", "O que é um **daemon** no Linux?", [
  "*Um processo que roda em segundo plano prestando um serviço, como sshd ou cron",
  "Um vírus",
  "Um usuário administrador",
  "Um arquivo de configuração",
], "Muitos daemons têm nomes terminados em `d`: sshd, httpd, systemd, journald.");

Q("014.3", "O que é o **PID** de um processo?", [
  "*Um número único que identifica o processo em execução",
  "A prioridade do processo",
  "A quantidade de memória usada",
  "O nome do usuário dono do processo",
], "PID = Process ID. Usado por comandos como `kill`.");

Q("014.3", "O que é o **PPID** de um processo?", [
  "*O PID do processo pai, que o criou",
  "Um PID provisório",
  "O PID do usuário root",
  "A porta de rede do processo",
], "Exemplo: comandos executados no shell têm como pai o processo do shell.");

Q("014.3", "Nas distribuições modernas, qual processo tem o PID 1?", [
  "*O systemd (sistema de init)",
  "O bash",
  "O kernel",
  "O sshd",
], "O primeiro processo do espaço de usuário é o init; nas distribuições atuais, o systemd.");

Q("014.3", "O que mostra o comando `ps` sem opções?", [
  "*Os processos do usuário associados ao terminal atual",
  "Todos os processos do sistema",
  "Os serviços do systemd",
  "O uso de memória",
], "Para ver todos os processos use `ps aux` ou `ps -ef`.");

Q("014.3", "Qual comando lista **todos** os processos do sistema, com usuário, uso de CPU e de memória?", [
  "*`ps aux`",
  "`ps`",
  "`free`",
  "`jobs`",
], "`a` = de todos os usuários, `u` = formato orientado a usuário, `x` = inclui processos sem terminal.");

Q("014.3", "Na saída de `ps aux`, quais colunas indicam o consumo de recursos? (Escolha duas.)", [
  "*`%CPU`",
  "*`%MEM`",
  "`TTY`",
  "`COMMAND`",
], "`%CPU` e `%MEM` mostram o uso de processador e de memória; `RSS` mostra a memória física em KB.");

Q("014.3", "Qual comando ajuda a encontrar os processos do nginx?", [
  "*`ps aux | grep nginx`",
  "`grep nginx /proc`",
  "`free | grep nginx`",
  "`ls nginx`",
], "O `ps` lista os processos e o `grep` filtra as linhas. `pgrep nginx` também funciona.");

Q("014.3", "Qual comando mostra os processos em **tempo real**, atualizando o uso de CPU e memória continuamente?", [
  "*`top`",
  "`ps`",
  "`free`",
  "`dmesg`",
], "Existe também o `htop`, uma versão mais amigável (nem sempre instalada).");

Q("014.3", "Por padrão, como o `top` ordena a lista de processos?", [
  "*Pelo uso de CPU, do maior para o menor",
  "Pelo nome do processo",
  "Pelo PID",
  "Pelo usuário",
], "Dentro do top, `M` ordena por memória e `P` por CPU.");

Q("014.3", "Dentro do `top`, qual tecla ordena os processos por uso de **memória**?", [
  "*`M` (maiúsculo)",
  "`P`",
  "`q`",
  "`k`",
], "`P` volta a ordenar por CPU, `k` envia sinal (kill) e `q` sai.");

Q("014.3", "Qual tecla encerra o `top`?", [
  "*`q`",
  "`x`",
  "`Esc`",
  "`e`",
], "`Ctrl+C` também funciona.");

Q("014.3", "O que representa o **load average** mostrado pelo `top` e pelo `uptime`?", [
  "*A média de processos executando ou aguardando execução nos últimos 1, 5 e 15 minutos",
  "A porcentagem de disco ocupada",
  "A temperatura do processador",
  "A quantidade de usuários conectados",
], "Valores acima do número de núcleos de CPU indicam que o sistema está sobrecarregado.");

Q("014.3", "Qual comando mostra há quanto tempo o sistema está ligado, o número de usuários e o load average?", [
  "*`uptime`",
  "`free`",
  "`last`",
  "`date`",
], "Exemplo: `10:15:01 up 3 days,  2 users,  load average: 0.15, 0.10, 0.05`.");

Q("014.3", "Qual comando mostra o uso de **memória RAM** e de **swap**?", [
  "*`free`",
  "`top -m`",
  "`df`",
  "`ps -m`",
], "`free -h` exibe os valores em formato legível (Mi, Gi).");

Q("014.3", "Qual opção do `free` exibe os valores em formato legível para humanos?", [
  "*`-h`",
  "`-r`",
  "`-l`",
  "`-a`",
], "`free -m` mostra em megabytes e `free -g` em gigabytes.");

Q("014.3", "Na saída do `free`, qual coluna indica melhor quanta memória está disponível para novos programas?", [
  "*`available`",
  "`free`",
  "`shared`",
  "`total`",
], "O Linux usa memória livre como cache de disco (buff/cache), liberando-a quando necessário. Por isso `free` pode parecer baixo enquanto `available` está alto.");

Q("014.3", "O que é a **swap**?", [
  "*Uma área no disco usada como extensão da memória RAM quando ela fica cheia",
  "Uma memória mais rápida que a RAM",
  "Um tipo de processador",
  "Um diretório de arquivos temporários",
], "Usar swap é muito mais lento que RAM; uso intenso indica falta de memória.");

Q("014.3", "Qual comando envia o sinal padrão (SIGTERM) para encerrar o processo 2345?", [
  "*`kill 2345`",
  "`stop 2345`",
  "`ps -k 2345`",
  "`rm 2345`",
], "SIGTERM pede ao processo que termine de forma organizada.");

Q("014.3", "Um processo não responde ao `kill 2345`. Qual comando o encerra à força?", [
  "*`kill -9 2345`",
  "`kill -1 2345`",
  "`kill -0 2345`",
  "`kill +2345`",
], "O sinal 9 (SIGKILL) não pode ser ignorado pelo processo, mas não permite que ele salve dados.");

Q("014.3", "Quais comandos encerram processos pelo **nome**, e não pelo PID? (Escolha duas.)", [
  "*`pkill firefox`",
  "*`killall firefox`",
  "`kill firefox`",
  "`ps -k firefox`",
], "`kill` exige o PID (ou número de job).");

Q("014.3", "O que faz o `&` no final de um comando, como em `./backup.sh &`?", [
  "*Executa o comando em segundo plano, liberando o terminal",
  "Executa o comando como root",
  "Executa o comando duas vezes",
  "Redireciona a saída para um arquivo",
], "`jobs` lista os trabalhos em segundo plano e `fg` traz um deles para o primeiro plano.");

Q("014.3", "Qual comando mostra os processos em forma de árvore, evidenciando a relação pai e filho?", [
  "*`pstree`",
  "`free`",
  "`top -t`",
  "`ls -R /proc`",
], "`ps -ef --forest` produz um resultado parecido.");

Q("014.3", "Qual comando lista apenas os processos do usuário `ana`?", [
  "*`ps -u ana`",
  "`ps ana`",
  "`ps -p ana`",
  "`top ana`",
], "`-u` filtra pelo usuário. `top -u ana` também funciona.");

Q("014.3", "O que é o diretório `/proc`?", [
  "*Um sistema de arquivos virtual, gerado pelo kernel, com informações sobre processos e o sistema",
  "Um diretório com programas instalados",
  "Um diretório de backups",
  "Um diretório de configurações dos usuários",
], "Seu conteúdo não está no disco; é criado dinamicamente pelo kernel.");

Q("014.3", "O que existe em `/proc/1234`?", [
  "*Informações sobre o processo de PID 1234, como linha de comando, status e arquivos abertos",
  "O arquivo executável de número 1234",
  "O log da linha 1234",
  "Um usuário com UID 1234",
], "Exemplos: `/proc/1234/status`, `/proc/1234/cmdline`.");

Q("014.3", "Qual arquivo mostra detalhes sobre o processador, como modelo e quantidade de núcleos?", [
  "*`/proc/cpuinfo`",
  "`/proc/meminfo`",
  "`/etc/cpu`",
  "`/var/log/cpu`",
], "`cat /proc/cpuinfo`. O comando `lscpu` apresenta essas informações de forma resumida.");

Q("014.3", "Qual arquivo contém informações detalhadas sobre o uso de memória e é usado pelo comando `free`?", [
  "*`/proc/meminfo`",
  "`/proc/cpuinfo`",
  "`/etc/memory`",
  "`/sys/mem`",
], "O `free` lê e resume `/proc/meminfo`.");

Q("014.3", "Qual afirmação sobre o espaço ocupado pelos arquivos em `/proc` está correta?", [
  "*Eles não ocupam espaço em disco; são gerados pelo kernel quando lidos",
  "São os maiores arquivos do sistema",
  "Ficam gravados na partição /boot",
  "São apagados no logout",
], "Por isso a maioria aparece com tamanho 0 no `ls -l`.");

// --- systemd e serviços ---
Q("014.3", "O que é o **systemd**?", [
  "*O sistema de inicialização (init) e gerenciador de serviços da maioria das distribuições atuais",
  "Um editor de texto",
  "Um gerenciador de pacotes",
  "Um sistema de arquivos",
], "Ele inicia e controla serviços, gerencia o boot e mantém o journal de logs.");

Q("014.3", "Qual comando **inicia** o serviço `nginx` imediatamente?", [
  "*`systemctl start nginx`",
  "`systemctl enable nginx`",
  "`systemctl status nginx`",
  "`journalctl start nginx`",
], "Normalmente é necessário `sudo`, pois mexer em serviços exige privilégios de administrador.");

Q("014.3", "Qual comando **para** o serviço `apache2`?", [
  "*`systemctl stop apache2`",
  "`systemctl disable apache2`",
  "`kill apache2`",
  "`systemctl end apache2`",
], "`stop` encerra agora; `disable` apenas impede a inicialização automática no boot.");

Q("014.3", "Qual comando mostra se o serviço `ssh` está em execução, junto com as últimas linhas de log?", [
  "*`systemctl status ssh`",
  "`systemctl show-log ssh`",
  "`ps ssh`",
  "`service-info ssh`",
], "A saída mostra `Active: active (running)` quando o serviço está rodando.");

Q("014.3", "Qual comando para e inicia novamente o serviço `nginx`?", [
  "*`systemctl restart nginx`",
  "`systemctl reboot nginx`",
  "`systemctl again nginx`",
  "`systemctl start --stop nginx`",
], "Útil após alterar a configuração. Alguns serviços aceitam `reload`, que recarrega a configuração sem parar o serviço.");

Q("014.3", "Qual é a diferença entre `systemctl start` e `systemctl enable`?", [
  "*`start` inicia o serviço agora; `enable` configura para iniciar automaticamente no boot",
  "`enable` inicia agora; `start` configura para o boot",
  "São idênticos",
  "`enable` instala o serviço",
], "Use `systemctl enable --now serviço` para fazer as duas coisas.");

Q("014.3", "Qual comando faz o serviço `cups` **não** iniciar mais automaticamente no boot?", [
  "*`systemctl disable cups`",
  "`systemctl stop cups`",
  "`systemctl kill cups`",
  "`systemctl remove cups`",
], "`disable` não para o serviço que já está rodando; para isso use `stop`.");

Q("014.3", "Qual comando habilita o serviço `sshd` para o boot e o inicia imediatamente?", [
  "*`systemctl enable --now sshd`",
  "`systemctl start --boot sshd`",
  "`systemctl enable sshd`",
  "`systemctl restart --enable sshd`",
], "`--now` combina enable + start.");

Q("014.3", "Na saída de `systemctl status`, o que indica `Active: inactive (dead)`?", [
  "*Que o serviço está parado",
  "Que o serviço está rodando normalmente",
  "Que o serviço foi removido do sistema",
  "Que o computador está desligando",
], "`active (running)` = rodando; `failed` = falhou ao iniciar ou terminou com erro.");

Q("014.3", "Os serviços gerenciados pelo systemd são definidos em arquivos chamados:", [
  "*Units (unidades), como `nginx.service`",
  "Scripts `.bat`",
  "Pacotes `.deb`",
  "Arquivos `.iso`",
], "Existem vários tipos de unit: `.service`, `.timer`, `.socket`, `.mount`, `.target`.");

Q("014.3", "Qual comando lista as unidades de serviço carregadas pelo systemd?", [
  "*`systemctl list-units --type=service`",
  "`ps aux --services`",
  "`journalctl --list`",
  "`ls /proc/services`",
], "Sem filtro, `systemctl` (ou `systemctl list-units`) lista todas as units ativas.");

Q("014.3", "Qual comando verifica rapidamente se o serviço `nginx` está ativo, respondendo apenas `active` ou `inactive`?", [
  "*`systemctl is-active nginx`",
  "`systemctl check nginx`",
  "`systemctl test nginx`",
  "`systemctl ping nginx`",
], "Útil em scripts, pois também retorna status 0 quando ativo.");

Q("014.3", "Um usuário comum tenta `systemctl stop nginx` e recebe erro de autenticação ou permissão. Qual é a solução usual?", [
  "*Executar com privilégios de administrador: `sudo systemctl stop nginx`",
  "Usar `systemctl stop --user nginx` sempre",
  "Apagar o arquivo do serviço",
  "Reiniciar o computador",
], "Controlar serviços do sistema exige privilégios de root.");

Q("014.3", "Qual é a diferença entre `systemctl reload` e `systemctl restart`?", [
  "*`reload` pede ao serviço que releia a configuração sem parar; `restart` para e inicia o serviço",
  "`reload` reinicia o computador",
  "`restart` só funciona com serviços parados",
  "Não há diferença",
], "Nem todo serviço suporta reload.");

// --- Logs ---
Q("014.3", "Qual comando consulta o **journal** do systemd?", [
  "*`journalctl`",
  "`dmesg`",
  "`systemctl log`",
  "`cat /var/log/journal`",
], "O journal é armazenado em formato binário, por isso é lido com o journalctl.");

Q("014.3", "Qual comando mostra as mensagens de log apenas do serviço `sshd`?", [
  "*`journalctl -u sshd`",
  "`journalctl sshd -all`",
  "`dmesg -u sshd`",
  "`systemctl journal sshd`",
], "`-u` filtra por unit.");

Q("014.3", "Qual comando acompanha em tempo real as novas mensagens do journal?", [
  "*`journalctl -f`",
  "`journalctl -r`",
  "`journalctl -b`",
  "`journalctl -k`",
], "`-f` (follow) funciona como `tail -f`.");

Q("014.3", "Qual comando mostra as mensagens do journal apenas do **boot atual**?", [
  "*`journalctl -b`",
  "`journalctl -f`",
  "`journalctl -u boot`",
  "`dmesg -b`",
], "`journalctl -b -1` mostra o boot anterior (se o journal for persistente).");

Q("014.3", "Qual comando mostra as últimas 20 linhas do journal?", [
  "*`journalctl -n 20`",
  "`journalctl -l 20`",
  "`journalctl -20f`",
  "`journalctl --head 20`",
], "`-n` define a quantidade de linhas mais recentes.");

Q("014.3", "Qual comando mostra apenas mensagens do journal com prioridade **erro** ou mais grave?", [
  "*`journalctl -p err`",
  "`journalctl -e`",
  "`journalctl --errors-only`",
  "`journalctl -u err`",
], "Prioridades: emerg, alert, crit, err, warning, notice, info, debug.");

Q("014.3", "Qual comando mostra as mensagens do journal da última hora?", [
  "*`journalctl --since \"1 hour ago\"`",
  "`journalctl -n 1h`",
  "`journalctl -h 1`",
  "`journalctl --last 60`",
], "`--since` e `--until` aceitam datas e expressões como `today` e `yesterday`.");

Q("014.3", "Qual comando mostra as mensagens do **kernel** registradas no journal?", [
  "*`journalctl -k`",
  "`journalctl -u kernel`",
  "`journalctl --boot`",
  "`journalctl -f kernel`",
], "`journalctl -k` equivale às mensagens que o `dmesg` mostra, mas vindas do journal.");

Q("014.3", "Por que não se lê o journal do systemd com `cat`?", [
  "*Porque ele é armazenado em formato binário estruturado",
  "Porque fica criptografado com a senha do root",
  "Porque fica na memória RAM apenas",
  "Porque o cat não funciona em /var",
], "O journalctl permite filtrar por unit, prioridade, tempo e boot.");

Q("014.3", "O que é o **kernel ring buffer**?", [
  "*Uma área de memória onde o kernel registra suas mensagens, como detecção de hardware durante o boot",
  "Um anel físico do processador",
  "O arquivo /var/log/syslog",
  "A lista de processos",
], "É um buffer circular: as mensagens mais antigas são sobrescritas quando ele enche.");

Q("014.3", "Qual comando exibe as mensagens do kernel ring buffer?", [
  "*`dmesg`",
  "`journalctl -u kernel`",
  "`lsmod`",
  "`uname -a`",
], "Útil para diagnosticar problemas de hardware e drivers.");

Q("014.3", "Você conectou um pendrive e quer saber qual nome de dispositivo (`/dev/sdX`) ele recebeu. Qual comando ajuda?", [
  "*`dmesg` (observando as últimas mensagens)",
  "`free`",
  "`ps aux`",
  "`history`",
], "O kernel registra a detecção do dispositivo, como `sd 2:0:0:0: [sdb] Attached SCSI removable disk`. `lsblk` também ajuda.");

Q("014.3", "Em algumas distribuições, um usuário comum recebe \"Operation not permitted\" ao executar `dmesg`. Por quê?", [
  "*O acesso ao ring buffer do kernel é restrito a usuários privilegiados; é preciso usar `sudo dmesg`",
  "O comando dmesg não existe mais",
  "O kernel não registra mensagens",
  "O pendrive está com defeito",
], "Isso é controlado pela configuração `kernel.dmesg_restrict`.");

Q("014.3", "Qual diretório contém os arquivos de log de texto tradicionais do sistema e dos serviços?", [
  "*`/var/log`",
  "`/etc/log`",
  "`/tmp/log`",
  "`/usr/log`",
], "Exemplos: `/var/log/syslog`, `/var/log/auth.log`, `/var/log/nginx/`.");

Q("014.3", "Em distribuições da família Debian/Ubuntu, qual arquivo concentra as mensagens gerais do sistema (quando o rsyslog está instalado)?", [
  "*`/var/log/syslog`",
  "`/var/log/messages`",
  "`/etc/syslog`",
  "`/proc/log`",
], "Em sistemas da família Red Hat o arquivo equivalente é `/var/log/messages`.");

Q("014.3", "Em sistemas da família Red Hat (RHEL, Fedora), qual arquivo tradicionalmente concentra as mensagens gerais do sistema?", [
  "*`/var/log/messages`",
  "`/var/log/syslog`",
  "`/var/log/dmesg.txt`",
  "`/etc/messages`",
], "Logs de autenticação ficam em `/var/log/secure` (Red Hat) ou `/var/log/auth.log` (Debian).");

Q("014.3", "Em sistemas Debian/Ubuntu, qual arquivo registra tentativas de login e uso do sudo?", [
  "*`/var/log/auth.log`",
  "`/var/log/boot.log`",
  "`/var/log/kern.log`",
  "`/etc/sudoers`",
], "Útil para investigar acessos indevidos.");

Q("014.3", "Por que existem arquivos como `syslog.1` e `syslog.2.gz` em `/var/log`?", [
  "*Por causa da rotação de logs (logrotate), que arquiva e comprime logs antigos para não lotar o disco",
  "Porque o sistema cria uma cópia a cada comando",
  "Porque são logs de outros computadores",
  "Porque são arquivos corrompidos",
], "O logrotate renomeia, comprime e remove logs antigos de acordo com regras.");

Q("014.3", "Qual comando acompanha as novas linhas de um arquivo de log de texto em tempo real?", [
  "*`tail -f /var/log/syslog`",
  "`head -f /var/log/syslog`",
  "`cat -f /var/log/syslog`",
  "`less -n /var/log/syslog`",
], "Para o journal, o equivalente é `journalctl -f`.");

Q("014.3", "Onde o systemd-journald guarda o journal de forma **persistente** (que sobrevive ao reboot)?", [
  "*Em `/var/log/journal/`",
  "Em `/run/log/journal/` sempre",
  "Em `/etc/journal/`",
  "Em `/proc/journal/`",
], "Sem o diretório persistente, o journal fica em `/run/log/journal/` (volátil, apagado no reboot).");

// --- Preencher ---
F("014.3", "Digite o comando completo que lista todos os processos do sistema no formato BSD com usuário, %CPU e %MEM.", [
  "ps aux", "ps -aux",
], "`ps -ef` mostra todos os processos em formato padrão Unix.");

F("014.3", "Digite o comando completo que mostra o estado do serviço `nginx`.", [
  "systemctl status nginx", "systemctl status nginx.service",
], "Mostra se está ativo, o PID principal e as últimas linhas de log.");

F("014.3", "Digite o comando completo que configura o serviço `nginx` para iniciar automaticamente no boot (sem iniciá-lo agora).", [
  "systemctl enable nginx", "systemctl enable nginx.service",
], "`enable` cria os links necessários para o boot.");

F("014.3", "Digite o comando completo que exibe as mensagens do journal apenas da unit `cron`.", [
  "journalctl -u cron", "journalctl -u cron.service", "journalctl --unit cron", "journalctl --unit=cron",
], "`-u` filtra por unit.");

F("014.3", "Digite o comando que exibe as mensagens do kernel ring buffer.", [
  "dmesg",
], "Também é possível usar `journalctl -k`.");

F("014.3", "Digite o comando completo que mostra o uso de memória em formato legível (Mi/Gi).", [
  "free -h", "free --human",
], "`free -h` mostra RAM e swap.");

F("014.3", "Digite o comando que exibe os processos em tempo real, ordenados por uso de CPU.", [
  "top", "htop",
], "`q` sai do top.");

F("014.3", "Digite o caminho do diretório que contém os arquivos de log de texto do sistema.", [
  "/var/log", "/var/log/",
], "Ali ficam syslog, auth.log, messages e logs de serviços.");

F("014.3", "Digite o caminho do sistema de arquivos virtual que contém um diretório para cada PID em execução.", [
  "/proc", "/proc/",
], "Exemplo: `/proc/1` é o processo systemd.");

F("014.3", "Digite o comando completo que acompanha em tempo real as novas mensagens do journal.", [
  "journalctl -f", "journalctl --follow",
], "Encerre com Ctrl+C.");

F("014.3", "Digite o comando completo que força o encerramento imediato do processo de PID 4321.", [
  "kill -9 4321", "kill -KILL 4321", "kill -SIGKILL 4321", "kill -s KILL 4321", "kill -s 9 4321", "kill -s SIGKILL 4321",
], "SIGKILL (9) não pode ser ignorado pelo processo.");

F("014.3", "Digite o comando completo que inicia imediatamente o serviço `ssh`.", [
  "systemctl start ssh", "systemctl start ssh.service",
], "Use `sudo` se não estiver como root.");

Q("014.3", "Um serviço não inicia. Qual sequência de comandos é a mais adequada para investigar?", [
  "*`systemctl status serviço` e depois `journalctl -u serviço`",
  "`free` e depois `uptime`",
  "`dmesg -c` e depois reiniciar",
  "`ps` e depois `history`",
], "O status mostra o estado e as últimas linhas; o journal mostra o histórico completo de mensagens da unit.");
