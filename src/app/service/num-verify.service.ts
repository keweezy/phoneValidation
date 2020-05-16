import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumVerifyService {

  apikey = '51885533bd855ae35f1a279c0ac94b65';
  // number = +15025191585;

  constructor(private http: HttpClient) { }

  getNumbers(id) {
    return this.http.get(`http://apilayer.net/api/validate?access_key=${this.apikey}&number=${id}`)
    .pipe(
      map(res => 
        {return res})
    );
  }
}
