// 014.1
Q("014.1", "O que é um arquivo **ISO** no contexto de instalação do Linux?", [
  "*Uma imagem de disco que contém a mídia de instalação (ou sistema live) de uma distribuição",
  "Um pacote de software individual",
  "Um arquivo de configuração de rede",
  "Um driver de placa de vídeo",
], "O ISO é gravado em um pendrive ou DVD, ou conectado a uma máquina virtual como drive óptico virtual.");

Q("014.1", "Como normalmente se instala Linux em um computador físico a partir de um arquivo ISO?", [
  "*Gravando o ISO em um pendrive (ou DVD) inicializável e dando boot por ele",
  "Copiando o ISO para a área de trabalho do Windows e clicando duas vezes",
  "Renomeando o ISO para .exe",
  "Enviando o ISO por e-mail para o computador",
], "Ferramentas como `dd`, balenaEtcher, Rufus ou o Fedora Media Writer criam a mídia inicializável.");

Q("014.1", "O computador continua iniciando o sistema antigo mesmo com o pendrive de instalação conectado. O que provavelmente precisa ser ajustado?", [
  "*A ordem de boot no firmware (BIOS/UEFI) ou o menu de inicialização",
  "O arquivo `/etc/passwd`",
  "O PATH do usuário",
  "A permissão do arquivo ISO",
], "O firmware decide de qual dispositivo iniciar. Muitos computadores têm uma tecla (F12, F8, Esc) para escolher o dispositivo de boot.");

Q("014.1", "O que é um sistema **live**?", [
  "*Um sistema que roda diretamente do pendrive ou DVD, sem precisar ser instalado no disco",
  "Um sistema que só funciona conectado à internet",
  "Um sistema que transmite vídeo ao vivo",
  "Uma instância em nuvem",
], "Muito útil para testar a compatibilidade do hardware antes de instalar ou para recuperar um sistema.");

Q("014.1", "O que é **dual boot**?", [
  "*Ter dois (ou mais) sistemas operacionais instalados no mesmo computador e escolher qual iniciar no boot",
  "Rodar dois sistemas ao mesmo tempo em máquinas virtuais",
  "Iniciar o computador duas vezes seguidas",
  "Ter dois discos rígidos em RAID",
], "Exemplo comum: Windows e Linux no mesmo disco, em partições diferentes.");

Q("014.1", "Em um computador com dual boot entre Linux e Windows, qual componente normalmente apresenta o menu para escolher o sistema?", [
  "*O bootloader, como o GRUB",
  "O gerenciador de pacotes",
  "O shell Bash",
  "O systemd-journald",
], "O GRUB é o bootloader mais comum nas distribuições Linux.");

Q("014.1", "Antes de instalar Linux em dual boot com um Windows existente, quais cuidados são importantes? (Escolha duas.)", [
  "*Fazer backup dos dados importantes",
  "*Liberar espaço em disco (por exemplo, reduzindo a partição do Windows)",
  "Apagar a partição do Windows",
  "Desativar a placa de rede",
  "Desinstalar todos os programas do Windows",
], "Mexer em partições sempre traz risco de perda de dados; o Linux precisa de espaço livre para suas próprias partições.");

Q("014.1", "Em um dual boot, por que tradicionalmente se recomenda instalar o Windows **antes** do Linux?", [
  "*Porque o instalador do Windows costuma substituir o bootloader sem reconhecer o Linux, enquanto o instalador Linux detecta o Windows e o inclui no menu",
  "Porque o Linux não consegue ser instalado depois",
  "Porque o Windows precisa de mais memória",
  "Não há diferença na ordem",
], "Se o Windows for instalado depois, normalmente é preciso reparar o GRUB.");

