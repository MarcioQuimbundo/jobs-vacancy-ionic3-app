import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Vacancy } from '../../app/models/vacancy';

@Component({
  templateUrl: 'vacancy-list.html'
})
export class VacancyListPage implements OnInit{
  vacancies: Array<Vacancy>;
  showVacancies: boolean = false;
  showCleanButton: boolean = false;

  constructor(private _navCtrl: NavController,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.vacancies = [
      new Vacancy(1,
        "Programador full stack",
        "Descrição simples sobre funcões do cargo, empresa etc.",
        "CLT",
        "Transporte, Alimentação etc.",
        "7000",
        "Porto Alegre",
        "RS"),
      new Vacancy(2,
        "Programador back-end",
        "Descrição simples sobre funcões do cargo, empresa etc.",
        "CLT",
        "Plano Médico, Alimentação e Transporte",
        "4000",
        "Campo Grande",
        "MS"),
      new Vacancy(3,
        "Programador front-end",
        "Descrição simples sobre funcões do cargo, empresa etc.",
        "Freelancer",
        "Alimentação",
        "9000",
        "São Paulo",
        "SP"),
      new Vacancy(4,
        "Especialista em Banco de dados",
        "Descrição simples sobre funcões do cargo, empresa etc.",
        "PJ",
        "Plano Médico, Alimentação etc.",
        "6000",
        "Rio de Janeiro",
        "RJ"),  
                
    ];

  }

  findVacancies() {
    let loading = this._loadingCtrl.create({
      content: 'Buscando vagas...'
    });
    loading.present();
    //simulando uma busca no banco de dados
    setTimeout(() => {
      this.showVacancies = true;
      this.showCleanButton = true;
      loading.dismiss();
    }, 1500)  
  }

  cleanVacancies() {
    this.vacancies = [];
    this.showCleanButton = false;
  }

  showVacancyInfo(vacancy: Vacancy) {
    let findedVacancy: Vacancy = this.vacancies.find((eachVacancy) => eachVacancy.id == vacancy.id);
    let alert = this._alertCtrl.create({
      title: 'Detalhes:',
      subTitle: `<p><b>Descrição</b>: ${findedVacancy.description}</p>
                 <p><b>Benefícios</b>: ${findedVacancy.benefits}</p> 
                 <p><b>Regime:</b> ${findedVacancy.policy}</p>`,
      buttons: ['OK']
    })

    alert.present();
  }

}
