// 014.2
Q("014.2", "Qual é a função principal do **processador** (CPU)?", [
  "*Executar as instruções dos programas",
  "Armazenar arquivos permanentemente",
  "Converter corrente alternada em contínua",
  "Exibir imagens na tela",
], "A CPU executa as instruções; a memória guarda dados temporários; o disco guarda dados permanentes.");

Q("014.2", "Quais são as duas famílias de arquitetura de processador mais comuns em computadores que rodam Linux? (Escolha duas.)", [
  "*x86 (incluindo x86_64/amd64)",
  "*ARM (incluindo aarch64/arm64)",
  "NTFS",
  "PCIe",
  "SATA",
], "x86_64 domina desktops e servidores; ARM domina celulares, o Raspberry Pi e é cada vez mais comum em servidores e notebooks.");

Q("014.2", "Quais dispositivos normalmente usam processadores **ARM**? (Escolha duas.)", [
  "*Smartphones Android",
  "*Raspberry Pi",
  "Um PC desktop tradicional com processador Intel Core",
  "Um servidor com AMD EPYC",
], "Intel Core e AMD EPYC são processadores x86_64.");

Q("014.2", "Um programa compilado para x86_64 pode ser executado diretamente em um Raspberry Pi (ARM)?", [
  "*Não, programas compilados são específicos da arquitetura; é preciso uma versão compilada para ARM",
  "Sim, sempre",
  "Sim, se o arquivo tiver permissão de execução",
  "Sim, se for executado como root",
], "Por isso as distribuições oferecem pacotes e imagens separados para cada arquitetura.");

Q("014.2", "Qual comando mostra a arquitetura do processador (como `x86_64` ou `aarch64`)?", [
  "*`uname -m`",
  "`uname -r`",
  "`free -m`",
  "`ls /dev/cpu`",
], "`uname -m` mostra a arquitetura da máquina; `uname -r` mostra a versão do kernel.");

Q("014.2", "Qual é a característica da **memória RAM**?", [
  "*É rápida e volátil: perde o conteúdo quando o computador é desligado",
  "Guarda os dados permanentemente",
  "É mais lenta que um disco rígido",
  "Só armazena o kernel",
], "Programas e dados em uso ficam na RAM; arquivos ficam nos dispositivos de armazenamento.");

Q("014.2", "Qual componente conecta a CPU, a memória e os demais dispositivos do computador?", [
  "*A placa-mãe (motherboard)",
  "A fonte de alimentação",
  "O SSD",
  "A placa de rede",
], "A placa-mãe contém os slots, barramentos e controladores que interligam os componentes.");

Q("014.2", "Qual é a função da **fonte de alimentação** (PSU)?", [
  "*Converter a corrente alternada da tomada em corrente contínua nas tensões usadas pelos componentes",
  "Armazenar energia para o computador funcionar sem tomada por horas",
  "Resfriar o processador",
  "Processar dados gráficos",
], "A fonte fornece tensões como 12 V, 5 V e 3,3 V aos componentes.");

Q("014.2", "Qual arquivo de dispositivo normalmente representa o primeiro drive óptico (CD/DVD)?", [
  "*`/dev/sr0`",
  "`/dev/sda`",
  "`/dev/nvme0n1`",
  "`/dev/tty0`",
], "Muitas distribuições também criam o link `/dev/cdrom` apontando para ele.");

Q("014.2", "Quais destes são **periféricos**? (Escolha três.)", [
  "*Teclado",
  "*Impressora",
  "*Webcam",
  "Processador",
  "Memória RAM",
], "Periféricos são dispositivos externos conectados ao computador para entrada ou saída.");

Q("014.2", "Quais são tipos comuns de placas de interface de rede (NIC)? (Escolha duas.)", [
  "*Ethernet (cabeada)",
  "*Wi-Fi (sem fio)",
  "SATA",
  "HDMI",
], "Ethernet usa cabos; Wi-Fi usa ondas de rádio.");

Q("014.2", "O que é o **endereço MAC** de uma placa de rede?", [
  "*Um identificador de hardware (48 bits) da interface, usado na rede local",
  "O endereço IP público do computador",
  "O nome do computador na rede",
  "A senha da rede Wi-Fi",
], "Exemplo: `08:00:27:4e:66:a1`. Aparece em `ip link show` ou `ip addr show` como `link/ether`.");

