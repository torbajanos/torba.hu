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
			<meta property="og:image" content="janos/pictures/vcard.png"/>
			<xsl:text>&#10;</xsl:text>
   			<meta property="og:url" content="{icons/ogurl}" /><xsl:text>&#10;</xsl:text>
			<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
			<xsl:text>&#10;</xsl:text>
			<meta name="description" content="Torba János hivatalos weboldala. Offical home page of János Torba. Email: janos@torba.hu Tel: +36203115586 Skype: torbajanos, Facebook: http://www.facebook.com/torbajanos https://hu-hu.facebook.com/public/János-Torba" /><xsl:text>&#10;</xsl:text>
			<meta name="keywords" content="Torba,Janos,János,torbajanos,offical,hivatalos,profil,profile,+36203115586,janos@torba.hu,janos.torba.hu,janostorba,@torbajanos,#torbajanos,+János" /><xsl:text>&#10;</xsl:text>
			<meta name="author" content="Torba Janos" /><xsl:text>&#10;</xsl:text>
   			<meta name="viewport" content="initial-scale=1, maximum-scale=1" /><xsl:text>&#10;</xsl:text>
			<!-- Base is only for images! -->
			<!-- <link rel="stylesheet" href="desktop.css" type="text/css"></link><xsl:text>&#10;</xsl:text> -->
			<style>


				{ margin: 0; padding: 0; }

				html {
				background: url('pictures/wallpaper.jpg') no-repeat center center fixed;
				-webkit-background-size: cover;
				-moz-background-size: cover;
				-o-background-size: cover;
				background-size: cover;
				}
				body {
				/* background: url(pictures/wallpaper.jpg) black; */
				color: red;
				font-family:arial;
				/* float: left; */
				}

				.desktop {
				float: left;
				margin-bottom: 40px;
				}

				.shortcut {
				float:left;
				display: block;
				text-align: center;
				}
				.shortcut a {
				float: left;
				}
				.shortcut span {
				background: #245EDC;
				border-radius: 3px;
				padding: 3px;

				}
				.shortcut img:hover {
				background: #1B4CB5;
				border-radius: 5px;

				}
				.shortcut a, a:link, .shortcut a:visited, .shortcut a:hover, .shortcut a:active ,
				.button a, a:link, .button a:visited, .button a:hover, .button a:active {
				color: white;
				text-decoration: none;
				}

				.taskbar {
				float: left;
				width: 100%;
				/* height: 34px; */
				background: #245EDC;
				color: white;
				/* padding: 10px; */
				/* border: 2px solid #AAA; */
				left: 0px;
				bottom: 0px;
				position: fixed;
				}
				.taskbar .button img {
				color: white;
				width: 15px;
				}
				.taskbar .button {
				float: left;
				padding: 7px 5px 2px 5px;
				margin: 5px;
				/* height: 20px; */
				width: 100px;
				text-align: center;
				background: #69F;
				/* border: 4px solid #AAF; */
				font-size: 15px;
				vertical-align: middle;
				border-radius: 5px;
				}
				.taskbar .button a {
				display: block;
				padding-top: 3p;
				}
				.taskbar .home {
				background-color: #6D6;
				/* width: 50px; */
				}
				.taskbar .clock {
				float: right;
				color: black;
				width: 50px;
				height: 100%;
				}
				.taskbar .selected {
				background: #1B4CB5;
				}

				/* http://css-tricks.com/snippets/css/media-queries-for-standard-devices/ */

				/* Small phones ----------- */
				@media only screen and (min-device-width : 0px) and (max-device-width : 300px) {
				/* Styles */
				/* body { background-color: blue; } */
				.shortcut { width:32px; font-size: 8px; padding:5px; margin:5px; }
				.shortcut img { width:32px; height:32px; }
				}

				/* Smartphones ----------- */
				@media only screen and (min-device-width : 301px) and (max-device-width : 800px) {
				/* Styles */
				/* body { background-color: green; } */
				.shortcut { width:55px; font-size: 12px; padding:5px; margin:5px; }
				.shortcut img { width:55px; height:55px; }
				}

				/* Desktops, laptops, tablets ----------- */
				@media only screen and (min-device-width : 801px) and (max-device-width : 1824px) {
				/* Styles */
				/* body { background-color: yellow; } */
				.shortcut { width:64px; font-size: 14px; padding:5px; margin:15px; }
				.shortcut img { width:64px; height:64px; }

				}

				/* Large screens ----------- */
				@media only screen and (min-device-width : 1825px) and (max-device-width : 9999px) {
				/* Styles */
				/* body { background-color: red; } */
				.shortcut { width:128px; font-size: 28px; padding:10px; margin:30px; }
				.shortcut img { width:128px; height:128px; }
				}


			</style>
			<script type="text/javascript" src="jquery-2.1.4.min.js"></script>
			<xsl:text>&#10;</xsl:text>
			<script type="text/javascript" src="scripts.js"></script>
			<xsl:text>&#10;</xsl:text>
			<script>
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

				ga('create', 'UA-36040598-2', 'auto');
				ga('send', 'pageview');

			</script>
		</head>
		<xsl:text>&#10;</xsl:text>
		<body>
			<xsl:text>&#10;</xsl:text>
			<div class="desktop">
				<xsl:text>&#10;</xsl:text>
				<xsl:text>&#10;</xsl:text>
				<xsl:for-each select="icons/icon">
					<div class="shortcut">
						<a href="{link}">
							<img src="{picture}"/>
							<span>
								<xsl:value-of select="title"/>
							</span>
						</a>
					</div>
					<xsl:text>&#10;</xsl:text>
				</xsl:for-each>
				<xsl:text>&#10;</xsl:text>
			</div> <!-- end desktop div -->
			<xsl:text>&#10;</xsl:text>
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
				<div class="button">
					<a href="../">
						<img src="pictures/turnoff.png"/>
						<span>Logout</span>
					</a>
				</div>
				<div class="button clock" id="clock">00:00</div><xsl:text>&#10;</xsl:text>
			</div><xsl:text>&#10;</xsl:text>
		</body><xsl:text>&#10;</xsl:text>
	</html><xsl:text>&#10;</xsl:text>
</xsl:template>
</xsl:stylesheet>
