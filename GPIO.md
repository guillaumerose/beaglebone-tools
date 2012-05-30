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

	root:/sys/kernel/debug/omap_mux# cat gpmc_ad6
	name: gpmc_ad6.gpio1_6 (0x44e10818/0x818 = 0x0037), b NA, t NA
	mode: OMAP_PIN_OUTPUT | OMAP_MUX_MODE7
	signals: gpmc_ad6 | mmc1_dat6 | NA | NA | NA | NA | NA | gpio1_6

Conversion : 0x0037 = 0b110111

Donc, mode = 0b111 = 7 (GPIO), résistance de pull-up, direction = input