Q("014.2", "Nas distribuições atuais, qual nome de interface indica tipicamente uma placa **Ethernet**?", [
  "*`enp3s0`",
  "`wlp2s0`",
  "`lo`",
  "`sda1`",
], "Prefixos: `en` = Ethernet, `wl` = Wi-Fi (wireless LAN), `lo` = loopback.");

Q("014.2", "Qual nome de interface indica tipicamente uma placa **Wi-Fi**?", [
  "*`wlp2s0`",
  "`enp0s3`",
  "`lo`",
  "`nvme0n1`",
], "Interfaces sem fio começam com `wl` (ou o nome antigo `wlan0`).");

Q("014.2", "Qual é a principal diferença entre um HDD e um SSD?", [
  "*O HDD tem discos giratórios e partes mecânicas; o SSD usa memória flash, sem partes móveis, e é mais rápido",
  "O SSD é sempre mais lento",
  "O HDD é volátil e perde os dados ao desligar",
  "O SSD só funciona no Windows",
], "SSDs têm acesso muito mais rápido e são mais resistentes a impactos.");

Q("014.2", "O que caracteriza um SSD **NVMe**?", [
  "*Conecta-se pelo barramento PCIe, oferecendo velocidades bem maiores que SSDs SATA",
  "É um disco rígido mecânico",
  "É um tipo de memória RAM",
  "Só funciona como drive óptico",
], "No Linux aparece como `/dev/nvme0n1`, e não como `/dev/sdX`.");

Q("014.2", "Qual arquivo de dispositivo representa normalmente o **primeiro** disco SATA, SCSI ou USB?", [
  "*`/dev/sda`",
  "`/dev/hd0`",
  "`/dev/disk1`",
  "`/dev/nvme1`",
], "Discos seguintes são `/dev/sdb`, `/dev/sdc`...");

Q("014.2", "O que representa `/dev/sda2`?", [
  "*A segunda partição do primeiro disco SATA/SCSI/USB",
  "O segundo disco do sistema",
  "A primeira partição do segundo disco",
  "Um drive óptico",
], "A letra indica o disco e o número indica a partição.");

Q("014.2", "O que representa `/dev/sdb1`?", [
  "*A primeira partição do segundo disco",
  "A segunda partição do primeiro disco",
  "O primeiro disco NVMe",
  "Um pendrive obrigatoriamente",
], "b = segundo disco; 1 = primeira partição.");

Q("014.2", "Qual é o arquivo de dispositivo do **primeiro disco NVMe** inteiro?", [
  "*`/dev/nvme0n1`",
  "`/dev/sda`",
  "`/dev/nvme1p1`",
  "`/dev/ssd0`",
], "nvme0 = controlador 0; n1 = namespace 1.");

Q("014.2", "O que representa `/dev/nvme0n1p3`?", [
  "*A terceira partição do primeiro disco NVMe",
  "O terceiro disco NVMe",
  "A primeira partição do terceiro disco NVMe",
  "Um disco SATA",
], "Em NVMe, as partições usam o sufixo `p` + número.");

Q("014.2", "Um computador tem um SSD SATA (`/dev/sda`). Ao conectar um pendrive USB, qual nome ele provavelmente recebe?", [
  "*`/dev/sdb`",
  "`/dev/usb0`",
  "`/dev/nvme0n1`",
  "`/dev/sr0`",
], "Pendrives e discos USB usam o mesmo esquema `sdX` dos discos SATA/SCSI.");

Q("014.2", "O que é uma **partição**?", [
  "*Uma divisão lógica de um disco, que pode receber seu próprio sistema de arquivos",
  "Um tipo de memória RAM",
  "Um processo do kernel",
  "Uma placa de rede virtual",
], "Exemplo: uma partição para o sistema (`/`) e outra para os dados (`/home`).");

Q("014.2", "Qual comando lista os dispositivos de bloco (discos e partições) em forma de árvore?", [
  "*`lsblk`",
  "`ls -l /home`",
  "`free`",
  "`ip addr show`",
], "`lsblk` mostra discos, partições, tamanhos e pontos de montagem.");

Q("014.2", "O que é um **driver** de dispositivo?", [
  "*Software que permite ao kernel se comunicar com um determinado hardware",
  "Um cabo de conexão",
  "Um usuário do sistema",
  "Um arquivo de log",
], "No Linux, a maioria dos drivers faz parte do próprio kernel.");

