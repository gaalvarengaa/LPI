// 015.4
Q("015.4", "Para que serve o diretório `/tmp`?", [
  "*Armazenar arquivos temporários, que podem ser apagados automaticamente (por exemplo, no reboot)",
  "Guardar backups permanentes",
  "Armazenar os arquivos de configuração",
  "Guardar os diretórios pessoais",
], "Em muitas distribuições o `/tmp` é montado em memória (tmpfs) e esvaziado a cada boot.");

Q("015.4", "Qual é a diferença entre `/tmp` e `/var/tmp`?", [
  "*Arquivos em `/var/tmp` são preservados entre reinicializações e mantidos por mais tempo do que em `/tmp`",
  "`/var/tmp` é apagado a cada minuto",
  "`/tmp` é só para o root",
  "Não existe diferença",
], "Use `/var/tmp` para dados temporários que precisam sobreviver a um reboot.");

Q("015.4", "Por que qualquer usuário pode criar arquivos em `/tmp`, mas não pode apagar arquivos de outros usuários lá?", [
  "*Por causa do **sticky bit** definido no diretório",
  "Porque `/tmp` tem permissão 700",
  "Porque os arquivos em /tmp pertencem ao root",
  "Porque o /tmp é somente leitura",
], "Com o sticky bit, apenas o dono do arquivo, o dono do diretório ou o root podem apagar ou renomear arquivos.");

Q("015.4", "Como aparece normalmente o `/tmp` na saída de `ls -ld /tmp`?", [
  "*`drwxrwxrwt`",
  "`drwxr-xr-x`",
  "`drwx------`",
  "`-rw-rw-rw-`",
], "O `t` no lugar do último `x` indica o sticky bit (com execução para outros).");

Q("015.4", "Qual é o modo octal típico do diretório `/tmp`?", [
  "*1777",
  "0777",
  "0755",
  "4755",
], "O `1` à frente é o sticky bit; `777` dá leitura, escrita e acesso a todos.");

Q("015.4", "Quais comandos ativam o sticky bit no diretório `/compartilhado`? (Escolha duas.)", [
  "*`chmod +t /compartilhado`",
  "*`chmod 1777 /compartilhado`",
  "`chmod +s /compartilhado`",
  "`chmod 777 /compartilhado`",
  "`chown -t /compartilhado`",
], "`+s` seria SUID/SGID, não o sticky bit.");

Q("015.4", "Em `ls -ld`, um diretório aparece como `drwxrwxrwT` (T maiúsculo). O que isso indica?", [
  "*O sticky bit está ativo, mas os outros não têm permissão de execução",
  "O diretório está corrompido",
  "É um link simbólico",
  "O sticky bit está desativado",
], "`t` minúsculo = sticky + x; `T` maiúsculo = sticky sem x.");

Q("015.4", "Qual comando cria um arquivo temporário com nome único e seguro, mostrando o caminho criado?", [
  "*`mktemp`",
  "`touch /tmp/arquivo`",
  "`tmpfile -n`",
  "`mkdir /tmp`",
], "Exemplo: `mktemp` → `/tmp/tmp.Xa8sK2Lq`. `mktemp -d` cria um diretório temporário.");

Q("015.4", "Por que scripts devem preferir `mktemp` a nomes fixos como `/tmp/meuscript.tmp`?", [
  "*Para evitar conflitos e ataques em que outro usuário cria antes um arquivo ou link com o nome esperado",
  "Porque nomes fixos não são permitidos em /tmp",
  "Porque o mktemp comprime o arquivo",
  "Porque o mktemp cria arquivos permanentes",
], "O mktemp gera nomes imprevisíveis e cria o arquivo com permissões restritas.");

Q("015.4", "O que é um **link simbólico**?", [
  "*Um arquivo especial que aponta para outro arquivo ou diretório pelo caminho",
  "Uma cópia completa do arquivo",
  "Um arquivo compactado",
  "Um atalho que só funciona no ambiente gráfico",
], "Também chamado de symlink ou soft link.");

Q("015.4", "Qual comando cria um link simbólico chamado `atual` apontando para `versao-2.1`?", [
  "*`ln -s versao-2.1 atual`",
  "`ln -s atual versao-2.1`",
  "`ln versao-2.1 atual`",
  "`cp -s atual versao-2.1`",
], "Sintaxe: `ln -s ALVO NOME_DO_LINK`. Sem `-s` seria criado um hard link.");

Q("015.4", "Como um link simbólico aparece na saída de `ls -l`?", [
  "*Com `l` como primeiro caractere e a seta `->` indicando o alvo",
  "Com `d` como primeiro caractere",
  "Com `s` como primeiro caractere",
  "Igual a um arquivo comum",
], "Exemplo: `lrwxrwxrwx 1 ana ana 11 atual -> versao-2.1`.");

