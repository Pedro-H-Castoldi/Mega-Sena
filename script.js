function mega_sena(){
	let numeros = []
	let mega = []
	let acerto = 0
	

	for(let i=0; i<6; i++){
		let alerta = alerta2 = true

		let n = prompt(`Insira o ${i+1}° número: `)

		if(n >= 1 || n <= 60){
			for(let j=0; j<numeros.length; j++){
				if(n == numeros[j]){
					alert("ERRO: número já inserido..")
					i--
					alerta = false
				}

			}

			if(alerta){
				numeros.push(n)
			}
		}
	}
    for(i=0; i<6; i++){
    	let sorteio = Math.ceil(Math.random()*60)

    	for(j=0; j<mega.length; j++){
    		if(sorteio == mega[j]){
    			i--
    			alerta2 = false
    		}

    	}
    	if(alerta2){
    		mega.push(sorteio)
    	}
    }
	document.write(`Inserido: ${numeros}<br> Sorteado: ${mega}<br>`)
	document.write("Número(s) acertado(s): <br>")
	for(i=0; i<6; i++){
		for(j=0; j<6; j++){
			if(numeros[i] == mega[j]){
				document.write(numeros[i] + '  ')
			}
		}
	}
}

mega_sena()