Q("014.2", "Como o kernel Linux geralmente carrega drivers de hardware sob demanda?", [
  "*Como módulos do kernel, carregados quando o hardware é detectado",
  "Instalando arquivos .exe",
  "Recompilando o kernel a cada novo dispositivo",
  "Pelo gerenciador de janelas",
], "Módulos podem ser carregados e removidos sem reiniciar o sistema.");

Q("014.2", "Qual comando lista os módulos do kernel carregados no momento?", [
  "*`lsmod`",
  "`lsblk`",
  "`ls /dev`",
  "`modules --list`",
], "`modprobe nome` carrega um módulo e suas dependências.");

Q("014.2", "Onde ficam os arquivos dos módulos do kernel instalado?", [
  "*Em `/lib/modules/<versão-do-kernel>/`",
  "Em `/etc/modules/`",
  "Em `/home/modules/`",
  "Em `/dev/modules/`",
], "Cada versão de kernel tem seu diretório; `uname -r` informa a versão em uso.");

Q("014.2", "Qual afirmação sobre drivers proprietários (como alguns de placas de vídeo) está correta?", [
  "*São fornecidos pelo fabricante sem código aberto e geralmente instalados como módulos fora da árvore oficial do kernel",
  "Já vêm compilados dentro de todo kernel Linux",
  "Não funcionam no Linux de forma alguma",
  "São obrigatórios para usar o teclado",
], "A maioria do hardware funciona com drivers livres incluídos no kernel.");

Q("014.2", "O que contém o diretório `/dev`?", [
  "*Arquivos de dispositivo que representam o hardware e dispositivos virtuais",
  "Arquivos de desenvolvimento de programas",
  "Documentação do sistema",
  "Arquivos de log",
], "Programas acessam o hardware abrindo esses arquivos especiais, por exemplo `/dev/sda`.");

Q("014.2", "Na saída de `ls -l /dev/sda`, a linha começa com `b`. O que isso indica?", [
  "*Que é um dispositivo de bloco (acesso em blocos, como discos)",
  "Que é um arquivo de backup",
  "Que é um diretório",
  "Que é um link simbólico",
], "`b` = dispositivo de bloco (discos); `c` = dispositivo de caractere (terminais, `/dev/null`).");

Q("014.2", "Qual tipo de arquivo de dispositivo é o `/dev/null`?", [
  "*Dispositivo de caractere",
  "Dispositivo de bloco",
  "Diretório",
  "Link simbólico",
], "Em `ls -l /dev/null` a linha começa com `c`.");

Q("014.2", "O que é o diretório `/sys`?", [
  "*Um sistema de arquivos virtual (sysfs) que expõe informações e configurações de dispositivos, drivers e do kernel",
  "Um diretório com os executáveis do sistema",
  "O diretório onde fica o kernel",
  "Um diretório de backup",
], "O conteúdo de `/sys` não está no disco; é gerado pelo kernel em memória.");

Q("014.2", "O que normalmente fica no diretório `/boot`?", [
  "*O kernel (vmlinuz), o initramfs e arquivos do bootloader",
  "Os logs de inicialização",
  "Os diretórios dos usuários",
  "Os arquivos de dispositivo",
], "Esses arquivos são necessários para iniciar o sistema.");

Q("014.2", "O que acontece com os dados gravados em `/dev/null`?", [
  "*São descartados",
  "São gravados no disco",
  "São enviados ao root por e-mail",
  "São impressos na tela",
], "`/dev/null` é o \"buraco negro\" do sistema.");

Q("014.2", "O que se obtém ao ler o `/dev/zero`?", [
  "*Uma sequência infinita de bytes zero",
  "Bytes aleatórios",
  "Fim de arquivo imediatamente",
  "O conteúdo da memória RAM",
], "Útil para criar arquivos preenchidos com zeros ou apagar discos.");

Q("014.2", "O que se obtém ao ler o `/dev/urandom`?", [
  "*Bytes pseudoaleatórios gerados pelo kernel",
  "Uma sequência de zeros",
  "Nada",
  "Os logs do kernel",
], "Usado para gerar senhas, chaves e dados de teste.");

Q("014.2", "O que se obtém ao **ler** o `/dev/null`?", [
  "*Fim de arquivo imediatamente (nenhum dado)",
  "Zeros infinitos",
  "Bytes aleatórios",
  "Um erro de permissão",
], "Por isso `cat /dev/null > arquivo` esvazia um arquivo.");

