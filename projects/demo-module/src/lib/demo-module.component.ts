import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lib-demo-module',
  template: `
    <p translate="key1"></p>
    <p translate="key2"></p>
    <p translate="key3"></p>
  `,
  styles: []
})
export class DemoModuleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
