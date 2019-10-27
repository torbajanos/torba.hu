<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">

        <xsl:for-each select="icons/icon">
            <a class="shortcut" href="{link}">
                <img src="{picture}"/>
                <span>
                    <xsl:value-of select="title"/>
                </span>
            </a>
        </xsl:for-each>

    </xsl:template>
</xsl:stylesheet>
