import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Form } from '../Form';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    name : new FormControl(''),
    email:new FormControl(''),
    feedback:new FormControl(''),
    comment:new FormControl(''),

  });
  
  constructor(private formService: FormService ) { } //injection dosen't create a new instance of FormService Class.

  ngOnInit(): void {
    this.formService.getForm()
    .subscribe(
      form => this.form.setValue(form)
    );
  };

  onSubmit(){
   this.formService.addForm(this.form.value as Form)
   .subscribe(
    response => alert("Form submission successful :)"), //alert is standard funciton.
    error => alert("Form submission failed :(")
   )
  };

  Def2():void{
    this.form.setValue({
      name:"Akash",
      email:"akash.gillella@gmail.com", 
      feedback:"Great",
      comment:"Look, if you had one shot, or one opportunity to sieze everything you ever wanted, or one moment, would you capture it, or just let it slip?"
    });
  }

}
