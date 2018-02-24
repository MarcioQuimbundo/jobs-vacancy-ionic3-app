import { Camera, CameraOptions } from '@ionic-native/camera';
import { Injectable } from '@angular/core';

@Injectable()
export class GalleryProvider {
    constructor(private _camera: Camera){}

    accessGallery(): Promise<any> {
        const options: CameraOptions = {
            destinationType: this._camera.DestinationType.DATA_URL,
            mediaType: this._camera.MediaType.PICTURE,
            sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM,
            targetWidth: 150,
            targetHeight: 150,
            quality: 100
        };
        return this._camera.getPicture(options);
    }
}