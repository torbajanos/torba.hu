<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE stylesheet [
        <!ENTITY nbsp  "&#160;" >
        ]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">

            <head>

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>

                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>

                <title>Torba János</title>

                <meta charset="utf-8"/>

                <!--<meta property="og:title" content="Torba Janos" />-->
                <meta property="og:description"
                      content="Torba Janos hivatalos weboldala - Offical home page of Janos Torba"/>

                <!-- https://developers.facebook.com/tools/debug/og/object/ -->
                <meta property="og:image" content="janos/pictures/vcard.png"/>

                <meta property="og:url" content="{icons/ogurl}"/>


                <meta name="description"
                      content="Torba János hivatalos weboldala. Offical home page of János Torba. Email: janos@torba.hu Tel: +36203115586 Skype: torbajanos, Facebook: http://www.facebook.com/torbajanos https://hu-hu.facebook.com/public/János-Torba"/>

                <meta name="keywords"
                      content="Torba,Janos,János,torbajanos,offical,hivatalos,profil,profile,+36203115586,janos@torba.hu,janos.torba.hu,janostorba,@torbajanos,#torbajanos,+János"/>

                <meta name="author" content="Torba Janos"/>

                <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>

                <!-- Base is only for images! -->
                <link rel="stylesheet" href="desktop.css" type="text/css"></link>

            </head>

            <body>

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

                <div class="taskbar">

                    <div class="home button">
                        <a href="index.xml">
                            <img src="pictures/home.png"/>
                            <span>Home</span>
                        </a>
                    </div>

                    <xsl:for-each select="buttons/button">
                        <div class="shortcut">
                            <a href="{title}.xml">
                                <div class="button">
                                    <img src="pictures/{title}.png" alt="{title}"/>
                                </div>

                                <img src="{picture}"/>
                                <span>
                                    <xsl:value-of select="title"/>
                                </span>
                            </a>
                        </div>

                    </xsl:for-each>


                    <div class="button">
                        <a href="contact.xml">
                            <img src="pictures/contact.png"/>
                            <span>Contact</span>
                        </a>
                    </div>
                    <div class="button">
                        <a href="profiles.xml">
                            <img src="pictures/profiles.png"/>
                            <span>Profiles</span>
                        </a>
                    </div>
                    <div class="button">
                        <a href="bookmarks.xml">
                            <img src="pictures/bookmarks.png"/>
                            <span>Bookmarks</span>
                        </a>
                    </div>
                    <div class="button">
                        <a href="downloads.xml">
                            <img src="pictures/downloads.png"/>
                            <span>Downloads</span>
                        </a>
                    </div>
                    <div class="button">
                        <a href="../">
                            <img src="pictures/turnoff.png"/>
                            <span>Logout</span>
                        </a>
                    </div>
                    <div class="button clock" id="clock">00:00</div>

                </div>


                <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>

                <script type="text/javascript" src="scripts.js"></script>

                <script>
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                    ga('create', 'UA-36040598-2', 'auto');
                    ga('send', 'pageview');

                </script>

            </body>

        </html>

    </xsl:template>
</xsl:stylesheet>
