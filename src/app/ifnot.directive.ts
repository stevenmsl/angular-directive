import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
})
export class IfNotDirective {
  // the property name needs to be the same as
  // the selector for the ngTemplate to perform
  // property binding correctly just like the *ngIf
  // structural directive.
  @Input() set appIfNot(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any> /* what to render */,
    private vcRef: ViewContainerRef /* where to render */
  ) {}
}
