import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit {
  tabs = [];
  tabNumber: any;
  allTabsHidden: any;
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.tab.subscribe(res => this.tabs = res);
    this._data.changeTab(this.tabs);
    this._data.tabN.subscribe(res => this.tabNumber = res);
    this._data.changeTabN(this.tabNumber);
    this._data.hiddenTab.subscribe(res => this.allTabsHidden = res);
    this._data.changeHiddenTab(this.allTabsHidden);
  }
  removeTab(i) {
    if (this.tabs[i][1] === 'selected') {
      this.tabs.splice(i, 1);
      for (const tab of this.tabs) {
        if (tab[1] !== 'hidden') {
          tab[1] = 'selected';
          break;
        }
      }
    } else {
      this.tabs.splice(i, 1);
    }
    if (this.tabs.length !== 0) {
      for (const tab of this.tabs) {
        if (tab[1] !== 'hidden') {
          this.allTabsHidden = false;
          break;
        } else {
          this.allTabsHidden = true;
        }
      }
    } else {
      this.allTabsHidden = true;
    }
    this._data.changeHiddenTab(this.allTabsHidden);
    this._data.changeTab(this.tabs);
  }
  changeToTab(i) {
    for (const tab of this.tabs) {
      if (tab[1] !== 'hidden') {
        tab[1] = 'active';
      }
    }
    this.tabs[i][1] = 'selected';
    this._data.changeTab(this.tabs);
  }

}
