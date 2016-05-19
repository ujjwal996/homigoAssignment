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
var property_mock_details_1 = require('./property-mock-details');
var PropertyService = (function () {
    function PropertyService() {
        this.counter = 0;
    }
    //array of Properties which are owned by user with id=ownerid
    PropertyService.prototype.getOwnersProperty = function (ownerid) {
        for (var i; i < property_mock_details_1.OWNEDPROP.length; i++) {
            if (property_mock_details_1.OWNEDPROP[i].owner_id == ownerid) {
                this.owners_properties[this.counter] = property_mock_details_1.OWNEDPROP[i];
                this.counter++;
            }
        }
        return this.owners_properties;
    };
    PropertyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PropertyService);
    return PropertyService;
}());
exports.PropertyService = PropertyService;
//# sourceMappingURL=properties.service.js.map