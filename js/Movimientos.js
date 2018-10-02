
/**
 * Retorna la lista de movimientos posibles para una pieza
 * de tipo caballo
 * @param {string} actual casilla actual de la pieza 
 * @return {array} lista de movimientos
 */
function movCaballo(actual,pieceId,game){

    var movimientos = [];
    var posibles = []; //Temporal

    //Crea los 8 posibles movimientos
    var c1 = actual - 21; 
    var c2 = actual - 19;
    var c3 = actual - 12;
    var c4 = actual - 8;
    var c5 = actual + 8;
    var c6 = actual + 12;
    var c7 = actual + 19;
    var c8 = actual + 21;

    posibles.push(c1);
    posibles.push(c2);
    posibles.push(c3);
    posibles.push(c4);
    posibles.push(c5);
    posibles.push(c6);
    posibles.push(c7);
    posibles.push(c8);

    //Sanitizar
    for(var i=0; i <= posibles.length ;i++){
        //las casillas existen?
        //está libre?
        if(posibles[i] >= 11 && posibles[i] <= 88){
			//se agrega
			if(!isTileFree(game,posibles[i]) && getColorPiece(game,posibles[i])!=getColor(pieceId)){
				movimientos.push(posibles[i]);
			}else{
				if(isTileFree(game,posibles[i])){
					movimientos.push(posibles[i]);
				}
			}
			//console.log(movimientos);
        }
	}
	
    return movimientos;
    
}

/**
 * Retorna la lista de movimientos posibles para una pieza
 * de tipo peón
 * @param {string} actual casilla actual de la pieza 
 * @param {string} pieceId id de la pieza
 * @return {array} lista de movimientos
 */
function movPeon(actual, pieceId,game){
	
    var movimientos = [];
	var posibles = []; //Temporal
	
	var eq = 1;
    if(getColor(pieceId) == "black"){
        eq =-1;
    }
	var c1 = actual + 10*eq;
    posibles.push(c1);
    if(eq > 0){
        if(actual < 30){
            var c2 = actual + 20*eq;
            posibles.push(c2);
        }
        if(actual>50 && actual<59){
        	if((actual+1)<=58){
        		if(!isTileFree(game,actual+1) && (getColorPiece(game,actual+1)=="black") && (getPieceType(game,getPieceId(game,actual+1))=="peon") && (getCasillaInicial(game,getPieceId(game,actual+1))==((actual+1)+20))){
        			movimientos.push(actual+11);
        		}
        	}
        	if((actual-1)>=51){
        		if(!isTileFree(game,actual-1) && (getColorPiece(game,actual-1)=="black") && (getPieceType(game,getPieceId(game,actual-1))=="peon") && (getCasillaInicial(game,getPieceId(game,actual-1))==((actual-1)+20))){
        			movimientos.push(actual+9);
        		}
        	}
        }
    }else{
        if(actual > 70){
            var c2 = actual + 20*eq;
            posibles.push(c2);
        }
        if(actual>40 && actual<49){
        	if((actual+1)<=48){
        		if(!isTileFree(game,actual+1) && (getColorPiece(game,actual+1)=="white") && (getPieceType(game,getPieceId(game,actual+1))=="peon") && (getCasillaInicial(game,getPieceId(game,actual+1))==((actual+1)-20))){
        			movimientos.push(actual-9);
        		}
        	}
        	if((actual-1)>=41){
        		if(!isTileFree(game,actual-1) && (getColorPiece(game,actual-1)=="white") && (getPieceType(game,getPieceId(game,actual-1))=="peon") && (getCasillaInicial(game,getPieceId(game,actual-1))==((actual-1)-20))){
        			movimientos.push(actual-11);
        		}
        	}
        }

	}
	
	//Sanitizar
	var c3 = actual+11*eq;
	var c4 = actual+9*eq;
	
	if(!isTileFree(game,c3)){
		if(getColorPiece(game,c3) != getColor(pieceId)){
			movimientos.push(c3);
		}
	}

	if(!isTileFree(game,c4)){
		if(getColorPiece(game,c4)!=getColor(pieceId)){
			movimientos.push(c4);
		}
	}

    for(var i = 0; i <= posibles.length ;i++){
		
		//las casillas existen?
		//está libre?
        if(posibles[i] >= 11 && posibles[i] <= 88){
			//se agrega
			if(isTileFree(game,posibles[i])){
				movimientos.push(posibles[i]);
			}else{
				return movimientos;
			}
			//console.log(movimientos);
		}
		
	}
	
    return movimientos;
}

