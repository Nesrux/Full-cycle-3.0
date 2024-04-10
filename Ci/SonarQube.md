SonarQube é um dos mais populares softwares de analise estatística de código, ele é utilizado no processo de revisão de código de forma automatizada, além de fazer validações de testes, e também possuí integração com github, facilitando muito a utilização do software.

além de verificação de qualidade de código ele também verifica brechas de segurança, cobertura de testes, e também da insights para melhoria de de código, possuí integração com JAVA e C#, porém também é possível utilizar ele com outras linguagens de programação

Para executar ele no Docker, primeiro temos que verificar se possuímos o docker, então no terminal digite o comando, se não der Erro, é porque temos o docker instalado
```
docker -v
```

Para executar o sonarQube dentro de um container é só utilizar o comando a baixo em seu terminal e depois acessar em seu navegador o `localhost:9000`
```
docker run 
	-d 
	--name sonarqube 
	-e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true
	-p 9000:9000 
	sonarqube:latest
```

Também tamos que utilizar o sonar-scanner, que faz o scan do seu projeto e manda para o sonarqube fazer a analise, precisa instalar o sonar-scanner na sua maquina ou utilizar um container docker não oficial,
```
sonar-scanner
	-Dsonar.projectKey=go-project   
	-Dsonar.sources=.   
	-Dsonar.host.url=http://localhost:9000 
	-Dsonar.token=<TOKEN_SONAR_SCANNER>
```

também é possível criar um arquivo que facilita  o processo do sonar-scanner, ele basicamente salva propriedades que serão utilizadas pelo sonar-scanner, só criar um arquivo na raiz do projeto chamado ``sonar-project.properties``