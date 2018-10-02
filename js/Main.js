//Método principal
jQuery(document).ready(function($) {

	//Default values
	var currentTile = 	{};
	var piece 		= 	{};	
	var pieceId 	= 	'';
	var movTemp 	= 	[];
	var pieceProportion;
	
	//Creación de tablero
	createBoard();
	console.log("Created Chessboard");
	
	//Obtención de la cookie juego
	var game = Cookies.get('game');
	console.log(game);
	
	//Todas las casillas
	tiles = $(".tile");
	
	//Todas las piezas
	pieces = $(".piece");

	//Variable turno
	var turno = getTurno(game);
	if (turno == "Player2"){
		$("#turno").text("Jugador 2");
	}else{
		$("#turno").text("Jugador 1");
	}
	
	//Reset game
	$("#reset").click(function(){
		resetGame();
	});
	
	//Click a una pieza
	$(".piece").on('click',function(){

		//Get current piece
		pieceAuxiliar = $(this);
		if
		(
			(turno == "Player1" && getColor(pieceAuxiliar.attr("id")) == "white") || 
			(turno == "Player2" && getColor(pieceAuxiliar.attr("id")) == "black")
		)
		{	
			//Get shit
			piece	= $(this);
			pieceId = piece.attr("id");

			if(getPieceOwner(pieceId) == turno){
				
				//¿Qué tipo de ficha es?
				pieceType = getPieceType(game, pieceId);	
				
				//Movimientos posibles de la ficha
				movTemp = showLegalMoves(game, pieceId, pieceType);
				paintTiles(movTemp);
				console.log(movTemp);
			
			}
		}

		//Calculate proportion
		pieceProportion = getPieceProportion(game, pieceId);

	})

	//Click a la casilla donde me quiero mover
	$(".tile").on('click',function(){


		//Get current tile
		tiles.removeClass('legal');
		var currentTile = $(this);
		var tileId = currentTile.data("gridpos");
		var pieceIdInTile = getPieceId(game, tileId);

		if(movTemp.indexOf(tileId) > -1){

			//¿La casilla no está libre?
			if(!isTileFree(game, tileId)){
				//Comasela mi papá porque son de diferente color
				if(getColor(pieceId) != getColor(pieceIdInTile)){
					game = hidePiece(game, pieceIdInTile);
				}
			}

			//Conversión peón reina
			if(getPieceType(game, pieceId) == "peon" && (Math.trunc(tileId/10) == 1 || Math.trunc(tileId/10) == 8)){
				pieceProportion = getQueenProportion();
				game = conversionReina(game, pieceId);
			}					

			//cancelar Enrroque con ficha actual
			if(getPieceType(game,pieceId) == "torre" || getPieceType(game,pieceId) == "rey"){
				game = setSeMovio(game,pieceId);
			}

			//Actualizamos el arreglo juego
			game = updateTileOfPiece(game, pieceId, tileId);

			//Movimiento
			doMove(piece, pieceProportion, currentTile);
			movTemp = [];
			game = updateStylaOfPiece(game, pieceId, y, x);

			//Turno
			if (turno == "Player2"){
				turno = "Player1";
				$("#turno").text("Jugador 1");
				if(jaque(game,getTile(game,"piece4"),turno)){
					alert("Jugador 1 en jaque");
				}
			}else{
				turno = "Player2";
				$("#turno").text("Jugador 2");
				if(jaque(game,getTile(game,"piece28"),turno)){
					alert("Jugador 2 en jaque");
				}
			}
			game = setTurno(game, turno);

						
		}

	
	})

	.on('mouseenter',function(){
		$(this).addClass('hover');
	})

	.on('mouseleave',function(){
		$(this).removeClass('hover');
	});


});