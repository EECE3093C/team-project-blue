import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output()
  formEmit: EventEmitter<boolean> = new EventEmitter();

  loginDisplay: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  switchToSignup() {
    this.formEmit.emit(false);
  }

}
