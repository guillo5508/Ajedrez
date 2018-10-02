/**
 * Pone las piezas
 */
function putPieces (game){
	parse = JSON.parse(game);
	k = 1;
	for (i=1; i<3; i++){
		Player = "Player"+i;
		for(j=k; j<k+16; j++){
			Piece = "piece"+j;			
			//Is not deleted?
			//OK
			if(parse[Player]["pieces"].hasOwnProperty(Piece)){
				//Get type
				Playa = Player.toLowerCase();
				PieceType = parse[Player]["pieces"][Piece]["tipo"];
				//Do DOM
				div = '<div id="' + Piece + '" class="smoothmove piece ' + Playa + '"></div>';
				$("#chessboard").prepend(div);
				//Put icon
				var icon = "";
				switch (PieceType) {
					case "torre":
						icon = '<i class="fas fa-chess-rook icon"></i>';
						break;
					case "caballo":
						icon = '<i class="fas fa-chess-knight icon"></i>';	
						break;
					case "alfil":
						icon = '<i class="fas fa-chess-bishop icon"></i>';
						break;
					case "rey":
						icon = '<i class="fas fa-chess-king icon"></i>';
						break;
					case "reina":
						icon = '<i class="fas fa-chess-queen icon"></i>';	
						break;
					case "peon":
						icon = '<i class="fas fa-chess-pawn icon"></i>';
						break;
				}
				//Paste it
				$("#"+Piece).prepend(icon);
				//Ready
			}

		}
		k = 17;
	}
}

/**
 * Reinicia el juego, actualizando la cookie y refrescando la página
 */
function resetGame (){
	var game = getOriginalGame();	
	Cookies.set('game', game);
	location.reload();
}

/**
 * Devuelve el juego original en formato JSON
 */
