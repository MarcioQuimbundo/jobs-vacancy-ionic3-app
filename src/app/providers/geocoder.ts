import { Injectable } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation"
import { Address } from "../models/address";
import { LoadingController } from "ionic-angular";

declare var google: any;

@Injectable()
export class GeocoderProvider {
    addressComponents;
    address: Address = new Address();
    
    constructor(private _geo: Geolocation, private _loadingCtrl: LoadingController) {

    }

    getCurrentAddress(): any {
        let loading = this._loadingCtrl.create({
            content: 'Buscando seu endereço...'
        });

        loading.present();
        this._geo.getCurrentPosition().then(result => {
            let lat = result.coords.latitude;
            let lng = result.coords.longitude;

            let geocoder = new google.maps.Geocoder;
            let latlng = new google.maps.LatLng(lat, lng);

            geocoder.geocode({'latLng': latlng}, (results, status) => {
                if(status !== google.maps.GeocoderStatus.OK) {
                    //todo alert
                    console.log(status);
                }

                if(status == google.maps.GeocoderStatus.OK) {
                    this.addressComponents = results[0].address_components;
                    this.makeAddress(this.addressComponents);
                    loading.dismiss();
                }
            })
        });   
        return this.address;
    }

    makeAddress(components) {
        this.address.number = components[0].long_name;
        this.address.street = components[1].long_name;
        this.address.district = components[2].long_name;
        this.address.city = components[3].long_name;
        this.address.state = components[5].long_name;  
        
        console.log(this.address);
    }
}