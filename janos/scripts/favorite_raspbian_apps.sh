#===========================================================================#
# Installation of my favorite Raspbian apps to a Raspberry PI 2 Model B     #
#===========================================================================#

#Downloading NOOBS and ApplePI-Baker: 10 min
#Format microSD card
#Copy NOOBS to micro SD card:         10 min
#Installing Raspbian with NOOBS:      50 min
sudo apt-get update                 # 30 min
sudo apt-get upgrade                # 45 min, 49 updated
sudo apt-get install -y samba bluez blueman nano lsof tightvncserver x11vnc iceweasel vlc nautilus gimp bitlbee xchat ntfs-3g transmission gedit gedit-plugins gedit gedit-plugins \
claws-mail-gdata-plugin claws-mail-fancy-plugin claws-mail-feeds-reader claws-mail-gdata-plugin claws-mail-mailmbox-plugin claws-mail-multi-notifier \
mozplugger freerdp-x11 tcpdump mplayer2 xine-ui evince xpaint html2ps juk \
mysql-client php5 libapache2-mod-php5 php5-mysql git
#eclipse mysql-workbench
# ? min

#sudo apt-get install -y apache2 mysql-server
#sudo apt-get install -y bind9 bind9utils  bind9-host bind9-doc bindgraph dnsutils # Internet Domain Name Server
#0 5 * * * rsync -av --delete /media/USBHDD1/shares /media/USBHDD2/shares/
