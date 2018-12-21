import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Luxand
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Luxand } from '@ionic-native/luxand';
 *
 *
 * constructor(private luxand: Luxand) { }
 *
 * ...
 *
 *
 * this.luxand.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Luxand extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    init(config: LuxandConfig): Promise<any>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
     */
    identify(): Promise<OMLFacialData>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
     */
    login(): Promise<OMLFacialData>;
}
export interface LuxandConfig {
    licence: string;
    dbname: string;
    loginTryCount: number;
}
export interface OMLFacialData {
    status: string;
    message: string;
    extra: {
        AGE?: any;
        GENDER?: any;
        EYESOPENED?: any;
        SMILE: any;
    };
}
