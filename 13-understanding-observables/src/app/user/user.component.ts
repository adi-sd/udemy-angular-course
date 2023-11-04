import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
    id: number;
    isUserActivated = false;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
        });
    }

    onActivate() {
        //this.userService.activatedEventEmitter.emit(true);
        this.userService.activatedEventEmitter.next(true);
        this.isUserActivated = true;
    }

    onDeactivate() {
        this.userService.activatedEventEmitter.next(false);
        this.isUserActivated = false;
    }
}
