import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { TabsPage } from "../tabs/tabs";
import { Company } from "../../app/models/company";

@Component({
    templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
    
    company: Company;

    constructor(private navCtrl: NavController) { }

    ngOnInit() {
        this.company = new Company();
    }
    
    gotoRegisterPage() {
        this.navCtrl.push(RegisterPage);
    }

    login() {
        this.navCtrl.setRoot(TabsPage);
    }

}