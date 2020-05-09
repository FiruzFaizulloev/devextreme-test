import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../../core/services/user.service';
import { ITodo, IUser } from '../../models';

@Component({
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserContainerComponent {
  users$: Observable<IUser[]> = this.userService.getUsers();
  todos$: Observable<ITodo[]>;

  getTodos(user: IUser) {
    this.todos$ = this.userService.getTodos(user.id);
  }

  constructor(private userService: UserService) {
  }
}
