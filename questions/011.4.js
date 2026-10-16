// 011.4
Q("011.4", "Em quais tipos de computador o Linux é usado? (Escolha três.)", [
  "*Servidores e instâncias em nuvem",
  "*Sistemas embarcados, como roteadores e TVs",
  "*Supercomputadores e clusters HPC",
  "Somente em computadores com processador x86",
  "Apenas em servidores, nunca em desktops",
], "O Linux roda de dispositivos embarcados a supercomputadores, passando por desktops, laptops, celulares (Android) e servidores, em várias arquiteturas (x86, ARM etc.).");

Q("011.4", "O que é um **sistema embarcado**?", [
  "*Um computador dedicado a uma função específica dentro de um equipamento, como roteadores, TVs ou carros",
  "Um computador desktop com várias telas",
  "Um servidor na nuvem",
  "Uma máquina virtual temporária",
], "Sistemas embarcados têm hardware limitado e propósito específico. O Linux é muito comum nesse tipo de dispositivo.");

Q("011.4", "O que é um cluster de HPC (High Performance Computing)?", [
  "*Vários computadores interligados trabalhando juntos em cálculos intensivos",
  "Um único computador com placa de vídeo potente",
  "Um tipo de pendrive de alta velocidade",
  "Uma distribuição Linux para jogos",
], "Praticamente todos os supercomputadores da lista TOP500 rodam Linux.");

Q("011.4", "O que é uma **máquina virtual**?", [
  "*Um computador simulado por software (hipervisor), que executa seu próprio sistema operacional sobre o hardware físico",
  "Um computador sem disco rígido",
  "Um programa que roda só dentro do navegador",
  "Um processo do kernel",
], "O hipervisor (KVM, VirtualBox, VMware etc.) divide o hardware entre várias VMs, cada uma com seu próprio kernel e SO.");

Q("011.4", "Qual é a principal diferença entre **containers** e **máquinas virtuais**?", [
  "*Containers compartilham o kernel do sistema hospedeiro; VMs executam seu próprio kernel completo",
  "Containers sempre precisam de um hipervisor; VMs não",
  "VMs são mais leves que containers",
  "Containers só funcionam no Windows",
], "Por compartilharem o kernel, containers (Docker, Podman) iniciam rápido e usam menos recursos, mas não podem rodar um kernel diferente do host.");

Q("011.4", "O que é uma **instância na nuvem** (cloud instance)?", [
  "*Uma máquina virtual criada sob demanda em um provedor de nuvem e paga conforme o uso",
  "Um computador físico comprado pelo usuário",
  "Um tipo de pendrive inicializável",
  "Um arquivo ISO de instalação",
], "Provedores como AWS, Azure e Google Cloud oferecem instâncias criadas a partir de imagens de sistema prontas.");

Q("011.4", "No modelo **cliente-servidor**, qual afirmação está correta?", [
  "*O servidor oferece um serviço e o cliente faz requisições a esse serviço",
  "O cliente sempre é mais potente que o servidor",
  "Um computador nunca pode ser cliente e servidor ao mesmo tempo",
  "Servidores não usam rede",
], "Exemplo: o navegador (cliente) faz requisições ao servidor web. Um mesmo computador pode ter papéis de cliente e servidor.");

Q("011.4", "Qual editor de texto em modo terminal é conhecido pela simplicidade e mostra os atalhos de teclado na parte de baixo da tela?", [
  "*nano",
  "vi",
  "LibreOffice Writer",
  "GIMP",
], "O nano mostra atalhos como `^X` (Ctrl+X para sair) e `^O` (salvar) no rodapé.");

Q("011.4", "Qual editor de texto está presente em praticamente qualquer sistema Unix/Linux e trabalha com modos (de comando e de inserção)?", [
  "*vi",
  "nano",
  "Notepad",
  "Inkscape",
], "O vi (e seu sucessor vim) é modal: no modo normal as teclas são comandos; no modo de inserção você digita texto.");