Q("014.2", "Qual comando cria um arquivo de 10 MB preenchido com zeros?", [
  "*`dd if=/dev/zero of=arquivo bs=1M count=10`",
  "`dd if=/dev/null of=arquivo bs=1M count=10`",
  "`cat /dev/urandom > arquivo`",
  "`touch -s 10M arquivo`",
], "`/dev/null` não forneceria dados; `/dev/urandom` sem limite geraria um arquivo infinito.");

Q("014.2", "Qual comando gera 16 bytes aleatórios e os mostra em formato hexadecimal?", [
  "*`head -c 16 /dev/urandom | xxd -p`",
  "`head -c 16 /dev/zero | xxd -p`",
  "`cat /dev/null | xxd -p`",
  "`echo /dev/urandom 16`",
], "`/dev/urandom` é a fonte de aleatoriedade; `/dev/zero` geraria só zeros.");

Q("014.2", "Qual componente do sistema cria e remove dinamicamente os arquivos em `/dev` quando dispositivos são conectados ou removidos?", [
  "*O udev (junto com o devtmpfs do kernel)",
  "O GRUB",
  "O Bash",
  "O cron",
], "Ao conectar um pendrive, o kernel o detecta e o udev cria `/dev/sdb`, `/dev/sdb1` etc.");

Q("014.2", "O que é o **Raspberry Pi**?", [
  "*Um computador de placa única, pequeno e barato, com processador ARM",
  "Uma distribuição Linux para servidores",
  "Um tipo de disco SSD",
  "Um gerenciador de pacotes",
], "Muito usado em educação, automação e projetos de eletrônica, geralmente com o Raspberry Pi OS.");

Q("014.2", "Qual característica do Raspberry Pi permite conectá-lo diretamente a sensores, LEDs e outros componentes eletrônicos?", [
  "*Os pinos GPIO (General Purpose Input/Output)",
  "A porta SATA",
  "O drive óptico",
  "A fonte ATX",
], "O GPIO permite controlar e ler sinais elétricos por software.");

Q("014.2", "De onde um Raspberry Pi normalmente inicia o sistema operacional?", [
  "*De um cartão microSD (ou USB/NVMe nos modelos mais novos)",
  "De um disquete",
  "De um DVD",
  "Da BIOS",
], "A imagem do sistema é gravada no cartão com uma ferramenta como o Raspberry Pi Imager.");

Q("014.2", "Quais comandos listam dispositivos de hardware conectados aos barramentos do computador? (Escolha duas.)", [
  "*`lspci`",
  "*`lsusb`",
  "`lsmod`",
  "`ls /home`",
], "`lspci` lista dispositivos PCI/PCIe (placas de vídeo, rede, controladoras); `lsusb` lista dispositivos USB.");

Q("014.2", "Qual é a função do firmware (BIOS ou UEFI) quando o computador é ligado?", [
  "*Inicializar e testar o hardware básico e carregar o bootloader",
  "Executar o shell do usuário",
  "Gerenciar pacotes de software",
  "Montar o diretório /home",
], "Depois do firmware, o bootloader (como o GRUB) carrega o kernel.");

F("014.2", "Digite o caminho do pseudo-dispositivo que descarta tudo o que é gravado nele.", [
  "/dev/null",
], "Muito usado como `2>/dev/null`.");

F("014.2", "Digite o arquivo de dispositivo que representa o segundo disco SATA/SCSI/USB (disco inteiro).", [
  "/dev/sdb",
], "sda = primeiro, sdb = segundo.");

F("014.2", "Digite o arquivo de dispositivo da primeira partição do primeiro disco NVMe.", [
  "/dev/nvme0n1p1",
], "Disco `nvme0n1` + partição `p1`.");

F("014.2", "Digite o caminho do diretório que contém o kernel e os arquivos do bootloader.", [
  "/boot", "/boot/",
], "Ali ficam o `vmlinuz` e o `initramfs`.");

F("014.2", "Digite o caminho do pseudo-dispositivo que fornece bytes pseudoaleatórios sem bloquear.", [
  "/dev/urandom",
], "Existe também `/dev/random`.");

F("014.2", "Digite o caminho do pseudo-dispositivo que fornece uma sequência infinita de bytes zero.", [
  "/dev/zero",
], "Usado com `dd` para criar arquivos ou zerar discos.");

F("014.2", "Digite o caminho do sistema de arquivos virtual que exporta informações de dispositivos e drivers do kernel (sysfs).", [
  "/sys", "/sys/",
], "Exemplo: `/sys/class/net/` lista as interfaces de rede.");