function getOriginalGame (){
	var game = {
		"turno" : "Player1",
		"Player1" : {
			"color" : "white",
			"pieces" : {
				'piece1': {
					"casilla" 	: 11,
					"cssTop"	: 60,
					"cssLeft"	: 15,
					"tipo" 		: "torre",
					"seMovio"	: false
				},
				'piece2': {
					"casilla" 	: 12,
					"cssTop"	: 60,
					"cssLeft"	: 85,
					"tipo" 		: "caballo"
				},
				'piece3': {
					"casilla" 	: 13,
					"cssTop"	: 60,
					"cssLeft"	: 157,					
					"tipo" 		: "alfil"
				},
				'piece4': {
					"casilla" 	: 14,
					"cssTop"	: 60,
					"cssLeft"	: 221,
					"tipo" 		: "rey",
					"seMovio"	: false
				},
				'piece5': {
					"casilla"	: 15,
					"cssTop"	: 60,
					"cssLeft"	: 288,
					"tipo" 		: "reina"
				},			
				'piece6': {
					"casilla"	: 16,
					"cssTop"	: 60,
					"cssLeft"	: 367,
					"tipo" 		: "alfil"
				},
				'piece7': {
					"casilla" 	: 17,
					"cssTop"	: 60,
					"cssLeft"	: 435,
					"tipo" 		: "caballo"
				},
				'piece8': {
					"casilla" 	: 18,
					"cssTop"	: 60,
					"cssLeft"	: 504,
					"tipo" 		: "torre",
					"seMovio"	: false
				},
				'piece9': {
					"casilla" 	: 21,
					"cssTop"	: 128,
					"cssLeft"	: 18,
					"tipo" 		: "peon",
					"casilla_inicial"	: 21
				},
				'piece10': {
					"casilla" 	: 22,
					"cssTop"	: 128,
					"cssLeft"	: 88,
					"tipo" 		: "peon",
					"casilla_inicial"	: 22
				},
				'piece11': {
					"casilla" 	: 23,
					"cssTop"	: 128,
					"cssLeft"	: 158,
					"tipo" 		: "peon",
					"casilla_inicial"	: 23
				},			
				'piece12': {
					"casilla" 	: 24,
					"cssTop"	: 128,
					"cssLeft"	: 228,
					"tipo" 		: "peon",
					"casilla_inicial"	: 24
				},
				'piece13': {
					"casilla" 	: 25,
					"cssTop"	: 128,
					"cssLeft"	: 298,
					"tipo" 		: "peon",
					"casilla_inicial"	: 25
				},
				'piece14': {
					"casilla" 	: 26,
					"cssTop"	: 128,
					"cssLeft"	: 368,
					"tipo" 		: "peon",
					"casilla_inicial"	: 26
				},
				'piece15': {
					"casilla" 	: 27,
					"cssTop"	: 128,
					"cssLeft"	: 438,
					"tipo" 		: "peon",
					"casilla_inicial"	: 27
				},
				'piece16': {
					"casilla" 	: 28,
					"cssTop"	: 128,
					"cssLeft"	: 508,
					"tipo" 		: "peon",
					"casilla_inicial"	: 28
				},																													
			}
		},
		"Player2" : {
			"color" : "black",
			"pieces" : {
				'piece17': {
					"casilla" 	: 71,
					"cssTop"	: 476,
					"cssLeft"	: 18,
					"tipo" 		: "peon",
					"casilla_inicial"	: 71
				},
				'piece18': {
					"casilla" 	: 72,
					"cssTop"	: 476,
					"cssLeft"	: 88,
					"tipo" 		: "peon",
					"casilla_inicial"	: 72
				},
				'piece19': {
					"casilla" 	: 73,
					"cssTop"	: 476,
					"cssLeft"	: 158,
					"tipo" 		: "peon",
					"casilla_inicial"	: 73
				},
				'piece20': {
					"casilla" 	: 74,
					"cssTop"	: 476,
					"cssLeft"	: 228,
					"tipo" 		: "peon",
					"casilla_inicial"	: 74
				},
				'piece21': {
					"casilla"	: 75,
					"cssTop"	: 476,
					"cssLeft"	: 298,
					"tipo" 		: "peon",
					"casilla_inicial"	: 75
				},			
				'piece22': {
					"casilla"	: 76,
					"cssTop"	: 476,
					"cssLeft"	: 368,
					"tipo" 		: "peon",
					"casilla_inicial"	: 76
				},
				'piece23': {
					"casilla" 	: 77,
					"cssTop"	: 476,
					"cssLeft"	: 438,
					"tipo" 		: "peon",
					"casilla_inicial"	: 77
				},
				'piece24': {
					"casilla" 	: 78,
					"cssTop"	: 476,
					"cssLeft"	: 508,
					"tipo" 		: "peon",
					"casilla_inicial"	: 78	
				},
				'piece25': {
					"casilla" 	: 81,
					"cssTop"	: 550,
					"cssLeft"	: 15,
					"tipo" 		: "torre",
					"seMovio"	: false
				},
				'piece26': {
					"casilla" 	: 82,
					"cssTop"	: 550,
					"cssLeft"	: 85,
					"tipo" 		: "caballo"
				},
				'piece27': {
					"casilla" 	: 83,
					"cssTop"	: 550,
					"cssLeft"	: 157,
					"tipo" 		: "alfil"
				},			
				'piece28': {
					"casilla" 	: 84,
					"cssTop"	: 550,
					"cssLeft"	: 219,
					"tipo" 		: "rey",
					"seMovio"	: false
				},
				'piece29': {
					"casilla" 	: 85,
					"cssTop"	: 550,
					"cssLeft"	: 291,
					"tipo" 		: "reina"
				},
				'piece30': {
					"casilla" 	: 86,
					"cssTop"	: 550,
					"cssLeft"	: 367,
					"tipo" 		: "alfil"
				},
				'piece31': {
					"casilla" 	: 87,
					"cssTop"	: 550,
					"cssLeft"	: 435,
					"tipo" 		: "caballo"
				},
				'piece32': {
					"casilla" 	: 88,
					"cssTop"	: 550,
					"cssLeft"	: 504,
					"tipo" 		: "torre",
					"seMovio"	: false
				},	
			}
		},
	};

	Cookies.set('game', game);
	return game;
}


/**
 * Se encarga de crear el tablero con cada una de las casillas y
 * de organizar el lugar de cada pieza
 */
function createBoard (){

	//Enumeración de columnas
	fila = [1,2,3,4,5,6,7,8];

	//Enumeración de filas
	columna = [1,2,3,4,5,6,7,8];

	//Check and set the game
	var game = Cookies.get('game');
	if(game === undefined){
		game = getOriginalGame();	
		putPieces(JSON.stringify(game));
	}else{
		//Put styles	
		putPieces(game);
		doStylaBro(game);
	}

	//Creamos el tablerito
  	var count = 0;
	for(var i = 0; i < fila.length; i++) {
	    for (var j = 0; j < columna.length; j++) {
			//¿Debe la casilla moverse hacia abajo y hacia la izquierda?
	        if(count%8 == 0) {
	          $("#chessboard").append('<div class="tile smoothfade" style="clear:left"></div>');
	        }else{
	          $("#chessboard").append('<div class="tile smoothfade"></div>');
	        }
			//Setea la posición utilizando el atributo data-grcasillapos
	        $(".tile").eq(count).attr("data-gridpos",(("" + fila[i] + columna[j])));
			//Elección de colores
	        if(((i%2 == 0) && (j%2 != 0)) || ((i%2 != 0) && (j%2 == 0))) {
	          $(".tile").eq(count).addClass("black");
	        }
	        else {
	          $(".tile").eq(count).addClass("white");
	        }
	        count++;
	    }
	}
	

}

