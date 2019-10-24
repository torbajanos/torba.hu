<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE stylesheet [
<!ENTITY nbsp  "&#160;" >
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
	<html xmlns="http://www.w3.org/1999/xhtml"><xsl:text>&#10;</xsl:text>
		<head><xsl:text>&#10;</xsl:text>
    		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /><xsl:text>&#10;</xsl:text>
		    <link rel="icon" href="/favicon.ico" type="image/x-icon" /><xsl:text>&#10;</xsl:text>
   			<title>Torba János</title><xsl:text>&#10;</xsl:text>
   			<meta http-equiv="Content-Type" content="text/html;charset=utf-8" /><xsl:text>&#10;</xsl:text>
   			<!--<meta property="og:title" content="Torba Janos" /><xsl:text>&#10;</xsl:text>-->
			<meta property="og:description" content="Torba Janos hivatalos weboldala - Offical home page of Janos Torba" /><xsl:text>&#10;</xsl:text>
   			<!-- https://developers.facebook.com/tools/debug/og/object/ -->
   			<meta property="og:image" content="//torba.hu/janos/pictures/vcard.png" /><xsl:text>&#10;</xsl:text>
   			<meta property="og:url" content="{icons/ogurl}" /><xsl:text>&#10;</xsl:text>
			<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
			<xsl:text>&#10;</xsl:text>
			<meta name="description" content="Torba János hivatalos weboldala. Offical home page of János Torba. Email: janos@torba.hu Tel: +36203115586 Skype: torbajanos, Facebook: http://www.facebook.com/torbajanos https://hu-hu.facebook.com/public/János-Torba" /><xsl:text>&#10;</xsl:text>
			<meta name="keywords" content="Torba,Janos,János,torbajanos,offical,hivatalos,profil,profile,+36203115586,janos@torba.hu,janos.torba.hu,janostorba,@torbajanos,#torbajanos,+János" /><xsl:text>&#10;</xsl:text>
			<meta name="author" content="Torba Janos" /><xsl:text>&#10;</xsl:text>
   			<meta name="viewport" content="initial-scale=1, maximum-scale=1" /><xsl:text>&#10;</xsl:text>
			<!-- Base is only for images! -->
   			<link rel="stylesheet" href="desktop.css" type="text/css"></link><xsl:text>&#10;</xsl:text>
   			<script type="text/javascript" src="jquery-2.1.4.min.js"></script><xsl:text>&#10;</xsl:text>
   			<script type="text/javascript" src="scripts.js"></script><xsl:text>&#10;</xsl:text>
			<script>
			  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-36040598-2', 'auto');
			  ga('send', 'pageview');

			</script>
		</head><xsl:text>&#10;</xsl:text>
		<body><xsl:text>&#10;</xsl:text>
			<div class="desktop"><xsl:text>&#10;</xsl:text>
				<xsl:text>&#10;</xsl:text>
				<xsl:for-each select="icons/icon">
					<div class="shortcut">
					<a href="{link}">
						<img src="{picture}" />
						<span><xsl:value-of select="title" /></span>
					</a>
					</div><xsl:text>&#10;</xsl:text>
				</xsl:for-each><xsl:text>&#10;</xsl:text>
			</div> <!-- end desktop div --> <xsl:text>&#10;</xsl:text>
			<div class="taskbar"><xsl:text>&#10;</xsl:text>
				<div class="home button"><a href="index.xml"><img src="pictures/home.png" /><span> Home</span></a></div><xsl:text>&#10;</xsl:text>
				<xsl:for-each select="buttons/button">
					<div class="shortcut">
					<a href="{title}.xml">
						<div class="button"><img src="pictures/{title}.png" alt="{title}" /></div><xsl:text>&#10;</xsl:text>
						<img src="{picture}" />
						<span><xsl:value-of select="title" /></span>
					</a>
					</div><xsl:text>&#10;</xsl:text>
				</xsl:for-each><xsl:text>&#10;</xsl:text>
				
				<div class="button"><a href="contact.xml"><img src="pictures/contact.png"/><span> Contact</span></a></div>
				<div class="button"><a href="profiles.xml"><img src="pictures/profiles.png"/><span> Profiles</span></a></div>
				<div class="button"><a href="bookmarks.xml"><img src="pictures/bookmarks.png"/><span> Bookmarks</span></a></div>
				<div class="button"><a href="downloads.xml"><img src="pictures/downloads.png"/><span> Downloads</span></a></div>
				<div class="button"><a href="http://torba.hu/"><img src="pictures/turnoff.png"/><span> Logout</span></a></div>
				<div class="button clock" id="clock">00:00</div><xsl:text>&#10;</xsl:text>
			</div><xsl:text>&#10;</xsl:text>
		</body><xsl:text>&#10;</xsl:text>
	</html><xsl:text>&#10;</xsl:text>
</xsl:template>
</xsl:stylesheet>