Q("015.4", "O que acontece ao executar `rm atalho`, sendo `atalho` um link simbólico para `/etc/hosts`?", [
  "*Apenas o link é removido; o arquivo `/etc/hosts` continua intacto",
  "O arquivo `/etc/hosts` é apagado",
  "Os dois são apagados",
  "O comando falha",
], "Remover um symlink não afeta o alvo.");

Q("015.4", "O que acontece com um link simbólico quando o arquivo alvo é apagado?", [
  "*O link fica \"quebrado\" (dangling): continua existindo, mas aponta para algo inexistente",
  "O link é apagado automaticamente",
  "O link passa a conter os dados do arquivo",
  "O alvo é restaurado",
], "Ao tentar abrir um link quebrado, aparece \"No such file or directory\".");

Q("015.4", "Quais são características dos links simbólicos, em comparação com os hard links? (Escolha duas.)", [
  "*Podem apontar para diretórios",
  "*Podem apontar para arquivos em outro sistema de arquivos (outra partição)",
  "Continuam funcionando se o alvo for apagado",
  "São cópias independentes do conteúdo",
], "Hard links não podem apontar para diretórios nem atravessar sistemas de arquivos.");

Q("015.4", "As permissões de um link simbólico aparecem como `lrwxrwxrwx`. Isso significa que todos podem alterar o arquivo alvo?", [
  "*Não; ao acessar pelo link valem as permissões do arquivo alvo",
  "Sim, o link dá acesso total",
  "Sim, mas somente leitura",
  "Depende do dono do link",
], "As permissões do próprio link não são usadas no acesso ao conteúdo.");

Q("015.4", "O que faz `ls -d /etc`?", [
  "*Mostra o próprio diretório `/etc`, sem listar seu conteúdo",
  "Lista apenas os diretórios dentro de `/etc`",
  "Apaga o diretório /etc",
  "Lista o conteúdo de /etc recursivamente",
], "Combinado com `-l` mostra as permissões do diretório: `ls -ld /etc`.");

Q("015.4", "Qual comando lista apenas os **subdiretórios** do diretório atual (e não seus conteúdos)?", [
  "*`ls -d */`",
  "`ls -R`",
  "`ls -a`",
  "`ls -l /`",
], "O padrão `*/` corresponde só a diretórios e `-d` impede que o ls entre neles.");

Q("015.4", "Um link simbólico `config` aponta para `/etc/app/config.yml`. Qual comando mostra para onde ele aponta?", [
  "*`ls -l config` (ou `readlink config`)",
  "`cat config`",
  "`ls -a config`",
  "`file -d config`",
], "`cat config` mostraria o conteúdo do alvo, não o caminho.");

Q("015.4", "Ao criar `ln -s ../dados/relatorio.txt rel` no diretório `/home/ana/docs`, para qual arquivo o link aponta?", [
  "*`/home/ana/dados/relatorio.txt`, pois o caminho relativo é resolvido a partir do diretório onde o link está",
  "`/home/ana/docs/dados/relatorio.txt`",
  "`/dados/relatorio.txt`",
  "Para o diretório atual de quem acessar o link",
], "Links relativos continuam funcionando se a estrutura de diretórios for movida em conjunto.");

Q("015.4", "Qual comando remove o link simbólico para diretório `atalho_docs` sem afetar o diretório de destino?", [
  "*`rm atalho_docs` (sem barra no final)",
  "`rm -r atalho_docs/`",
  "`rmdir atalho_docs`",
  "`rm -rf atalho_docs/*`",
], "Com barra no final ou `/*`, os comandos atuariam sobre o conteúdo do diretório de destino. `unlink atalho_docs` também funciona.");

F("015.4", "Digite o comando completo que cria um link simbólico chamado `atalho` apontando para `/etc/hosts`.", [
  "ln -s /etc/hosts atalho", "ln --symbolic /etc/hosts atalho", "ln -sf /etc/hosts atalho",
], "`ln -s ALVO LINK`.");

F("015.4", "Digite o caminho do diretório temporário que preserva os arquivos entre reinicializações.", [
  "/var/tmp", "/var/tmp/",
], "O `/tmp` costuma ser limpo no boot.");

F("015.4", "Qual letra aparece no lugar do último `x` nas permissões de um diretório com sticky bit (com execução para outros)?", [
  "t",
], "Exemplo: `drwxrwxrwt`.");

F("015.4", "Digite o comando completo que mostra as informações (formato longo) do próprio diretório `/tmp`.", [
  "ls -ld /tmp", "ls -dl /tmp", "ls -l -d /tmp", "ls -d -l /tmp",
], "A saída típica é `drwxrwxrwt ... /tmp`.");

Q("015.4", "Qual afirmação sobre arquivos em `/tmp` está correta?", [
  "*Não se deve guardar ali dados importantes, pois o sistema pode removê-los automaticamente",
  "São copiados para o backup do sistema automaticamente",
  "Só o root pode criar arquivos ali",
  "Nunca são apagados",
], "O systemd-tmpfiles e o próprio boot limpam diretórios temporários periodicamente.");
