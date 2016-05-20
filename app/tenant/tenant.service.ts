import {Injectable} from '@angular/core';
import {PROPTENANTS} from './tenant-mock-deatils';
import {TenantDetails} from './tenant-details';

@Injectable()
export class TenantService{
    counter=0;
    tenantsonproperty:TenantDetails[];
    //array of Tenants who stay in the property_id= property.id
    getPropertyTenants( propertyid : number)
    {
      for(var i; i<PROPTENANTS.length;i++)
      {
        if(PROPTENANTS[i].property_id == propertyid)
        {
          this.tenantsonproperty[this.counter] = PROPTENANTS[i];
          this.counter++;
        }
      }
      return this.tenantsonproperty;
    }
  }
