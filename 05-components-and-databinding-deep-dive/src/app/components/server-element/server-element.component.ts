import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChange,
    SimpleChanges,
} from "@angular/core";

@Component({
    selector: "app-server-element",
    templateUrl: "./server-element.component.html",
    styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    @Input()
    element: {
        type: string;
        name: string;
        content: string;
    };

    constructor() {
        console.log("Constructor Called");
    }

    ngAfterViewInit(): void {
        console.log("NgAfterViewInit called");
    }

    ngAfterViewChecked(): void {
        console.log("NgAfterViewChecked called");
    }

    ngAfterContentChecked(): void {
        console.log("NgAfterContentChecked called");
    }

    ngAfterContentInit(): void {
        console.log("NgAfterContentInit called");
    }

    ngDoCheck(): void {
        console.log("NgDoCheck called");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("NgOnChanges called");
        //console.log(SimpleChange);
    }

    ngOnInit() {
        console.log("NgOnInit Called");
    }

    ngOnDestroy(): void {
        console.log("NgOnDestroy Called");
    }
}
