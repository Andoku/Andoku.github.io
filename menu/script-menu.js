document.ready = function() {
  document.getElementById('menu').style.display='block';
  
  $(document).ready(function(){
  	$(".image").click(function(){
			$(".close-icon").hide();
	});
	
	$("#product-1 .content").hover(function(){
		$("#product-1 .product-image").css("background-image", "url(/menu/1/content-new.jpg)");
	});
	
	$("#product-1 .vitamins").hover(function(){
		$("#product-1 .product-image").css("background-image", "url(/menu/1/vitamins-new.jpg)");
	});
	
	$("#product-1 .main").hover(function(){
		$("#product-1 .product-image").css("background-image", "url(/menu/1/main-new.png)");
	});
  	
  });
  
};
