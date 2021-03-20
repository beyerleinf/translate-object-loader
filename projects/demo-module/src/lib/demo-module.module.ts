import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DemoModuleComponent } from './demo-module.component';

@NgModule({
  declarations: [DemoModuleComponent],
  imports: [TranslateModule.forChild()],
  exports: [DemoModuleComponent],
})
export class DemoModuleModule {}
