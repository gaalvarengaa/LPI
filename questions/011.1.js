// 011.1
Q("011.1", "O que é o kernel Linux?", [
  "*O núcleo do sistema operacional, que gerencia hardware, memória, processos e dispositivos",
  "Uma distribuição Linux completa com ambiente gráfico",
  "O gerenciador de pacotes padrão de todas as distribuições",
  "O shell usado para digitar comandos",
], "O kernel é o núcleo do sistema: faz a ponte entre o hardware e os programas. Uma distribuição junta o kernel com programas do espaço de usuário (userspace).");

Q("011.1", "Qual dos itens abaixo faz parte do **kernel** e NÃO do espaço de usuário (userspace)?", [
  "*O escalonador de processos e os drivers de dispositivo",
  "O shell Bash",
  "A biblioteca C (glibc)",
  "O ambiente gráfico e o navegador",
], "Escalonamento de processos, gerenciamento de memória e drivers ficam no kernel. Shell, bibliotecas e aplicativos rodam no userspace.");

Q("011.1", "O que uma distribuição Linux normalmente oferece além do kernel?", [
  "*Programas de userspace, um gerenciador de pacotes, um instalador e repositórios de software",
  "Apenas o código-fonte do kernel para ser compilado pelo usuário",
  "Somente drivers de hardware proprietários",
  "Uma licença comercial obrigatória para uso do Linux",
], "Uma distribuição empacota o kernel com ferramentas, bibliotecas, aplicativos, gerenciador de pacotes, instalador e políticas de suporte.");

Q("011.1", "Quais destas distribuições são baseadas no Debian? (Escolha duas.)", [
  "*Ubuntu",
  "*Raspberry Pi OS",
  "Fedora Linux",
  "openSUSE Leap",
  "AlmaLinux",
], "Ubuntu e Raspberry Pi OS derivam do Debian e usam pacotes `.deb`. Fedora e AlmaLinux são da família Enterprise Linux (Red Hat); openSUSE é da família SUSE.");

Q("011.1", "Quais distribuições são reconstruções (rebuilds) compatíveis com o Red Hat Enterprise Linux? (Escolha duas.)", [
  "*AlmaLinux",
  "*Rocky Linux",
  "Ubuntu",
  "openSUSE Tumbleweed",
  "Alpine Linux",
], "AlmaLinux e Rocky Linux são distribuições comunitárias que buscam compatibilidade com o RHEL.");

Q("011.1", "Qual é a relação entre o CentOS Stream e o Red Hat Enterprise Linux (RHEL)?", [
  "*O CentOS Stream é desenvolvido logo à frente do RHEL, servindo de prévia das próximas versões menores do RHEL",
  "O CentOS Stream é uma cópia idêntica do RHEL lançada meses depois",
  "O CentOS Stream é baseado no Debian e não tem relação com o RHEL",
  "O CentOS Stream é a versão paga do RHEL com suporte estendido",
], "Desde 2021 o CentOS Stream fica \"upstream\" do RHEL: mudanças entram nele antes de chegar ao RHEL.");

Q("011.1", "Qual afirmação descreve melhor o Fedora Linux?", [
  "*Distribuição comunitária patrocinada pela Red Hat, que adota tecnologias novas que mais tarde chegam ao RHEL",
  "Distribuição comercial da SUSE para empresas",
  "Distribuição derivada do Ubuntu focada em servidores",
  "Distribuição minimalista baseada em musl e BusyBox",
], "O Fedora é a distribuição comunitária da família Red Hat. Tem ciclo curto e serve de base para o desenvolvimento do CentOS Stream e do RHEL.");

Q("011.1", "Qual distribuição da família SUSE segue o modelo **rolling release**?", [
  "*openSUSE Tumbleweed",
  "openSUSE Leap",
  "SUSE Linux Enterprise Server",
  "Rocky Linux",
], "Tumbleweed é rolling release (atualização contínua). O Leap tem lançamentos fixos e compartilha a base com o SUSE Linux Enterprise.");

Q("011.1", "Qual é a relação entre o openSUSE Leap e o SUSE Linux Enterprise?", [
  "*O Leap tem lançamentos fixos e compartilha a base de pacotes com o SUSE Linux Enterprise",
  "O Leap é uma rolling release independente da SUSE",
  "O Leap é baseado no Debian testing",
  "O Leap é a versão paga e o SUSE Linux Enterprise é a gratuita",
], "O openSUSE Leap é a versão comunitária de lançamentos regulares, construída a partir da mesma base do SUSE Linux Enterprise (SLE).");

