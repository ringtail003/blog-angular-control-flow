import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-blog',
  imports: [CommonModule],
  template: `
    <h1>&#64;for .. empty</h1>

    <ul>
      @for (post of posts; track $index) {
        <li>
          <span>{{ post.title }}</span>
          <button (click)="onRemove(post)">削除</button>
        </li>
      } @empty {
        エントリがありません
      }
    </ul>
  `,
  styles: [`
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `],
})
export class BlogComponent {
  posts: Post[] = [
    {
      id: 1,
      title: "Angular v17リリース情報キャッチアップ",
    },
    {
      id: 2,
      title: "JSカンファレンス2023・レポート",
    },
    {
      id: 3,
      title: "MSW v3.0のAPI変更まとめ",
    },
  ];

  onRemove(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }
}

type Post = {
  id: number;
  title: string;
};
