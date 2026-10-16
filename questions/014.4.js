// 014.4
Q("014.4", "O que é a **Internet**?", [
  "*Uma rede mundial formada pela interligação de muitas redes, conectadas por roteadores",
  "Um único servidor central que guarda todos os sites",
  "Um programa instalado no computador",
  "Uma rede local doméstica",
], "Cada rede tem seus roteadores, que encaminham pacotes até o destino.");

Q("014.4", "Qual é a função de um **roteador**?", [
  "*Encaminhar pacotes entre redes diferentes",
  "Armazenar páginas web",
  "Traduzir nomes em endereços IP",
  "Atribuir nomes de usuário",
], "O roteador decide para onde enviar cada pacote com base em sua tabela de rotas.");

Q("014.4", "O que é o **gateway padrão** (default gateway) de um computador?", [
  "*O roteador para onde são enviados os pacotes destinados a redes que não são a rede local",
  "O servidor DNS principal",
  "O computador com o maior endereço IP da rede",
  "A placa de rede Wi-Fi",
], "Na tabela de rotas aparece como `default via 192.168.0.1`.");

Q("014.4", "Quantos bits tem um endereço **IPv4**?", [
  "*32 bits",
  "64 bits",
  "128 bits",
  "48 bits",
], "Escrito como quatro números de 0 a 255 separados por pontos, como `192.168.0.10`.");

Q("014.4", "Quantos bits tem um endereço **IPv6**?", [
  "*128 bits",
  "32 bits",
  "64 bits",
  "256 bits",
], "Escrito em hexadecimal, em oito grupos de 16 bits separados por dois-pontos.");

Q("014.4", "Qual destes é um endereço IPv4 **válido**?", [
  "*`192.168.1.254`",
  "`192.168.1.256`",
  "`10.0.0`",
  "`172.16.300.1`",
], "Cada octeto vai de 0 a 255 e são necessários quatro octetos.");

Q("014.4", "Qual destes é um endereço IPv6 escrito corretamente?", [
  "*`2001:db8::1`",
  "`2001:db8::1::2`",
  "`192.168::1:300`",
  "`2001.db8.0.1`",
], "O `::` (sequência de grupos zero) só pode aparecer uma vez no endereço.");

Q("014.4", "O endereço `2001:0db8:0000:0000:0000:0000:0000:0001` pode ser abreviado como:", [
  "*`2001:db8::1`",
  "`2001:db8:1`",
  "`2001::db8::1`",
  "`21:db8::1`",
], "Zeros à esquerda de cada grupo podem ser omitidos e uma sequência de grupos zerados vira `::`.");

Q("014.4", "Qual é o principal motivo para a adoção do IPv6?", [
  "*O esgotamento dos endereços IPv4 disponíveis",
  "O IPv4 não funciona com Wi-Fi",
  "O IPv6 é obrigatório para usar Linux",
  "O IPv4 não suporta DNS",
], "IPv4 tem cerca de 4,3 bilhões de endereços; IPv6 tem 2^128.");

Q("014.4", "Quais faixas de endereços IPv4 são **privadas** (uso em redes internas)? (Escolha três.)", [
  "*`10.0.0.0/8`",
  "*`172.16.0.0/12`",
  "*`192.168.0.0/16`",
  "`8.8.8.0/24`",
  "`200.0.0.0/8`",
], "Endereços privados não são roteados na Internet; o acesso externo normalmente passa por NAT no roteador.");

Q("014.4", "Qual é o endereço IPv4 de **loopback**, que aponta para o próprio computador?", [
  "*`127.0.0.1`",
  "`192.168.0.1`",
  "`0.0.0.0`",
  "`255.255.255.255`",
], "Todo o bloco `127.0.0.0/8` é de loopback; o nome `localhost` normalmente resolve para `127.0.0.1`.");

Q("014.4", "Qual é o endereço IPv6 de **loopback**?", [
  "*`::1`",
  "`fe80::1`",
  "`::`",
  "`127::1`",
], "Equivale ao `127.0.0.1` do IPv4.");

Q("014.4", "Qual é o nome da interface de loopback no Linux?", [
  "*`lo`",
  "`eth0`",
  "`wlan0`",
  "`loop0`",
], "A interface `lo` tem os endereços 127.0.0.1 e ::1.");

Q("014.4", "Qual máscara de rede corresponde ao prefixo `/24`?", [
  "*`255.255.255.0`",
  "`255.255.0.0`",
  "`255.0.0.0`",
  "`255.255.255.255`",
], "/24 = 24 bits de rede, restando 8 bits (256 endereços) para hosts.");

