import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { IUserData } from '../../models';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent {
  @Input() errors: string[] = [];
  @Output() formSubmit: EventEmitter<IUserData> = new EventEmitter<IUserData>();

  userData: IUserData = {
    name: '',
    email: '',
    password: ''
  };

  buttonOptions: any = {
    text: 'Login',
    type: 'success',
    useSubmitBehavior: true
  };

  onFormSubmit(e) {
    e.preventDefault();
    this.formSubmit.emit(this.userData);
  }
}
