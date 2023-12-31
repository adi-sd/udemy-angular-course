import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    @ViewChild("f") signupForm: NgForm;
    answer: string;
    genders = ["male", "female"];
    user = {
        username: "",
        email: "",
        secreteQuestion: "",
        answer: "",
        gender: "",
    };
    submitted = false;

    suggestUserName() {
        const suggestedName = "Superuser";
        // this.signupForm.setValue({
        //     userData: {
        //         username: suggestedName,
        //         email: "",
        //     },
        //     secret: "pet",
        //     questionAnswer: "Alk h la",
        //     gender: "male",
        // });
        this.signupForm.form.patchValue({
            userData: {
                username: suggestedName,
            },
        });
    }

    // onSubmit(form: NgForm) {
    //     // console.log("Submitted", form);
    //     console.log(this.signupForm);
    // }

    onSubmit() {
        this.submitted = true;
        this.user.username = this.signupForm.value.userData.username;
        this.user.email = this.signupForm.value.userData.email;
        this.user.secreteQuestion = this.signupForm.value.secret;
        this.user.answer = this.signupForm.value.questionAnswer;
        this.user.gender = this.signupForm.value.gender;
    }

    onReset() {
        this.signupForm.reset();
    }
}
