import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:"form", component: FormComponent}, //i guess this will create a new instantiatin of component ////use services ALL THE TIME to store data. NO use of storing in components, there will be new instances always. 
  {path: "contact", component: ContactComponent},
  {path:"**", redirectTo:"/contact", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
