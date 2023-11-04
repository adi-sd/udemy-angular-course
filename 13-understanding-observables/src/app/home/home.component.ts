import { Component, OnDestroy, OnInit } from "@angular/core";

import { Observable, Subscription, interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
    private intervalSubscription: Subscription;

    constructor() {}

    ngOnInit() {
        // this.intervalSubscription = interval(1000).subscribe((count) => {
        //     console.log(count);
        // });
        const customIntervalObservable = Observable.create((observer) => {
            let count = 0;
            setInterval(() => {
                if (count === 4) {
                    observer.complete();
                }
                if (count > 5) {
                    observer.error(new Error("Count Exceeded 5!"));
                }
                observer.next(count++);
            }, 1000);
        });

        let newObservable = customIntervalObservable.pipe(
            map((data: number) => {
                if (data % 2 === 0) {
                    return `Even Round - ${data}!`;
                } else {
                    return `Odd Round - ${data}!`;
                }
            })
        );

        this.intervalSubscription = newObservable.subscribe(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
                alert(error);
            },
            () => {
                console.log("Completed!");
            }
        );
    }

    ngOnDestroy(): void {
        this.intervalSubscription.unsubscribe();
    }
}
