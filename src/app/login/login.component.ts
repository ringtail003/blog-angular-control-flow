import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contents',
  imports: [],
  template: `
    <h1>&#64;if .. else</h1>

    @if (isSignIn) {
      <p>Welcome!</p>
      <button (click)="signOut()">Sign Out</button>
    } @else {
      <input type="text" value="user">
      <input type="password" value="password">
      <button (click)="signIn()">Sign In</button>
    }
  `,
  styles: [`
    p {
      font-size: 2rem;
    }
    button {
      margin: 1rem 0;
    }
  `]
})
export class LoginComponent {
  isSignIn = false;

  signIn() {
    this.isSignIn = true;
  }

  signOut() {
    this.isSignIn = false;
  }
}
