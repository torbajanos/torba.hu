<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>torba.hu</title>
                <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
                <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
                <link rel="stylesheet" href="index.css" type="text/css"></link>
                <script type="text/javascript" src="janos/jquery-2.1.4.min.js"></script>
                <script type="text/javascript" src="index.js"></script>
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
                <div class="top">
                </div>

                <div class="middle">
                    <div class="logo panel">
                        <div class="logo-spacer">
                        </div>
                        <div class="logo-inner">
                            <img src="winlogo.png"/>
                            <br/>

                        </div>
                    </div>
                    <div class="users panel">
                        <div class="users-spacer">
                        </div>
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
                    </div> <!-- end users div -->
                </div> <!-- end middle div -->

                <div class="bottom">
                    <div class="turnoff">
                        <!-- <a href="https://www.google.hu/">
                            <img src="pictures/google.png" />
                            <span class="button">
                                <span style="color:blue;">G</span>
                                <span style="color:red;">o</span>
                                <span style="color:yellow;">o</span>
                                <span style="color:blue;">g</span>
                                <span style="color:green;">l</span>
                                <span style="color:red;">e</span>
                            </span>
                        </a> -->
                    </div>
                </div>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