Q("011.4", "No editor vi, qual comando sai **descartando** as alterações não salvas?", [
  "*`:q!`",
  "`:wq`",
  "`:w`",
  "`ZZ`",
], "`:q!` sai sem salvar. `:wq` e `ZZ` salvam e saem; `:w` só salva.");

Q("011.4", "Quais ferramentas são de **gerenciamento de configuração**? (Escolha duas.)", [
  "*Ansible",
  "*Puppet",
  "GIMP",
  "VLC",
  "Thunderbird",
], "Ansible, Puppet, Chef e Salt automatizam a configuração de muitos sistemas a partir de descrições declarativas.");

Q("011.4", "Qual é o objetivo das ferramentas de gerenciamento de configuração?", [
  "*Automatizar a configuração de muitos sistemas de forma consistente e repetível",
  "Editar imagens em lote",
  "Substituir o kernel Linux",
  "Criptografar o disco",
], "Em vez de configurar servidor por servidor manualmente, descreve-se o estado desejado e a ferramenta aplica em todos.");

Q("011.4", "Qual destas é a melhor prática para senhas?", [
  "*Usar senhas longas e únicas para cada serviço, guardadas em um gerenciador de senhas",
  "Usar a mesma senha forte em todos os serviços",
  "Anotar as senhas em um papel colado no monitor",
  "Usar uma senha curta e fácil de lembrar, trocando todo mês",
], "Senhas longas e únicas impedem que o vazamento de um serviço comprometa os outros. O gerenciador de senhas torna isso prático.");

Q("011.4", "Por que reutilizar a mesma senha em vários sites é perigoso?", [
  "*Se um site vazar a senha, atacantes podem usá-la para entrar nas outras contas",
  "Porque os sites bloqueiam senhas repetidas",
  "Porque deixa o computador mais lento",
  "Não há perigo se a senha for longa",
], "Esse ataque é chamado de credential stuffing: senhas vazadas são testadas em vários serviços.");

Q("011.4", "O que faz um **gerenciador de senhas**?", [
  "*Armazena senhas de forma criptografada e ajuda a gerar senhas fortes e únicas",
  "Envia as senhas por e-mail para o usuário",
  "Remove a necessidade de qualquer autenticação",
  "Troca automaticamente a senha do root a cada login",
], "O usuário só precisa lembrar uma senha mestra forte. Exemplos: KeePassXC, Bitwarden.");

Q("011.4", "O que é **autenticação multifator (MFA)**?", [
  "*Exigir dois ou mais fatores diferentes, como algo que você sabe (senha) e algo que você tem (celular ou chave de segurança)",
  "Usar duas senhas diferentes no mesmo login",
  "Fazer login em vários computadores ao mesmo tempo",
  "Trocar a senha a cada acesso",
], "Os fatores são: algo que você sabe, algo que você tem e algo que você é (biometria). Mesmo se a senha vazar, o atacante precisa do outro fator.");

Q("011.4", "O que são **passkeys**?", [
  "*Credenciais baseadas em criptografia de chave pública que substituem senhas e são resistentes a phishing",
  "Senhas curtas de quatro dígitos",
  "Arquivos de texto com senhas guardados na área de trabalho",
  "Chaves físicas de porta para salas de servidores",
], "Com passkeys (padrão FIDO2/WebAuthn), a chave privada fica no dispositivo do usuário e o site guarda só a chave pública. Não há senha para ser roubada.");

Q("011.4", "O que o HTTPS acrescenta ao HTTP?", [
  "*Criptografia (TLS) da comunicação e autenticação do servidor por certificado",
  "Compressão de imagens",
  "Mais velocidade em redes lentas",
  "Suporte a vídeos",
], "HTTPS é HTTP sobre TLS. Impede que terceiros leiam ou alterem os dados no caminho.");

