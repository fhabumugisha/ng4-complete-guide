import { Directive, Renderer2, ElementRef, OnInit, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective  {
  @HostBinding('class.show') isOpen = false;
  @HostListener('click')  toggleShow() {
    console.log('show menu');
    this.isOpen = !this.isOpen;
    const menu = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen ) {
      this.renderer.addClass(menu, 'show');
    }else {
      this.renderer.removeClass(menu, 'show');
    }
  }

  constructor(private el: ElementRef,  private renderer: Renderer2) {}
}