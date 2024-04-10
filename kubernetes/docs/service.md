## Service
o Service funciona como uma espécie de load balancer, oque ele faz é basicamente
redirecionamento de um endereço, como o localhost para um POD dentro do cluster
do kubernetes.
o service tem um alias que se chama `svc` para encurtar os comandos
no final, é só apontar uma Url na sua maquina como o localhost:8080 para o service
com o comando de 

```
kubectl port-forward svc< ou service>/goserver-service <aporta que eu quero acessar>:<porta exportada>
```