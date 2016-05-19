import {Injectable} from '@angular/core';
import {PropertyDetails} from './property-details';
import {OWNEDPROP} from './property-mock-details';
import {OwnerDetails} from '../user/owner-details';

@Injectable()
export class PropertyService{
  counter=0;
  owners_properties:PropertyDetails[];
  //array of Properties which are owned by user with id=ownerid
  getOwnersProperty(ownerid : number){
    for(var i; i<OWNEDPROP.length;i++)
    {
      if(OWNEDPROP[i].owner_id == ownerid)
      {
        this.owners_properties[this.counter] = OWNEDPROP[i];
        this.counter++;
      }
    }
    return this.owners_properties;
  }
}