Q("011.4", "Qual protocolo transmite dados, inclusive senhas, **sem criptografia** e deve ser evitado?", [
  "*Telnet",
  "SSH",
  "HTTPS",
  "SFTP",
], "Telnet e FTP enviam tudo em texto puro. Use SSH, SFTP e HTTPS.");

Q("011.4", "Qual é o benefício de criptografar o disco de um notebook (por exemplo, com LUKS)?", [
  "*Se o equipamento for perdido ou roubado, os dados não podem ser lidos sem a chave",
  "O sistema fica mais rápido",
  "Protege contra todos os vírus",
  "Dispensa o uso de senhas de login",
], "A criptografia de armazenamento protege dados em repouso (data at rest).");

Q("011.4", "Qual é a atitude correta ao encontrar um pendrive USB desconhecido?", [
  "*Não conectá-lo ao computador, pois pode conter malware ou se passar por um teclado",
  "Conectá-lo para descobrir de quem é",
  "Conectá-lo apenas em um servidor de produção",
  "Formatá-lo conectando no computador do trabalho",
], "Dispositivos USB maliciosos podem instalar malware ou simular um teclado digitando comandos (ataques como BadUSB).");

F("011.4", "Qual editor de terminal (2 letras) está presente em praticamente qualquer sistema Unix e usa modo de inserção e modo de comando?", [
  "vi",
], "O vi é o editor padrão do mundo Unix.");

Q("011.4", "Qual é a característica típica de um servidor Linux em um datacenter?", [
  "*Funciona continuamente, geralmente sem interface gráfica, e é administrado remotamente",
  "É desligado todas as noites",
  "Precisa sempre de monitor, teclado e mouse conectados",
  "Só executa aplicativos de escritório",
], "Servidores costumam ser \"headless\" e são gerenciados via SSH ou ferramentas de automação.");

Q("011.4", "Quais são **hipervisores** usados para executar máquinas virtuais? (Escolha duas.)", [
  "*KVM",
  "*VirtualBox",
  "Ansible",
  "nano",
  "Thunderbird",
], "KVM (integrado ao kernel Linux), VirtualBox, VMware e Hyper-V são hipervisores.");

Q("011.4", "Quais ferramentas são usadas para executar **containers**? (Escolha duas.)", [
  "*Docker",
  "*Podman",
  "GIMP",
  "Puppet",
  "LibreOffice",
], "Docker e Podman criam e executam containers a partir de imagens.");

Q("011.4", "O que é uma **imagem de container**?", [
  "*Um pacote com uma aplicação e todas as suas dependências, usado para criar containers",
  "Uma foto da tela do servidor",
  "Um arquivo ISO de instalação de desktop",
  "Uma cópia do kernel do host",
], "A imagem contém o sistema de arquivos necessário para a aplicação. O container é a imagem em execução.");

Q("011.4", "No modelo de nuvem **IaaS** (Infraestrutura como Serviço), o que o cliente recebe?", [
  "*Máquinas virtuais, rede e armazenamento, cabendo a ele gerenciar o sistema operacional e as aplicações",
  "Apenas um aplicativo pronto acessado pelo navegador",
  "Um computador físico entregue em casa",
  "Somente um domínio de internet",
], "IaaS fornece infraestrutura; PaaS fornece plataforma para rodar aplicações; SaaS entrega o software pronto.");

Q("011.4", "Um serviço de webmail usado diretamente pelo navegador, sem que o usuário gerencie servidores, é um exemplo de:", [
  "*SaaS (Software como Serviço)",
  "IaaS (Infraestrutura como Serviço)",
  "Hipervisor",
  "Sistema embarcado",
], "No SaaS o provedor cuida de tudo e o usuário só usa a aplicação.");

Q("011.4", "Qual é uma vantagem da computação em nuvem?", [
  "*Escalar recursos rapidamente conforme a demanda, pagando pelo que usar",
  "Não precisar de internet",
  "Garantir que os dados nunca saiam do computador do usuário",
  "Eliminar a necessidade de segurança",
], "A elasticidade permite criar e destruir instâncias sob demanda.");

