grep -E '^sudo apt-get install' install_raspbian_apps.sh \
|cut -c25- \
|tr -s ' ' "\n" \
|grep -v '^$' \
|awk '{ print "apt-cache search --names-only " $1 " | grep ^" $1 "\ -\ " }' \
|sh
