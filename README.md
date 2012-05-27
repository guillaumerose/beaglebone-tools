Ouvrir la console série
-----------------------

	screen `ls /dev/{tty.usb*B,beaglebone-serial}` 115200

Sauvegarder la carte SD
-------

	$ mkdir beaglebone
	$ cd beaglebone
	$ sudo dd if=/dev/sdb of=unmarked_sd
	$ tar zcvf unmarked_sd.tar.gz
	$ sudo rm unmarked_sd
	$ sudo su
	# tar Ozxf unmarked_sd.tar.gz | dd of=/dev/sdb

Mettre à jour la version d'Angstrom
------

Télécharger le .xz : http://downloads.angstrom-distribution.org/demo/beaglebone/

	# diskutils unmountDisk /dev/disk1
	# xz -dkc Angstrom-Cloud9-IDE-eglibc-ipk-v2011.10-core-beaglebone-r0.img.xz > /dev/disk1

Allumer une led
---------

	# cat /sys/class/leds/beaglebone\:\:usr3/trigger
	[none] mmc0 timer heartbeat backlight gpio default-on
	# echo default-on > /sys/class/leds/beaglebone\:\:usr3/trigger
	# echo none > /sys/class/leds/beaglebone\:\:usr3/trigger

Supprimer les services inutiles
-------

	# systemctl disable cloud9.service
	# systemctl disable bone101.service

Mettre à jour
-----

	# opkg update
	# opkg upgrade

