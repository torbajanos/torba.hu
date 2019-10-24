#     #!/bin/bash -x
if bluetoothctl <<< 'info 0C:FC:85:23:68:0C' | grep 'Connected: no'
then
    echo 'Connectiong the little white Bluetooth Keyboard...'
    sudo bluetoothctl -a KeyboardDisplay <<< "connect 0C:FC:85:23:68:0C"
    sleep 1
else
    echo 'the little white Bluetooth Keyboard is already connected.'
fi

if bluetoothctl <<< 'info 20:14:12:09:18:CB' | grep 'Connected: no'
then
    echo 'Connectiong the black Bluetooth Mouse...'
    sudo bluetoothctl <<< "connect 20:14:12:09:18:CB"
    sleep 1
else
    echo 'the black Bluetooth Mouse is already connected.'
fi

exit

sudo bluetoothctl -a KeyboardDisplay <<< "default-agent
pair 0C:FC:85:23:68:0C
connect 0C:FC:85:23:68:0C"
