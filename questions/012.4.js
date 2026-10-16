// 012.4
Q("012.4", "O que faz `touch notas.txt` quando o arquivo `notas.txt` **não** existe?", [
  "*Cria um arquivo vazio chamado notas.txt",
  "Abre o arquivo em um editor",
  "Mostra uma mensagem de erro",
  "Cria um diretório chamado notas.txt",
], "`touch` cria arquivos vazios se eles não existirem.");

Q("012.4", "O que faz `touch notas.txt` quando o arquivo **já existe**?", [
  "*Atualiza a data/hora de modificação (e de acesso) do arquivo, sem alterar o conteúdo",
  "Apaga o conteúdo do arquivo",
  "Cria uma cópia chamada notas.txt.1",
  "Mostra o conteúdo do arquivo",
], "O nome vem de \"tocar\" o arquivo, atualizando seus carimbos de tempo.");

Q("012.4", "Quantos arquivos o comando `touch a b c` cria (se não existirem)?", [
  "*Três: a, b e c",
  "Um arquivo chamado `a b c`",
  "Nenhum, pois só aceita um nome",
  "Um diretório chamado a com os arquivos b e c",
], "Cada argumento é um arquivo separado.");

Q("012.4", "Qual comando cria um diretório chamado `projetos`?", [
  "*`mkdir projetos`",
  "`touch projetos`",
  "`md projetos`",
  "`newdir projetos`",
], "`mkdir` = make directory.");

Q("012.4", "Qual comando cria a estrutura `2024/janeiro/relatorios`, inclusive os diretórios intermediários que não existem?", [
  "*`mkdir -p 2024/janeiro/relatorios`",
  "`mkdir 2024/janeiro/relatorios`",
  "`mkdir -r 2024/janeiro/relatorios`",
  "`touch -p 2024/janeiro/relatorios`",
], "`-p` (parents) cria os diretórios pais conforme necessário e não reclama se já existirem.");

Q("012.4", "O que acontece ao executar `mkdir dados` se o diretório `dados` já existir?", [
  "*Uma mensagem de erro informa que o arquivo já existe",
  "O diretório é apagado e recriado vazio",
  "É criado `dados(1)`",
  "O conteúdo de dados é duplicado",
], "Com `mkdir -p dados` não haveria erro.");

Q("012.4", "Qual comando remove o diretório **vazio** `antigo`?", [
  "*`rmdir antigo`",
  "`rm antigo`",
  "`del antigo`",
  "`mkdir -d antigo`",
], "`rmdir` só remove diretórios vazios. `rm` sem `-r` não remove diretórios.");

Q("012.4", "O comando `rmdir fotos` falha com \"Directory not empty\". Qual comando remove o diretório e todo o seu conteúdo?", [
  "*`rm -r fotos`",
  "`rmdir -f fotos`",
  "`rm fotos`",
  "`del /s fotos`",
], "`rm -r` remove recursivamente. Use com cuidado.");

Q("012.4", "O que acontece com um arquivo removido com `rm` na linha de comando?", [
  "*É apagado definitivamente, sem passar pela lixeira",
  "Vai para a lixeira do ambiente gráfico",
  "É movido para `/tmp`",
  "É compactado em `/var/backup`",
], "Não há \"desfazer\" para o `rm`. Por isso, cuidado com curingas e com `-r`/`-f`.");

Q("012.4", "Qual opção faz o `rm` pedir confirmação antes de apagar cada arquivo?", [
  "*`-i`",
  "`-f`",
  "`-r`",
  "`-v`",
], "`-i` = interativo. `-f` = forçar, sem perguntar.");

Q("012.4", "O que faz a opção `-f` do `rm`?", [
  "*Força a remoção, sem pedir confirmação e sem erro para arquivos inexistentes",
  "Remove somente arquivos (files), nunca diretórios",
  "Faz um backup antes de remover",
  "Mostra o nome de cada arquivo removido",
], "`rm -rf` é poderoso e perigoso: remove tudo recursivamente sem perguntar.");

Q("012.4", "Qual comando copia `relatorio.txt` para um novo arquivo chamado `relatorio.bak`?", [
  "*`cp relatorio.txt relatorio.bak`",
  "`mv relatorio.txt relatorio.bak`",
  "`cp relatorio.bak relatorio.txt`",
  "`copy relatorio.txt > relatorio.bak`",
], "Sintaxe: `cp ORIGEM DESTINO`.");

