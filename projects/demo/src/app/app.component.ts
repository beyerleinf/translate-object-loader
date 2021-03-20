import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'demo';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.use('en');
  }

  de() {
    this.translate.use('de');
  }

  en() {
    this.translate.use('en');
  }
}