/**
 * Devuelve el estado de una casilla
 * @param {JSON} game 
 * @param {number} pos posicion de la casilla consultada
 * @return {boolean} estado de la casilla, true: libre, false: ocupada
 */
function isTileFree (game, tilePos) {
	temporalGame = JSON.parse(game);
	k = 1;
	for (i=1; i<3; i++){
		Player = "Player"+i;
		for(j=k; j<k+16; j++){
			Piece = "piece"+j;
			if(parse[Player]["pieces"].hasOwnProperty(Piece)){	
				if(temporalGame[Player]["pieces"][Piece]["casilla"] == tilePos){
					return false;
				}
			}
		}
		k = 17;
	}
	return true;
}

/**
 * Actualiza la casilla en la que se encuentra ubicada 
 * una pieza arbitraria, actualiza el JSON del juego
 * y directamente la cookie asociada
 * @param {JSON} game juego
 * @param {string} pieceId id de la pieza implicada
 * @param {string} tileId casilla del movimiento
 * @return {JSON} juego actualizado
 */
function updateTileOfPiece (game, pieceId, tileId) {
	temporalGame = JSON.parse(game);
	k = 1;
	for (i=1; i<3; i++){
		Player = "Player"+i;
		for(j=k; j<k+16; j++){
			Piece = "piece"+j;	
			if(parse[Player]["pieces"].hasOwnProperty(Piece)){			
				if(Piece == pieceId){
					temporalGame[Player]["pieces"][Piece]["casilla"] = tileId;
				}
			}
		}
		k = 17;
	}
	newGame = JSON.stringify(temporalGame);	
	Cookies.set('game', newGame);
	return newGame;
}

/**
 * Actualiza la ubicación exacta de las piezas utilizando css
 * @param {JSON} game
 * @param {string} pieceId
 * @param {string} y posición vertical
 * @param {string} x posición horizontal
 * @return {JSON} juego actualizado
 */
function updateStylaOfPiece (game, pieceId, y, x){
	temporalGame = JSON.parse(game);
	k = 1;
	for (i=1; i<3; i++){
		Player = "Player"+i;
		for(j=k; j<k+16; j++){
			Piece = "piece"+j;		
			if(parse[Player]["pieces"].hasOwnProperty(Piece)){		
				if(Piece == pieceId){
					temporalGame[Player]["pieces"][Piece]["cssTop"]  = y;
					temporalGame[Player]["pieces"][Piece]["cssLeft"] = x;
				}
			}
		}
		k = 17;	
	}
	newGame = JSON.stringify(temporalGame);	
	Cookies.set('game', newGame);
	return newGame;
}

/**
 * Utiliza las propiedades cssTop y cssLeft del JSON
 * del juego, para recrear el tablero
 * @param {JSON} game
 */
function doStylaBro (game){
	temporalGame = JSON.parse(game);
	k = 1;
	for (i=1; i<3; i++){
		Player = "Player"+i;
		for(j=k; j<k+16; j++){
			Piece = "piece"+j;		
			if(parse[Player]["pieces"].hasOwnProperty(Piece)){
				y = temporalGame[Player]["pieces"][Piece]["cssTop"];
				x = temporalGame[Player]["pieces"][Piece]["cssLeft"];
				$('#'+Piece).css({"top": y, "left": x});
			}
		}
		k = 17;
	}	
}

/**
 * Obtiene el tipo de una pieza
 * @param {JSON} game
 * @param {string} pieceId
 * @return {string} tipo de pieza
 */
function getPieceType (game, pieceId) {
	temporalGame = JSON.parse(game);
	k = 1;
	for (var i=1; i<3; i++){
		Player = "Player"+i;
		for(j=k; j<k+16; j++){
			Piece = "piece"+j;		
			if(parse[Player]["pieces"].hasOwnProperty(Piece)){		
				if(Piece == pieceId){
					return temporalGame[Player]["pieces"][Piece]["tipo"];
				}
			}
		}
		k = 17;
	}
}

/**
 * Pinta los posibles movimientos de una ficha
 * @param {array} tilesArray
 */
