/*function timaoEPumba3() {
    var resposta = (prompt('digite a sua resposta').toUpperCase())
    if (resposta === 'E') {
        alert('a resposta está correta')
        location.assign("nalafinal.html")
    } else {
        alert('resposta incorreta')
        location.assign("tpgo.html")
    }
}
*/
function timaoEPumba3() {
    for (var vidas = 3; vidas > 0; vidas--) {
        while (true) {
            var resposta = (prompt('digite a sua resposta').toUpperCase())
            if (resposta === 'A' || resposta === 'B' || resposta === 'D' || resposta === 'E' || resposta === 'C') {
                break
            }
             else {
                alert('digite uma resposta válida')
            }
        }

        if (resposta === 'E') {
            alert('a resposta está correta')
            location.assign("nalafinal.html")
            break
        } 
        
        else {
            alert('resposta incorreta')
         
        }
        
    }
    if(vidas==0){
        alert("Você perdeu")
        location.assign("tpgo.html")
    }
}