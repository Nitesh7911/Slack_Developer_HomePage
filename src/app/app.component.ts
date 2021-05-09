import { Component , OnInit } from '@angular/core';
import { Candidate } from './model/Candidate';
import { CandidateService } from './services/candidate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'slack-developer';
  selectedCandidate : Candidate;
  constructor(private candidateService : CandidateService){}

  ngOnInit(): void {
      this.candidateService.getCandidate().subscribe(data=>{this.selectedCandidate=data;
      console.log(this.selectedCandidate)});
  }

}
