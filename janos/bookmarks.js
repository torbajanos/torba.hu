$( document ).ready( function() {
    paddingDialog = 40;
    maxHeight = $(window).height() - $(".taskbar").height() - 2 * paddingDialog;
    maxWidth = $(window).width() - 2 * paddingDialog;

    $.get( "bookmarks_2020-02-12.html", function( data ) {
        $( "body" ).append('<div class="bookmark-manager-dialog" title="My Bookmarks">'
+'<table class="bookmark-manager"><tr>'
+'<th><div class="folder-tree aligned"></div></th><td><div class="folder-view aligned"></div></td>'
+'</tr></table>'
+'</div>');
    $('.bookmark-manager-dialog').dialog({
        close: function(event, ui){
            window.location.href = '../';
        },
        height: maxHeight,
        width: maxWidth,
        position: { my: "center top", at: "center top+"+paddingDialog, of: "html" },
    });
        $( ".folder-tree" ).html( data );
        $( ".folder-view" ).html( data );
        $( ".folder-tree h3" ).click( function(){
             console.log(this);
             $( ".folder-view" ).html( $(this).parent().html() );
             $( ".folder-view a" ).each( function( i, e ) {
                  if ( $(e).attr('ICON') ) {
                      $(e).prepend('<img class="icon-mini" src="'+ $(e).attr('ICON') +'" />');
                  } else {
                      $(e).prepend('<div class="icon-missing"></div>');
                  }
             });
        });
    });
});
