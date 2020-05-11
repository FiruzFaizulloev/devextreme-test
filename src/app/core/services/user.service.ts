import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from './token.service';

import { apiPaths } from '../api.path';
import {
  ITodo,
  IUser
} from '../../user/models';

@Injectable()
export class UserService {

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(apiPaths().users);
  }

  getTodos(id: number): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(apiPaths(id).todos);
  }

  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}
}
