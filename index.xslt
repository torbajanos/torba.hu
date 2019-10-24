<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>torba.hu</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
                <link rel="stylesheet" href="index.css" type="text/css"></link>
                <script>
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                    ga('create', 'UA-36040598-1', 'auto');
                    ga('send', 'pageview');
                </script>
            </head>
            <body>
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
                <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
