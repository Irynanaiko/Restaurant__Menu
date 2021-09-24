import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Info } from '../interfaces/';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  infoData = new BehaviorSubject<Array<Info>>(null);

  private url = environment.url + '/info';

  constructor(private http: HttpClient) {
    this.getInfoData();
  }

  private getInfoData(): void {
    this.http.get<Array<Info>>(this.url).subscribe((data) => {
      this.infoData.next(data);
    });
  }

  updateRestaurantInfo(infoId: string, newInfo: Info): void {
    this.http
      .patch(`${this.url}/${infoId}`, newInfo)
      .subscribe(() => this.getInfoData());
  }
}
