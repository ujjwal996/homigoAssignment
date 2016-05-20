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
var user_service_1 = require('./user/user.service');
var property_component_1 = require('./property/property.component');
var AppComponent = (function () {
    function AppComponent(_userservice) {
        this._userservice = _userservice;
    }
    AppComponent.prototype.ownerSelected = function (owner) {
        this.selectedOwner = owner;
    };
    //getOwners(){
    //this.owners = this._userservice.getOwner();
    //}
    AppComponent.prototype.ngOnInit = function () {
        this.owners = this._userservice.getOwner();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>Owner's List</h1>\n  <ul>\n    <li *ngFor = \"let owner of owners\" (click) = ownerSelected(owner)>\n    name : {{owner.name}},<br>\n    address:{{owner.address}},<br>\n    phoneNo.:{{owner.phone}},<br>\n    emailId:{{owner.email}},<br>\n    <img src=\"{{owner.pic_url}}\" alt='' width = \"250px\" height=\"250px\">\n    </li>\n  </ul>\n  <user-property [owner]=\"selectedOwner\"></user-property>\n\n\n  ",
            directives: [property_component_1.PropertyComponent],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map