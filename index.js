var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
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
var Luxand = (function (_super) {
    __extends(Luxand, _super);
    function Luxand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Luxand.prototype.init = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (config) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Luxand.prototype.identify = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Luxand.prototype.login = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    Luxand.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Luxand.prototype, "init", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Luxand.prototype, "identify", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Luxand.prototype, "login", null);
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
    Luxand = __decorate([
        Plugin({
            pluginName: 'Luxand',
            plugin: 'codova-plugin-luxand',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'window.Luxand',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: '',
            // the github repository URL for the plugin
            install: '',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: [],
            // OPTIONAL the plugin requires variables
            platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], Luxand);
    return Luxand;
}(IonicNativePlugin));
export { Luxand };
//# sourceMappingURL=index.js.map