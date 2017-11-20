$(function(){
	if( isPC () ) return ;


	else {

		$('.mobile-toggle').click(function( e ){

				$toggle = $(this);

				$('.search-widget').show();	

				if( $(this).hasClass('icon-menu')){
					showMenu($toggle);						
				}else if($toggle.hasClass('icon-no-menu')){
					hideMenu($toggle);				
				}


				$(document).one("click", function(){
       				hideMenu($toggle);		
       				return false;
    			});

				e.stopPropagation();
		})


		$('.mobile-menu-search').click(function(){	
				hideMenu($toggle);	
		})

		$('.mobile-menu').click(function(e){
				e.stopPropagation();
		})
	}
});


function showMenu( $icon ){

	$icon.removeClass('icon-menu').addClass('icon-no-menu');
	
	$('.mobile-menu').show().removeClass('menuSlideOut').addClass('menuSlideIn');

	$('.header')
	.removeClass('slide-left')
	.addClass('slide-right');

	$('.container')
	.removeClass('slide-left')
	.addClass('slide-right');


}



function hideMenu( $icon ){

	$icon.removeClass('icon-no-menu').addClass('icon-menu');

	$('.mobile-menu').removeClass('menuSlideIn').addClass('menuSlideOut');
	

	$('.header')
	.removeClass('slide-right')
	.addClass('slide-left');
	$('.container')
	.removeClass('slide-right')
	.addClass('slide-left');
}
