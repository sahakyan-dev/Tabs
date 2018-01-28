import {Component} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  tabs = [];
  tabNumber: any;
  constructor(private _data: DataService) {
    this._data.tabN.subscribe(res => this.tabNumber = res);
    this._data.changeTabN(this.tabNumber);
    this._data.tab.subscribe(res => this.tabs = res);
    this._data.changeTab(this.tabs);
  }

}
