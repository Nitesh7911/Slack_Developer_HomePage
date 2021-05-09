import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../model/Candidate';
//DEV
//import { environment } from '../../environments/environment';
//PROD
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  configUrl = environment.apiUrl;

  getCandidate() {
    return this.http.get<Candidate>(this.configUrl+"/test_db");
  }
}
