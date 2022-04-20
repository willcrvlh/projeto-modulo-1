function timaoEPumba1() {
    var resposta = (prompt('digite a sua resposta').toUpperCase())
    if (resposta === 'E') {
        alert('a resposta está correta')
        location.assign("tp2.html")
    } else {
        alert('resposta incorreta')
        location.assign("gameover.html")
    }
}