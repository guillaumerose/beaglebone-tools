import time

# put Port 8 Pin 3 into mode 7 (GPIO)
open('/sys/kernel/debug/omap_mux/gpmc_ad6', 'wb').write("%X" % 7)

try:
   # check to see if the pin is already exported
   open('/sys/class/gpio/gpio38/direction').read()
except:
   # it isn't, so export it
   print("exporting GPIO 38")
   open('/sys/class/gpio/export', 'w').write('38')

# set Port 8 Pin 3 for output
open('/sys/class/gpio/gpio38/direction', 'w').write('out')
# we will assume that USR1 and USR 2 are already configured as LEDs

for i in range(10):
   # turn on USR1 and external LED
   open('/sys/class/gpio/gpio38/value', 'w').write("1")
   open("/sys/devices/platform/leds-gpio/leds/beaglebone::usr1/brightness", 'w').write("1")
   # turn off USR2
   open("/sys/devices/platform/leds-gpio/leds/beaglebone::usr2/brightness", 'w').write("0")

   time.sleep(1)

   # turn off USR1 and external LED
   open('/sys/class/gpio/gpio38/value', 'w').write("0")
   open("/sys/devices/platform/leds-gpio/leds/beaglebone::usr1/brightness", 'w').write("0")
   # turn on USR2
   open("/sys/devices/platform/leds-gpio/leds/beaglebone::usr2/brightness", 'w').write("1")

   time.sleep(1)

# cleanup - remove GPIO38 folder from file system
open('/sys/class/gpio/unexport', 'w').write('38')

