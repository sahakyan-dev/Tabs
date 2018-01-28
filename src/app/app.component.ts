import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    tabs = [];
    tabNumber: any;
    allTabsHidden: any;
    constructor(private _data: DataService) {
        this._data.tab.subscribe(res => this.tabs = res);
        this._data.changeTab(this.tabs);
        this._data.tabN.subscribe(res => this.tabNumber = res);
        this._data.changeTabN(this.tabNumber);
        this._data.hiddenTab.subscribe(res => this.allTabsHidden = res);
        this._data.changeHiddenTab(this.allTabsHidden);
    }
    addTab() {
        this.tabs.push(['Title ' + ++this.tabNumber, 'active']);
        if (this.tabs.length === 1) {
            this.tabs[0][1] = 'selected';
        }
        this.allTabsHidden = false;
        this._data.changeTab(this.tabs);
        this._data.changeTabN(this.tabNumber);
        this._data.changeHiddenTab(this.allTabsHidden);
    }
    toggle(i) {
        if (this.tabs[i][1] === 'selected') {
            this.tabs[i][1] = 'hidden'
            for (const tab of this.tabs) {
                if (tab[1] !== 'hidden') {
                    tab[1] = 'selected';
                    this.allTabsHidden = false;
                    break;
                }
            }
        } else {
            this.tabs[i][1] === 'hidden' ? this.tabs[i][1] = 'active' : this.tabs[i][1] = 'hidden';
            if (this.allTabsHidden) {
                this.tabs[i][1] = 'selected';
            }
        }
        for (const tab of this.tabs) {
            if (tab[1] !== 'hidden') {
                this.allTabsHidden = false;
                break;
            } else {
                this.allTabsHidden = true;
            }
        }
        this._data.changeTab(this.tabs);
        this._data.changeHiddenTab(this.allTabsHidden);
    }
}
