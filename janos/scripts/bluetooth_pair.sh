#============================+
# Install Bluetooth Keyboard +
#============================+
# For easy cases: http://www.kosagi.com/w/index.php?title=Hacks,_hints,_and_tricks#Bluetooth_Pairing_.28use_this_one.29
# For easy cases: https://www.raspberrypi.org/forums/viewtopic.php?f=66&t=99326

# https://communities.intel.com/thread/61548?tstart=0
pi@raspberrypi:~ $ crontab -l
* * * * * /home/pi/connect_bluetooth_keyboard.sh

pi@raspberrypi:~ $ cat connect_bluetooth_keyboard.sh 
sudo bluetoothctl -a <<<"pair 0C:FC:85:23:68:0C"

# rfkill unblock bluetooth  
sudo bluetoothctl  <<< 'agent KeyboardDisplay  
default-agent  
scan on  
scan off  
pair <device>  
#   -> Click yes in the pop-up Window in the PC, then writing yes in the Edison  
connect <device>  sudo bluetoothctl -a KeyboardDisplay <<< "default-agent

#pair 0C:FC:XX:XX:XX:XX
#connect 0C:FC:XX:XX:XX:XX"
