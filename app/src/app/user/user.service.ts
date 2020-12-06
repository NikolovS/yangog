import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {

  currentUser: IUser | null | undefined;

  get isLogged(): boolean { return !!this.currentUser; }
  get isAdmin(): boolean {
    if (this.isLogged) {
      return !!this.currentUser?.isAdmin;
    }
    return false;
  }

  constructor(private http: HttpClient) { }


  getCurrentUserProfile(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Cache-Control', 'no-cache')
      .set('Pragma', 'no-cache');
    return this.http.get<IUser>(`${apiUrl}/auth/me`, { withCredentials: true, headers }).pipe(
      tap((user: IUser) => this.currentUser = user),
      catchError(() => { this.currentUser = null; return of(null); }));
  }

  login(data: any): Observable<any> {
    return this.http.post<IUser>(`${apiUrl}/auth/login`, data, { withCredentials: true }).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

  register(data: any): Observable<any> {
    return this.http.post<IUser>(`${apiUrl}/auth/register`, data, { withCredentials: true }).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${apiUrl}/auth/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.currentUser = null)
    );

  }

  updateProfile(data: any): Observable<IUser> {
    return this.http.put<IUser>(`${apiUrl}/users`, data, { withCredentials: true }).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

}
