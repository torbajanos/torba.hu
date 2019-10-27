<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <div class="desktop">

            <xsl:for-each select="icons/icon">
                <div class="shortcut">
                    <a href="{link}">
                        <img src="{picture}"/>
                        <span>
                            <xsl:value-of select="title"/>
                        </span>
                    </a>
                </div>
            </xsl:for-each>
        </div> <!-- end desktop div -->
    </xsl:template>

</xsl:stylesheet>
