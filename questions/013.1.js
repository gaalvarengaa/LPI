// 013.1
Q("013.1", "Qual é a diferença entre **arquivar** e **comprimir**?", [
  "*Arquivar junta vários arquivos em um só; comprimir reduz o tamanho dos dados",
  "Arquivar reduz o tamanho; comprimir junta arquivos",
  "São sinônimos",
  "Arquivar apaga os originais; comprimir mantém",
], "O tar arquiva (junta) e programas como gzip, bzip2 e xz comprimem. O zip faz as duas coisas.");

Q("013.1", "Qual é a função principal do comando `tar`?", [
  "*Agrupar vários arquivos e diretórios em um único arquivo (archive), preservando a estrutura e as permissões",
  "Comprimir um único arquivo, sem agrupar",
  "Criptografar arquivos",
  "Transferir arquivos pela rede",
], "O nome vem de Tape ARchive. Sozinho, o tar não comprime; ele pode chamar gzip, bzip2 ou xz com opções.");

Q("013.1", "Qual opção do `tar` **cria** um novo arquivo?", [
  "*`-c`",
  "`-x`",
  "`-t`",
  "`-r`",
], "`-c` create, `-x` extract, `-t` list (table of contents).");

Q("013.1", "Qual opção do `tar` **extrai** o conteúdo de um arquivo?", [
  "*`-x`",
  "`-c`",
  "`-t`",
  "`-z`",
], "Exemplo: `tar -xf backup.tar`.");

Q("013.1", "Qual opção do `tar` **lista** o conteúdo de um arquivo sem extraí-lo?", [
  "*`-t`",
  "`-l`",
  "`-x`",
  "`-v`",
], "Exemplo: `tar -tf backup.tar`.");

Q("013.1", "Para que serve a opção `-f` do `tar`?", [
  "*Indicar o nome do arquivo tar a ser criado, extraído ou listado",
  "Forçar a operação",
  "Filtrar arquivos ocultos",
  "Formatar a saída",
], "O argumento logo após `-f` é o nome do arquivo. Por isso o `f` costuma ser a última letra do grupo de opções.");

Q("013.1", "O que a opção `-v` faz no `tar`?", [
  "*Mostra os nomes dos arquivos processados (modo verboso)",
  "Verifica a integridade do arquivo",
  "Usa compressão xz",
  "Exibe a versão do tar",
], "`tar -xvf arquivo.tar` lista cada arquivo enquanto extrai.");

Q("013.1", "Qual opção do `tar` comprime ou descomprime usando **gzip**?", [
  "*`-z`",
  "`-j`",
  "`-J`",
  "`-g`",
], "`-z` gzip (.gz), `-j` bzip2 (.bz2), `-J` xz (.xz).");

Q("013.1", "Qual opção do `tar` usa compressão **bzip2**?", [
  "*`-j`",
  "`-z`",
  "`-J`",
  "`-b`",
], "Exemplo: `tar -cjf backup.tar.bz2 docs/`.");

Q("013.1", "Qual opção do `tar` usa compressão **xz**?", [
  "*`-J` (maiúsculo)",
  "`-j` (minúsculo)",
  "`-z`",
  "`-x`",
], "Atenção às maiúsculas: `-J` é xz e `-j` é bzip2.");

Q("013.1", "Qual comando cria o arquivo `backup.tar.gz` com o conteúdo do diretório `docs`?", [
  "*`tar -czf backup.tar.gz docs`",
  "`tar -xzf backup.tar.gz docs`",
  "`tar -tzf backup.tar.gz docs`",
  "`gzip -c docs backup.tar.gz`",
], "c = criar, z = gzip, f = nome do arquivo.");

Q("013.1", "Qual comando cria `fotos.tar.xz` a partir do diretório `fotos`?", [
  "*`tar -cJf fotos.tar.xz fotos`",
  "`tar -cjf fotos.tar.xz fotos`",
  "`tar -czf fotos.tar.xz fotos`",
  "`xz -c fotos fotos.tar.xz`",
], "`-J` usa xz.");

Q("013.1", "Qual comando cria `logs.tar.bz2` a partir do diretório `logs`?", [
  "*`tar -cjf logs.tar.bz2 logs`",
  "`tar -cJf logs.tar.bz2 logs`",
  "`tar -czf logs.tar.bz2 logs`",
  "`bzip2 -r logs logs.tar.bz2`",
], "`-j` usa bzip2.");

