import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appFontAwesomeIcon]'

})

export class FontAwesomeIconDirective implements OnInit {
  @Input()
  icon: string[];

    constructor(private renderer: Renderer2, private el: ElementRef) {

    }

    ngOnInit() {
      this.icon.map(iconClass =>  this.renderer.addClass(this.el.nativeElement, iconClass));
    }
}
