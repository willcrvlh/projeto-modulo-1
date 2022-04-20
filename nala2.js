function nala2() {
    var resposta = (prompt('digite a sua resposta').toUpperCase())
    if (resposta === 'A') {
        alert('a resposta está correta')
        location.assign("nala3.html")
    } else {
        alert('resposta incorreta')
        location.assign("gameover.html")
    }
}