Q("013.1", "Qual comando extrai o conteúdo de `projeto.tar.gz` no diretório atual?", [
  "*`tar -xzf projeto.tar.gz`",
  "`tar -czf projeto.tar.gz`",
  "`tar -tzf projeto.tar.gz`",
  "`gunzip -x projeto.tar.gz`",
], "Nas versões atuais do GNU tar, `tar -xf projeto.tar.gz` também funciona, pois a compressão é detectada automaticamente.");

Q("013.1", "Qual comando extrai `site.tar` dentro do diretório `/var/www`, sem precisar entrar nele antes?", [
  "*`tar -xf site.tar -C /var/www`",
  "`tar -xf site.tar /var/www`",
  "`tar -xf site.tar > /var/www`",
  "`tar -cf /var/www site.tar`",
], "`-C diretório` muda para aquele diretório antes de extrair.");

Q("013.1", "Qual comando mostra a lista de arquivos dentro de `backup.tar.gz` sem extraí-los?", [
  "*`tar -tzf backup.tar.gz`",
  "`tar -xzf backup.tar.gz`",
  "`tar -czf backup.tar.gz`",
  "`cat backup.tar.gz`",
], "Adicione `-v` para ver também permissões, donos e datas.");

Q("013.1", "Como extrair somente o arquivo `docs/leia.txt` de dentro de `pacote.tar`?", [
  "*`tar -xf pacote.tar docs/leia.txt`",
  "`tar -xf docs/leia.txt pacote.tar`",
  "`tar -tf pacote.tar docs/leia.txt > leia.txt`",
  "Não é possível extrair um único arquivo",
], "Após o nome do archive, podem ser indicados os membros a extrair, com o caminho como aparece em `tar -tf`.");

Q("013.1", "O que acontece com os arquivos originais ao criar um arquivo com `tar -cf`?", [
  "*Eles são mantidos; o tar apenas copia o conteúdo para o archive",
  "Eles são apagados",
  "Eles são comprimidos no lugar",
  "Eles são movidos para /tmp",
], "Diferente do gzip, o tar não remove os originais.");

Q("013.1", "A extensão `.tgz` é equivalente a:", [
  "*`.tar.gz`",
  "`.tar.bz2`",
  "`.tar.xz`",
  "`.zip`",
], "`.tgz` é uma abreviação de um arquivo tar comprimido com gzip.");

Q("013.1", "O que acontece com o arquivo original ao executar `gzip relatorio.txt`?", [
  "*Ele é substituído por `relatorio.txt.gz`",
  "Ele é mantido e é criado `relatorio.txt.gz`",
  "Ele é renomeado para `relatorio.gz`",
  "Nada, pois o gzip só funciona com diretórios",
], "Por padrão o gzip remove o original após comprimir. Use `-k` para mantê-lo.");

Q("013.1", "Quais comandos descomprimem `dados.csv.gz`? (Escolha duas.)", [
  "*`gunzip dados.csv.gz`",
  "*`gzip -d dados.csv.gz`",
  "`gzip dados.csv.gz`",
  "`tar -czf dados.csv.gz`",
  "`unzip dados.csv.gz`",
], "Ambos restauram `dados.csv` e removem o `.gz`.");

Q("013.1", "Qual opção faz o `gzip` **manter** o arquivo original?", [
  "*`-k`",
  "`-d`",
  "`-r`",
  "`-l`",
], "`gzip -k arquivo` cria `arquivo.gz` e mantém `arquivo`.");

Q("013.1", "O que faz `gzip -c log.txt > log.txt.gz`?", [
  "*Envia o resultado comprimido para a saída padrão, que é redirecionada para um arquivo, mantendo o original",
  "Comprime e apaga log.txt",
  "Descomprime log.txt.gz",
  "Mostra o conteúdo de log.txt na tela",
], "`-c` escreve na saída padrão em vez de substituir o arquivo.");

Q("013.1", "Qual opção do gzip prioriza a **máxima compressão**, mesmo sendo mais lenta?", [
  "*`-9`",
  "`-1`",
  "`-k`",
  "`-f`",
], "Os níveis vão de `-1` (mais rápido) a `-9` (melhor compressão).");

Q("013.1", "Qual comando exibe o conteúdo de um arquivo comprimido com gzip **sem** descomprimi-lo no disco?", [
  "*`zcat arquivo.gz`",
  "`cat -z arquivo.gz`",
  "`gunzip -l arquivo.gz`",
  "`tar -t arquivo.gz`",
], "Existem equivalentes para outros formatos: `bzcat` e `xzcat`.");

Q("013.1", "Qual extensão é gerada pelo `bzip2`?", [
  "*`.bz2`",
  "`.gz`",
  "`.xz`",
  "`.bzip`",
], "`bzip2 arquivo` gera `arquivo.bz2`; `bunzip2` ou `bzip2 -d` descomprimem.");

