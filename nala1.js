function nala1() {
    var resposta = (prompt('digite a sua resposta').toUpperCase())
    if (resposta === 'C') {
        alert('a resposta está correta')
        location.assign("nala2.html")
    } else {
        alert('resposta incorreta')
        location.assign("gameover.html")
    }
}