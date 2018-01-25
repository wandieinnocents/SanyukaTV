import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

// import { AboutPage } from '../about/about';
// import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { ProgramPage } from '../program/program';
import { NewsPage } from '../news/news';
import { ShowPage } from '../show/show';
import { StoryPage } from '../story/story';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = ProgramPage;
  tab3Root: any = NewsPage;
  tab4Root: any = ShowPage;
  tab5Root: any = StoryPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
