function timaoEPumba3() {
    var resposta = (prompt('digite a sua resposta').toUpperCase())
    if (resposta === 'E') {
        alert('a resposta está correta')
        location.assign("nalafinal.html")
    } else {
        alert('resposta incorreta')
        location.assign("tpgo.html")
    }
}
