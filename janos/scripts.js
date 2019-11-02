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

dialogOptions = {
    create: function(event, ui) {
        windowResize();
        $(this).parent().css( "top", 0 ).css("left", 0);
        $(this).dialog("option", "maxHeight", $(window).height() - $(".taskbar").height() ).dialog("option", "height", $(this).dialog("option", "maxHeight"));
        $(this).dialog("option", "maxWidth", $(window).width() ).dialog("option", "width", $(this).dialog("option", "maxwidth"));
    },
    close: function(event, ui){
        $(this).dialog('destroy').remove();
    },
    // show: { effect: "blind", duration: 1000 },
    // hide: "puff",
    top: 10,
    left: 1
    // height: 200
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
    wh = $(window).height();
    ww = $(window).width();

    /*
     * Resize old own created windows
    $('.window').css('max-height', '');
    $('.window-minus-title').css('max-height', '');
    if ($('.window').height() + 110 >= $(window).height() ){
        $('.window').css('max-height', ($(window).height() - 110)+'px');
        $('.window-minus-title').css('max-height', ($(window).height() - 110 - 33)+'px');
    }
    $('.window').css('max-width', '');
    if ($('.window').width() + 65 >= $(window).width() ){
        $('.window').css('max-width', ($(window).width() - 65)+'px');
    }*/

    $( ".parbeszedablak" ).each( function(i, parbeszedablak) {
        $parbeszedablak = $(parbeszedablak);
        //$parbeszedablak.dialog("option", "maxWidth", ww);
        //$parbeszedablak.dialog("option", "maxHeight", wh);
        //if (wh > $parbeszedablak.height() ){
            //$parbeszedablak.dialog( "option", "height", "auto" );
        //}
        //if (ww <= $parbeszedablak.width() ){
            //$parbeszedablak.dialog( "option", "width", "auto" );
        //}
        if (wh <= $parbeszedablak.height() ){
            //$parbeszedablak.dialog( "option", "height", wh-70 );
            //$parbeszedablak.height(wh-70);
        }
        if (ww <= $parbeszedablak.width() ){
            //$parbeszedablak.dialog( "option", "width", ww-30 );
            //$parbeszedablak.width(ww-30);
        }
        // $( ".selector" ).dialog( "option", "resizable", true );
    });

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