Q("012.4", "Qual comando copia `foto.jpg` para dentro do diretório existente `imagens`, mantendo o nome?", [
  "*`cp foto.jpg imagens/`",
  "`cp imagens/ foto.jpg`",
  "`mv imagens foto.jpg`",
  "`cp -d foto.jpg imagens`",
], "Quando o destino é um diretório existente, o arquivo é copiado para dentro dele com o mesmo nome.");

Q("012.4", "Qual comando copia o diretório `site` e todo o seu conteúdo para `site_backup`?", [
  "*`cp -r site site_backup`",
  "`cp site site_backup`",
  "`mv -r site site_backup`",
  "`mkdir site site_backup`",
], "`-r` (ou `-R`) copia recursivamente.");

Q("012.4", "Ao executar `cp docs /tmp/` (sem opções), sendo `docs` um diretório, o que acontece?", [
  "*O cp se recusa a copiar, informando que omitiu o diretório (é preciso usar `-r`)",
  "O diretório é copiado com todo o conteúdo",
  "O diretório é movido",
  "Apenas os arquivos ocultos são copiados",
], "Sem `-r`, o cp não copia diretórios.");

Q("012.4", "Por padrão, se o arquivo de destino já existe, o que o `cp` faz?", [
  "*Sobrescreve o destino sem perguntar",
  "Pergunta se deve sobrescrever",
  "Cria uma cópia numerada",
  "Cancela a cópia",
], "Use `cp -i` para pedir confirmação antes de sobrescrever.");

Q("012.4", "Qual opção do `cp` pede confirmação antes de sobrescrever um arquivo existente?", [
  "*`-i`",
  "`-r`",
  "`-p`",
  "`-f`",
], "`-i` = interativo; também existe em `mv` e `rm`.");

Q("012.4", "Qual opção do `cp` faz uma cópia preservando permissões, donos, datas e links, copiando também diretórios recursivamente (modo arquivo)?", [
  "*`-a`",
  "`-i`",
  "`-v`",
  "`-n`",
], "`cp -a` (archive) é ideal para backups. `-p` preserva atributos sem a recursividade.");

Q("012.4", "Ao executar `cp a.txt b.txt c.txt destino`, o que precisa ser `destino`?", [
  "*Um diretório existente",
  "Um arquivo de texto",
  "Um arquivo compactado",
  "Qualquer coisa, o cp cria automaticamente",
], "Com várias origens, o último argumento deve ser um diretório.");

Q("012.4", "Qual comando **renomeia** o arquivo `rascunho.txt` para `final.txt`?", [
  "*`mv rascunho.txt final.txt`",
  "`cp rascunho.txt final.txt`",
  "`rename final.txt`",
  "`rn rascunho.txt final.txt`",
], "No Linux, renomear é mover para um novo nome no mesmo diretório.");

Q("012.4", "Qual comando move `musica.mp3` para o diretório existente `~/Musicas`?", [
  "*`mv musica.mp3 ~/Musicas/`",
  "`cp -m musica.mp3 ~/Musicas/`",
  "`mv ~/Musicas musica.mp3`",
  "`move musica.mp3 to ~/Musicas`",
], "Sintaxe: `mv ORIGEM DESTINO`.");

Q("012.4", "É necessário usar uma opção como `-r` para mover um diretório com o `mv`?", [
  "*Não, o `mv` move diretórios inteiros sem opção especial",
  "Sim, é necessário `-r`",
  "Sim, é necessário `-d`",
  "Não é possível mover diretórios",
], "Diferente de `cp` e `rm`, o `mv` não precisa de `-r`.");

Q("012.4", "Existe o diretório `arquivo2024`. O que faz `mv relatorio arquivo2024`?", [
  "*Move `relatorio` para dentro do diretório `arquivo2024`",
  "Renomeia `relatorio` para `arquivo2024`, apagando o diretório",
  "Gera um erro",
  "Copia o diretório para dentro de relatorio",
], "Se o destino é um diretório existente, a origem vai para dentro dele.");

Q("012.4", "No shell, o que o curinga `*` representa?", [
  "*Qualquer sequência de caracteres, inclusive nenhum",
  "Exatamente um caractere",
  "Apenas números",
  "Somente letras maiúsculas",
], "`*.txt` corresponde a `a.txt` e `notas.txt`. Arquivos ocultos (iniciados por ponto) não são incluídos por padrão.");

Q("012.4", "No shell, o que o curinga `?` representa?", [
  "*Exatamente um caractere qualquer",
  "Zero ou mais caracteres",
  "Um caractere opcional",
  "Qualquer número",
], "`arq?.txt` corresponde a `arq1.txt` e `arqA.txt`, mas não a `arq10.txt`.");

