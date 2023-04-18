import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) {}

    private userUrl = 'http://localhost:8080/user';

    //returns an Observable of User[]
    public getUsers() {
      return this.http.get<User[]>(this.userUrl);
    }
  
    //http://localhost:8080/user/delete/5
    public deleteUser(user:User) {
      return this.http.delete(this.userUrl + "/delete/"+ user.id);
    }
  
    public createUser(user:User) {
      return this.http.post<User>(this.userUrl+ "/add", user);
    }
    
    public findById(id:number){
      return this.http.get<User>(this.userUrl+"/"+id);
    }

  }

