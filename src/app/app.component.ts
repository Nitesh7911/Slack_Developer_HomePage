import { Component , OnInit } from '@angular/core';
import { Candidate } from './model/Candidate';
import { CandidateService } from './services/candidate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Developers HomePage';
  selectedCandidate : Candidate;
  allCandidates:Candidate[];
  constructor(private candidateService : CandidateService){}

  ngOnInit(): void {
      this.candidateService.getSingleCandidate().subscribe(data=>{this.selectedCandidate=data});
      this.candidateService.getAllCandidate().subscribe(data=>{this.allCandidates=data;
      console.log(this.allCandidates)});
  }

}
