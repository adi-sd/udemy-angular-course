import {
    ActivatedRouteSnapshot,
    CanDeactivate,
    RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivateGuard {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard
    implements CanDeactivate<CanComponentDeactivateGuard>
{
    canDeactivate(
        component: CanComponentDeactivateGuard,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}
