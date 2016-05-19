import {Injectable} from '@angular/core';
import {PROPTENANTS} from './tenant-mock-deatils';

@Injectable()
export class TenantService{
  getPropertyTenants()
  {
    return PROPTENANTS;
  }
}
