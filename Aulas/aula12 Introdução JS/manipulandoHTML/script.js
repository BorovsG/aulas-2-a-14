// mudar a cor da tela de fundo
window.document.body.style.background = "black"

// mudar cor da letra
window.document.body.style.color = 'cyan'

// criando um elemeto no HTML
window.document.body.innerHTML += '<h1> LUIZ GOSTOSO </h1>'

//exibindo um alerta
window.alert('CUIDADO, se clicar em ok é VIADO')

//exibindo uma tela de entrada de dados
var continuar = window.prompt('você deseja continuar? ')
window.alert(continuar)

//exibindo uma tela de confirmação
continuar = window.confirm('Você deseja continuar? ')
window.alert(continuar)