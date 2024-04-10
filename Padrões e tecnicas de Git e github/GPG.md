GPG ou GNU Privacy Guard, é um software livre de com um conjunto de softwares de criptografia, oque nos interessa nesse contexto, é a parte de assinaturas digitais.

A Assinatura digital verifica quem mandou o commit, com base no e-mail, também é possível verificar se apessoa é de tal empresa, e coisas do tipo

#### Assinatura digital e commits verificados
Para verificar se possuí o GPG instalado, digite no terminal o comando abaixo, que vai aparecer todas as opções e configurações possíveis do GPG.

```
gpg --help
```


Como só queremos fazer assinatura digital de commits, primeiro precisamos verificar se existe alguma chave no PC utilizando o comando

```
gpg --list-secret-key --keyid-form LONG
```

A flag Long, serve apenas para mostrar chaves grandes, no caso de 4096 bits

Caso não tenha nada, utilize o comando, para iniciar o processo de criação de uma chave, vai aparecer para colocar um Email, uma senha e um user, para só digitar suas credenciais.
```
 gpg --full-generate-key
```

agora digitando o comando abaixo em seu terminal,  vai habilitar uma opção para copiar sua chave publica.
```
 gpg --armor --export {id da key}
```
 
Após copiar vá até o GitHub, configurações/settings e depois em  SSH and GPG keys, depois clique em new GPG keys, e cole oque você copiou e depois só salvar.

Agora no terminal do seu PC,  digite esse comando para "falar para o GIt", qual key utilizar.
```
git config --global user.signingKey {id da key}
```

lembrando que, você pode obter o id da key utilizando o comando

```
gpg --list-secret-key --keyid-form LONG
```

O id vai aparecer no terminal, tudo oque esta depois da / e antes do espaço e o id da key, no caso xxxx-xxx-xxxx 
```
rsa4096/xxxx-xxx-xxxx
```

por fim, para configurar o GPG no bash é só utilizar o vim ou o nano nesse aquivo, nesse diretório
```
vim ~/.bash_profile
```

e salvar essa variável de ambiente

```
export GPG_TTY=$(tty)
```

e pronto, agora todos os seus commits vão estar assinados digitalmente!
