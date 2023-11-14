import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "99-course-project-app";

    loadedFeature = "recipes";

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }
}
