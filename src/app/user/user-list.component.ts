import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [],
  template: `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
        <tr>
      </thead>

      <tbody>
        @for (user of users; track $index) {
          <tr>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.role }}</td>
          <tr>
        }
      </tbody>
    </table>
  `
})
export class UserListComponent {
  @Input() users: User[] = [];
}

export type User = {
  id: number;
  name: string;
  role: string;
};
