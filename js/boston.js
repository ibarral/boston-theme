jQuery(function(){
	jQuery('.like').click(function(e){	
		e.preventDefault();
		var heart = jQuery(this);
		var post_id = heart.data('postid');
		var votes = parseInt(jQuery(heart).find('.likeCount').text());
		if(jQuery(heart).hasClass('not-voted')){
			jQuery(heart).addClass('voting');
			setTimeout(function(){
				jQuery.ajax({
					type: 'post',
					url: ajax_var.url,
					data: 'action=post-like&nonce='+ajax_var.nonce+'&post_like=&post_id='+post_id,
					success: function(count){
						if(count !== 'denied'){
							jQuery(heart).removeClass('not-voted');
							jQuery(heart).addClass('just-voted');
							jQuery(heart).find('.likeCount').text(votes + 1);
						}
						jQuery(heart).removeClass('voting');
					}
				});
			}, 2000);
		}
	});
	jQuery('#toggleMenu a, #closeDrawer a').click(function(e){
		e.preventDefault();
		jQuery('#central').toggleClass('mixed');
		jQuery('#drawer').toggleClass('open');
	});
	jQuery('.gallery').each(function(){
		var gallery = jQuery(this).find('a[href*="wp-content"]').length;
		if (gallery){
			jQuery(this).magnificPopup({
				delegate:'a',
				type:'image',
				gallery:{enabled:true}
			});
		}
	}); 
	jQuery('.menu-item-type-custom a').attr('target', '_blank');
	jQuery('.pa-share span').click(function(){
		$(this).toggleClass('open');
	});
	jQuery('#central, #drawer').addClass('ready');

});