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
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
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
     * Initialize Luxand SDK
     * @param config {LuxandConfig} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Luxand.prototype.init = function (config) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * Identify methode, try to register a face in internal data base
     * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
     */
    Luxand.prototype.identify = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * Login method, try to authenticated a face
     * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
     */
    Luxand.prototype.login = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * clear method, try to remove a face from internal database
     * @param id {number}
     * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
     */
    Luxand.prototype.clear = function (id) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * clearMemory method, try to clear internal database
     * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
     */
    Luxand.prototype.clearMemory = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    return Luxand;
}(IonicNativePlugin));
Luxand.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Luxand.ctorParameters = function () { return []; };
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
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Luxand.prototype, "clear", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Luxand.prototype, "clearMemory", null);
Luxand = __decorate([
    Plugin({
        pluginName: 'Luxand',
        plugin: 'codova-plugin-luxand',
        pluginRef: 'window.Luxand',
        repo: '',
        install: '',
        installVariables: [],
        platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
    })
], Luxand);
export { Luxand };
//# sourceMappingURL=index.js.map