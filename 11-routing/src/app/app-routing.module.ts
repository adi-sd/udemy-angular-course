import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { EditServerComponent } from "./components/servers/edit-server/edit-server.component";
import { ServerComponent } from "./components/servers/server/server.component";
import { ServersComponent } from "./components/servers/servers.component";
import { UserComponent } from "./components/users/user/user.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { CanDeactivateGuard } from "./services/can-deactivate-guard.service";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { ServerResolver } from "./services/server-resolver.service";

const appRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "users",
        component: UsersComponent,
        children: [
            {
                path: ":id/:name",
                component: UserComponent,
            },
        ],
    },
    {
        path: "servers",
        component: ServersComponent,
        children: [
            {
                path: ":id",
                component: ServerComponent,
                resolve: {
                    server: ServerResolver,
                },
            },
            {
                path: ":id/edit",
                component: EditServerComponent,
                canDeactivate: [CanDeactivateGuard],
            },
        ],
        //canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
    },
    {
        path: "not-found",
        component: PageNotFoundComponent,
    },
    {
        path: "got-error",
        component: ErrorPageComponent,
        data: {
            message: "The Requested Page Not Found!",
        },
    },
    {
        path: "**",
        redirectTo: "/not-found",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
