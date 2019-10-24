#!/bin/bash
# based on: https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-owncloud-on-ubuntu-18-04
sudo apt-get install -y apache2 mysql-server php7.2 curl gnupg nano openssh-server
curl https://download.owncloud.org/download/repositories/10.0/Ubuntu_18.04/Release.key | sudo apt-key add -
echo 'deb http://download.owncloud.org/download/repositories/10.0/Ubuntu_18.04/ /' | sudo tee /etc/apt/sources.list.d/owncloud.list
sudo apt update
sudo apt install -y php-mysql php-bz2 php-curl php-gd php-imagick php-intl php-mbstring php-xml php-zip owncloud-files
sudo sed -i 's@DocumentRoot /var/www/html@DocumentRoot /var/www/owncloud@' /etc/apache2/sites-available/000-default.conf
sudo apache2ctl configtest && sudo systemctl reload apache2 && echo "apache reloaded"
sudo mysql -e 'CREATE DATABASE owncloud;'
sudo mysql -e "GRANT ALL ON owncloud.* to 'owncloud'@'localhost' IDENTIFIED BY 'owncloud_database_password';"
sudo mysql -e 'FLUSH PRIVILEGES;'
export ODD=/var/www/ownclouddata;sudo mkdir $ODD;sudo chown -R www-data:www-data /var/www/