Q("012.4", "No shell, o que o padrão `[abc]` representa?", [
  "*Um único caractere que pode ser a, b ou c",
  "A sequência exata abc",
  "Qualquer caractere exceto a, b e c",
  "Os arquivos a, b e c, obrigatoriamente",
], "Colchetes definem uma classe de caracteres que corresponde a exatamente uma posição.");

Q("012.4", "Quais arquivos são selecionados por `ls foto[0-9].jpg`?", [
  "*`foto` seguido de um único dígito e `.jpg`, como `foto3.jpg`",
  "Todos os arquivos de foto0.jpg a foto99.jpg",
  "Somente `foto[0-9].jpg` literalmente",
  "Apenas `foto0.jpg` e `foto9.jpg`",
], "`[0-9]` é uma faixa que corresponde a um único caractere de 0 a 9.");

Q("012.4", "Quais arquivos correspondem a `ls arq[!0-9]`?", [
  "*`arq` seguido de um único caractere que **não** seja dígito, como `arqA`",
  "`arq` seguido de qualquer número",
  "Todos os arquivos que começam com arq",
  "Somente `arq!`",
], "`[!...]` (ou `[^...]` no Bash) nega a classe.");

Q("012.4", "Em um diretório com `a.txt`, `ab.txt`, `b.txt` e `a.log`, o que `ls ?.txt` lista?", [
  "*`a.txt` e `b.txt`",
  "`a.txt`, `ab.txt` e `b.txt`",
  "`a.txt` e `a.log`",
  "Todos os arquivos",
], "`?` corresponde a exatamente um caractere antes de `.txt`.");

Q("012.4", "Em um diretório com `a.txt`, `ab.txt`, `b.txt` e `a.log`, o que `ls a*` lista?", [
  "*`a.log`, `a.txt` e `ab.txt`",
  "Somente `a.txt`",
  "`a.txt` e `ab.txt`",
  "Todos os arquivos",
], "`a*` = começa com `a` seguido de qualquer coisa.");

Q("012.4", "Em um diretório com `a1`, `a2`, `a10` e `b1`, o que `ls a?` lista?", [
  "*`a1` e `a2`",
  "`a1`, `a2` e `a10`",
  "`a1`, `a2`, `a10` e `b1`",
  "Somente `a10`",
], "`a?` exige exatamente um caractere após o `a`.");

Q("012.4", "Em um diretório com `relatorio.txt` e `.config`, o que `ls *` mostra?", [
  "*Apenas `relatorio.txt`, pois `*` não corresponde a arquivos ocultos por padrão",
  "Os dois arquivos",
  "Apenas `.config`",
  "Nenhum arquivo",
], "Nomes iniciados com ponto precisam ser indicados explicitamente, como em `ls .*`.");

Q("012.4", "Quem expande os curingas (como `*.txt`) em um comando `ls *.txt`?", [
  "*O shell, antes de executar o comando",
  "O próprio comando ls",
  "O kernel",
  "O sistema de arquivos",
], "O ls recebe a lista de nomes já expandida.");

Q("012.4", "Em um diretório existem `Relatorio.txt` e `relatorio.txt`. Qual afirmação é verdadeira?", [
  "*São dois arquivos diferentes, pois o Linux diferencia maiúsculas de minúsculas",
  "É impossível existirem os dois no mesmo diretório",
  "São o mesmo arquivo com dois nomes",
  "O segundo sobrescreve o primeiro automaticamente",
], "Os sistemas de arquivos do Linux (ext4, xfs, btrfs) são case-sensitive.");

Q("012.4", "No diretório existem `foto.jpg` e `ferias.JPG`. O que `ls *.jpg` mostra?", [
  "*Somente `foto.jpg`",
  "Os dois arquivos",
  "Somente `ferias.JPG`",
  "Nenhum",
], "O padrão `.jpg` em minúsculas não corresponde a `.JPG`.");

Q("012.4", "O que faz `rm *.tmp`?", [
  "*Remove todos os arquivos terminados em `.tmp` no diretório atual",
  "Remove o arquivo chamado `*.tmp` somente",
  "Remove arquivos .tmp em todos os diretórios do sistema",
  "Move os arquivos .tmp para a lixeira",
], "O curinga não é recursivo: só afeta o diretório atual.");

