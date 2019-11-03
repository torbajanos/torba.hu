$( document ).ready( function() {
	$( window ).resize(windowResize).resize();

    $.get( "taskbar.xslt", function( xslt ) {
        $.get( "taskbar.xml", function( xml ) {
        	xCache["taskbar.xslt"] = xslt;
        	xCache["taskbar.xml"] = xml;
            $('.taskbar').html(transform(xml, xslt)).find(".middle").each(function(){
            	$(this).click(shotcutClick);
            });
            startTime();
            loadFolder();
            windowResize();
        });
    });
	$.get( "desktop.xslt", function( xslt ) {
        $.get( "desktop.xml", function( xml ) {
        	xCache["desktop.xslt"] = xslt;
        	xCache["desktop.xml"] = xml;
            $('.desktop').html(transform(xml, xslt));
            $('.desktop').html(transform(xml, xslt)).find(".shortcut").each(function(){
            	$(this).click(shotcutClick).addClass("desktop-icon");
            });
        });
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fadeDuration': 0,
        'imageFadeDuration': 0,
        'resizeDuration': 0
    });
});
function shotcutClick() {
	clickedElement = this;
	loadFolder(clickedElement);
}
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
	position: {
	    my: "left top",
	    at: "left top",
	    of: window,
	    collision: "none"
	}
};
folderDialogOptions = $.extend( {}, dialogOptions, {
	create: {},
    position: {}
});

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

function loadFolder(clickedElement) {
    if ( clickedElement ) {
        url = clickedElement.href;
    } else {
	    url = window.location.href;
    }
    hash = url.replace(/^[^#]+#/,"");
    if ( hash == "" ) {
        hash = "desktop.xml";
       	return;
    }

    /*
     * Selects current window's button on the taskbar
     */
    hashname = hash.split('.')[0];
    $('.taskbar .selected').removeClass('selected');
    $('a[href*="'+hashname+'"]').addClass('selected');

    xslt = xCache["desktop.xslt"];
    if (xCache[hashname]) {
    	hash = hashname;
    }
    xml = xCache[hash];


	if ( ! xslt ) {
		$.get( "desktop.xslt", function( xslt ) {
        	xCache["desktop.xslt"] = xslt;
			loadFolder(clickedElement);
		});
		return;
	}
    if  (url.match(/.(xml|txt|sh|sql)$/) && ! xml ) {
		$.get( hash, function( xml ) {
        	xCache[hash] = xml;
			loadFolder(clickedElement);
		});
		return;
    }
    if  (url.match(/.(lightbox)$/) && ! xml ) {
    	hash = hashname;
		$.get( hash, function( xml ) {
        	xCache[hash] = xml;
			loadFolder(clickedElement);
		});
		return;
    }

	// Innen lefelé xslt is és xml is van, ha kellett
    if  (url.match(/.(xml)$/)) {
        $('<div class="parbeszedablak folder" title="'+hashname+'"></div>')
        	.appendTo($('.desktop'))
        	.html(transform(xml, xslt))
   	        .dialog(folderDialogOptions).dialogExtend(dialogExtendOptions)
   	        .find(".shortcut").each(function(){ $(this).click(shotcutClick); });
    } else if  (url.match(/.(txt|sh|sql)$/)) {
    	text = xml;
        $('<div class="parbeszedablak" title="'+hashname+'"><pre>'+text+'</pre></div>')
        	.appendTo( $(".desktop") )
        	.dialog(dialogOptions).dialogExtend(dialogExtendOptions);
    } else if (url.match(/(png|gif|jpg|jpeg)$/)) {

        /*$('<div class="parbeszedablak" title="'+hashname+'">'+
        	'<img class="viewed-image" src="'+hash+'" />'+
         '</div>')
        	.appendTo( $(".desktop") )
        	.dialog(dialogOptions).dialogExtend(dialogExtendOptions);
        	*/
    } else if (url.match(/.(lightbox)$/)) {
    	html = xml;
        $('.hidden').html(html);
        $gallery = $('<div class="parbeszedablak gallery" title="'+hashname+'"></div>');
        $gallery
        	.appendTo( $('.desktop') )
            .dialog(dialogOptions)
            .dialogExtend(dialogExtendOptions);
        $(".hidden a").each( function(i, a) {
        	h = hash+"/"+$(a).attr("href");
            if (h.match(/(png|gif|jpg|jpeg)$/i)) {
				$gallery.append(
					'<a data-lightbox="'+hashname+'gallery" href="'+h+'">'+
						'<img class="thumbnail" src="'+h+'" />'+
					'</a>'
				);
            }
        });
    } else {
    	
        $('<div class="parbeszedablak folder" title="Redirecting">'+hash+'</div>')
        	.appendTo($('.desktop'))
   	        .dialog(folderDialogOptions)
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
var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

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

