/**
 * Functions for Controlling Pins with vaiable enabled
 * 
 * Created on 21 Nov 2019
 * Developed by KK Yung
 * 
 */
//% weight=100 color=#AA278D icon="\uf21c" block="Pins Adavance"
namespace advancepins {
    /**
    * Computes the famous Fibonacci number sequence!
    */

    let digitalPinList = [
        DigitalPin.P0,
        DigitalPin.P1,
        DigitalPin.P2,
        DigitalPin.P3,
        DigitalPin.P4,
        DigitalPin.P5,
        DigitalPin.P6,
        DigitalPin.P7,
        DigitalPin.P8,
        DigitalPin.P9,
        DigitalPin.P10,
        DigitalPin.P11,
        DigitalPin.P12,
        DigitalPin.P13,
        DigitalPin.P14,
        DigitalPin.P15,
        DigitalPin.P16
    ];

    //% block="digital write pin $pinNumber to $pinValue"
    //% pinValue.min=0 pinValue.max=1
    export function digitalPinOperation(pinNumber: number, pinValue: number) {
        pins.digitalWritePin(digitalPinList[pinNumber],pinValue);
    }
}