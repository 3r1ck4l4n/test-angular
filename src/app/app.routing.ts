import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ErrorComponent} from "./components/error/error.component";
import {TwittGridComponent} from "./components/twitt-grid/twitt-grid.component";

const appRouting:Routes =[
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"twitsSearch", component:TwittGridComponent},
  {path:"**", component:ErrorComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRouting);
