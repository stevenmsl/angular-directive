import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // The brackets ([]) make this an attribute selector.
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    // generally it's not a good idea to access
    // the DOM directly
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
