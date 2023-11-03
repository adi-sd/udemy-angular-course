import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Renderer2,
} from "@angular/core";

@Directive({
    selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
    @Input()
    defaultColor: string = "grey";

    @Input()
    highlightColor: string = "gold";

    @HostBinding("style.backgroundColor")
    backGroundColor: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        this.backGroundColor = "black";
        this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    }

    @HostListener("mouseenter")
    mouseover(eventData: Event) {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            "background-color",
            this.highlightColor
        );
        this.renderer.setStyle(this.elementRef.nativeElement, "color", "black");
    }

    @HostListener("mouseleave")
    mouseleave(eventData: Event) {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            "background-color",
            this.defaultColor
        );
        this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    }
}
