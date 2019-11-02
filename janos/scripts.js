/*
 * Updates the clock in the corner
 */
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    h = addLeadingZero(h);
    m = addLeadingZero(m);
    $(".clock").html( h + ":" + m);
    var t = setTimeout(function(){startTime()},60*1000);
}
function addLeadingZero(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

/*
 * Ha megvaltozik a hash az url vegen, akkor hivodik Chrome-ban es Firefoxban
 */
$( window ).on( "popstate", function() {
    loadFolder();
});

xCache = {};

function loadFolder() {
    url = window.location.href;
    hash = window.location.hash;
    if ( hash == "" ) {
        hash = "desktop.xml";
    }
    hash = hash.replace(/#/,"");

    /*
     * Selects current window's button on the taskbar
     */
    hashname = hash.split('.')[0];
    $('.taskbar .selected').removeClass('selected');
    $('a[href*="'+hashname+'"]').addClass('selected');

    xslt = xCache["desktop.xslt"];
    xml = xCache[hash];

    if  (xslt && url.match(/.xml$/)) {
        if  (xml) {
            $('.desktop').html(transform(xml, xslt));
        } else {
            $.get( hash, function( xml ) {
                xCache[hash] = xml;
                $('.desktop').html(transform(xml, xslt));
            });
        }
    } else {
        if (url.match(/torba.hu/) && url.match(/txt$/)) {
            $.get( hash, function( text ) {
                $('.desktop').html('<div class="window"><div class="title">'+hash+'</div><pre class="text-reader window-minus-title">'+text+'</pre></div>');
                $( "body" ).append('<div id="dialog2" title="Basic dialog2"><p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the "x" icon.</p></div>');
                windowResize();
            });
        } else if (url.match(/torba.hu/) && url.match(/(png|gif|jpg|jpeg)$/)) {
            $('.desktop').html('<div class="window"><div class="title">'+hash+'</div><div class="image-viewer window-minus-title"><img class="viewed-image" src="'+hash+'" /></div></div>');
            $('.viewed-image').load( function(){ windowResize() });
        } else if (url.match(/torba.hu/) && url.match(/.lightbox$/)) {
            hash = hash.replace(/.lightbox$/, "");
            $.get( hash, function( text ) {
                $('.hidden-window').html(text);
                $('.desktop').html('<div class="window"><div class="title">'+hash+'</div><div class="gallery window-minus-title"></div></div>');
                $(".hidden-window a").each( function(i, a){ h="vicc/"+$(a).attr("href"); if (h.match(/(png|gif|jpg|jpeg)$/i)) { $(".gallery").append('<a data-lightbox="gallery" href="'+h+'"><img class="thumbnail" src="'+h+'" /></a>');} });
                windowResize();
	            // $('.thumbnail-image').load( function(){ windowResize() });
            });
        } else {
            $.get( "desktop.xslt", function( xslt ) {
                $.get( hash, function( xml ) {
                    xCache["desktop.xslt"] = xslt;
                    xCache[hash] = xml;
                    $('.desktop').html(transform(xml, xslt));
                });
            });
        }
    }
}

$( document ).ready( function() {
    loadFolder();
    $.get( "taskbar.xslt", function( xslt ) {
        $.get( "taskbar.xml", function( xml ) {
            $('.taskbar').html(transform(xml, xslt));
            startTime();
            windowResize();
        });
    });
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

//    $('.window').each(function(i, win){ $(win).attr("data-before", win.title); });
    $('.window').css('max-height', '');
    $('.window-minus-title').css('max-height', '');
    if ($('.window').height() + 110 >= $(window).height() ){
        $('.window').css('max-height', ($(window).height() - 110)+'px');
        $('.window-minus-title').css('max-height', ($(window).height() - 110 - 33)+'px');
    }
    $('.window').css('max-width', '');
    if ($('.window').width() + 65 >= $(window).width() ){
        $('.window').css('max-width', ($(window).width() - 65)+'px');
    }
    if ($(window).width() < 350) {
		$('.taskbar .button').filter(".middle").hide();
	} else {
		$('.taskbar .button').filter(".middle").show();
	}
	if ($(window).width() < 920) {
		$('.taskbar .button span').hide().parent().filter("a").addClass("icon-only").removeClass("with-text");
		$('.taskbar .button span.clock').show();
	} else {
		$('.taskbar .button span').show().parent().filter("a").addClass("with-text").removeClass("icon-only");
	}
}
$( document ).ready( function() {
	$( window ).resize(windowResize).resize();
});
var windowWidth;
var windowHeight;

  $( function() {
    // $( "body" ).append('<div id="dialog2" title="Basic dialog2"><p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the "x" icon.</p></div>');
    // $( "#dialog2" ).dialog();
  } );
