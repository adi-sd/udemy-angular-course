import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
    logNewAccount(name: string, status: string) {
        console.log(
            `A new server is added; name - ${name}, status - ${status}`
        );
    }

    logStatusChange(status: string) {
        console.log("A server status changed, new status: " + status);
    }
}
