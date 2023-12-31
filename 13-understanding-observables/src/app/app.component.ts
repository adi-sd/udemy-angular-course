import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
    userActivated = false;
    private activatedSubscription: Subscription;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.activatedSubscription =
            this.userService.activatedEventEmitter.subscribe((didActivate) => {
                this.userActivated = didActivate;
            });
    }

    ngOnDestroy(): void {
        this.activatedSubscription.unsubscribe();
    }
}