/**
 * Retorna la lista de movimientos posibles para una pieza
 * de tipo torre
 * @param {string} actual casilla actual de la pieza 
 * @return {array} lista de movimientos
 */
function movTorre(actual,pieceId,game){
	//console.log(actual);

	var movimientos = [];
	var posibles = []; //temp

	//down
	var i = actual + 10;
	while(i <= 88){
		if(!isTileFree(game,i) && getColorPiece(game,i)!=getColor(pieceId)){
			posibles.push(i);
			break;
		}else{
			if(!isTileFree(game,i)){
				break;
			}else{
				posibles.push(i);
			}
		}
		
		i+=10;
	}
	//up
	var j= actual-10;
	while(j >= 11){
		if(!isTileFree(game,j) && getColorPiece(game,j)!=getColor(pieceId)){
			posibles.push(j);
			break;
		}else{
			if(!isTileFree(game,j)){
				break;
			}else{
				posibles.push(j);
			}
		}
		j-=10;
	}
	//right
	var k = actual+1;

	while(((k-9)%10) != 0){
		if(!isTileFree(game,k) && getColorPiece(game,k)!=getColor(pieceId)){
			posibles.push(k);
			break;
		}else{
			if(!isTileFree(game,k)){
				break;
			}else{
				posibles.push(k);
			}
		}
		k += 1;
	}

	//left
	var l= actual-1;
	while(((l)%10) != 0){
		if(!isTileFree(game,l) && getColorPiece(game,l)!=getColor(pieceId)){
			posibles.push(l);
			break;
		}else{
			if(!isTileFree(game,l)){
				break;
			}else{
				posibles.push(l);
			}
		}
		l -= 1;
	}
	//return posibles;

	
	if(!getSeMovio(game,pieceId)){
		
		if(getColor(pieceId)=="white"){
			
			if(!getSeMovio(game,"piece4")){
				
				if(pieceId=="piece1"){
					if(isTileFree(game,"12") && isTileFree(game,"13")){
						movimientos.push(getTile(game,"piece4"));
					}
				}else{
					if(isTileFree(game,"15") && isTileFree(game,"16") && isTileFree(game,"17")){
						movimientos.push(getTile(game,"piece4"));
					}
				}
			}
		}else{
			
			if(!getSeMovio(game,"piece28")){
				if(pieceId=="piece25"){
					if(isTileFree(game,"82") && isTileFree(game,"83")){
						movimientos.push(getTile(game,"piece28"));
					}
				}else{
					if(isTileFree(game,"85") && isTileFree(game,"86") && isTileFree(game,"87")){
						movimientos.push(getTile(game,"piece28"));
					}
				}
			}
		}
	}
	



	//Sanitizar
    for(var i = 0; i <= posibles.length ;i++){
        //las casillas existen?
        
        if(posibles[i] >= 11 && posibles[i] <= 88){
            //se agrega
			movimientos.push(posibles[i]);
			//console.log(movimientos);
        }
    }
    return movimientos;
}

/**
 * Retorna la lista de movimientos posibles para una pieza
 * de tipo alfil
 * @param {string} actual casilla actual de la pieza 
 * @return {array} lista de movimientos
 */
