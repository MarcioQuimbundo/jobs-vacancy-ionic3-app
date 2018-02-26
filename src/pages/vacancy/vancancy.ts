import { Component, OnInit } from "@angular/core";
import { NavController, ToastController, IonicPage } from "ionic-angular";
import { Vacancy } from "../../app/models/vacancy";

@Component({
    templateUrl: 'vacancy.html'
})
export class VancancyPage implements OnInit {
    vacancy: Vacancy;
    policyOptions: string[] = ['CLT', 'Freelancer', 'Estágio'];
    salaryOptions: string[] = ['1.000 a 2.000', '2.000 a 4.000', '4.000 a 7.000', '7.000 a 15.000'];

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