Q("011.1", "O que caracteriza uma distribuição **rolling release**?", [
  "*Recebe atualizações contínuas, sem grandes saltos entre versões numeradas",
  "Só recebe atualizações de segurança por 10 anos",
  "Lança uma nova versão a cada dois anos, com suporte longo",
  "É distribuída apenas como imagem de container",
], "Na rolling release os pacotes são atualizados continuamente. Não existe \"upgrade de versão\": o sistema está sempre na versão mais recente.");

Q("011.1", "O que significa a sigla LTS em uma distribuição como o Ubuntu?", [
  "*Long-Term Support: versão com suporte e atualizações de segurança por um período estendido",
  "Linux Testing System: versão em teste antes do lançamento",
  "Lightweight Terminal Shell: versão sem interface gráfica",
  "Latest Technology Stack: versão com os pacotes mais novos",
], "LTS (Long-Term Support) prioriza estabilidade e recebe correções por vários anos. É a escolha comum para servidores e empresas.");

Q("011.1", "Com que frequência a Canonical lança uma versão LTS do Ubuntu?", [
  "*A cada dois anos",
  "A cada seis meses",
  "Todo mês",
  "A cada cinco anos",
], "O Ubuntu lança versões a cada seis meses (abril e outubro) e uma LTS a cada dois anos, em abril dos anos pares (ex.: 22.04, 24.04).");

Q("011.1", "No Debian, qual é o codinome permanente do ramo **unstable**?", [
  "*sid",
  "edge",
  "rawhide",
  "factory",
], "O unstable do Debian se chama sempre \"sid\". \"edge\" é do Alpine, \"rawhide\" é o desenvolvimento do Fedora e \"factory\" é do openSUSE.");

Q("011.1", "No Debian, pacotes novos passam por quais ramos até chegar à versão estável?", [
  "*unstable → testing → stable",
  "stable → testing → unstable",
  "testing → unstable → stable",
  "beta → alpha → stable",
], "Pacotes entram no unstable (sid), migram para o testing após um período sem bugs graves, e o testing é congelado para virar o próximo stable.");

Q("011.1", "No Alpine Linux, qual é o nome do ramo de desenvolvimento contínuo, com os pacotes mais recentes?", [
  "*edge",
  "sid",
  "main",
  "stream",
], "O Alpine tem versões estáveis numeradas e o ramo \"edge\", de desenvolvimento contínuo. \"main\" é o repositório principal de pacotes oficialmente suportados.");

Q("011.1", "Quais características descrevem o Alpine Linux? (Escolha duas.)", [
  "*É muito leve e popular como base de imagens de container",
  "*Usa a biblioteca musl libc e o BusyBox",
  "É derivado do Red Hat Enterprise Linux",
  "Usa o gerenciador de pacotes apt",
  "É exclusivo para computadores desktop",
], "O Alpine usa musl e BusyBox, ocupa pouquíssimo espaço e é muito usado em containers. O gerenciador de pacotes dele é o `apk`.");

Q("011.1", "Qual é a relação entre o Android e o Linux?", [
  "*O Android usa o kernel Linux, mas tem um userspace próprio, diferente das distribuições GNU/Linux tradicionais",
  "O Android é uma distribuição baseada no Debian",
  "O Android não tem nenhuma relação com o Linux",
  "O Android usa o kernel do macOS com ferramentas GNU",
], "O Android roda sobre o kernel Linux, mas sua camada de usuário (bibliotecas, runtime, aplicativos) é própria do Google. Programas de uma distro GNU/Linux não rodam diretamente nele.");

Q("011.1", "Qual afirmação sobre versões **alpha** e **beta** está correta?", [
  "*Alpha é um estágio inicial e instável; beta já tem os recursos principais e está em teste para encontrar bugs",
  "Beta vem antes do alpha no ciclo de desenvolvimento",
  "Versões alpha são recomendadas para servidores de produção",
  "Beta é o nome dado às versões com suporte de longo prazo",
], "Ordem típica: alpha (incompleto, instável) → beta (recursos completos, em teste) → release candidate → versão estável.");