function movAlfil(actual,pieceId,game){
	//console.log(actual);
	var movimientos = [];
	var posibles = []; //temp

	//posibles
	//left down
	var i=actual+9;
	while(i%10 != 0){
		if(!isTileFree(game,i) && getColorPiece(game,i)!=getColor(pieceId)){
			posibles.push(i);
			break;
		}else{
			if(!isTileFree(game,i)){
				break;
			}else{
				posibles.push(i);
			}
		}
		i += 9;
	}
	//right down
	var j=actual+11;
	while((j)%10 != 0){
		if(!isTileFree(game,j) && getColorPiece(game,j)!=getColor(pieceId)){
			posibles.push(j);
			break;
		}else{
			if(!isTileFree(game,j)){
				break;
			}else{
				posibles.push(j);
			}
		}
		j += 11;
	}
	//right up
	var k=actual-9;
	while(k%10 != 0){
		if(!isTileFree(game,k) && getColorPiece(game,k)!=getColor(pieceId)){
			posibles.push(k);
			break;
		}else{
			if(!isTileFree(game,k)){
				break;
			}else{
				posibles.push(k);
			}
		}
		k -= 9;
	}
	//left up
	var l = actual-11;
	while((l)%10 != 0){
		if(!isTileFree(game,l) && getColorPiece(game,l)!=getColor(pieceId)){
			posibles.push(l);
			break;
		}else{
			if(!isTileFree(game,l)){
				break;
			}else{
				posibles.push(l);
			}
		}
		l -= 11;
	}

	//Sanitizar
    for(var i = 0; i <= posibles.length ;i++){
        //las casillas existen?
        //está libre?
        if(posibles[i] >= 11 && posibles[i] <= 88){
            //se agrega
			movimientos.push(posibles[i]);
			//console.log(movimientos);
        }
    }
    return movimientos;


}

/**
 * Retorna la lista de movimientos posibles para una pieza
 * de tipo reina
 * @param {string} actual casilla actual de la pieza 
 * @return {array} lista de movimientos
 */
function movReina(actual,pieceId,game){
	var movimientos = [];
	movimientos = movAlfil(actual,pieceId,game);
	movimientos = movimientos.concat(movTorre(actual,pieceId,game));

	return movimientos;
}

/**
 * Retorna la lista de movimientos posibles para una pieza
 * de tipo rey
 * @param {string} actual casilla actual de la pieza 
 * @return {array} lista de movimientos
 */
function movRey(actual,pieceId,game){
	var movimientos = [];
	var posibles = []; //Temporal
	
	 //Crea los 8 posibles movimientos
	 var c1 = actual - 11; 
	 var c2 = actual - 10;
	 var c3 = actual - 9;
	 var c4 = actual - 1;
	 var c5 = actual + 1;
	 var c6 = actual + 9;
	 var c7 = actual + 10;
	 var c8 = actual + 11;
 
	 posibles.push(c1);
	 posibles.push(c2);
	 posibles.push(c3);
	 posibles.push(c4);
	 posibles.push(c5);
	 posibles.push(c6);
	 posibles.push(c7);
	 posibles.push(c8);


	   //Sanitizar
	   for(var i = 0; i <= posibles.length ;i++){
        //las casillas existen?
        //está libre?
        if(posibles[i] >= 11 && posibles[i] <= 88){
			//se agrega
			if(!isTileFree(game,posibles[i]) && getColorPiece(game,posibles[i])!=getColor(pieceId)){
				movimientos.push(posibles[i]);
			}else{
				if(isTileFree(game,posibles[i])){
					movimientos.push(posibles[i]);
				}
			}
			
			//console.log(movimientos);
        }
	}
	
	if(!getSeMovio(game,pieceId)){
		fila=0;
		libres=0;
		if(getColor(pieceId)=="white"){
			
			for(i=0;i<6;i++){
				if(isTileFree(game,(12+i+fila).toString())){
					libres++;
				}
				if(i==1){
					i++;
					if(libres==2 && !getSeMovio(game,"piece1")){
						movimientos.push(getTile(game,"piece1"));
					}
					libres=0;
				}
			}
			if(libres==3 && !getSeMovio(game,"piece8")){
				movimientos.push(getTile(game,"piece8"));
			}
		}else{
			fila=70;
			for(i=0;i<6;i++){
				if(isTileFree(game,(12+i+fila).toString())){
					libres++;
				}
				if(i==1){
					i++;
					if(libres==2 && !getSeMovio(game,"piece25")){
						movimientos.push(getTile(game,"piece25"));
					}
					libres=0;
				}
			}
			if(libres==3 && !getSeMovio(game,"piece32")){
				movimientos.push(getTile(game,"piece32"));
			}
		}
	}

    return movimientos;
}
