function rafiki1() {
    var resposta = (prompt('digite a sua resposta').toUpperCase())
    if (resposta === 'D') {
        alert('a resposta está correta')
        location.assign("rafiki2.html")
    } else {
        alert('resposta incorreta')
        location.assign("rafikigo.html")
    }
}
