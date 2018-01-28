import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private tabs = new BehaviorSubject<any>([['Title 1', 'selected'], ['Title 2', 'active']]);
  tab = this.tabs.asObservable();
  private tabNumber = new BehaviorSubject<any>(2);
  tabN = this.tabNumber.asObservable();
  private allTabsHidden = new BehaviorSubject<any>(false);
  hiddenTab = this.allTabsHidden.asObservable();
  constructor() { }

  changeTab(tab) {
    this.tabs.next(tab);
  }
  changeTabN(tabN) {
    this.tabNumber.next(tabN);
  }
  changeHiddenTab(hiddenTab) {
    this.allTabsHidden.next(hiddenTab);
  }
}
