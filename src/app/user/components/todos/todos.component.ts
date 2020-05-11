import { Component, Input } from '@angular/core';
import { ITodo } from '../../models';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  @Input() todos: ITodo[] = [];
}
