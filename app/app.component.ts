import {Component} from "@angular/core";
import {OnInit} from '@angular/core';
import {UserService} from './user/user.service';
import {OwnerDetails} from './user/owner-details';
import {PropertyComponent} from './property/property.component';

@Component({
  selector:'my-app',
  template :`
  <h1>Owner's List</h1>
  <ul>
    <li *ngFor = "let owner of owners" (click) = ownerSelected(owner)>
    name : {{owner.name}},<br>
    address:{{owner.address}},<br>
    phoneNo.:{{owner.phone}},<br>
    emailId:{{owner.email}},<br>
    <img src="{{owner.pic_url}}" alt='' width = "250px" height="250px">
    </li>
  </ul>
  <user-property [owner]="selectedOwner"></user-property>

  `,
  directives:[PropertyComponent],
  providers : [UserService]
})
export class AppComponent implements OnInit{
  owners : OwnerDetails[];
  selectedOwner: OwnerDetails;
  ownerSelected(owner : OwnerDetails){
    this.selectedOwner = owner;
  }
  constructor(private _userservice:UserService){}
  getOwners(){
    this.owners = this._userservice.getOwner();
  }
  ngOnInit(){
    this.getOwners();
  }
}
