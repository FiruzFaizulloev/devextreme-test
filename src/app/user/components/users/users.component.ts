import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { IUser } from '../../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input() users: IUser[] = [];
  @Output() userSelected: EventEmitter<IUser> = new EventEmitter<IUser>();

  onUserClick(e: any) {
    this.userSelected.emit(e.key);
  }

}
