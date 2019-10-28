/*
 * Updates the clock in the corner
 */
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    $(".clock").html( h + ":" + m);
    var t = setTimeout(function(){startTime()},1000);
}
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

$( window ).on( "popstate", function() {
  loadFolder();
});

xCache = {};

function loadFolder(event) {
 hash = window.location.hash;
 if ( hash == "" ) {
  hash = "#index.xml";
 }
 if ( hash == "#...xml" ) {
  window.location.href = "..";
  return;
 }
 hash = hash.substring(1,111);
 xslt = xCache["desktop.xslt"];
 xml = xCache[hash];
 if (xslt && xml ) {
  $('.desktop').html(transform(xml, xslt));
  $('.shortcut').click( function( event ) { setTimeout(function(){loadFolder();},100); } );
 } else {
  $.get( "desktop.xslt", function( xslt ) { $.get( hash, function( xml ) {
   xCache["desktop.xslt"] = xslt;
   xCache[hash] = xml;
   if (hash.match(/xml/)) {
    loadFolder();
   }
  }); });
  }
}

$( document ).ready( function() {
 loadFolder();
 $.get( "taskbar.xslt", function( xslt ) { $.get( "taskbar.xml", function( xml ) {
  $('.taskbar').html(transform(xml, xslt));
  $('.button').click( function( event ) { loadFolder(event);  } );
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

function processLink(url) {
    text = 'megyunk <a href="'+url+'">ide</a>';
    text = xCache[url];
    if (text) {
        urlLauncher(url, text);
    } else {
        if (! url.match(/http/)) {
            $.get( url, function( text ) {
                xCache[url] = text;
                urlLauncher(url, text);
            });
        } else {
            window.location.href=url;
            return true;
        }
    }
	return false;
}
function urlLauncher(url, text) {
     if (url.match(/txt$/)) {
         var t = setTimeout(function(){postprocess('<pre class="text-reader">'+text+'</pre>')},500);
         return false;
     }
     if (! url.match(/xml$/)) {
         var t = setTimeout(function(){postprocess(text)},500);
        return false;
     }
     window.location.href=url;
}
function postprocess(text) {
     $('.desktop').html(text);
     return false;
}
