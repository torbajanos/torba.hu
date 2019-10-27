<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">

        <a class="home button" href="desktop.html#index.xml">
            <img src="pictures/home.png"/>
            <span>Home</span>
        </a>

        <xsl:for-each select="buttons/button">
            <a class="button middle" href="desktop.html#{link}.xml">
                <img src="pictures/{link}.png"/>
                <span>
                    <xsl:value-of select="title"/>
                </span>
            </a>
        </xsl:for-each>
        <a class="button" href="..">
            <img src="pictures/turnoff.png"/>
            <span>
                Logout
            </span>
        </a>

        <div class="button clock-button">
            <span class="clock">
                00:00
            </span>
        </div>

    </xsl:template>
</xsl:stylesheet>