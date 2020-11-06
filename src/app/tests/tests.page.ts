import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_STATE, AppState } from '../app-state.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {
  selectedYear: string;
  tab: string = "upcoming_test";
  challenges: Array<{ name: string, description: string, subject: string, year: string }>;
  
  constructor(@Inject(APP_STATE) public appState: AppState, private route: Router, private screenOrientation: ScreenOrientation) { 
    this.challenges = [
      {name: 'learn-to-count-to-three', description: "Learn to count - up to 3", subject: 'counting-to-three', year: 'reception'}, 
      {name: 'count-objects-up-to-three', description: "Count objects - up to 3", subject: 'counting-to-three', year: 'reception'},
      {name: 'count-dots-up-to-three', description: "Count dots - up to 3", subject: 'counting-to-three', year: 'reception'},
      {name: 'count-shapes-up-to-three', description: "Count shapes - up to 3", subject: 'counting-to-three', year: 'reception'},
      {name: 'count-on-ten-frames-up-to-three', description: "Count on ten frames - up to 3", subject: 'counting-to-three', year: 'reception'},
      {name: 'show-numbers-on-ten-frames-up-to-three', description: "Show numbers on ten frames - up to 3", subject: 'counting-to-three', year: 'reception'},
      {name: 'represent-numbers-up-to-three', description: "Represent numbers - up to 3", subject: 'counting-to-three', year: 'reception'}
    ]
  }

  ngOnInit() {
    // this.selectedYear = this.appState.data.get("studentYear").toString();
    this.selectedYear = history.state.data.name;
  }

 test_result() {
    this.route.navigate(['./test-result']);
  } 
 question() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.route.navigate(['./question']);
  } 
}
