import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
	@Input() candidateDetails;
  	constructor( ) { }

  	ngOnInit() {
		//console.log('candidateDetails : ',this.candidateDetails);
  	}

}
