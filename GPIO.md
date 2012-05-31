Pin mux
----

D'après la datasheet (voir jpg attaché)

<table class="bitlist"><tbody><tr><th>Bit</th>
<th>5</th>
<th>4</th>
<th>3</th>
<th>2</th>
<th>1</th>
<th>0</th>
</tr><tr><th>Set (1)</th>
<td>Input</td>
<td>Pull Up</td>
<td>Pull Disable</td>
<td colspan="3" rowspan="2">Mode</td>
</tr><tr><th>Clear (0)</th>
<td>Output</td>
<td>Pull Down</td>
<td>Pull Enable</td>
</tr></tbody></table>

Exemple :

Port 8 Pin 3 : nom = GPIO1_6, mode 0 = gpmc_ad6

	root@beaglebone:/sys/kernel/debug/omap_mux# cat gpmc_ad6
	name: gpmc_ad6.gpio1_6 (0x44e10818/0x818 = 0x0037), b NA, t NA
	mode: OMAP_PIN_INPUT_PULLUP | OMAP_MUX_MODE7
	signals: gpmc_ad6 | mmc1_dat6 | NA | NA | NA | NA | NA | gpio1_6

Conversion : 0x0037 = 0b110111

Donc, mode = 0b111 = 7 (GPIO), résistance de pull-up, direction = input

Lire l'état d'une patte
-----

GPIO1_6 équivaut à au numéro 38 = 1 * 32 + 6
GPIO2_7 équivaut à au numéro 2 * 32 + 7, etc.

	root:/sys/class/gpio# echo 38 > export
	root:/sys/class/gpio# cd gpio38/
	root:/sys/class/gpio/gpio38# cat value
	1
	root:/sys/class/gpio/gpio38# cat direction
	in

Interruptions
-----

Le script src/gpio-int-test.c définit les bonnes constantes.

	root@beaglebone:~# ./a.out
	Usage: gpio-int <gpio-pin>

	Waits for a change in the GPIO pin voltage level or input on stdin
	root@beaglebone:~# ./a.out 38

	poll() GPIO 38 interrupt occurred
	.
	poll() GPIO 38 interrupt occurred

	poll() GPIO 38 interrupt occurred

PWM
-----

Apparemment, il n'y aurait pas besoin sur les nouvelles versions du noyau d'activer les clocks des PWM.

	root:/sys/class/pwm/ehrpwm.1:0# echo 0 > run
	root:/sys/class/pwm/ehrpwm.1:0# echo 0 > duty_percent
	root:/sys/class/pwm/ehrpwm.1:0# echo 200 > period_freq
	root:/sys/class/pwm/ehrpwm.1:0# echo 20 > duty_percent
	root:/sys/class/pwm/ehrpwm.1:0# echo 1 > run

Avant de changer le rapport, il semble bon de vérifier que c'est possible

	root~:/sys/class/pwm/ehrpwm.1:0# cat request
	ehrpwm.1:0 is free

Fréquence de 10Mhz

	# echo 10000000 > period_freq

Links
----

http://bwgz57.wordpress.com/2012/04/15/beaglebone-gpio-irq/

http://www.nathandumont.com/node/250

http://taylanayken.wordpress.com/2012/03/27/getting-started-with-beaglebone/

http://www.gigamegablog.com/2012/03/16/beaglebone-coding-101-buttons-and-pwm/
