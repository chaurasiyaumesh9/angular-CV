import { Component, OnInit } from '@angular/core';
import { UserMetaDataService } from '../../Services/usermetadata.service';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  providers: [ UserMetaDataService ]
})
export class WrapperComponent implements OnInit {

  userMetaData;
  constructor( private _userService: UserMetaDataService ) { }

  ngOnInit() {
  	this._userService.getMetaData().subscribe(userResponse => { 
  		this.userMetaData = userResponse;
      //console.log('userMetaData:',this.userMetaData);
  	});
  }

}