Q("011.4", "Quais são exemplos de **sistemas embarcados** que frequentemente rodam Linux? (Escolha duas.)", [
  "*Roteador Wi-Fi doméstico",
  "*Smart TV",
  "Estação de trabalho de engenharia",
  "Notebook de escritório",
], "Roteadores, TVs, câmeras, centrais multimídia de carros e dispositivos IoT costumam usar Linux embarcado.");

Q("011.4", "Qual fração dos 500 supercomputadores mais rápidos do mundo (lista TOP500) roda Linux?", [
  "*Praticamente todos (100%)",
  "Cerca de metade",
  "Nenhum",
  "Cerca de 10%",
], "Desde 2017 todos os sistemas da lista TOP500 usam Linux.");

Q("011.4", "No editor nano, quais atalhos salvam o arquivo e saem do editor, respectivamente?", [
  "*`Ctrl+O` e `Ctrl+X`",
  "`:w` e `:q`",
  "`Ctrl+S` e `Ctrl+Q`",
  "`Esc` e `Enter`",
], "No rodapé do nano, `^O` significa Ctrl+O (Write Out) e `^X` significa Ctrl+X (Exit).");

F("011.4", "No nano, qual combinação de teclas sai do editor? (formato Ctrl+Letra)", [
  "Ctrl+X", "ctrl+x", "Ctrl+x", "^X", "CTRL+X",
], "`Ctrl+X` sai; se houver alterações, o nano pergunta se deseja salvar.");

Q("011.4", "No vi, qual tecla volta do modo de inserção para o modo normal (de comandos)?", [
  "*`Esc`",
  "`i`",
  "`Ctrl+X`",
  "`Tab`",
], "`i` entra no modo de inserção; `Esc` volta ao modo normal, onde se digitam comandos como `:w` e `:q`.");

Q("011.4", "No vi, qual tecla entra no modo de inserção para começar a digitar texto?", [
  "*`i`",
  "`Esc`",
  "`:`",
  "`q`",
], "Também existem `a` (inserir após o cursor) e `o` (nova linha abaixo).");

Q("011.4", "No vi, qual comando salva o arquivo e sai?", [
  "*`:wq`",
  "`:q!`",
  "`Ctrl+O`",
  "`:e`",
], "`:wq` grava (w) e sai (q). `:x` e `ZZ` têm efeito parecido.");

Q("011.4", "O que é o **vim**?", [
  "*Uma versão melhorada do vi (Vi IMproved), com recursos extras como realce de sintaxe",
  "Um gerenciador de pacotes",
  "Um navegador de modo texto",
  "Uma ferramenta de gerenciamento de configuração",
], "Em muitas distribuições o comando `vi` na verdade executa o vim.");

Q("011.4", "Qual ferramenta de gerenciamento de configuração funciona **sem agente**, conectando-se via SSH e usando arquivos YAML chamados playbooks?", [
  "*Ansible",
  "Puppet",
  "Docker",
  "VirtualBox",
], "O Ansible só precisa de SSH e Python nos hosts gerenciados. O Puppet tradicionalmente usa um agente instalado em cada máquina.");

Q("011.4", "O que significa **Infraestrutura como Código** (IaC)?", [
  "*Descrever servidores e configurações em arquivos de texto versionáveis, aplicados por ferramentas automatizadas",
  "Programar o kernel em linguagem C",
  "Escrever código diretamente no servidor de produção",
  "Usar apenas interfaces gráficas para configurar sistemas",
], "Com IaC (Ansible, Puppet, Terraform) a configuração pode ser revisada, versionada no Git e reproduzida.");

Q("011.4", "Você recebe um e-mail do \"banco\" pedindo que clique em um link e digite sua senha para \"evitar o bloqueio da conta\". Isso é um exemplo típico de:", [
  "*Phishing",
  "Autenticação multifator",
  "Criptografia de disco",
  "Backup",
], "Phishing usa mensagens falsas para roubar credenciais. Desconfie de urgência e verifique o endereço do site.");

