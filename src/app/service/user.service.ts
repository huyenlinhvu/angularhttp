import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  readonly moreParams = ['test', 'test2'];

  constructor(private http: HttpClient) { } 

  // getUsers(): Observable<HttpEvent<User[]>> {    
  //   return this.http.get<User[]>(`${this.apiUrl}/users`, {observe: 'events', reportProgress: true});
  // }

  getUsers(): Observable<User[]> {    
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }

  uploadFiles(formData: FormData): Observable<HttpEvent<string[]>> {    
    return this.http.post<string[]>(`http://localhost:9000/file/upload`, formData, {observe: 'events', reportProgress: true});
  }

}