function paintTiles (tilesArray) {
	tiles.removeClass('legal');
	for (var i in tilesArray) {
		ID = tilesArray[i];	
		$('*[data-gridpos="'+ID+'"]').addClass('legal');
	}
}

/**
 * Llama la función paintTiles por cada tipo de pieza y
 * retorna los movimientos que puede tener dicha ficha
 * @param {JSON} game
 * @param {string} pieceId
 * @param {string} pieceType 
 * @return {array} movimientos de cada pieza
 */
function showLegalMoves (game, pieceId, pieceType) {
	
	switch (pieceType) {
		case "torre":
			return movTorre(getTile(game, pieceId), pieceId,game);			
			break;
		case "caballo":
			return movCaballo(getTile(game, pieceId), pieceId,game);	
			break;
		case "alfil":
			return movAlfil(getTile(game, pieceId),pieceId,game);	
			break;
		case "rey":
			return movRey(getTile(game, pieceId),pieceId,game);	
			break;
		case "reina":
			return movReina(getTile(game, pieceId),pieceId,game);	
			break;
		case "peon":
			return movPeon(getTile(game, pieceId), pieceId,game);	
			break;
	}

}

/**
 * Obtiene la casilla en la que se ubica actualmente 
 * una ficha arbitraria
 * @param {JSON} game
 * @param {string} pieceId
 * @return {string} casilla actual
 */
function getTile (game, pieceId) {
	parse = JSON.parse(game);
	k = 1;
	for (i=1; i<3; i++){
		Player = "Player"+i;
		for(j=k; j<k+16; j++){
			Piece = "piece"+j;	
			if(parse[Player]["pieces"].hasOwnProperty(Piece)){			
				if(Piece == pieceId){
					return parse[Player]["pieces"][Piece]["casilla"];
				}
			}
		}
		k = 17;
	}
}

/**
 * Obtiene el color perteneciente a una ficha arbitraria
 * @param {string} pieceId
 * @return {string} color
 */
function getColor (pieceId) {
	
	var number = pieceId.substr(5, pieceId.length);
	if(number <= 16 ){
		return "white";
	}else{
		return "black";
	}

}

/**
 * Obtiene el jugador al que pertence la ficha indicada
 * @param {string} pieceId
 * @return {string} jugador
 */
function getPieceOwner (pieceId) {
	
	var number = pieceId.substr(5, pieceId.length);

	if(number <= 16 ){
		return "Player1";
	}else{
		return "Player2";
	}

}

/**
 * Esconde una pieza
 * @param {JSON} game JSON del juego
 * @param {string} pieceId id de la pieza
 * @return {JSON} juego modificado
 */
function hidePiece (game, pieceId) {
	Player = getPieceOwner(pieceId);
	temporalGame = JSON.parse(game);
	delete temporalGame[Player]["pieces"][pieceId];
	newGame = JSON.stringify(temporalGame);	
	Cookies.set('game', newGame);
	$("#"+pieceId).remove();
	return newGame;
}


/**
 * Obtiene el color de una ficha que esté en el tablero
 * @param {JSON} game JSON del juego
 * @param {string} pos posición de la casilla
 * @return {string} color de la pieza de esa casilla 
 */
function getColorPiece(game, pos) {
	parse = JSON.parse(game);
	k = 1;
	for (i=1; i<3; i++){
		Player = "Player"+i;
		for(j=k; j<k+16; j++){
			Piece = "piece"+j;		
			if(parse[Player]["pieces"].hasOwnProperty(Piece)){			
				if(parse[Player]["pieces"][Piece]["casilla"] == pos){
					return getColor(Piece);
				}
			}
		}
		k = 17;
	}
}

/**
 * Obtiene el id de la pieza dada una casilla
 * @param {JSON} game JSON del juego
 * @param {string} pos posición de la casilla
 * @return {string} pieceId id de la pieza de esa casilla 
 */
function getPieceId(game, pos) {
	parse = JSON.parse(game);
	k = 1;
	for (i=1; i<3; i++){
		Player = "Player"+i;
		for(j=k; j<k+16; j++){
			Piece = "piece"+j;	
			if(parse[Player]["pieces"].hasOwnProperty(Piece)){		
				if(parse[Player]["pieces"][Piece]["casilla"] == pos){
					return Piece;
				}
			}
		}
		k = 17;
	}
}

/**
 * Convierte una pieza cualquiera en reina
 * @param {JSON} game JSON del juego
 * @param {string} pieceId id de la pieza
 * @return {JSON} juego modificado
 */
