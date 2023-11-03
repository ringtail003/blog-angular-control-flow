import { Component } from '@angular/core';
import { loadingComponent } from './loading.component';
import { User, UserListComponent } from './user-list.component';

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [loadingComponent, UserListComponent],
  template: `
    <h1>&#64;defer</h1>

    <button #start (click)="onFetch()">読み込み</button>

    <div>
      @defer (on interaction(start)) {
        @defer (when loaded) {
          <app-user-list [users]="users"></app-user-list>
        } @placeholder {
          <app-loading />
        }
      } @placeholder {
        データが読み込まれていません
      }
    </div>
  `,
  styles: [`
    button {
      display: block;
      margin-bottom: 1rem;
    }
  `],
})
export class UserComponent {
  loaded = false;
  users: User[] = [];

  onFetch() {
    setTimeout(() => {
      this.loaded = true;
      this.users = [
        { id: 1, name: 'ユーザー1', role: '管理者' },
        { id: 2, name: 'ユーザー2', role: "一般" },
        { id: 3, name: 'ユーザー3', role: "一般" },
      ];

    }, 3000);
  }
}
