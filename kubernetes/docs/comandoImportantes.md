# Comandos impotantes do kind/kubernetes

criar e deletar cluster pelo kind
```
kind create/delete clustes
```
criar cluster com configs especiais
```
kind create cluster --config kind.yaml
```


mostrar cluster disponiveis
```
kind get clusters
```
mostrar os nodes
```
kubectl get nodes
```

criar um pod com um arquivo .yaml se tiver na raiz ou na pasta atual, só precisa do nome do arquivo, a flag
-f é fe file, e o apply aplica as modificações
```
kubectl apply -f pasta/arquivo.extensao
```
Mostra os Pods que estao rodando
```
kubectl get po/pod/pods
```


deletar um pod
```
kubectl delete pod <nome do pod>
```

fazer um bind de portas de um pod da minha maquina para o kubernets/kind

```
kubectl port-forward pod/goserver <aporta que eu quero acessar>:<porta exportada>
```

ver histórico do deplayment, mudando o comando de deployment para pod ou replicaset
o efeito é o mesmo, mostra as revisões 
```
kubectl rollout history deployment <nome do deployment>
```

voltar para ultima versão do deployment, obs quando vc atualiza o deploymente ele nao 
apaga, ele só para de executar, então é possivel fazer o comando de volta, para fazer o teste
o comando é `kubectl get replicaset`, e da para ver as versoes, a tag `--to-revision`
serve para definir qual revisão eu quero ir

```
kubectl rollout undo deployment goserver --to-revision= <numero da revisao>
```

a titulo de curiosidade, para poder enchergar a api do kubernetes pois ela normalmente
nao é publica, e só pode ser acessada pelo `kubectl`, é possivel utilizar o comando abaixo
e depois é só fazer uma requisição get para a porta apontada no localhost
```
kubectl proxy --port=8080
```

trava os o terminal mostrando os pods em tempo real
```
kubectl watch -n1 kubectl get pods
```

ver os recursos que um pod esta utilizando
```
kubectl top pod <nome do pod>
```

aula 34