function rafiki2() {
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

        if (resposta === 'A') {
            alert('a resposta está correta')
            location.assign("rafiki3.html")
            break
        } 
        
        else {
            alert('resposta incorreta')
         
        }
        
    }
    if(vidas==0){
        alert("Você perdeu")
        location.assign("rafikigo.html")
    }
}