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

    let analogPinList = [
        AnalogPin.P0,
        AnalogPin.P1,
        AnalogPin.P2,
        AnalogPin.P3,
        AnalogPin.P4,
        AnalogPin.P5,
        AnalogPin.P6,
        AnalogPin.P7,
        AnalogPin.P8,
        AnalogPin.P9,
        AnalogPin.P10,
        AnalogPin.P11,
        AnalogPin.P12,
        AnalogPin.P13,
        AnalogPin.P14,
        AnalogPin.P15,
        AnalogPin.P16
    ];

    //% block="digital write Pin $pinNumber to $pinValue"
    //% pinValue.min=0 pinValue.max=1
    export function digitalPinOperation(pinNumber: number, pinValue: number) {
        pins.digitalWritePin(digitalPinList[pinNumber],pinValue);
    }

    //% block="analog write Pin $pinNumber to $pinValue"
    //% pinValue.min=0 pinValue.max=1023
    export function analogPinOperation(pinNumber: number, pinValue: number) {
        pins.analogWritePin(analogPinList[pinNumber],pinValue);
    }
    
}