import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';


@NgModule({ 
    imports:[
        PhotoModule,
        PhotoListModule,
        HttpClientModule, 
        CommonModule
    ]
})
export class PhotosModule{

}