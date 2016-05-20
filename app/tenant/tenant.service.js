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
var tenant_mock_deatils_1 = require('./tenant-mock-deatils');
var TenantService = (function () {
    function TenantService() {
        this.counter = 0;
    }
    //array of Tenants who stay in the property_id= property.id
    TenantService.prototype.getPropertyTenants = function (propertyid) {
        for (var i; i < tenant_mock_deatils_1.PROPTENANTS.length; i++) {
            if (tenant_mock_deatils_1.PROPTENANTS[i].property_id == propertyid) {
                this.tenantsonproperty[this.counter] = tenant_mock_deatils_1.PROPTENANTS[i];
                this.counter++;
            }
        }
        return this.tenantsonproperty;
    };
    TenantService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TenantService);
    return TenantService;
}());
exports.TenantService = TenantService;
//# sourceMappingURL=tenant.service.js.map