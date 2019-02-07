import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo/photo';

const uri = 'http://localhost:3000/';

@Injectable({providedIn: 'root'})
export class PhotoService{
    
    constructor(private httpClient: HttpClient){}

    listFromUser(usuario: string){
        return this.httpClient
        .get<Photo[]>(uri+usuario+"/photos")
        
    }

    listFromUserPaginated(usuario: string, page: number){
        const params = new HttpParams().append('page', page.toString());
        return this.httpClient
        .get<Photo[]>(uri+usuario+"/photos", {params});
        
    }
}