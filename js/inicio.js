//javascript document
$(document).ready(function() {
	$('#botonmenu').click(function(){
	//alert('funciono');
	if($('#botonmenu').attr('class')=='fa fa-bars')<!--para eliminar o quitar atributos de la clase-->
	{
		$('#botonmenu').removeClass('fa fa-bars').addClass('fa fa-times');
		$('.navegacion .menu').css({'left':'0px'});
	}
	else
	{
		
		$('#botonmenu').removeClass('fa fa-times').addClass('fa fa-bars');
		$('.navegacion .submenu').css({'left':'-320px'});
		$('.navegacion').css({'left':'-320px'});
		$('.navegacion').css({'width':'100%','background':'rgb(0,0,0,0)'});
					
		}
	});
	//codigo para mostrar submenu
		$('.navegacion .menu > .idsubmenu a').click(function(){
			var posmenu=$(this).parent().attr('menu');
			console.log(posmenu);
		$('.idsubmenu[menu='+posmenu+'] .submenu').css({'left':'0'});
	});
	//programacion de la flecha de atras, oculta el submenu y muestra el menu principal
	$('.navegacion .submenu li.opatras').click(function(){
		$(this).parent().css({'left':'-320px'});
		});
	


});


