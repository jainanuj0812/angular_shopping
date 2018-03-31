import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    selectedComp: String = 'recipe';
    pageSelected(page) {
        this.selectedComp = page.comp;
        console.log(this.selectedComp);
    }
}