Q("013.1", "Qual comando descomprime `dados.xz`?", [
  "*`unxz dados.xz` ou `xz -d dados.xz`",
  "`gunzip dados.xz`",
  "`bunzip2 dados.xz`",
  "`unzip dados.xz`",
], "Cada formato tem sua ferramenta: gzip/gunzip, bzip2/bunzip2, xz/unxz.");

Q("013.1", "De modo geral, qual ferramenta oferece a **maior taxa de compressão**, embora seja a mais lenta para comprimir?", [
  "*xz",
  "gzip",
  "zip",
  "tar sem opções",
], "Em geral: xz comprime mais, bzip2 fica no meio e gzip é o mais rápido.");

Q("013.1", "De modo geral, qual ferramenta de compressão é a **mais rápida**, com compressão menor?", [
  "*gzip",
  "xz",
  "bzip2",
  "Todas têm a mesma velocidade",
], "O gzip é rápido e amplamente compatível, por isso é muito usado.");

Q("013.1", "Por que não é possível comprimir um **diretório** inteiro em um único arquivo apenas com `gzip`?", [
  "*Porque o gzip comprime arquivos individuais; para juntar vários arquivos é preciso o tar (ou o zip)",
  "Porque diretórios já são comprimidos",
  "Porque o gzip só funciona com arquivos de texto",
  "Porque é necessário ser root",
], "`gzip -r` comprime cada arquivo separadamente dentro do diretório, mas não gera um único arquivo.");

Q("013.1", "A compressão feita por gzip, bzip2, xz e zip é do tipo:", [
  "*Sem perdas (lossless): os dados descomprimidos são idênticos aos originais",
  "Com perdas, como JPEG",
  "Criptografada por padrão",
  "Irreversível",
], "Por isso essas ferramentas servem para qualquer tipo de arquivo, inclusive programas.");

Q("013.1", "Você comprimiu um arquivo de vídeo `.mp4` com gzip e ele quase não diminuiu. Por quê?", [
  "*Porque o vídeo já está comprimido pelo próprio formato",
  "Porque o gzip não funciona com arquivos grandes",
  "Porque faltou usar a opção -r",
  "Porque o gzip só comprime texto",
], "Formatos como MP4, JPEG, MP3 e ZIP já são comprimidos; comprimir de novo traz pouco ganho.");

Q("013.1", "Qual comando cria `site.zip` com o diretório `site` e todo o seu conteúdo?", [
  "*`zip -r site.zip site`",
  "`zip site site.zip`",
  "`unzip -r site.zip site`",
  "`tar -zip site.zip site`",
], "Sem `-r`, o zip adicionaria apenas a entrada do diretório, sem o conteúdo.");

Q("013.1", "Qual comando extrai o conteúdo de `material.zip`?", [
  "*`unzip material.zip`",
  "`zip -x material.zip`",
  "`gunzip material.zip`",
  "`tar -xf material.zip`",
], "`unzip` extrai no diretório atual.");

Q("013.1", "Qual comando lista os arquivos dentro de `material.zip` sem extraí-los?", [
  "*`unzip -l material.zip`",
  "`zip -t material.zip`",
  "`unzip -x material.zip`",
  "`zcat material.zip`",
], "`unzip -l` mostra nomes, tamanhos e datas.");

Q("013.1", "Qual comando extrai `material.zip` dentro do diretório `/tmp/material`?", [
  "*`unzip material.zip -d /tmp/material`",
  "`unzip -C /tmp/material material.zip`",
  "`unzip material.zip > /tmp/material`",
  "`zip -d /tmp/material material.zip`",
], "No unzip, `-d` define o diretório de destino (no tar a opção equivalente é `-C`).");

Q("013.1", "Qual formato é a melhor escolha para enviar arquivos a um colega que usa Windows sem ferramentas extras?", [
  "*ZIP",
  "tar.xz",
  "tar.bz2",
  "gz",
], "O Windows abre arquivos ZIP nativamente.");

Q("013.1", "Qual afirmação sobre o `zip` está correta?", [
  "*Ele agrupa e comprime vários arquivos em uma única etapa e mantém os originais",
  "Ele só comprime, sendo necessário o tar para agrupar",
  "Ele apaga os originais como o gzip",
  "Ele não funciona no Linux",
], "Diferente da combinação tar + gzip, o zip faz as duas tarefas sozinho.");

Q("013.1", "Qual é o problema no comando `tar -cfz backup.tar.gz docs`?", [
  "*O `f` deve vir por último, pois o argumento seguinte é o nome do arquivo; aqui o tar usaria `z` como nome",
  "A opção `-z` não existe",
  "Não é permitido agrupar opções no tar",
  "O comando está correto",
], "Com `-cfz`, o nome do arquivo seria `z`. O correto é `tar -czf backup.tar.gz docs`.");

