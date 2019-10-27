/*
 * Updates the clock in the corner
 */
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    $("clock").html = h + ":" + m;
    var t = setTimeout(function(){startTime()},1000);
}
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function loadFolder() {
 hash = window.location.hash;
 if ( hash == "" ) {
  hash = "index"
 }
 $.get( "desktop.xslt", function( xslt ) { $.get( hash + ".xml", function( xml ) {
  $('.desktop').html(transform(xml, xslt));
  $('.shortcut').click( function( event ) { loadFolder(); event.preventDefault(); } );
 }); });
}

$( document ).ready( function() {
 loadFolder();
 $.get( "taskbar.xslt", function( xslt ) { $.get( "taskbar.xml", function( xml ) {
  $('.taskbar').html(transform(xml, xslt));
  startTime();
  windowResize();
 }); });

/*	$('a[href=#magyarul]').click(function(e) {
		e.preventDefault();
		$("span").each(function() {
			$(this).text($(this).text()
				.replace("Home", "Kezdőlap")
				.replace("Contact", "Kapcsolat")
				.replace("Profiles", "Profilok")
				.replace("Bookmarks", "Könyvjelzők")
				.replace("Thankyou", "Köszönöm")
				.replace("Downloads", "Letöltések")
				.replace("Gallery", "Képtár")
			);
		});
		return false;
	});*/
});

function transform(xml, xsl) {
  if (document.implementation && document.implementation.createDocument)
  {
  xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsl);
  return xsltProcessor.transformToFragment(xml, document);
  } else {
   return "ERROR";
  }
}

/*
 * Resize taskbar buttons depending on the screensize
 */
function windowResize() {
	if ($(window).width() < 320) {
		$('.taskbar').hide();
	} else {
		$('.taskbar').show();
	}
	if ($(window).width() < 880) {
		$('.taskbar .button span').hide().parent().width(20);
	} else {
		$('.taskbar .button span').show().parent().width(110);
	}
}
$( document ).ready( function() {
	$( window ).resize(windowResize).resize();
});


/*
 * Selects current window's button on the taskbar
 */
$( document ).ready( function() {
	var filename = window.location.href.split('/').pop();
	var name = filename.split('.')[0];
	if ( name == 'index' ) {
		return;
	}
	$('a[href*='+name+']').parent().addClass('selected');
});