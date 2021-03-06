/**
 * Created by guanyj on  2018/9/4
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import {ROUTER_CONFIG} from "./login.routes";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        RouterModule.forChild(ROUTER_CONFIG)
    ],
    declarations: [
        LoginComponent
    ]
})

export class LoginModule { }
