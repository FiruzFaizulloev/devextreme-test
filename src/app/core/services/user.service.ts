import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiPaths } from '../api.path';
import {
  ITodo,
  IUser
} from '../../user/models';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(apiPaths().users);
  }

  getTodos(id: number): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(apiPaths(id).todos)
      .pipe(
        map(todos => {
          /*todos.forEach(todo => todo.completed = +todo.completed);
          console.log(todos);*/
          return todos;
        })
      );
  }

  constructor(private http: HttpClient) { }
}
