import { Component } from '@angular/core';

@Component({
  selector: 'app-user-auth-container',
  templateUrl: './user-auth-container.component.html',
  styleUrls: ['./user-auth-container.component.css']
})
export class UserAuthContainerComponent {

  loginDisplay = true;

  constructor() {}

  ngOnInit(): void {
  }

  signupEvent(event: any) {
    this.loginDisplay = event;
  }

}
