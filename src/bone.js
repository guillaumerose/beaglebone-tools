// Mapping
// https://github.com/jadonk/bonescript
var gpio0 = 0;
var gpio1 = gpio0+32;
var gpio2 = gpio1+32;
var gpio3 = gpio2+32;

var bone =
{
    P8_1: { name: "DGND" },
    P8_2: { name: "DGND" },
    P8_3: { name: "GPIO1_6", gpio: gpio1+6, mux: "gpmc_ad6", eeprom: 26 },
    P8_4: { name: "GPIO1_7", gpio: gpio1+7, mux: "gpmc_ad7", eeprom: 27 },
    P8_5: { name: "GPIO1_2", gpio: gpio1+2, mux: "gpmc_ad2", eeprom: 22 },
    P8_6: { name: "GPIO1_3", gpio: gpio1+3, mux: "gpmc_ad3", eeprom: 23 },
    P8_7: { name: "TIMER4", gpio: gpio2+2, mux: "gpmc_advn_ale", eeprom: 41 },
    P8_8: { name: "TIMER7", gpio: gpio2+3, mux: "gpmc_oen_ren", eeprom: 44 },
    P8_9: { name: "TIMER5", gpio: gpio2+5, mux: "gpmc_ben0_cle", eeprom: 42 },
    P8_10: { name: "TIMER6", gpio: gpio2+4, mux: "gpmc_wen", eeprom: 43 },
    P8_11: { name: "GPIO1_13", gpio: gpio1+13, mux: "gpmc_ad13", eeprom: 29 },
    P8_12: { name: "GPIO1_12", gpio: gpio1+12, mux: "gpmc_ad12", eeprom: 28 },
    P8_13: { name: "EHRPWM2B", gpio: gpio0+23, mux: "gpmc_ad9", eeprom: 15,
        pwm: { muxmode: 4, path: "ehrpwm.2:1", name: "EHRPWM2B" }
    },
    P8_14: { name: "GPIO0_26", gpio: gpio0+26, mux: "gpmc_ad10", eeprom: 16 },
    P8_15: { name: "GPIO1_15", gpio: gpio1+15, mux: "gpmc_ad15", eeprom: 31 },
    P8_16: { name: "GPIO1_14", gpio: gpio1+14, mux: "gpmc_ad14", eeprom: 30 },
    P8_17: { name: "GPIO0_27", gpio: gpio0+27, mux: "gpmc_ad11", eeprom: 17 },
    P8_18: { name: "GPIO2_1", gpio: gpio2+1, mux: "gpmc_clk", eeprom: 40 },
    P8_19: { name: "EHRPWM2A", gpio: gpio0+22, mux: "gpmc_ad8", eeprom: 14,
        pwm: { muxmode: 4, path: "ehrpwm.2:0", name: "EHRPWM2A" }
    },
    P8_20: { name: "GPIO1_31", gpio: gpio1+31, mux: "gpmc_csn2", eeprom: 39 },
    P8_21: { name: "GPIO1_30", gpio: gpio1+30, mux: "gpmc_csn1", eeprom: 38 },
    P8_22: { name: "GPIO1_5", gpio: gpio1+5, mux: "gpmc_ad5", eeprom: 25 },
    P8_23: { name: "GPIO1_4", gpio: gpio1+4, mux: "gpmc_ad4", eeprom: 24 },
    P8_24: { name: "GPIO1_1", gpio: gpio1+1, mux: "gpmc_ad1", eeprom: 21 },
    P8_25: { name: "GPIO1_0", gpio: gpio1+0, mux: "gpmc_ad0", eeprom: 20 },
    P8_26: { name: "GPIO1_29", gpio: gpio1+29, mux: "gpmc_csn0", eeprom: 37 },
    P8_27: { name: "GPIO2_22", gpio: gpio2+22, mux: "lcd_vsync", eeprom: 57 },
    P8_28: { name: "GPIO2_24", gpio: gpio2+24, mux: "lcd_pclk", eeprom: 59 },
    P8_29: { name: "GPIO2_23", gpio: gpio2+23, mux: "lcd_hsync", eeprom: 58 },
    P8_30: { name: "GPIO2_25", gpio: gpio2+25, mux: "lcd_ac_bias_en", eeprom: 60 },
    P8_31: { name: "UART5_CTSN", gpio: gpio0+10, mux: "lcd_data14", eeprom: 7 },
    P8_32: { name: "UART5_RTSN", gpio: gpio0+11, mux: "lcd_data15", eeprom: 8 },
    P8_33: { name: "UART4_RTSN", gpio: gpio0+9, mux: "lcd_data13", eeprom: 6 },
    P8_34: { name: "UART3_RTSN", gpio: gpio2+17, mux: "lcd_data11", eeprom: 56,
        pwm: { muxmode: 2, path: "ehrpwm.1:1", name: "EHRPWM1B" }
    },
    P8_35: { name: "UART4_CTSN", gpio: gpio0+8, mux: "lcd_data12", eeprom: 5 },
    P8_36: { name: "UART3_CTSN", gpio: gpio2+16, mux: "lcd_data10", eeprom: 55,
        pwm: { muxmode: 2, path: "ehrpwm.1:0", name: "EHRPWM1A" }
    },
    P8_37: { name: "UART5_TXD", gpio: gpio2+14, mux: "lcd_data8", eeprom: 53 },
    P8_38: { name: "UART5_RXD", gpio: gpio2+15, mux: "lcd_data9", eeprom: 54 },
    P8_39: { name: "GPIO2_12", gpio: gpio2+12, mux: "lcd_data6", eeprom: 51 },
    P8_40: { name: "GPIO2_13", gpio: gpio2+13, mux: "lcd_data7", eeprom: 52 },
    P8_41: { name: "GPIO2_10", gpio: gpio2+10, mux: "lcd_data4", eeprom: 49 },
    P8_42: { name: "GPIO2_11", gpio: gpio2+11, mux: "lcd_data5", eeprom: 50 },
    P8_43: { name: "GPIO2_8", gpio: gpio2+8, mux: "lcd_data2", eeprom: 47 },
    P8_44: { name: "GPIO2_9", gpio: gpio2+9, mux: "lcd_data3", eeprom: 48 },
    P8_45: { name: "GPIO2_6", gpio: gpio2+6, mux: "lcd_data0", eeprom: 45,
        pwm: { muxmode: 3, path: "ehrpwm.2:0", name: "EHRPWM2A" }
    },
    P8_46: { name: "GPIO2_7", gpio: gpio2+7, mux: "lcd_data1", eeprom: 46,
        pwm: { muxmode: 3, path: "ehrpwm.2:1", name: "EHRPWM2B" }
    },
    P9_1: { name: "DGND" },
    P9_2: { name: "DGND" },
    P9_3: { name: "VDD_3V3" },
    P9_4: { name: "VDD_3V3" },
    P9_5: { name: "VDD_5V" },
    P9_6: { name: "VDD_5V" },
    P9_7: { name: "SYS_5V" },
    P9_8: { name: "SYS_5V" },
    P9_9: { name: "PWR_BUT" },
    P9_10: { name: "SYS_RESETn" },
    P9_11: { name: "UART4_RXD", gpio: gpio0+30, mux: "gpmc_wait0", eeprom: 18 },
    P9_12: { name: "GPIO1_28", gpio: gpio1+28, mux: "gpmc_ben1", eeprom: 36 },
    P9_13: { name: "UART4_TXD", gpio: gpio0+31, mux: "gpmc_wpn", eeprom: 19 },
    P9_14: { name: "EHRPWM1A", gpio: gpio1+18, mux: "gpmc_a2", eeprom: 34,
        pwm: { muxmode: 6, path: "ehrpwm.1:0", name: "EHRPWM1A" }
    },
    P9_15: { name: "GPIO1_16", gpio: gpio1+16, mux: "mii1_rxd3", eeprom: 32 },
    P9_16: { name: "EHRPWM1B", gpio: gpio1+19, mux: "gpmc_a3", eeprom: 35,
        pwm: { muxmode: 6, path: "ehrpwm.1:1", name: "EHRPWM1B" }
    },
    P9_17: { name: "I2C1_SCL", gpio: gpio0+5, mux: "spi0_cs0", eeprom: 3 },
    P9_18: { name: "I2C1_SDA", gpio: gpio0+4, mux: "spi0_d1", eeprom: 2 },
    P9_19: { name: "I2C2_SCL", gpio: gpio0+13, mux: "uart1_rtsn", eeprom: 9 },
    P9_20: { name: "I2C2_SDA", gpio: gpio0+12, mux: "uart1_ctsn", eeprom: 10 },
    P9_21: { name: "UART2_TXD", gpio: gpio0+3, mux: "spi0_d0", eeprom: 1,
        pwm: { muxmode: 3, path: "ehrpwm.0:1", name: "EHRPWM0B" }
    },
    P9_22: { name: "UART2_RXD", gpio: gpio0+2, mux: "spi0_sclk", eeprom: 0,
        pwm: { muxmode: 3, path: "ehrpwm.0:0", name: "EHRPWM0A" }
    },
    P9_23: { name: "GPIO1_17", gpio: gpio1+17, mux: "gpmc_a1", eeprom: 33 },
    P9_24: { name: "UART1_TXD", gpio: gpio0+15, mux: "uart1_txd", eeprom: 12 },
    P9_25: { name: "GPIO3_21", gpio: gpio3+21, mux: "mcasp0_ahclkx", eeprom: 66 },
    P9_26: { name: "UART1_RXD", gpio: gpio0+14, mux: "uart1_rxd", eeprom: 11 },
    P9_27: { name: "GPIO3_19", gpio: gpio3+19, mux: "mcasp0_fsr", eeprom: 64 },
    P9_28: { name: "SPI1_CS0", gpio: gpio3+17, mux: "mcasp0_ahclkr", eeprom: 63,
        pwm: { muxmode: 4, path: "ecap.2", name: "ECAPPWM2" }
    },
    P9_29: { name: "SPI1_D0", gpio: gpio3+15, mux: "mcasp0_fsx", eeprom: 61,
        pwm: { muxmode: 1, path: "ehrpwm.0:1", name: "EHRPWM0B" }
    },
    P9_30: { name: "SPI1_D1", gpio: gpio3+16, mux: "mcasp0_axr0", eeprom: 62 },
    P9_31: { name: "SPI1_SCLK", gpio: gpio3+14, mux: "mcasp0_aclkx", eeprom: 65,
        pwm: { muxmode: 1, path: "ehrpwm.0:0", name: "EHRPWM0A" }
    },
    P9_32: { name: "VDD_ADC" },
    P9_33: { name: "AIN4", ain: 4, eeprom: 71, scale: 4096 },
    P9_34: { name: "GNDA_ADC" },
    P9_35: { name: "AIN6", ain: 6, eeprom: 73, scale: 4096 },
    P9_36: { name: "AIN5", ain: 5, eeprom: 72, scale: 4096 },
    P9_37: { name: "AIN2", ain: 2, eeprom: 69, scale: 4096 },
    P9_38: { name: "AIN3", ain: 3, eeprom: 70, scale: 4096 },
    P9_39: { name: "AIN0", ain: 0, eeprom: 67, scale: 4096 },
    P9_40: { name: "AIN1", ain: 1, eeprom: 68, scale: 4096 },
    P9_41: { name: "CLKOUT2", gpio: gpio0+20, mux: "xdma_event_intr1", eeprom: 13 },
    P9_42: { name: "GPIO0_7", gpio: gpio0+7, mux: "ecap0_in_pwm0_out", eeprom: 4,
        pwm: { muxmode: 0, path: "ecap.0", name: "ECAPPWM0" }
    },
    P9_43: { name: "DGND" },
    P9_44: { name: "DGND" },
    P9_45: { name: "DGND" },
    P9_46: { name: "DGND" },
    USR0: { name: "USR0", gpio: gpio1+21, led: "usr0", mux: "gpmc_a5" },
    USR1: { name: "USR1", gpio: gpio1+22, led: "usr1", mux: "gpmc_a6" },
    USR2: { name: "USR2", gpio: gpio1+23, led: "usr2", mux: "gpmc_a7" },
    USR3: { name: "USR3", gpio: gpio1+24, led: "usr3", mux: "gpmc_a8" }
};

for(var x in bone) {
    bone[x].key = x;
}

exports.bone = bone;