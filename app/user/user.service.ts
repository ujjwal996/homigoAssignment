import {Injectable} from '@angular/core';
import {OWNERS} from './owner-mock-details';

@Injectable()
export class UserService{
  getOwner(){
    return OWNERS;
  }
}
