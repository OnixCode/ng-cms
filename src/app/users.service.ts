import { Injectable } from '@angular/core';

//Import HTTP libs for API calls
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Import Observable
import { Observable } from 'rxjs';

//Import the User object
import { User } from './user';

//Set outbound HTTP headers to JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable()
export class UsersService{
  //Set up the URL
  private url: string ='http://loc.mean.example.com/api/users';

  //Call the HttpClient in the Constructor
  constructor(private http: HttpClient) {}

  //Set up a simple observable
  getUsers(): Observable<User>{
    return this.http.get<User>(this.url)
  }
}
