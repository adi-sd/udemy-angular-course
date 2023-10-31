import { Component } from "@angular/core";

@Component({
    selector: "app-servers",
    templateUrl: "./servers.component.html",
    styleUrls: ["./servers.component.css"],
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = "No server was created!";
    serverName = "Test Server";

    constructor() {
        setTimeout(() => {
            console.log("After 2 second!");
            this.allowNewServer = true;
        }, 2000);
    }

    onCreateServer() {
        this.serverCreationStatus =
            "Server was created! Name is - " + this.serverName;
        console.log(this.serverCreationStatus);
    }

    onUpdateServerName(event: Event) {
        this.serverName = (event.target as HTMLInputElement).value;
    }
}
