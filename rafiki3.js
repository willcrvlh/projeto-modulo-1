function rafiki3() {
    var resposta = (prompt('digite a sua resposta').toUpperCase())
    if (resposta === 'C') {
        alert('a resposta está correta')
        location.assign("nalafinal.html")
    } else {
        alert('resposta incorreta')
        location.assign("rafikigo.html")
    }
}
