O arquivo de CODEOWNDERS também é um arquivo que hica dentro da pasta .github, ele serve para definir "quem é o dono do Código", ele é utilizado para facilitar o processo de code review, para definir automaticamente  quem fica responsável por o tipo de código ou por alguma pasta.

é bem simples utilizar ele, no exemplo a baixo, ele "fala", qualquer arquivo que termine com .js, o @joaomarcos é um dos responsáveis por fazer o code review

```
*.js @joaomarcos
```

também da para fazer isso com pastas ou arquivos de configurações, da para definir muita coisa.

```
/src/* @josefinoexperança
```
nesse outro exemplo, qualquer arquivo ou  pastas que estejam dentro da pasta src, fica de responsabilidade do josefino, clicando <a href ="https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners">aqui</a>, tem a DOC do próprio github explicando como funciona
