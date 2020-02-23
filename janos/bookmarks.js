function openBookmarkDialog() {
    paddingDialog = 40;
    maxHeight = $(window).height() - $(".taskbar").height() - 4 * paddingDialog;
    maxWidth = $(window).width() - 2 * paddingDialog;

    $.get( "bookmarks.html", function( data ) {
        $( "body" ).append(
        '<div class="folder-dialog" title="My Bookmarks">'
        +  '<div class="folder">'
        +    '<div class="tree"></div>'
        +    '<div class="view"></div>'
        +  '</div>'
        +'</div>');
    $('.folder-dialog').dialog({
        close: function(event, ui){
            $(this).dialog("destroy").remove();
        },
        height: maxHeight,
        width: maxWidth,
        position: { my: "center top", at: "center top+"+(paddingDialog * 3), of: "html" },
    });
        $( ".folder .tree" ).html( data );
        $( ".folder .tree h3" ).each(function(ih3,h3){ $(h3).prepend('<div class="icon-folder"></div>'); });
        $( ".folder .tree h3" ).click( function(){
             $( ".folder .tree h3" ).removeClass("selected");
             $( this ).addClass("selected");
             $( ".folder .view" ).html( $(this).parent().html() );
             $( ".folder .view a" ).each( function( i, e ) {
                  $(e).attr('target', "_blank");
                  if ( $(e).attr('ICON') ) {
                      $(e).prepend('<img class="icon-mini" src="'+ $(e).attr('ICON') +'" />');
                  } else {
                      $(e).prepend('<div class="icon-missing"></div>');
                  }
             });
             $( ".folder .view h3" ).click( function(){
                $( ".folder .tree h3:contains('" +$(this).text() +"')" ).click();
             });
        });
        $( ".folder .tree h3:eq("+ ( 5-1 ) +")" ).click();
    });
}
function openSubFolder() {
        $( ".folder .view h3" ).click( function(){
             $( ".folder .view" ).html( $(this).parent().html() );
             $( ".folder .view a" ).each( function( i, e ) {
                  $(e).attr('target', "_blank");
                  if ( $(e).attr('ICON') ) {
                      $(e).prepend('<img class="icon-mini" src="'+ $(e).attr('ICON') +'" />');
                  } else {
                      $(e).prepend('<div class="icon-missing"></div>');
                  }
             });
        });
}