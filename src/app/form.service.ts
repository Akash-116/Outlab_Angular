import { Injectable } from '@angular/core';
import { Form } from './Form';
import { Observable, of} from 'rxjs'; 
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class FormService {

  forms:Form[];
  private inputURL ="https://cs251-outlab-6.herokuapp.com/initial_values/";
  private outputURL =" https://cs251-outlab-6.herokuapp.com/add_new_feedback/";
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http:HttpClient
  ) { }

  getForm(): Observable<Form> {
    return this.http.get<Form>(this.inputURL)
    .pipe(
      catchError(this.handleError<Form>("getForm()", {"name":"",email:"",feedback:"",comment:""})
      )
    );
  }
  //catch error has argument as a function! not a observable....hence, handleError 
  //must return a funciton... (a lambda function)
  

  addForm(form : Form): Observable<Form>{
    return this.http.post<Form>(this.outputURL, form, this.httpOptions)
  }


  handleError<T>(func:string, def?: T){
    //we will return a error handler function!!!! not any observable...... (args):<return type> => {statements;;;} is the lambda function.
    return (error:any):Observable<T> =>{

      //TODO: send the error to 
      console.error(error);

      //return value for our lambda function.
      return of(def as T);
    }
    ;
  }

}