Q("013.1", "O comando `tar czf backup.tar.gz docs` (sem hífen) funciona?", [
  "*Sim, o tar aceita as opções agrupadas sem o hífen inicial",
  "Não, o hífen é obrigatório",
  "Funciona, mas não comprime",
  "Funciona apenas como root",
], "O tar mantém compatibilidade com o estilo antigo de opções sem hífen.");

Q("013.1", "Qual comando cria um backup de `/etc` com a data atual no nome, como `etc-2026-10-16.tar.gz`?", [
  "*`tar -czf etc-$(date +%F).tar.gz /etc`",
  "`tar -czf etc-date.tar.gz /etc`",
  "`tar -xzf etc-$(date +%F).tar.gz /etc`",
  "`gzip /etc > etc-$(date +%F).gz`",
], "`$(date +%F)` é substituído pela data no formato AAAA-MM-DD.");

Q("013.1", "Ao criar um tar de `/etc`, o GNU tar mostra a mensagem \"Removing leading '/' from member names\". O que isso significa?", [
  "*Os caminhos são guardados como relativos (`etc/...`), para que a extração não sobrescreva o `/etc` do sistema por engano",
  "O diretório /etc foi apagado",
  "O backup falhou",
  "Os arquivos foram renomeados aleatoriamente",
], "Ao extrair, os arquivos irão para `./etc/...` no diretório atual (ou o indicado com `-C`).");

Q("013.1", "Qual opção do `tar` acrescenta arquivos ao final de um archive `.tar` existente (não comprimido)?", [
  "*`-r`",
  "`-c`",
  "`-x`",
  "`-a`",
], "`tar -rf backup.tar novo.txt` adiciona `novo.txt`. Não funciona com archives comprimidos.");

F("013.1", "Digite o comando completo que cria `backup.tar` (sem compressão) a partir do diretório `docs`.", [
  "tar -cf backup.tar docs", "tar cf backup.tar docs", "tar -cvf backup.tar docs", "tar cvf backup.tar docs", "tar -cf backup.tar docs/", "tar -cvf backup.tar docs/",
], "c = criar, f = nome do arquivo.");

F("013.1", "Digite o comando completo que lista o conteúdo de `pacote.tar`.", [
  "tar -tf pacote.tar", "tar tf pacote.tar", "tar -tvf pacote.tar", "tar tvf pacote.tar",
], "`-t` lista o conteúdo.");

F("013.1", "Digite o comando completo que extrai `src.tar.gz` no diretório atual.", [
  "tar -xzf src.tar.gz", "tar xzf src.tar.gz", "tar -xf src.tar.gz", "tar xf src.tar.gz", "tar -xvzf src.tar.gz", "tar -xzvf src.tar.gz", "tar xvzf src.tar.gz", "tar xzvf src.tar.gz", "tar -zxf src.tar.gz", "tar -zxvf src.tar.gz", "tar zxvf src.tar.gz", "tar zxf src.tar.gz", "tar -xvf src.tar.gz",
], "x = extrair, z = gzip (opcional no GNU tar moderno), f = arquivo.");

F("013.1", "Qual opção do `tar` (uma letra, com hífen) usa compressão bzip2?", [
  "-j",
], "`-z` gzip, `-j` bzip2, `-J` xz.");

F("013.1", "Digite o comando completo que descomprime `notas.txt.gz` (sem usar opções).", [
  "gunzip notas.txt.gz",
], "Também funcionaria `gzip -d notas.txt.gz`.");

F("013.1", "Digite a extensão de arquivo gerada pelo comando `xz` (com o ponto).", [
  ".xz",
], "`xz arquivo` gera `arquivo.xz`.");

F("013.1", "Digite o comando completo para extrair `fotos.zip` no diretório atual.", [
  "unzip fotos.zip",
], "`unzip -l` lista e `unzip -d` define o destino.");

Q("013.1", "Qual programa de compressão usa o algoritmo LZMA e gera arquivos `.xz`?", [
  "*xz",
  "gzip",
  "bzip2",
  "zip",
], "O xz é usado, por exemplo, para distribuir o código-fonte do kernel Linux.");

Q("013.1", "Qual comando comprime `log.txt` com bzip2?", [
  "*`bzip2 log.txt`",
  "`gzip -j log.txt`",
  "`tar -j log.txt`",
  "`bunzip2 log.txt`",
], "O resultado é `log.txt.bz2`, e o original é removido (use `-k` para manter).");
