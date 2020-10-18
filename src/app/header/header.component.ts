import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { } //constructor is used only, to inject services.
  //injection is different from having a new instance of a ServiceClass
  //injection dosent CREATE a new instance, it just declares that http is of class type HttpClient
  //hence, if we make any changes in the HttpClient class (eg. pushing to the mesage string array), from any other component, that WILL BE REFLECTED here too! 
  //since this is NOT an INSTANCE.

  ngOnInit(): void {
  }

}
