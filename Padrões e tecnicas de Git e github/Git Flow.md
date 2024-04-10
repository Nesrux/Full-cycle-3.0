Git flow é uma uma metodologia de utilização do Git que é utilizada para trabalhar em equipe, consente X passos

#### Metodologia
Utilizamos de commits semânticos e de branches padronizada, sendo eles a branch main/master e posteriormente a develop, release, bugfix, e feature .

Sendo a Main/master a branch principal, no caso a branch que esta em produção

> [!NOTE] Observação
> Nunca de commit diretamente na branch main, sempre dê commit nas outras sub-branches 

A branch develop, é a branch secundaria, é dela que saem as branches feature, bugfix e release, é dela em que você de fato commita o projeto.

As branches bugfix e  feature são auto explicativas, elas são utilizadas para resolver bugs ou adicionar novas funcionalidades no projeto.

já a branch release, não é necessariamente uma release, oque ela faz, é pegar todo oque esta commitado na develop e jogar na main/master, criando uma nova versão do projeto.

#### Git-flow project
Existe um projeto chamado Git-flow, ele automatiza e facilita a utilização da metodologia do git flow, para baixar é só utilizar o comando no linux.

```
sudo apt-install git flow
```

para começar a utilizar o programa, dentro de uma pasta, utilize o comando

```
git flow init
```

Ele inicia um repositório Git dentro dessa pasta, e abre uma tela de configuração, onde você pode escolher os nomes das branches caso não queira utilizar o padrão, e cria 2 branches principais o develop e a main/master que você pode ficar alternando com o comando

```
git checkout main || git checkout master
```

o Software é bem simples de ser utilizado, então só vou mostrar alguns outros comandos mais importantes que são

```
git flow <branch> start
```

esse comando deve ser utilizado a partir da branch develop, ele cria uma ramificação nova de branch, a tag branch é substituída por release, feature, bugfix etc.

também existe o comando finish, que serve para encerrar uma sub branch e fazer o merge para a branch develop e posteriormente apagar a branch criada.

```
git flow <branch> finish
```

Claro que existem outros comandos, mas esses são os principais.