Q("014.4", "Na notação `192.168.10.25/24`, qual é o endereço da rede?", [
  "*`192.168.10.0`",
  "`192.168.0.0`",
  "`192.168.10.25`",
  "`192.168.10.255`",
], "Os primeiros 24 bits (192.168.10) identificam a rede.");

Q("014.4", "Os computadores `192.168.1.10/24` e `192.168.2.10/24` estão na mesma rede local?", [
  "*Não, pois as partes de rede (192.168.1 e 192.168.2) são diferentes; a comunicação precisa passar por um roteador",
  "Sim, pois ambos começam com 192.168",
  "Sim, pois têm o mesmo final .10",
  "Não é possível saber",
], "Com /24, os três primeiros octetos definem a rede.");

Q("014.4", "O que faz o **NAT** em um roteador doméstico?", [
  "*Permite que vários dispositivos com endereços privados acessem a Internet usando o endereço público do roteador",
  "Traduz nomes de domínio em endereços IP",
  "Atribui endereços IP automaticamente",
  "Criptografa toda a navegação",
], "NAT = Network Address Translation.");

Q("014.4", "Qual prefixo identifica endereços IPv6 **link-local**, configurados automaticamente em toda interface IPv6?", [
  "*`fe80::/10`",
  "`2001:db8::/32`",
  "`::1/128`",
  "`ff00::/8`",
], "Endereços link-local só funcionam dentro do mesmo enlace (segmento) de rede.");

Q("014.4", "Um computador configurado para DHCP recebeu o endereço `169.254.33.7`. O que isso indica?", [
  "*Que provavelmente não conseguiu obter endereço de um servidor DHCP e se autoatribuiu um endereço link-local",
  "Que recebeu um endereço público da Internet",
  "Que está usando IPv6",
  "Que é o servidor DHCP da rede",
], "A faixa `169.254.0.0/16` é usada para autoconfiguração IPv4 quando o DHCP falha.");

Q("014.4", "Qual é a função do **DNS**?", [
  "*Traduzir nomes de domínio (como www.lpi.org) em endereços IP",
  "Atribuir endereços IP automaticamente",
  "Encaminhar pacotes entre redes",
  "Criptografar a comunicação",
], "DNS = Domain Name System.");

Q("014.4", "Qual arquivo contém os servidores DNS usados pelo sistema, em linhas `nameserver`?", [
  "*`/etc/resolv.conf`",
  "`/etc/hosts`",
  "`/etc/hostname`",
  "`/etc/dns.conf`",
], "Exemplo: `nameserver 1.1.1.1`.");

Q("014.4", "Em um sistema com systemd-resolved, o `/etc/resolv.conf` contém `nameserver 127.0.0.53`. O que isso significa?", [
  "*As consultas vão para o resolvedor local do systemd-resolved, que repassa aos servidores DNS reais",
  "O DNS está desativado",
  "O computador é um servidor DNS público",
  "O arquivo está corrompido",
], "Para ver os servidores DNS reais use `resolvectl status`.");

Q("014.4", "Qual comando mostra os servidores DNS configurados para cada interface em um sistema com systemd-resolved?", [
  "*`resolvectl status`",
  "`cat /etc/hosts`",
  "`ip route show`",
  "`ss -dns`",
], "`resolvectl query nome` também faz consultas de nomes.");

Q("014.4", "Qual comando resolve um nome usando o systemd-resolved?", [
  "*`resolvectl query www.lpi.org`",
  "`resolvectl ping www.lpi.org`",
  "`ip addr www.lpi.org`",
  "`systemctl resolve www.lpi.org`",
], "A saída mostra os endereços IPv4/IPv6 obtidos.");

Q("014.4", "Para que serve o arquivo `/etc/hosts`?", [
  "*Mapear nomes para endereços IP localmente, sem consultar um servidor DNS",
  "Listar os servidores DNS",
  "Definir os usuários do sistema",
  "Bloquear portas",
], "Exemplo: `192.168.0.50  servidor.local servidor`.");

Q("014.4", "Na configuração padrão, quando o sistema resolve um nome, qual é normalmente consultado primeiro?", [
  "*O arquivo `/etc/hosts`, e depois o DNS",
  "O DNS e, se falhar, nunca o /etc/hosts",
  "O arquivo `/etc/resolv.conf` como lista de nomes",
  "O gateway padrão",
], "A ordem é definida em `/etc/nsswitch.conf` (linha `hosts: files dns`).");

Q("014.4", "Qual comando consulta o DNS para descobrir o endereço IP de `www.exemplo.com`?", [
  "*`host www.exemplo.com`",
  "`ip host www.exemplo.com`",
  "`ss www.exemplo.com`",
  "`route www.exemplo.com`",
], "Ferramentas semelhantes: `dig` e `nslookup`.");

