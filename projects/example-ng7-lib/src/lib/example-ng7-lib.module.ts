import { NgModule } from '@angular/core';
import { ExampleNg7LibComponent } from './example-ng7-lib.component';
import { FooComponent } from './foo/foo.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ExampleNg7LibComponent, FooComponent, AccordionComponent],
  imports: [ NgbModule ],
  exports: [ExampleNg7LibComponent, FooComponent, AccordionComponent]
})
export class ExampleNg7LibModule { }
