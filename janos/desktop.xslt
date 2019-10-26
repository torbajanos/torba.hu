<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE stylesheet [
<!ENTITY nbsp  "&#160;" >
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
			<div class="desktop">
				
				<xsl:for-each select="icons/icon">
					<div class="shortcut">
					<a href="{link}">
						<img src="{picture}" />
						<span><xsl:value-of select="title" /></span>
					</a>
					</div>
				</xsl:for-each>
			</div> <!-- end desktop div --> 
			<div class="taskbar">
				<div class="home button"><a href="index.xml"><img src="pictures/home.png" /><span> Home</span></a></div>
				<xsl:for-each select="buttons/button">
					<div class="shortcut">
					<a href="{title}.xml">
						<div class="button"><img src="pictures/{title}.png" alt="{title}" /></div>
						<img src="{picture}" />
						<span><xsl:value-of select="title" /></span>
					</a>
					</div>
				</xsl:for-each>
				
				<div class="button"><a href="contact.xml"><img src="pictures/contact.png"/><span> Contact</span></a></div>
				<div class="button"><a href="profiles.xml"><img src="pictures/profiles.png"/><span> Profiles</span></a></div>
				<div class="button"><a href="bookmarks.xml"><img src="pictures/bookmarks.png"/><span> Bookmarks</span></a></div>
				<div class="button"><a href="downloads.xml"><img src="pictures/downloads.png"/><span> Downloads</span></a></div>
				<div class="button"><a href="http://torba.hu/"><img src="pictures/turnoff.png"/><span> Logout</span></a></div>
				<div class="button clock" id="clock">00:00</div>
			</div>
</xsl:template>
</xsl:stylesheet>
