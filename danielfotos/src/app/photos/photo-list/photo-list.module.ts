import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { PhotosComponent } from './photos/photos.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from 'src/app/shared/directives/dark-on-hover/dark-on-hover.module';

@NgModule({
    declarations: [
        LoadingButtonComponent,
        PhotosComponent,
        FilterByDescriptionPipe,
        PhotoListComponent,
        SearchComponent
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        CardModule,
        DarkOnHoverModule
     ]
})
export class PhotoListModule{

}