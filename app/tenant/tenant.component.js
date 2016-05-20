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
var property_details_1 = require('../property/property-details');
var tenant_service_1 = require('./tenant.service');
var TenantComponent = (function () {
    function TenantComponent(_tenantservice) {
        this._tenantservice = _tenantservice;
    }
    TenantComponent.prototype.ngOnInit = function () {
        this.tenants = this._tenantservice.getPropertyTenants(this.prop.id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', property_details_1.PropertyDetails)
    ], TenantComponent.prototype, "prop", void 0);
    TenantComponent = __decorate([
        core_1.Component({
            selector: 'property-tenants',
            template: "\n  <div>\n    <ul *ngIf = \"prop ! = null\">\n      <li *ngFor = \"let tenant in tenants\">\n      name : {{tenant.name}}\n      move_in_date : {{tenant.move_in_date}}\n      emailId : {{tenant.email}}\n      gneder : {{tenant.gender}}\n      Type Of Booking : {{tenant.booking_type}}\n      Rent : {{tenant.rent}}\n      Deposited Ammount : {{tenant.deposit}}\n      <img src = \"{{tenant.pic_url}}\" width=\"250px\" height = \"250px\"}\n      </li>\n    </ul>\n  </div>\n  ",
            providers: [tenant_service_1.TenantService]
        }), 
        __metadata('design:paramtypes', [tenant_service_1.TenantService])
    ], TenantComponent);
    return TenantComponent;
}());
exports.TenantComponent = TenantComponent;
//# sourceMappingURL=tenant.component.js.map