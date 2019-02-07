import { Component, Input } from "@angular/core";

@Component({
    selector: 'dan-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.css']
})
export class PhotoComponent{
    @Input() url = ''
    @Input() description = ''
   
}