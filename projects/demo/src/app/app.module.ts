import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {DemoModuleModule, firstModuleTranslations, secondModuleTranslations} from 'demo-module';
import {Library, TranslateObjectLoader} from 'translate-object-loader';

import {AppComponent} from './app.component';

Library.add(firstModuleTranslations, secondModuleTranslations);

console.log(Library.get('de'));
console.log(Library.get('en'));


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateObjectLoader,
      }
    }),
    DemoModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
