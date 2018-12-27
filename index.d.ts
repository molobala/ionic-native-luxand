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
     * Initialize Luxand SDK
     * @param config {LuxandConfig} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    init(config: LuxandConfig): Promise<any>;
    /**
     * Identify methode, try to register a face in internal data base
     * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
     */
    identify(): Promise<OMLFacialData>;
    /**
     * Login method, try to authenticated a face
     * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
     */
    login(): Promise<OMLFacialData>;
    /**
     * clear method, try to remove a face from internal database
     * @param id {number}
     * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
     */
    clear(id: number): Promise<OMLFacialData>;
    /**
     * clearMemory method, try to clear internal database
     * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
     */
    clearMemory(): Promise<OMLFacialData>;
}
export interface LuxandConfig {
    licence: string;
    dbname: string;
    loginTryCount: number;
}
export interface OMLFacialData {
    status: string;
    message: string;
    name: string;
    id: number;
    extra: {
        AGE?: any;
        GENDER?: any;
        EYESOPENED?: any;
        SMILE: any;
    };
}