Q("011.1", "O que acontece quando uma versão de uma distribuição chega ao fim de vida (EOL - End of Life)?", [
  "*Ela deixa de receber atualizações de segurança e correções",
  "Ela é apagada automaticamente dos computadores",
  "Ela passa a ser cobrada",
  "Ela é convertida automaticamente em rolling release",
], "Depois do EOL não há mais correções. Continuar usando a versão expõe o sistema a falhas conhecidas, por isso é preciso atualizar para uma versão suportada.");

Q("011.1", "Qual distribuição é paga e oferece suporte comercial da empresa SUSE?", [
  "*SUSE Linux Enterprise",
  "openSUSE Tumbleweed",
  "openSUSE Leap",
  "CentOS Stream",
], "SUSE Linux Enterprise (SLES/SLED) é o produto comercial com suporte. As versões openSUSE são comunitárias e gratuitas.");

Q("011.1", "Para um servidor de produção que deve ficar estável por muitos anos com poucas mudanças, qual tipo de versão é mais indicado?", [
  "*Uma versão LTS ou enterprise",
  "Uma versão alpha",
  "O ramo unstable do Debian",
  "Uma rolling release com os pacotes mais recentes",
], "Servidores de produção priorizam estabilidade e suporte longo, por isso versões LTS (Ubuntu LTS, Debian stable) ou enterprise (RHEL, SLES) são as mais indicadas.");

F("011.1", "Qual é o nome (uma palavra) do componente central do Linux que gerencia o hardware e os processos?", [
  "kernel", "Kernel", "núcleo",
], "O kernel é o núcleo do sistema operacional.");

Q("011.1", "Qual é o tipo de pacote usado nativamente por Debian e Ubuntu?", [
  "*`.deb`",
  "`.rpm`",
  "`.apk`",
  "`.msi`",
], "A família Debian usa `.deb` (ferramentas dpkg/apt). A família Red Hat e a SUSE usam `.rpm`.");

Q("011.1", "Quem criou o kernel Linux e em que ano ele foi anunciado?", [
  "*Linus Torvalds, em 1991",
  "Richard Stallman, em 1983",
  "Ken Thompson, em 1969",
  "Mark Shuttleworth, em 2004",
], "Linus Torvalds anunciou o kernel Linux em 1991. Stallman iniciou o projeto GNU em 1983; Thompson criou o Unix; Shuttleworth fundou a Canonical (Ubuntu).");

Q("011.1", "Por que algumas pessoas usam o termo **GNU/Linux** para se referir ao sistema operacional?", [
  "*Porque grande parte das ferramentas básicas do userspace vem do projeto GNU, enquanto o Linux é o kernel",
  "Porque GNU é o nome da empresa que vende o Linux",
  "Porque GNU é o ambiente gráfico padrão",
  "Porque o Linux só roda dentro do GNU Hurd",
], "O projeto GNU fornece compilador, bibliotecas, shell e utilitários; combinados ao kernel Linux formam um sistema completo.");

Q("011.1", "Qual destes **NÃO** é uma distribuição Linux?", [
  "*Windows Server",
  "Debian GNU/Linux",
  "Fedora Linux",
  "Alpine Linux",
], "Windows Server é um sistema da Microsoft, com kernel próprio.");

Q("011.1", "Qual distribuição é mantida por uma comunidade de voluntários, sem uma empresa por trás, e serve de base para muitas outras distribuições?", [
  "*Debian GNU/Linux",
  "Red Hat Enterprise Linux",
  "SUSE Linux Enterprise",
  "Ubuntu",
], "O Debian é um projeto comunitário. Ubuntu (Canonical), RHEL (Red Hat) e SLE (SUSE) são mantidos por empresas.");

Q("011.1", "Qual empresa mantém o Ubuntu?", [
  "*Canonical",
  "Red Hat",
  "SUSE",
  "Microsoft",
], "O Ubuntu é desenvolvido pela Canonical, fundada por Mark Shuttleworth.");

