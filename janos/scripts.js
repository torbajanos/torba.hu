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
    var t = setTimeout(function(){startTime()},1000);
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

function loadFolder(text, event) {
    if (text) {
        console.log("loadFolder", text, event);
    }
    hash = window.location.hash;
    if ( hash == "" ) {
        hash = "#desktop.xml";
    }
    if ( hash == "#...xml" ) {
        window.location.href = "..";
        return;
    }
    hash = hash.substring(1,1000);

    /*
     * Selects current window's button on the taskbar
     */
    hashname = hash.split('.')[0];
    $('.taskbar .selected').removeClass('selected');
    $('a[href*="'+hashname+'"]').addClass('selected');

    xslt = xCache["desktop.xslt"];
    xml = xCache[hash];

    if  (xslt) {
        if  (xml) {
            $('.desktop').html(transform(xml, xslt));
            handleShortcutClicks();
        } else {
            $.get( hash, function( xml ) {
                xCache[hash] = xml;
                $('.desktop').html(transform(xml, xslt));
                handleShortcutClicks();
            });
        }
    } else {
            $.get( "desktop.xslt", function( xslt ) {
                $.get( hash, function( xml ) {
                    xCache["desktop.xslt"] = xslt;
                    xCache[hash] = xml;
                    $('.desktop').html(transform(xml, xslt));
                    handleShortcutClicks();
                });
            });
    }
}
function handleShortcutClicks() {
    $('.shortcut').click( function( shortcutClickEvent ) {
        url = shortcutClickEvent.delegateTarget.href;
        if (url.match(/torba.hu/) && url.match(/txt$/)) {
            shortcutClickEvent.preventDefault();
            $.get( url, function( text ) {
                $('.desktop').html('<pre class="text-reader">'+text+'</pre>');
            });
        }
    });
}

$( document ).ready( function() {
    loadFolder();
    $.get( "taskbar.xslt", function( xslt ) {
        $.get( "taskbar.xml", function( xml ) {
            $('.taskbar').html(transform(xml, xslt));
            $('.taskbar .button').click( function( buttonClickEvent ) {
                // loadFolder();
            });
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

