import { Component, OnInit } from '@angular/core';
import { PatientServiveService } from '../services/patient-servive.service';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PatientQuestionaire } from './model/PatientQuestionaire.model';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  form: FormGroup = this.fb.group({ patientInfo: this.fb.array([]) });
  questionaire!: PatientQuestionaire;

  constructor(private patientService: PatientServiveService, private fb:FormBuilder) { }

  //we are storing the questionaire and loading form controls
  ngOnInit(): void {
    
    this.patientService.getPatientQuestionaire()
                       .subscribe(response=>{
                                              this.questionaire=response;
                                              response.item.map(value=>this.submitPatientInfo())
                                            });
  }

  //load form controls
  submitPatientInfo() {
    const input = this.fb.control("", Validators.required);
    this.patientInfo.push(input);
  }

  addToList() {
    length = (<FormControl[]>((<FormArray>this.form.get("patientInfo")).controls)).length;
    //Store the details passed in questionaire object to be read on view
    while(length>0){
      --length;
      if(this.questionaire.item[length].selectedValue== undefined) this.questionaire.item[length].selectedValue=[];

      const valueSubmitted =(<FormControl[]>((<FormArray>this.form.get("patientInfo")).controls))[length].value;
      if(valueSubmitted!=null){
        this.questionaire.item[length].selectedValue.push(valueSubmitted);
      }
    }

    //clear the form after adding the details
    this.clearTheForm();
  }

  clearTheForm() {
    this.form.reset();
  }

  //form array which contains all form controls
  get patientInfo() {
    return this.form.controls["patientInfo"] as FormArray;
  }

}
