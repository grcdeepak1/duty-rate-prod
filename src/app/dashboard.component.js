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
var country_service_1 = require("./country.service");
var dutyrate_service_1 = require("./dutyrate.service");
var DashboardComponent = (function () {
    function DashboardComponent(countryService, dutyrateService) {
        this.countryService = countryService;
        this.dutyrateService = dutyrateService;
        this.countries = [];
        this.dutyrates = [];
        this.searchParams = {
            to: '',
            from: '',
            term: ''
        };
        this.lastSearch = {
            to: '',
            from: '',
            term: ''
        };
        this.searchDone = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countryService.getCountries()
            .then(function (countries) { return _this.countries = countries; });
    };
    DashboardComponent.prototype.search = function (params) {
        var _this = this;
        this.searchDone = false;
        this.lastSearch = Object.assign({}, params);
        this.dutyrateService.search(params)
            .then(function (dutyrates) {
            _this.dutyrates = dutyrates;
            _this.searchDone = true;
        });
    };
    DashboardComponent.prototype.customValidCheck = function (params) {
        if (params == null)
            return true;
        if (params.to == params.from)
            return false;
        else if (params.to != "United States" && params.from != "United States")
            return false;
        return true;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        providers: [country_service_1.CountryService],
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService,
        dutyrate_service_1.DutyrateService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map