import {
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewChild,
} from "@angular/core";

@Component({
    selector: "app-cockpit",
    templateUrl: "./cockpit.component.html",
    styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent {
    @Output()
    serverCreated = new EventEmitter<{
        serverName: string;
        serverContent: string;
    }>();
    @Output()
    blueprintCreated = new EventEmitter<{
        serverName: string;
        serverContent: string;
    }>();
    // newServerName = '';
    //newServerContent = '';

    @ViewChild("serverContentInput") serverContentInput: ElementRef;

    onAddServer(inputServerName: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: inputServerName.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }

    onAddBlueprint(inputBlueprintName: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: inputBlueprintName.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }
}
