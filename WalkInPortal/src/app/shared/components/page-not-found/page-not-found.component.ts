import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h3>
      Page not found
    </h3>
  `,
  styles: [`
    h3{margin: 20px;} 
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
