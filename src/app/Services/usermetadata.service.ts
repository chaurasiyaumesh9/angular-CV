import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/filter";



@Injectable()
export class UserMetaDataService {

  private _url: string = "assets/data.json";
    constructor(private _http: Http) {}

    getMetaData() {
        return this._http.get(this._url).map((response: Response) => {
            let _response = response.json();
            return _response;
        });
    }
}
