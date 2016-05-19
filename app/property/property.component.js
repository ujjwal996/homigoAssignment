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
var owner_details_1 = require('../user/owner-details');
var properties_service_1 = require('./properties.service');
var PropertyComponent = (function () {
    function PropertyComponent(_propertyservice) {
        this._propertyservice = _propertyservice;
    }
    PropertyComponent.prototype.getProperties = function () {
        this.properties = this._propertyservice.getOwnersProperty(this.owner.id);
    };
    PropertyComponent.prototype.ngOnInit = function () {
        this.getProperties();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', owner_details_1.OwnerDetails)
    ], PropertyComponent.prototype, "owner", void 0);
    PropertyComponent = __decorate([
        core_1.Component({
            selector: 'user-property',
            template: "\n   <div *ngIf = \"owner\">\n    <ul>\n      <li *ngFor = \"let property of properties\">\n      name : {{property.name}}\n      city : {{property.city}}\n      landmark : {{property.landmark}}\n      type : {{property.type}}\n      availability : {{property.totalavailability}}\n      places-around : {{property.places_nearby}}\n      location : {{property.location}}\n      labelled as : {{property.label}}\n      <img src = \"{{property.photo}}\" width = \"200 px\" height = \"200px\">\n      </li>\n    </ul>\n   </div>\n  ",
            providers: [properties_service_1.PropertyService]
        }), 
        __metadata('design:paramtypes', [properties_service_1.PropertyService])
    ], PropertyComponent);
    return PropertyComponent;
}());
exports.PropertyComponent = PropertyComponent;
//# sourceMappingURL=property.component.js.map