Q("011.1", "Qual é a ordem do fluxo de desenvolvimento na família Red Hat?", [
  "*Fedora → CentOS Stream → Red Hat Enterprise Linux",
  "Red Hat Enterprise Linux → CentOS Stream → Fedora",
  "CentOS Stream → Fedora → Red Hat Enterprise Linux",
  "Debian → Fedora → Red Hat Enterprise Linux",
], "Novidades aparecem primeiro no Fedora, depois o CentOS Stream prepara a próxima versão do RHEL. AlmaLinux e Rocky Linux são reconstruções compatíveis com o RHEL.");

Q("011.1", "Qual é o sistema operacional oficial do Raspberry Pi, baseado no Debian?", [
  "*Raspberry Pi OS",
  "Alpine Linux",
  "openSUSE Leap",
  "Rocky Linux",
], "O Raspberry Pi OS (antigo Raspbian) é derivado do Debian e otimizado para as placas Raspberry Pi.");

Q("011.1", "Qual é o nome do ramo de desenvolvimento contínuo do Fedora, de onde saem as próximas versões?", [
  "*Rawhide",
  "sid",
  "edge",
  "Tumbleweed",
], "Fedora Rawhide recebe os pacotes mais novos. sid é do Debian, edge é do Alpine e Tumbleweed é a rolling release do openSUSE.");

Q("011.1", "Um usuário quer sempre ter as versões mais recentes dos programas em uma distribuição da família SUSE, sem precisar fazer upgrades de versão. Qual ele deve escolher?", [
  "*openSUSE Tumbleweed",
  "openSUSE Leap",
  "SUSE Linux Enterprise Server",
  "CentOS Stream",
], "Tumbleweed é rolling release; Leap e SLES têm versões fixas.");

Q("011.1", "No Debian, qual ramo contém a próxima versão estável que está sendo preparada?", [
  "*testing",
  "stable",
  "oldstable",
  "experimental",
], "O testing recebe pacotes vindos do unstable e é congelado antes de se tornar o novo stable.");

Q("011.1", "Como funciona a numeração das versões do Ubuntu, como 24.04?", [
  "*Indica o ano e o mês do lançamento (abril de 2024)",
  "Indica a versão do kernel usada",
  "Indica 24 anos de suporte e 4 atualizações",
  "É um número sequencial sem significado",
], "O formato é AA.MM. As versões LTS saem em abril de anos pares, por isso terminam em .04.");

Q("011.1", "Por quanto tempo, aproximadamente, uma versão **não-LTS** (intermediária) do Ubuntu recebe suporte?", [
  "*Cerca de 9 meses",
  "5 anos",
  "10 anos",
  "Para sempre",
], "As versões intermediárias são lançadas a cada 6 meses e têm suporte de cerca de 9 meses. As LTS têm 5 anos de suporte padrão.");

Q("011.1", "Quais distribuições usam pacotes no formato **RPM**? (Escolha duas.)", [
  "*Fedora Linux",
  "*openSUSE Leap",
  "Ubuntu",
  "Raspberry Pi OS",
  "Alpine Linux",
], "As famílias Red Hat e SUSE usam RPM. Debian/Ubuntu/Raspberry Pi OS usam `.deb` e o Alpine usa `.apk`.");

Q("011.1", "O que uma distribuição **derivada** (como o Ubuntu em relação ao Debian) normalmente herda da distribuição original?", [
  "*O formato de pacotes e boa parte das ferramentas e da base de software",
  "Apenas o papel de parede",
  "Nada, distribuições derivadas são escritas do zero",
  "O mesmo calendário de lançamentos, obrigatoriamente",
], "Derivadas reaproveitam a base da original e acrescentam mudanças próprias, como outro ciclo de lançamentos ou configurações padrão.");

Q("011.1", "Qual comando mostra a versão do kernel Linux em execução?", [
  "*`uname -r`",
  "`kernel --version`",
  "`ls /kernel`",
  "`echo $KERNEL`",
], "`uname -r` imprime a versão (release) do kernel; `uname -a` mostra mais informações.");

F("011.1", "Digite o comando (com a opção) que exibe a versão do kernel em execução.", [
  "uname -r",
], "`uname -r` mostra o release do kernel, por exemplo `6.8.0-45-generic`.");

Q("011.1", "Como um programa no espaço de usuário (userspace) pede ao kernel para ler um arquivo ou usar a rede?", [
  "*Por meio de chamadas de sistema (system calls)",
  "Acessando o hardware diretamente, sem passar pelo kernel",
  "Editando o arquivo /boot/vmlinuz",
  "Enviando um e-mail ao administrador",
], "Programas comuns não acessam o hardware diretamente: usam system calls, e o kernel executa a operação.");

