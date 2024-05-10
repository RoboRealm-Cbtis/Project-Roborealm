$(document).ready(function()
{
	$(".nav-copi-past").hide();
		$(".columna1").hover(function()
		{
			//alert("hola");
			$(".nav-copi-past").toggle(400);

		});

		$(".btn-copy").on("click",function(){
			alert("hola");
		});

});