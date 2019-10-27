<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">

        <a class="home button" href="desktop.html">
            <img src="pictures/home.png"/>
            <span>Home</span>
        </a>

        <xsl:for-each select="buttons/button">
            <a class="button" href="desktop.html#{link}">
                <img src="pictures/{link}.png" alt="{title}"/>
                <span>
                    <xsl:value-of select="title"/>
                </span>
            </a>
        </xsl:for-each>

        <div class="button clock" id="clock">00:00</div>

    </xsl:template>
</xsl:stylesheet>