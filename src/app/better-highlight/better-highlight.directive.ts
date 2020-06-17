import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

/*
    By default, Angular renders a template into DOM. 
    You can use custom rendering (Renderer2) to intercept rendering
    calls, or to render to something other than DOM
*/

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  // how you can access the properties of the host elements
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }
  // Use HostListener to make this directive more reactive
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
  }
}
