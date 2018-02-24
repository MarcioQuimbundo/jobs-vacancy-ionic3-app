import { Component, OnInit } from "@angular/core";
import { NavController, ToastController, IonicPage } from "ionic-angular";
import { Vacancy } from "../../app/models/vacancy";

@Component({
    templateUrl: 'vacancy.html'
})
export class VancancyPage implements OnInit {
    vacancy: Vacancy;
    constructor(private _toast: ToastController, private _navCtrl: NavController) {
        
    }
    
    ngOnInit() {
        this.vacancy = new Vacancy();
    }

    saveVacancy() {
        let toast = this._toast.create({
            message: 'Vaga registrada com sucesso!',
            showCloseButton: true,
            duration: 2000,
            closeButtonText: 'OK'
        });
        toast.present();
        this.vacancy = new Vacancy(0, '', '', '', '', '', '', '');
    }

}