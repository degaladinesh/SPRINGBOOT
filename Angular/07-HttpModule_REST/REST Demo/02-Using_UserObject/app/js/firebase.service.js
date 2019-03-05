"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/Rx');
var FirebaseService = (function () {
    function FirebaseService(_http) {
        this._http = _http;
        this.baseUrl = "https://myangularproject-3768f.firebaseio.com";
    }
    FirebaseService.prototype.setUser = function (user) {
        var body = JSON.stringify(user);
        return this._http
            .put(this.baseUrl + "/user.json", body)
            .map(function (response) { return response.json(); }); //Returns an observable (Stream of events)
    };
    FirebaseService.prototype.getUser = function () {
        return this._http
            .get(this.baseUrl + "/user.json")
            .map(function (response) { return response.json(); });
    };
    FirebaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map