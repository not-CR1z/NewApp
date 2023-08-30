import { Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { dictionary } from "../models/dictionary";

@Injectable()
export class DictionaryService {
    constructor(private cookieService: CookieService) {

    }

    get dictionary(): dictionary {
        //let data = this.cookieService.get('exam-cookie');
        let data = localStorage.getItem('dictionary');
        if(data != null){
            let dataDict = JSON.parse(data);
            return dataDict as dictionary;
        }
        return new dictionary();
        
    }

    set dictionary(newValue: dictionary) {
        //this.cookieService.set('exam-cookie', JSON.stringify(newValue));
        localStorage.setItem('dictionary', JSON.stringify(newValue));
    }

}