Q("014.1", "Como se instala uma distribuição Linux dentro de uma **máquina virtual**?", [
  "*Criando a VM no hipervisor e conectando o arquivo ISO como um drive óptico virtual para dar boot",
  "Copiando os arquivos do ISO para a pasta da VM",
  "Não é possível instalar Linux em VMs",
  "Instalando o Linux no host e copiando para a VM",
], "O processo dentro da VM é igual ao de um computador físico.");

Q("014.1", "Quais são vantagens de testar o Linux em uma máquina virtual? (Escolha duas.)", [
  "*Não altera o sistema operacional nem as partições do computador hospedeiro",
  "*Permite criar snapshots e voltar a um estado anterior",
  "Oferece desempenho sempre superior ao hardware físico",
  "Dispensa o uso de memória RAM",
], "VMs isolam o sistema convidado e facilitam experimentos.");

Q("014.1", "Como normalmente se obtém um servidor Linux em um provedor de nuvem?", [
  "*Criando uma instância a partir de uma imagem de sistema pronta, sem passar pelo instalador tradicional",
  "Enviando um pendrive pelo correio",
  "Gravando um DVD e enviando ao datacenter",
  "Instalando a partir de um ISO em um computador local e enviando o disco",
], "O provedor oferece imagens prontas das distribuições; a instância fica pronta em minutos.");

Q("014.1", "Para que serve o **cloud-init** em instâncias de nuvem?", [
  "*Aplicar a configuração inicial na primeira inicialização, como hostname, usuários e chaves SSH",
  "Instalar o Windows na nuvem",
  "Criptografar o disco local do usuário",
  "Substituir o kernel Linux",
], "O cloud-init lê dados fornecidos pelo provedor (user-data) e personaliza a instância.");

Q("014.1", "Qual é a forma mais comum de acessar uma instância Linux recém-criada na nuvem?", [
  "*Por SSH, usando um par de chaves configurado na criação",
  "Conectando monitor e teclado ao servidor",
  "Por Telnet sem senha",
  "Pelo arquivo /etc/hosts",
], "Os provedores injetam sua chave pública em `~/.ssh/authorized_keys` da instância.");

Q("014.1", "O que é uma **imagem de sistema operacional** como as usadas no Raspberry Pi?", [
  "*Uma cópia de um sistema já instalado, que é gravada diretamente no cartão ou disco e inicia sem instalador",
  "Uma captura de tela do sistema",
  "Um arquivo ISO que precisa de um instalador gráfico",
  "Um pacote .deb",
], "Ferramentas como o Raspberry Pi Imager gravam a imagem no cartão microSD.");

Q("014.1", "O que é o **Windows Subsystem for Linux (WSL)**?", [
  "*Um recurso do Windows que permite executar distribuições Linux e suas ferramentas de linha de comando dentro do Windows",
  "Um programa que instala o Windows dentro do Linux",
  "Um driver para ler partições ext4",
  "Uma distribuição Linux da Microsoft para servidores",
], "Na versão WSL 2, um kernel Linux real roda em uma máquina virtual leve gerenciada pelo Windows.");

Q("014.1", "Na versão WSL 2 do Windows Subsystem for Linux, como os programas Linux são executados?", [
  "*Sobre um kernel Linux real, executado em uma máquina virtual leve",
  "Traduzidos para chamadas do kernel do Windows, sem kernel Linux",
  "Em um emulador de processador ARM",
  "Apenas em um navegador web",
], "O WSL 1 traduzia chamadas de sistema; o WSL 2 usa um kernel Linux de verdade.");

Q("014.1", "Qual diferença entre Windows e Linux em relação aos caminhos de arquivos está correta?", [
  "*O Windows usa letras de unidade (C:) e barra invertida `\\`; o Linux usa uma árvore única a partir de `/` com barra normal",
  "Os dois usam letras de unidade",
  "O Linux usa barra invertida e o Windows usa barra normal",
  "O Linux não tem diretórios",
], "No Linux, discos e partições são montados em diretórios da árvore, como `/home` ou `/mnt/dados`.");

