function timaoEPumba2() {
    var resposta = (prompt('digite a sua resposta').toUpperCase())
    if (resposta === 'D') {
        alert('a resposta está correta')
        location.assign("tp3.html")
    } else {
        alert('resposta incorreta')
        location.assign("tpgo.html")
    }
}
