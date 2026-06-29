//JavaScript document (en este archivo solo sirve para ejecutar acciones)
$(document).ready(function() {
	var imgnum=$('.carrusel li').length;   /* las variables   van despues del inicio de la funcion, imgnum numera el numero de imagenes los length numera elnumero de imagenes los li es decir las imagenes*/
	var postimg=1;
	//console.log(imgnum);/*agrega el numero de circulos o imagenes*/
	for(i=1;i<=imgnum;i++)/* esto va seguido de abrir y cerrar las llaves*/
	{/* donde inicia la indicacion*/
	$('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
	}/*y donde termina la indicación*/
	
		 //*posicionamiento de las images*//
	
	$('.carrusel li').hide();/*oculta la imagen*/
	$('.carrusel li:first').show();/*muestra la imagen*/
	$('.paginacion li:first').css({'color':'#3CC'}); /*cambia el color del circulo o imagen*/
	 
	 //ejecutar funciones
	 $('.paginacion li').click(paginacion);
	 $('.derecha span').click(nextimg);//NEXTIMG SE REFIERE A LAS FLECHAS//
	 $('.izq span').click(anteriorimg);
	 setInterval(function(){  /*esta funcion sirve para que cambie la imagen cada 3segundos*/
		 nextimg();
		 },3000);
	 //funciones
	 function paginacion()
	 {
		 var pospaginacion=$(this).index()+1;
		 //console.log(pospaginacion);
		 
		 $('.carrusel li').hide();
		 $('.carrusel li:nth-child('+pospaginacion+')').fadeIn();/*fade in da el efecto de flash*/
		 $('.paginacion li').css({'color':'#36C'});
		 $(this).css({'color':'#3CC'});
		 
	}
	function nextimg(){
		if(postimg>=imgnum)/*para que se recorran de lado derecho los puntos, imgnum es infinidad de numeros*/
		{
			postimg=1;/*para que se recorran de lado derecho los puntos, imgnum es infinidad de numeros y del maximo regrese al primero*/
		}
		else
		{
		postimg++;} /* para que las flechas
		
	//	postimg++; /*incrementamos o le damos continuidad a la imagen*/
		console.log(postimg);
		 $('.paginacion li').css({'color':'#36C'});
		 $('.paginacion li:nth-child('+postimg+')').css({'color':'#3CC'});
		 $('.carrusel li').hide();
		 $('.carrusel li:nth-child('+postimg+')').fadeIn();
		
	}
	
	function anteriorimg(){
		if(postimg<=1)/*para que se recorran de lado izquierdo los puntos, del priemro (1) al infinidad de numeros*/
		{
			postimg=imgnum;
		}
		else
		{
		postimg--;
		}
		console.log(postimg);
		 $('.paginacion li').css({'color':'#36C'});
		 $('.paginacion li:nth-child('+postimg+')').css({'color':'#3CC'});
		 $('.carrusel li').hide();
		 $('.carrusel li:nth-child('+postimg+')').fadeIn();
		}
	
});
