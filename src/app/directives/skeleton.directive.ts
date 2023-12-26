import { Directive, ElementRef, inject, Input, numberAttribute, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSkeleton]',
  standalone: true
})
export class SkeletonDirective implements OnInit{
  @Input({transform: numberAttribute, alias: "appSkeleton"}) widthPercent = 100;

  private _elRef = inject(ElementRef);
  private _renderer = inject(Renderer2);

  ngOnInit(): void {
    const parentElement: HTMLElement = this._renderer.parentNode(this._elRef.nativeElement);
    const parentStyles = window.getComputedStyle(parentElement);
    const parentLineHeight = parseFloat(parentStyles.lineHeight);
    const parentFontSize = parseFloat(parentStyles.fontSize);
    const parentMarginTop = parseFloat(parentStyles.marginTop);
    const parentMarginBottom = parseFloat(parentStyles.marginBottom);

    this._renderer.setStyle(this._elRef.nativeElement, 'width', this.widthPercent + '%');
    this._renderer.setStyle(this._elRef.nativeElement, 'height', parentFontSize + 'px');
    this._renderer.setStyle(this._elRef.nativeElement, 'margin-top', ((parentLineHeight - parentFontSize) / 2) + 'px');
    this._renderer.setStyle(this._elRef.nativeElement, 'margin-bottom', ((parentLineHeight - parentFontSize) / 2 ) + 'px');

  }
}