Q("014.4", "O que faz `host 8.8.8.8`?", [
  "*Uma consulta reversa, mostrando o nome associado ao endereço IP",
  "Testa a conectividade com ping",
  "Configura o IP da máquina",
  "Mostra a rota até o IP",
], "Consultas reversas usam registros PTR.");

Q("014.4", "Qual comando mostra os servidores de e-mail (registros MX) do domínio `exemplo.com`?", [
  "*`host -t MX exemplo.com`",
  "`host --mail exemplo.com`",
  "`ip mx exemplo.com`",
  "`ping -mx exemplo.com`",
], "`-t` define o tipo de registro: A, AAAA, MX, NS, TXT...");

Q("014.4", "Qual comando mostra os endereços IP configurados nas interfaces de rede?", [
  "*`ip addr show`",
  "`ip route show`",
  "`ss -l`",
  "`host localhost`",
], "Pode ser abreviado como `ip a`. O antigo `ifconfig` está obsoleto.");

Q("014.4", "Na saída de `ip addr show`, qual linha indica o endereço IPv4 da interface?", [
  "*A linha que começa com `inet`",
  "A linha que começa com `inet6`",
  "A linha que começa com `link/ether`",
  "A linha que contém `mtu`",
], "`inet` = IPv4, `inet6` = IPv6, `link/ether` = endereço MAC.");

Q("014.4", "Qual comando mostra a tabela de rotas IPv4, incluindo o gateway padrão?", [
  "*`ip route show`",
  "`ip addr show`",
  "`ss -r`",
  "`host -r`",
], "Linha típica: `default via 192.168.0.1 dev enp3s0`.");

Q("014.4", "Qual comando mostra a tabela de rotas **IPv6**?", [
  "*`ip -6 route show`",
  "`ip route6`",
  "`ip route show -ipv6`",
  "`route6 show`",
], "A opção `-6` (ou `-4`) seleciona a família de endereços.");

Q("014.4", "Na saída `default via 10.0.0.1 dev eth0`, o que é `10.0.0.1`?", [
  "*O gateway padrão (roteador)",
  "O endereço IP da máquina",
  "O servidor DNS",
  "O endereço de broadcast",
], "Pacotes para redes desconhecidas são enviados a esse roteador.");

Q("014.4", "Qual comando lista as interfaces de rede e seu estado (UP/DOWN), sem mostrar os endereços IP?", [
  "*`ip link show`",
  "`ip route show`",
  "`resolvectl status`",
  "`ss -i`",
], "`ip link` trabalha na camada de enlace (interfaces e MAC).");

Q("014.4", "Qual comando mostra as portas TCP e UDP em **escuta** no sistema, com números em vez de nomes?", [
  "*`ss -tuln`",
  "`ss -a`",
  "`ip port`",
  "`ping -l`",
], "`-t` TCP, `-u` UDP, `-l` em escuta (listening), `-n` numérico. `-p` mostra o processo.");

Q("014.4", "Qual opção do `ss` mostra o processo dono de cada socket?", [
  "*`-p`",
  "`-n`",
  "`-l`",
  "`-u`",
], "Para ver processos de outros usuários é preciso executar como root.");

Q("014.4", "O `ss` substituiu qual ferramenta antiga?", [
  "*`netstat`",
  "`ping`",
  "`host`",
  "`ifconfig`",
], "Da mesma forma, o comando `ip` substituiu `ifconfig` e `route`.");

Q("014.4", "Qual porta é usada por padrão pelo **SSH**?", [
  "*22",
  "80",
  "443",
  "53",
], "HTTP = 80, HTTPS = 443, DNS = 53, SMTP = 25.");

Q("014.4", "Qual porta é usada por padrão pelo **HTTPS**?", [
  "*443",
  "80",
  "22",
  "21",
], "HTTP sem criptografia usa a porta 80.");

Q("014.4", "Qual é a diferença entre TCP e UDP?", [
  "*TCP é orientado a conexão e garante entrega e ordem; UDP é mais simples e não garante entrega",
  "UDP garante entrega e TCP não",
  "TCP só funciona em IPv6",
  "Não há diferença",
], "HTTP e SSH usam TCP; DNS (consultas comuns) e streaming frequentemente usam UDP.");

Q("014.4", "O que o **DHCP** fornece a um computador na rede?", [
  "*Configuração automática: endereço IP, máscara, gateway padrão e servidores DNS",
  "Apenas o nome do computador",
  "Somente criptografia",
  "Atualizações de software",
], "DHCP = Dynamic Host Configuration Protocol.");

