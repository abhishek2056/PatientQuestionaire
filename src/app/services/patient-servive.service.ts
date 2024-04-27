import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PatientQuestionaire } from '../patient-form/model/PatientQuestionaire.model';

@Injectable({
  providedIn: 'root'
})
export class PatientServiveService {

  constructor(private http:HttpClient) { }

  getPatientQuestionaire():Observable<PatientQuestionaire>{
    return this.http.get<PatientQuestionaire>("../assets/questionnaire.json");
  }
}
