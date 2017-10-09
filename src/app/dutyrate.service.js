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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var DutyrateService = (function () {
    function DutyrateService(http) {
        this.http = http;
        this.dutyrateUrl = 'https://api.trade.gov/v1/tariff_rates/search?api_key=hTJinF9K_w71OVx06lZkb3JX';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DutyrateService.prototype.search = function (params) {
        var srcCountryStr = "";
        if (params.from != "United States")
            srcCountryStr = "&reporter_names=" + params.from.split(" ").join("+");
        else
            srcCountryStr = "&reporter_names=" + params.to.split(" ").join("+");
        var searchStr = "&q=" + params.term;
        return this.http.get(this.dutyrateUrl + srcCountryStr + searchStr)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    DutyrateService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return DutyrateService;
}());
DutyrateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DutyrateService);
exports.DutyrateService = DutyrateService;
//# sourceMappingURL=dutyrate.service.js.map