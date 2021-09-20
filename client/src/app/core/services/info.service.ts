import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Info } from '../interfaces/';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  // infoData = new BehaviorSubject<Array<Info>>(null);

  private url = environment.url + '/info';

  constructor(private http: HttpClient) {
    // this.getInfoData();
  }

  // getInfoData(): void {
  //   this.http.get<Array<Info>>(this.url).subscribe((data) => {
  //     this.infoData.next(data);
  //     console.log(data);
  //   });
  // }

  getInfoData(): Observable<Array<Info>> {
    return this.http.get<Array<Info>>(this.url);
  }
}