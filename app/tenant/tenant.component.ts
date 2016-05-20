import {Component,Input, OnInit} from '@angular/core';
import {PropertyDetails} from '../property/property-details';
import {TenantDetails} from './tenant-details';
import {TenantService} from './tenant.service';

@Component({
  selector : 'property-tenants',
  template: `
  <div>
    <ul *ngIf = "prop ! = null">
      <li *ngFor = "let tenant in tenants">
      name : {{tenant.name}}
      move_in_date : {{tenant.move_in_date}}
      emailId : {{tenant.email}}
      gneder : {{tenant.gender}}
      Type Of Booking : {{tenant.booking_type}}
      Rent : {{tenant.rent}}
      Deposited Ammount : {{tenant.deposit}}
      <img src = "{{tenant.pic_url}}" width="250px" height = "250px"}
      </li>
    </ul>
  </div>
  `,
  providers : [TenantService]
})

export class TenantComponent implements OnInit{
  @Input() prop: PropertyDetails;
  tenants : TenantDetails[];

  constructor( private _tenantservice : TenantService){}

  ngOnInit(){
    this.tenants = this._tenantservice.getPropertyTenants(this.prop.id);
  }

}
