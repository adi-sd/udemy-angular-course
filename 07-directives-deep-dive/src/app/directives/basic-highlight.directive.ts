import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[appBasicHighlight]", // Attribute selector
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        (this.elementRef.nativeElement as HTMLElement).style.backgroundColor =
            "orange";
    }
}
