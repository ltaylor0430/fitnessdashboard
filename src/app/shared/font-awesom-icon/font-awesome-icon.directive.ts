import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-free-regular';
import * as faUser from '@fortawesome/fontawesome-free-regular/faUser';
import * as faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
@Directive({
  selector: '[appFontAwesomeIcon]'

})

export class FontAwesomeIconDirective implements OnInit {
  @Input()
  icon: string[];

    constructor(private renderer: Renderer2, private el: ElementRef) {
      fontawesome.library.add(faUser);
      fontawesome.library.add(faTwitter);
    }

    ngOnInit() {
      this.icon.map(iconClass =>  this.renderer.addClass(this.el.nativeElement, iconClass));
    }
}
