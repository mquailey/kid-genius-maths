import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  subjects: Array<{ code: string, name: string }>;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router ) { 
    this.subjects = [{
      code: 'counting-to-three',
      name: 'Counting to 3'
    }, {
      code: 'counting-to-five',
      name: 'Counting to 5'
    }, {
      code: 'count-to-ten',
      name: 'Counting to 10'
    }, {
      code: 'count-to-twenty',
      name: 'Counting to 20'
    }];
  }

  notification() {
    this.route.navigate(['./notification']);
  }
  change_language() {
    this.route.navigate(['./change-language']);
  }
  my_profile() {
    this.route.navigate(['./my-profile']);
  }
  syllabus() {
    this.route.navigate(['./syllabus']);
  }
  calender() {
    this.route.navigate(['./calender']);
  }
  tests() {
    this.route.navigate(['./tests']);
  }
  insight() {
    this.route.navigate(['./insight']);
  }
  about_academy() {
    this.route.navigate(['./about-academy']);
  }
  faculties() {
    this.route.navigate(['./faculties']);
  }
  support() {
    this.route.navigate(['./support']);
  }
  faculties_message() {
    this.route.navigate(['./faculties-messages-list']);
  }
  buyAppAction() {
    window.open("https://bit.ly/cc_Academy", '_system', 'location=no');
  }
}