Q("014.1", "Qual afirmação sobre o macOS está correta?", [
  "*É um sistema baseado em Unix (Darwin, com componentes BSD), por isso muitos comandos de terminal são parecidos com os do Linux",
  "É uma distribuição Linux",
  "Usa o kernel do Windows",
  "Não possui terminal",
], "O macOS é certificado como UNIX, mas não usa o kernel Linux.");

Q("014.1", "Qual sistema de arquivos é o padrão de muitas distribuições Linux?", [
  "*ext4",
  "NTFS",
  "FAT16",
  "APFS",
], "NTFS é do Windows e APFS do macOS. Distribuições também usam XFS e Btrfs.");

Q("014.1", "Sobre a leitura de sistemas de arquivos entre sistemas operacionais, qual afirmação é correta?", [
  "*O Linux consegue ler e gravar partições NTFS e FAT; o Windows não lê ext4 nativamente",
  "O Windows lê ext4 nativamente, mas o Linux não lê NTFS",
  "Nenhum dos dois lê o sistema de arquivos do outro",
  "Ambos usam o mesmo sistema de arquivos por padrão",
], "Isso facilita compartilhar uma partição de dados em dual boot usando NTFS ou exFAT.");

Q("014.1", "Como normalmente se instalam programas no Linux, em comparação com o Windows?", [
  "*Pelo gerenciador de pacotes, a partir de repositórios confiáveis da distribuição",
  "Baixando arquivos .exe de sites aleatórios",
  "Apenas compilando o código-fonte",
  "Apenas pela loja da Microsoft",
], "Repositórios oferecem software assinado e atualizações centralizadas.");

Q("014.1", "Um programa `.exe` feito para Windows pode ser executado diretamente no Linux?", [
  "*Não nativamente; seria necessária uma camada de compatibilidade como o Wine ou uma máquina virtual",
  "Sim, sempre",
  "Sim, basta dar permissão de execução",
  "Sim, basta renomear para .sh",
], "Os formatos de executáveis e as interfaces do sistema são diferentes.");

Q("014.1", "Depois de baixar o ISO de uma distribuição, como verificar se o arquivo não está corrompido ou foi adulterado?", [
  "*Comparando o hash (ex.: `sha256sum arquivo.iso`) com o valor publicado pela distribuição",
  "Abrindo o ISO em um editor de texto",
  "Verificando se o nome termina em .iso",
  "Conferindo a data de modificação",
], "Distribuições publicam somas de verificação (e assinaturas GPG) dos seus ISOs.");

Q("014.1", "Quais etapas fazem parte de uma instalação típica de Linux? (Escolha três.)", [
  "*Particionar o disco (ou escolher onde instalar)",
  "*Criar uma conta de usuário",
  "*Definir fuso horário e layout de teclado",
  "Comprar uma licença do Linux",
  "Instalar o Microsoft Office",
], "Os instaladores guiam por idioma, teclado, disco, fuso horário e usuário.");

Q("014.1", "Em relação a nomes de arquivos, qual diferença costuma existir entre Linux e Windows?", [
  "*No Linux, `Foto.jpg` e `foto.jpg` são arquivos diferentes; no Windows, normalmente são o mesmo",
  "No Windows os nomes diferenciam maiúsculas e no Linux não",
  "Nenhum dos dois aceita letras maiúsculas",
  "O Linux não aceita pontos em nomes",
], "Os sistemas de arquivos nativos do Linux diferenciam maiúsculas de minúsculas.");

Q("014.1", "Por que usar um sistema live antes de instalar o Linux em um notebook?", [
  "*Para verificar se o hardware (Wi-Fi, vídeo, som, touchpad) funciona bem antes de alterar o disco",
  "Porque é obrigatório pela licença",
  "Para apagar o Windows automaticamente",
  "Para atualizar o BIOS",
], "O sistema live roda da memória e não altera o disco, a menos que você instale.");
