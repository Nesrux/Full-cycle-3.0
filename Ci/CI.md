CI (continuous integration), é uma pratica de Devops que permite que facilita o processo de desenvolvimento de software, com ele é possível automatizar muitos processos, como Build, integração com outros serviços, testes, validações de código, analise de segurança, analise de commits entre outros.

### GitHub Actions
Existem muitas plataformas de CI, como Azure Devops,  gitlab, e github Actions que é oque vamos utilizar, para esse "tutorial simples".
Para utilizar o github Actions, primeiro precisamos criar uma pasta `.github` na raiz do projeto, depois dentro dessa pasta temos que criar uma nova pasta chamada `workflows`, agora dentro dessa pasta é só criar um arquivo com a extensão ``.yaml``,

#### Ci.yaml
Agora com um arquivo yaml dentro da pasta de workflows, existem uma série de propriedades importantes para utilizar na hora do processo de Ci, que não vou listar todas, pois seria redundante, sendo que ja existe isso na documentação do github actions.

o Primeiro é o name, que define o nome do processo de Ci
```
name: exp-ci-doc
```

também existe a prop on, que fala em que branch ou em que evento, aquela action vai ser utilizada.
```
on:
	PULL_REQUEST (Evento de PR)
		branches: 
			- main
			- develop
```

A propriedade Jobs, define o trabalho que sera executado, ela precisa de outra propriedade que é o nome do job para poder funcionar, cada job é um trabalho diferente, que não necessariamente tem relação com os outros
```
jobs:
	<nome qualquer do JOB>:
		(comandos necessarios)
	outroJob:
		(mais outros comandos)
	outrodeoutroJob:
		(ainda mais comandos)
```

runs-on, é a propriedade que define, em qual sistema operacional esse job vai rodar, MAC, linux, windows, ele recebe uma tag que define qual é a versão desse OS
```
jobs:
	run-cli:
		runs-on: ubuntu:latest
```

Steps e Uses, são propriedades extremamente importantes, elas  servem para utilizar workflows já existentes, de setup, como baixar uma determinada lang, na maquina, baixar um programa como Docker ou kubernets dentro da maquina ou algo do tipo
```
steps:
	uses: actions/checkout@v2
	uses: actions/setup-go@v2 <-- prepara um ambiente para usar Golang
```

E por ultimo, um dos comandos mais importantes é o run, ele basicamente vai executar esse mesmo comando dentro da maquina do Github Actions

```
run: go test || go run main.go 
```
