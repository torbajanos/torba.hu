#===================+
# Wordpress Install +
#===================+
# https://www.raspberrypi.org/learning/lamp-web-server-with-wordpress/worksheet/

cd /var/www/html/
sudo chown pi: .
sudo rm *
wget http://wordpress.org/latest.tar.gz
tar xzf latest.tar.gz
mv wordpress/* .
rm -rf wordpress latest.tar.gz
mysql -uroot

#create database wordpress;
#ctrl+D

#http://192.168.0.14
#Database Name:      wordpress
#User Name:          root
#Password:           <YOUR PASSWORD>
#Database Host:      localhost
#Table Prefix:       wp_

#http://192.168.0.14

sudo a2enmod rewrite

echo >/var/www/html/.htaccess "<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>"

# You'll also need to tell the virtual host serving the site to allow requests to be overwritten. Do this by editing the virtual host file (with root permissions): sudo nano /etc/apache2/sites-available/default; also, change the AllowOverride setting on line 11 (inside the <Directory /var/www/html/> block) from None to All. Save the file and then restart Apache with sudo service apache2 restart. Once it's restarted, refresh the page and it should load successfully. Now posts have URLs like /hello-world/ instead of /?p=123, and pages have URLs like /sample-page/ instead of /?page_id=2