Q("012.4", "Qual comando copia todos os arquivos terminados em `.conf` do diretório atual para `backup/`?", [
  "*`cp *.conf backup/`",
  "`cp backup/ *.conf`",
  "`cp -r .conf backup/`",
  "`mv *.conf backup/`",
], "`mv` moveria em vez de copiar.");

Q("012.4", "O que faz `mkdir proj{1,2,3}` no Bash?", [
  "*Cria os diretórios `proj1`, `proj2` e `proj3`",
  "Cria um diretório chamado `proj{1,2,3}`",
  "Cria `proj` com subdiretórios 1, 2 e 3",
  "Gera erro de sintaxe",
], "A expansão de chaves `{a,b}` gera várias palavras, diferente dos curingas que casam com arquivos existentes.");

Q("012.4", "Qual comando cria os diretórios `fotos` e `videos` de uma só vez?", [
  "*`mkdir fotos videos`",
  "`mkdir fotos,videos`",
  "`mkdir -p fotos+videos`",
  "`mkdir fotos; videos`",
], "Cada argumento é um diretório.");

Q("012.4", "Qual opção mostra o nome de cada arquivo enquanto `cp`, `mv` ou `rm` trabalham?", [
  "*`-v`",
  "`-i`",
  "`-q`",
  "`-n`",
], "`-v` = verbose.");

Q("012.4", "Qual é a diferença entre `rmdir dir` e `rm -r dir`?", [
  "*`rmdir` só remove se o diretório estiver vazio; `rm -r` remove o diretório e todo o conteúdo",
  "`rmdir` remove recursivamente; `rm -r` só remove diretórios vazios",
  "Os dois são idênticos",
  "`rm -r` move para a lixeira",
], "`rmdir` é a opção mais segura quando se espera um diretório vazio.");

Q("012.4", "Você executa `mv relatorio.txt dados.txt`, e `dados.txt` já existia. O que acontece com o antigo `dados.txt`?", [
  "*É substituído (sobrescrito) pelo relatorio.txt sem aviso",
  "É renomeado para dados.txt.old",
  "O comando falha",
  "Os conteúdos são combinados",
], "Use `mv -i` para ser perguntado antes de sobrescrever.");

F("012.4", "Digite o comando completo que cria o caminho `a/b/c`, incluindo os diretórios intermediários.", [
  "mkdir -p a/b/c", "mkdir --parents a/b/c",
], "`-p` cria os diretórios pais.");

F("012.4", "Digite o comando que remove apenas diretórios vazios (só o nome do comando).", [
  "rmdir",
], "Para diretórios com conteúdo use `rm -r`.");

F("012.4", "Digite o comando completo para copiar o diretório `origem` e todo seu conteúdo para `destino`.", [
  "cp -r origem destino", "cp -R origem destino", "cp -a origem destino", "cp -r origem destino/", "cp -R origem destino/",
], "Diretórios exigem cópia recursiva.");

F("012.4", "Digite o comando completo para renomear `velho.txt` para `novo.txt`.", [
  "mv velho.txt novo.txt",
], "`mv` move ou renomeia.");

F("012.4", "Qual caractere curinga do shell corresponde a exatamente um caractere?", [
  "?",
], "`*` corresponde a qualquer quantidade de caracteres; `?` a exatamente um.");

F("012.4", "Digite o comando completo para criar o arquivo vazio `lista.txt`.", [
  "touch lista.txt",
], "`touch` cria arquivos vazios.");

F("012.4", "Digite o comando completo para remover o diretório `tmpdir` e todo o seu conteúdo, sem pedir confirmação.", [
  "rm -rf tmpdir", "rm -fr tmpdir", "rm -r -f tmpdir", "rm -f -r tmpdir", "rm -Rf tmpdir",
], "`-r` recursivo, `-f` forçar. Use com muito cuidado.");

Q("012.4", "Qual padrão seleciona arquivos que começam com `a` **ou** `b`?", [
  "*`[ab]*`",
  "`a|b*`",
  "`(a,b)*`",
  "`?ab*`",
], "`[ab]` corresponde a um caractere `a` ou `b`, seguido de qualquer coisa.");

Q("012.4", "No Bash, se o padrão `*.xyz` não corresponder a nenhum arquivo, o que `ls *.xyz` recebe como argumento (configuração padrão)?", [
  "*O próprio texto `*.xyz`, e o ls informa que o arquivo não existe",
  "Uma lista vazia, e lista o diretório atual",
  "Todos os arquivos do diretório",
  "O shell encerra a sessão",
], "Sem correspondência, o Bash passa o padrão literalmente ao comando.");
