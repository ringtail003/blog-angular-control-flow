import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-plan',
  imports: [],
  styles: [`
    label {
      display: block;
      margin-bottom: .5rem;
    }
    p {
      font-size: 2rem;
    }
  `],
  template: `
    <h1>&#64;switch</h1>

    <label>
      <input type="radio" name="plan" [value]="'trial'" (change)="onSwitch('trial')">
      <span>Trial</span>
    </label>

    <label>
      <input type="radio" name="plan" [value]="'pro'" (change)="onSwitch('pro')">
      <span>Pro</span>
    </label>

    <label>
      <input type="radio" name="plan" [value]="'enterprise'" (change)="onSwitch('enterprise')">
      <span>Enterprise</span>
    </label>

    @switch (plan) {
      @case ('trial') {
        <p>トライアル（¥0）</p>
        <span>30日間すべての機能が試せます。</span>
      }
      @case ('pro') {
        <p>Pro版（¥10,000）</p>
        <span>チームメンバーは5人までに限定されます。</span>
      }
      @case ('enterprise') {
        <p>Enterprise版（¥50,000）</p>
        <span>チームメンバーの上限はありません。</span>
      }
      @default {
        <p></p>
        <span>プランを選択してください</span>
      }
    }
  `
})
export class PlanComponent {
  plan = "";

  onSwitch(plan: string) {
    this.plan = plan;
  }
}