function conversionReina(game, pieceId) {
	Player = getPieceOwner(pieceId); 
	temporalGame = JSON.parse(game);
	temporalGame[Player]["pieces"][pieceId]["tipo"] = "reina";
	$("#"+pieceId).find("i:first").attr("class", "fas fa-chess-queen icon");
	newGame = JSON.stringify(temporalGame);	
	Cookies.set('game', newGame);
	return newGame;
}

/**
 * Obtiene un booleano de si se ha movido o no la pieza
 * @param {JSON} game JSON del juego
 * @param {string} pieceId id de la pieza
 * @return {boolean} ¿Se ha movido la pieza?
 */
function getSeMovio(game,pieceId){
	temporalGame = JSON.parse(game);
	Player = getPieceOwner(pieceId);
	return temporalGame[Player]["pieces"][pieceId]["seMovio"];
}
//obtiene el parametro de la casilla inicial del peon para hacer peon al paso
//@param {JSON} game JSON del juego
// @param {string} pieceId id de la pieza
function getCasillaInicial(game,pieceId){
	temporalGame = JSON.parse(game);
	Player = getPieceOwner(pieceId);
	return temporalGame[Player]["pieces"][pieceId]["casilla_inicial"];
}

/**
 * Setea si se movio una pieza
 * @param {JSON} game JSON del juego
 * @param {string} pieceId id de la pieza
 * @return {JSON} juego modificado
 */
function setSeMovio(game, pieceId) {
	Player = getPieceOwner(pieceId);
	temporalGame = JSON.parse(game);
	temporalGame[Player]["pieces"][pieceId]["seMovio"] = true;
	newGame = JSON.stringify(temporalGame);	
	Cookies.set('game', newGame);
	return newGame;
}

/**
 * Obtiene la proporcion casilla-ficha de una pieza arbitraria
 * @param {JSON} game JSON del juego
 * @param {string} pieceId id de la pieza
 * @return {array} posiciones {x, y}
 */
function getPieceProportion (game, pieceId){
	temporalGame = JSON.parse(game);
	proporcion = [];
	Player = getPieceOwner(pieceId);
	xPiece = temporalGame[Player]["pieces"][pieceId]["cssLeft"];
	yPiece = temporalGame[Player]["pieces"][pieceId]["cssTop"];
	xCasilla = $('[data-gridpos='+temporalGame[Player]["pieces"][pieceId]["casilla"]+']').position().left;
	yCasilla = $('[data-gridpos='+temporalGame[Player]["pieces"][pieceId]["casilla"]+']').position().top;
	proporcion[0] = xPiece - xCasilla;
	proporcion[1] = yPiece - yCasilla;
	return proporcion;
}

/**
 * Setea el turno
 * @param {JSON} game JSON del juego
 * @param {string} turno
 * @return {JSON} juego modificado
 */
function setTurno(game, turno) {
	temporalGame = JSON.parse(game);
	temporalGame["turno"] = turno;
	newGame = JSON.stringify(temporalGame);	
	Cookies.set('game', newGame);
	return newGame;
}

/**
 * Obtiene el turno actual
 * @param {JSON} game JSON del juego
 */
function getTurno(game){
	temporalGame = JSON.parse(game);
	return temporalGame["turno"];
}

/**
 * Indica si en la jugada hay jaque.
 * @param {JSON} game JSON del juego
 */
function jaque(game,tileId,player){
	parse = JSON.parse(game);
	//4 28
	enJaque=[];
	if(player=="Player1"){
		a=17;
		b=32;
		player="Player2";
	}else{
		a=1;
		b=16;
		player="Player1";
	}
	
	for(var i=a;i<=b;i++){
		//console.log(i);
		pieceId="piece"+i;
		//console.log(parse[player]["pieces"].hasOwnProperty(pieceId));
		if(parse[player]["pieces"].hasOwnProperty(pieceId)){

			ptype=getPieceType(game,pieceId);
			//console.log(ptype +" "+ pieceId+" "+ i);
			enJaque=showLegalMoves(game,pieceId,ptype);
			if(enJaque.indexOf(tileId) > -1){
				return true;
			}
			enJaque=[];
		}
		
	}
	return false;
}

/**
 * Mueve la ficha
 * @param {JSON} game JSON del juego
 * @param {string} turno
 * @return {JSON} juego modificado
 */
function doMove(piece, pieceProportion, casilla) {
	casillaX 		= casilla.position().left;
	casillaY 		= casilla.position().top;
	x               = casillaX + pieceProportion[0];
	y               = casillaY + pieceProportion[1];
	piece.css({"top": y, "left": x});
}

/**
 * Retorna la proporción de una reina
 */
function getQueenProportion () {
	return [8, 10];
}