import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
  <nav>
    <a href="">home</a>
    <a routerLink="login">login</a>
    <a routerLink="blog">blog</a>
    <a routerLink="plan">plan</a>
    <a routerLink="user">user</a>
  </nav>

  <router-outlet></router-outlet>
  `,
  styles: [
    `nav {
      display: flex;
      gap: 1rem;
      padding: 2rem 0;
    }`
  ]
})
export class AppComponent {
}
