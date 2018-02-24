import { Component } from '@angular/core';

import { VacancyListPage } from '../vacancy-list/vacancy-list';
import { ContactPage } from '../contact/contact';
import { VancancyPage } from '../vacancy/vancancy';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VancancyPage;
  tab2Root = VacancyListPage;
  tab3Root = ContactPage;
  

  constructor(private _alert: AlertController) {

  }

  ionViewDidLoad() {
    let alert = this._alert.create({
        title: 'Sucesso!',
        subTitle: 'Você está logado!',
        buttons: ['OK']
    });
    alert.present();
  }
}
