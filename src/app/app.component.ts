import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public opened: boolean = false;

  public toggleSidebar() {
    this.opened = !this.opened;
  }
}
