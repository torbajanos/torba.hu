<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">

        <div class="login-window">
            <xsl:for-each select="users/user">
                <div class="user">
                    <a href="{link}">
                        <img src="{picture}"/>
                        <span>
                            <xsl:value-of select="name"/>
                        </span>
                    </a>
                </div>
            </xsl:for-each>
        </div>
    </xsl:template>
</xsl:stylesheet>