Q("011.1", "Quais sistemas operacionais usam o kernel Linux? (Escolha duas.)", [
  "*Android",
  "*ChromeOS",
  "iOS",
  "Windows 11",
  "macOS",
], "Android e ChromeOS usam o kernel Linux. iOS e macOS usam o kernel XNU (Darwin); o Windows usa o kernel NT.");

Q("011.1", "Qual afirmação sobre o ramo **unstable** (sid) do Debian está correta?", [
  "*Recebe pacotes novos continuamente e não conta com o suporte de segurança oficial da versão stable",
  "É a versão recomendada para servidores de produção",
  "É congelado e nunca recebe atualizações",
  "É a versão com suporte de longo prazo (LTS)",
], "O unstable é onde o desenvolvimento acontece. Para produção, o recomendado é o stable.");

Q("011.1", "Qual desvantagem costuma ser associada às distribuições **rolling release**?", [
  "*Mudanças frequentes podem introduzir incompatibilidades ou quebras após atualizações",
  "Os programas ficam muito desatualizados",
  "É obrigatório reinstalar o sistema a cada versão",
  "Não é possível instalar pacotes novos",
], "Software sempre novo traz mais mudanças. Distribuições de versão fixa trocam novidades por previsibilidade.");

Q("011.1", "O Debian lançou a versão 12.5 depois da 12.0. O que representa essa versão **pontual** (point release)?", [
  "*Uma atualização da mesma versão estável, reunindo correções de segurança e de bugs",
  "Uma nova versão principal com mudanças grandes",
  "Uma versão beta da versão 13",
  "Uma versão apenas para Raspberry Pi",
], "Point releases acumulam correções. Quem mantém o sistema atualizado já recebe essas correções normalmente.");

Q("011.1", "Distribuições **enterprise** como RHEL e SUSE Linux Enterprise são conhecidas por oferecer:", [
  "*Ciclos de suporte longos (cerca de 10 anos ou mais) e suporte comercial",
  "Atualizações diárias com as versões mais novas dos programas",
  "Uso exclusivo em celulares",
  "Distribuição gratuita sem nenhum tipo de suporte",
], "Empresas valorizam estabilidade, certificação de hardware/software e suporte por muitos anos.");

Q("011.1", "Uma empresa quer rodar um software certificado para o Red Hat Enterprise Linux, mas sem pagar assinatura. Qual distribuição é a melhor escolha?", [
  "*Rocky Linux ou AlmaLinux",
  "openSUSE Tumbleweed",
  "Debian unstable",
  "Alpine edge",
], "Rocky Linux e AlmaLinux são compatíveis com o RHEL e gratuitas.");

Q("011.1", "Qual é a característica de uma versão **stable** de uma distribuição?", [
  "*Foi testada e é recomendada para uso em produção, recebendo principalmente correções",
  "Contém sempre a versão mais nova de todos os programas",
  "Só pode ser usada para testes",
  "Não recebe atualizações de segurança",
], "Na versão estável os pacotes ficam \"congelados\" em versões testadas e recebem principalmente correções de segurança e de bugs.");

F("011.1", "Qual empresa mantém o Ubuntu? (uma palavra)", [
  "Canonical", "canonical",
], "A Canonical desenvolve o Ubuntu e oferece suporte comercial a ele.");

Q("011.1", "Qual destas distribuições é a melhor opção para gerar uma imagem de container muito pequena?", [
  "*Alpine Linux",
  "Red Hat Enterprise Linux com ambiente gráfico",
  "openSUSE Leap com KDE",
  "Ubuntu Desktop",
], "A imagem base do Alpine tem poucos megabytes, por isso é muito usada em containers.");

Q("011.1", "O que é o **repositório main** do Alpine Linux?", [
  "*O repositório de pacotes principais oficialmente suportados pelo projeto",
  "O ramo instável de desenvolvimento",
  "O nome do kernel usado pelo Alpine",
  "Um repositório de pacotes .deb",
], "O Alpine tem os repositórios main (pacotes suportados) e community, e versões estáveis além do ramo edge.");
