#!/bin/bash
# torba.hu/felho config
sudo apt install -y redis redis-server php-redis
cd /var/www/owncloud/config/
SOROK=`sudo -u www-data wc config.php -l|awk '{print $1}'`
echo "$SOROK sor a config.php"
sudo -u www-data head -`bc <<<"$SOROK-1"` config.php > /tmp/config.torba
tee -a /tmp/config.torba <<EOF

'overwrite.cli.url' => 'https://192.168.1.142/felho',
'htaccess.RewriteBase' => '/felho',

'overwriteprotocol' => 'https',
'overwritewebroot' => '/felho',

'has_rebuilt_cache' => true,
'cache_path' => "/var/www/owncloud-cache/",
'memcache.local' => '\\OC\\Memcache\\Redis',
'filelocking.enabled' => 'true',
'memcache.distributed' => '\\OC\\Memcache\\Redis',
'memcache.locking' => '\\OC\\Memcache\\Redis',

  'redis' => [
    'host' => 'localhost',  // Can also be a unix domain socket => '/tmp/redis.sock'
    'port' => 6379,
    'timeout' => 0,
    'password' => '',       // Optional, if not defined no password will be used.
    'dbindex' => 0          // Optional, if undefined SELECT will not run and will
                            // use Redis Server's default DB Index.
  ],
  'cache_chunk_gc_ttl' => 86400, // 60*60*24 = 1 day

);
EOF
sudo -u www-data cp /tmp/config.torba config.php
rm /tmp/config.torba
sudo -u www-data ./occ maintenance:update:htaccess
#cd /etc/apache2/sites-available/
#(head -1 000-default.conf ;cat <<EOF
sudo tee /etc/apache2/sites-available/000-default.conf <<EOF

<Directory /var/www/owncloud>

    Options +FollowSymLinks
	AllowOverride All

</Directory>

<VirtualHost *:80>
  
  Alias "/felho" "/var/www/owncloud/"
  
  <IfModule mod_dav.c>
    Dav off
  </IfModule>
  
  DocumentRoot /var/www/owncloud
  ErrorLog ${APACHE_LOG_DIR}/owncloud-error.log
  CustomLog ${APACHE_LOG_DIR}/owncloud-access.log combined

</VirtualHost>

EOF
#tail -n +2 000-default.conf ) | tee /tmp/config.nodav
#sudo mv /tmp/config.nodav 000-default.conf
sudo a2enmod rewrite
sudo service apache2 restart
