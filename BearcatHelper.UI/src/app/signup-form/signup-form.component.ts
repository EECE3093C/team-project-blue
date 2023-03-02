import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  @Output() formEmit: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  switchToLogin() {
    this.formEmit.emit(true);
  }
}
