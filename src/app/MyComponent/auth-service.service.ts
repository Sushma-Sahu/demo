import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditForm, RegisterForm} from '../Model/RegisterForm.model'
import { LoginForm } from '../Model/LoginFrom.modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }
beseServerUrl = "https://localhost:44373/api/Register/";

  registerUser( RegisterForm : RegisterForm ){
    // debugger
    return this.http.post(this.beseServerUrl, RegisterForm ,{responseType:'text'});
   // return this.http.post<RegisterForm>(this.beseServerUrl, RegisterForm ,{responseType:'text'});

    //return this.http.post<Card>(this.baseUrl,card,{headers: this.headers});
  }
  LoginUser( LoginForm : any ) : Observable<any>{
    return this.http.post<any>(this.beseServerUrl + 'LoginUser', LoginForm
    );
   // return this.http.post<RegisterForm>(this.beseServerUrl, RegisterForm ,{responseType:'text'});

    //return this.http.post<Card>(this.baseUrl,card,{headers: this.headers});
  }
  GetAllData() : Observable<any>{
    let token = localStorage.getItem('token')
    let headers = new HttpHeaders()
    .set("Authorization",`bearer ${token}`)
    return this.http.get<any>(this.beseServerUrl
    ,{headers:headers});
  }
  DeleteDataById(id: number): Observable<any>{
    return this.http.delete(this.beseServerUrl + id ,{responseType:'text'}
    );
  }
  GetUserById(id: number) : Observable<any>{ 
    return this.http.get<EditForm>(this.beseServerUrl + id );
  }
  updateUser(editForms: object){
    return this.http.put(this.beseServerUrl + "UpdateUser" ,editForms,{responseType:'text'});
  }
  uploadProfileImage(formData: FormData) : Observable<any>{
    return this.http.post<any>(this.beseServerUrl + "Upload", formData);
  }
  getCountory() : Observable<any>{
    return this.http.get<any>("https://api.first.org/data/v1/countries");
  }
}
