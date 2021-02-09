import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  
  hasLink : Boolean;
  infoTemplateImg : String = 'https://acrobatadelcamino.com/wp-content/uploads/2012/03/postales-de-paris.jpg'
  emailDataForm = this.fb.group({
    day: ['', Validators.required],
    subject: ['', Validators.required],
    parragraph: ['', Validators.required],
    postcard: ['', Validators.required],
    link: ['', Validators.required]
  });
  
  constructor(private fb: FormBuilder) {
    this.hasLink = false;
  }

  ngOnInit(): void {
  }
  
  click() : void {
    alert('here will be launch a window to choose picture...')
  }
  
  onSubmit() : void {
    console.warn(this.emailDataForm.value);
  }
  
  ok() {
    alert(1)
  }
  
  useData(event) : void {
    console.log(event)
  }
  
}
