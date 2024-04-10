#Imagem Base do para a nossa imagem
#FROM ubuntu:latest
#Diretório base onde onde o docker vais ser utilizado
#WORKDIR /app

#Comandos que vão ser executados ao iniciarlizar o container
# a barra (\) serve como o +, ele permite cortar a linha
#RUN apt-get update && \
#apt-get install vim -y

#A diff entre o comando CMD e ENTRYPOINT, é que o Cmd sempre pode ser subistuido durante
# A iniciação do container, como nos exemplos utilizamos o Bash para entrar no terminal

#ENTRYPOINT [ "hello", "world" ]
#Porém o EntryPonint nao pode ser subistiuido, ele geralmente serve para deixar um 
#Aplicativo ou programa ligado e funcionando, como no Java, p ideal seria utiliza o comando
# java -jar {nome do executavel .jar}

#CMD ["echo", "hello world"] 

#COPY html/ /usr/share/nginx
#RUN apt-get install vim -y

#Test de dockerHub

FROM nginx:latest
COPY html /usr/share/nginx/html
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]



#Vale lembrar que o Docker aceita subQueries para seus comandos, então eu posso fazer algo como
# sudo docker container rm $(sudo docker container ls) assim removendo todos os conteiner buildados