Q("014.4", "O que é o **SLAAC** no IPv6?", [
  "*Autoconfiguração sem estado: o host cria seu próprio endereço a partir do prefixo anunciado pelo roteador",
  "Um servidor DHCP para IPv4",
  "Um protocolo de criptografia",
  "Um tipo de cabo de rede",
], "SLAAC = Stateless Address Autoconfiguration. Usa mensagens Router Advertisement.");

Q("014.4", "Qual é a diferença entre SLAAC e DHCPv6 (stateful)?", [
  "*No SLAAC o próprio host gera o endereço; no DHCPv6 stateful um servidor atribui e registra os endereços",
  "SLAAC é para IPv4 e DHCPv6 é para IPv6",
  "DHCPv6 não atribui endereços",
  "São o mesmo protocolo",
], "Ambos podem coexistir: o roteador indica nos anúncios qual método usar.");

Q("014.4", "Em desktops Linux, qual serviço normalmente gerencia as conexões de rede (Wi-Fi, cabo, VPN) automaticamente?", [
  "*NetworkManager",
  "Apache HTTPD",
  "logrotate",
  "cron",
], "Pode ser controlado pela interface gráfica ou pelo comando `nmcli`.");

Q("014.4", "Para que serve o comando `ping`?", [
  "*Testar se um host está acessível pela rede e medir o tempo de resposta",
  "Mostrar a tabela de rotas",
  "Configurar o endereço IP",
  "Listar portas abertas",
], "O ping envia pacotes ICMP Echo Request e aguarda Echo Reply.");

Q("014.4", "Qual comando envia exatamente 4 pacotes de ping para `192.168.0.1` e termina?", [
  "*`ping -c 4 192.168.0.1`",
  "`ping -n 4 192.168.0.1`",
  "`ping 4 192.168.0.1`",
  "`ping -t 4 192.168.0.1`",
], "No Linux, sem `-c` o ping continua até Ctrl+C. (No Windows a opção é `-n`.)");

Q("014.4", "`ping 8.8.8.8` funciona, mas `ping www.google.com` responde \"Name or service not known\". Qual é o problema mais provável?", [
  "*Falha na resolução de nomes (DNS)",
  "O cabo de rede está desconectado",
  "O gateway padrão está errado",
  "A placa de rede está queimada",
], "Se o IP externo responde, a conectividade está OK; o problema é traduzir o nome.");

Q("014.4", "Qual é uma sequência lógica para diagnosticar a falta de acesso à Internet?", [
  "*Verificar o IP local (`ip addr`), pingar o gateway, pingar um IP externo e por fim testar um nome (DNS)",
  "Reinstalar o sistema operacional imediatamente",
  "Apagar o arquivo /etc/hosts",
  "Testar só o DNS",
], "Ir do mais próximo ao mais distante ajuda a localizar onde está a falha.");

Q("014.4", "Como fazer ping usando especificamente IPv6?", [
  "*`ping -6 host` (ou `ping6 host` em sistemas mais antigos)",
  "`ping --ipv6-only host`",
  "`ping6 -4 host`",
  "`ip ping6 host`",
], "Exemplo: `ping -6 ::1`.");

F("014.4", "Digite o comando completo (forma não abreviada) que mostra os endereços IP das interfaces.", [
  "ip addr show", "ip address show", "ip addr", "ip a", "ip address",
], "`ip a` é a forma abreviada.");

F("014.4", "Digite o comando completo que mostra a tabela de rotas IPv4.", [
  "ip route show", "ip route", "ip r", "ip -4 route show", "ip route list",
], "A rota `default` indica o gateway padrão.");

F("014.4", "Digite o caminho do arquivo que lista os servidores DNS (linhas nameserver).", [
  "/etc/resolv.conf",
], "Em sistemas com systemd-resolved ele aponta para 127.0.0.53.");

F("014.4", "Digite o caminho do arquivo que mapeia nomes para IPs localmente, sem DNS.", [
  "/etc/hosts",
], "Consultado normalmente antes do DNS.");

F("014.4", "Digite o comando completo que consulta o DNS pelo endereço de `www.lpi.org` usando a ferramenta `host`.", [
  "host www.lpi.org",
], "Mostra registros A (IPv4) e AAAA (IPv6).");

F("014.4", "Digite o endereço IPv6 de loopback.", [
  "::1",
], "Equivalente ao 127.0.0.1.");

F("014.4", "Digite o comando completo que mostra a tabela de rotas IPv6.", [
  "ip -6 route show", "ip -6 route", "ip -6 r", "ip -6 route list",
], "`-6` seleciona IPv6.");

F("014.4", "Digite o comando completo que envia 3 pacotes de ping para `1.1.1.1`.", [
  "ping -c 3 1.1.1.1", "ping -c3 1.1.1.1",
], "`-c` define a quantidade de pacotes.");
