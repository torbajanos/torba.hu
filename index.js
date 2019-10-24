$( document ).ready( function () {
	$( window ).resize ( function () {
		var wh = $( window ).height();
		var ww = $( window ).width();
		$( '.panel' ).height( wh * 0.9 );
// 		$( '.panel' ).width( ww * 0.45 );
		// media query doesn't work
		if (ww < 500) {
			$( '.logo' ).css('display', 'none');
		} else {
			$( '.logo' ).css('display', '');
		}
		// $( '.logo' ).css('padding-top', wh * 0.45);
		// $( '.users' ).height( $( window ).height() * 0.5 - 50 );
	}).resize();
});