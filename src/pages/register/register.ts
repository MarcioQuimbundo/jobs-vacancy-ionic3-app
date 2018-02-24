import { Component, OnInit } from "@angular/core";
import { GeocoderProvider } from "../../app/providers/geocoder";
import { NavController } from "ionic-angular";
import { Address } from "../../app/models/address";
import { GalleryProvider } from "../../app/providers/gallery";
import { TabsPage } from "../tabs/tabs";
import { Company } from "../../app/models/company";

@Component({
    templateUrl: 'register.html'
})
export class RegisterPage implements OnInit{
    address: Address;
    company: Company;
    addressExists: boolean;
    picture: string;

    constructor(private navCtrl: NavController, 
                private _geoProvider: GeocoderProvider,
                private _gallery: GalleryProvider) {

    }

    ngOnInit() {
        this.address = new Address();
        this.company = new Company();
        this.addressExists = false;
    }

    getAddress() {
        this.addressExists = true;        
        this.address = this._geoProvider.getCurrentAddress();
    }

    resetAddress() {
        this.address = new Address();
        this.addressExists = false;
    }

    getPicture() {
        this._gallery.accessGallery().then(result => {
            this.picture = 'data:image/jpeg;base64,' + result;                 
        });
    }

    gotoTabsPage() {
        this.navCtrl.setRoot(TabsPage);
    }

}