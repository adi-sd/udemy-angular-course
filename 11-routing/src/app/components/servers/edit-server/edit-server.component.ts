import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ServersService } from "../../../services/servers.service";
import { CanComponentDeactivateGuard } from "src/app/services/can-deactivate-guard.service";
import { Observable } from "rxjs";

@Component({
    selector: "app-edit-server",
    templateUrl: "./edit-server.component.html",
    styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent
    implements OnInit, CanComponentDeactivateGuard
{
    server: { id: number; name: string; status: string };
    serverName = "";
    serverStatus = "";
    allowEdit = false;
    changedServer = false;

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        console.log(this.route.snapshot.queryParams);
        console.log(this.route.snapshot.fragment);
        this.route.queryParams.subscribe((queryParams: Params) => {
            this.allowEdit = queryParams["allowEdit"] === "1" ? true : false;
        });
        this.route.fragment.subscribe();
        const id = +this.route.snapshot.params["id"];
        this.server = this.serversService.getServer(id);
        this.route.params.subscribe((params: Params) => {
            this.server = this.serversService.getServer(+params["id"]);
        });
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    }

    onUpdateServer() {
        this.serversService.updateServer(this.server.id, {
            name: this.serverName,
            status: this.serverStatus,
        });
        this.changedServer = true;
        this.router.navigate(["../"], { relativeTo: this.route });
    }

    canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.allowEdit) {
            return true;
        }
        if (
            this.serverName !== this.server.name ||
            (this.serverStatus !== this.server.status && this.changedServer)
        ) {
            return confirm(
                "Do you want to discard the server changes you made?"
            );
        } else {
            return true;
        }
    }
}