Q("011.4", "Qual segundo fator de autenticação é considerado **mais seguro**?", [
  "*Uma chave de segurança física (FIDO2) ou passkey",
  "Um código enviado por SMS",
  "Uma pergunta secreta como \"nome do seu primeiro animal\"",
  "Uma segunda senha",
], "SMS pode ser interceptado ou sofrer clonagem de chip; perguntas secretas são fáceis de descobrir. Chaves FIDO2 e passkeys resistem a phishing.");

Q("011.4", "O cadeado do HTTPS no navegador garante que:", [
  "*A conexão com aquele servidor está criptografada",
  "O site é honesto e não é golpe",
  "O computador está livre de vírus",
  "A senha do usuário é forte",
], "Sites de phishing também podem ter HTTPS. O cadeado indica criptografia, não idoneidade.");

Q("011.4", "Ao usar uma rede Wi-Fi pública, qual cuidado ajuda a proteger seus dados?", [
  "*Usar apenas conexões criptografadas, como HTTPS, SSH ou uma VPN",
  "Desativar o firewall",
  "Usar Telnet para acessar servidores",
  "Compartilhar a senha com a rede",
], "Em redes abertas outras pessoas podem capturar tráfego não criptografado.");

Q("011.4", "Qual é uma boa prática para **armazenar** dados sensíveis com segurança?", [
  "*Manter backups criptografados e em mais de um local",
  "Guardar uma única cópia em um pendrive sem criptografia",
  "Enviar os dados por e-mail para si mesmo",
  "Salvar tudo em /tmp",
], "Backups protegem contra perda; criptografia protege contra acesso indevido se a mídia for extraviada.");

Q("011.4", "Por que é importante instalar regularmente as **atualizações de segurança** do sistema?", [
  "*Elas corrigem vulnerabilidades conhecidas que poderiam ser exploradas por atacantes",
  "Elas sempre deixam o computador mais rápido",
  "Elas removem a necessidade de senhas",
  "Elas mudam o papel de parede",
], "Muitos ataques exploram falhas já corrigidas em sistemas que não foram atualizados.");

Q("011.4", "Qual destas senhas é a mais forte?", [
  "*`cavalo-grampo-bateria-correto-17!`",
  "`123456`",
  "`Senha2024`",
  "`maria1990`",
], "Senhas longas (frases-senha) com vários elementos são muito mais difíceis de adivinhar do que palavras comuns com números.");

Q("011.4", "Por que se deve usar SSH em vez de Telnet para acessar um servidor remoto?", [
  "*O SSH criptografa toda a sessão, incluindo a senha",
  "O Telnet não funciona no Linux",
  "O SSH dispensa autenticação",
  "O Telnet é mais lento",
], "No Telnet tudo trafega em texto puro, podendo ser capturado na rede.");

Q("011.4", "Um computador que roda o navegador e acessa um servidor web está desempenhando qual papel nessa comunicação?", [
  "*Cliente",
  "Servidor",
  "Roteador",
  "Hipervisor",
], "Quem faz a requisição é o cliente; quem responde é o servidor.");

Q("011.4", "Qual destas afirmações sobre o Linux em dispositivos móveis está correta?", [
  "*O Android, sistema móvel mais usado do mundo, é baseado no kernel Linux",
  "O Linux não pode rodar em processadores ARM",
  "Nenhum celular usa Linux",
  "O iOS é uma distribuição Linux",
], "O Android roda o kernel Linux em processadores ARM.");

Q("011.4", "Ao precisar transportar dados confidenciais em um pendrive, qual é a melhor prática?", [
  "*Criptografar o pendrive ou os arquivos antes de copiá-los",
  "Renomear os arquivos com nomes discretos",
  "Usar um pendrive de cor diferente",
  "Copiar os arquivos para /tmp antes",
], "Pendrives se perdem com facilidade; a criptografia impede a leitura por terceiros.");
