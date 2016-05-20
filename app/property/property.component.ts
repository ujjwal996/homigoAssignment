import {Input,Component, OnInit} from '@angular/core';
import {OwnerDetails} from '../user/owner-details';
import {PropertyDetails} from './property-details';
import {PropertyService} from './properties.service';
import {TenantComponent} from '../tenant/tenant.component';

@Component({
  selector:'user-property',
  template:`
   <div *ngIf = "owner!=null">
    <ul>
      <li *ngFor = "let property of properties" (click) = "selectedProperty(property)">
      name : {{property.name}}
      city : {{property.city}}
      landmark : {{property.landmark}}
      type : {{property.type}}
      availability : {{property.totalavailability}}
      places-around : {{property.places_nearby}}
      location : {{property.location}}
      labelled as : {{property.label}}
      <img src = "{{property.photo}}" width = "200 px" height = "200px">
      </li>
    </ul>
   </div>
   <property-tenants [prop]="selectedProp"></property-tenants>
  `,
  directives:[TenantComponent],
  providers : [PropertyService]

})

export class PropertyComponent implements OnInit{
  @Input() owner : OwnerDetails;
  properties:PropertyDetails[];
  selectedProp: PropertyDetails;

  constructor(private _propertyservice : PropertyService){}

  selectedProperty(selectedProperty : PropertyDetails){
    this.selectedProp = selectedProperty;
  }

  getSelectedOwnerProperties(){
    this.properties = this._propertyservice.getOwnersProperty(this.owner.id);
  }
  ngOnInit(){
    this.getSelectedOwnerProperties();
  }
}
