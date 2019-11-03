/*
 * Ha megvaltozik a hash az url vegen, akkor hivodik Chrome-ban es Firefoxban
 */
$( window ).on( "popstate", function() {
    loadFolder();
});
$( document ).ready( function() {
	$( window ).resize(windowResize).resize();
    $.get( "taskbar.xslt", function( xslt ) {
        $.get( "taskbar.xml", function( xml ) {
            $('.taskbar').html(transform(xml, xslt));
            startTime();
            loadFolder();
            windowResize();
        });
    });
        lightbox.option({
          'resizeDuration': 200,
          'wrapAround': true,
          'fadeDuration': 0,
          'imageFadeDuration': 0,
          'resizeDuration': 0
        })
});

xCache = {};

dialogOptions = {
    create: function(event, ui) {
        $thisDialog = $(this);
            windowResize($thisDialog);
        	maxHeight = $(window).height() - $(".taskbar").height();
        	maxWidth = $(window).width() - 8;
		    $thisDialog.dialog("option", "maxHeight", maxHeight);
	    	$thisDialog.dialog("option", "maxWidth", maxWidth);
    		$thisDialog.dialog("option", "height", maxHeight);
		    $thisDialog.dialog("option", "width", maxWidth);
            $thisDialog.parent().css( "top", 0 );
            $thisDialog.parent().css("left", 0);
    },
    close: function(event, ui){
        $(this).dialog('destroy').remove();
    },
	position: { my: "left top", at: "left top", of: window, collision: "none" }
};

dialogExtendOptions = {
    "closable" : true,
    "maximizable" : true,
    "minimizable" : true,
    "collapsable" : false,
    "dblclick" : "maximize", // set action on double click. false, 'maximize', 'minimize', 'collapse'
    // "titlebar" : "transparent", // false, 'none', 'transparent'
    "minimizeLocation" : "right", // sets alignment of minimized dialogues
    "icons" : { // jQuery UI icon class
        "close" : "ui-icon-circle-close",
        "maximize" : "ui-icon-circle-plus",
        "minimize" : "ui-icon-circle-minus",
        "collapse" : "ui-icon-triangle-1-s",
        "restore" : "ui-icon-bullet"
    },
    "load" : function(evt, dlg){
        // $(this).
    }
}

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
                $( "body" ).append('<div class="parbeszedablak" title="'+hash+'"><pre>'+text+'</pre></div>');
                $( ".parbeszedablak" ).dialog(dialogOptions).dialogExtend(dialogExtendOptions);
            });
        } else if (url.match(/torba.hu/) && url.match(/(png|gif|jpg|jpeg)$/)) {
            $( "body" ).append('<div class="parbeszedablak" title="'+hash+'"><img class="viewed-image" src="'+hash+'" /></div>');
            $( ".parbeszedablak" ).dialog(dialogOptions).dialogExtend(dialogExtendOptions);
        } else if (url.match(/torba.hu/) && url.match(/.lightbox$/)) {
            hash = hash.replace(/.lightbox$/, "");
            $.get( hash, function( text ) {
                $('.hidden').html(text);
                $('body').append('<div class="parbeszedablak gallery" title="'+hash+' galeria"></div>');
                $(".hidden a").each( function(i, a){
                    h=hash+"/"+$(a).attr("href");
                    if (h.match(/(png|gif|jpg|jpeg)$/i)) {
                        $(".gallery").append('<a data-lightbox="gallery" href="'+h+'"><img class="thumbnail" src="'+h+'" /></a>');
                    }
                });
                $( ".parbeszedablak" ).dialog(dialogOptions).dialogExtend(dialogExtendOptions);
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
    wh = $(window).height();
    ww = $(window).width();

    /*
     * Resize Taskbar
     */
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
/*
    $( ".parbeszedablak" ).each( function(i, parbeszedablak) {
        	$thisDialog = $(parbeszedablak);
        	maxHeight = $(window).height() - $(".taskbar").height();
            maxWidth = $(window).width();

		    $thisDialog.dialog("option", "maxHeight", maxHeight);
	    	$thisDialog.dialog("option", "maxWidth", maxWidth);
	    
		parentTop = $thisDialog.parent().css("top");
		thisHeight = $thisDialog.dialog("option", "height");
		if ( 0 > maxHeight - thisHeight - parentTop) {
		    if (0 < maxHeight - thisHeight - parentTop) {
                $thisDialog.parent().css( "top", maxHeight - thisHeight )
		    } else {
                $thisDialog.parent().css( "top", 0 )
    		    $thisDialog.dialog("option", "height", maxHeight);
		    }
		}
		parentLeft = $thisDialog.parent().css("left");
		thisWidth = $thisDialog.dialog("option", "width");
		if ( 0 > maxWidth - thisWidth - parentLeft) {
		    if ( 0 < maxHeight - thisHeight) {
                $thisDialog.parent().css("left", maxHeight - thisHeight);
		    } else {
                $thisDialog.parent().css("left", 0);
    		    $thisDialog.dialog("option", "width", maxWidth);
		    }
		}
    }); */
}

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

