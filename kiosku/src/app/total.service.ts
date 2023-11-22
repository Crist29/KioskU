import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalService {
  public totalSource = new BehaviorSubject<number>(0);
  total$ = this.totalSource.asObservable();

  updateTotal(total: number) {
    this.totalSource.next(total);
  }
}
