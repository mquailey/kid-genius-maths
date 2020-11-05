import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { APP_STATE, AppState } from '../app-state.service';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  subjects: Array<{ code: string, name: string, year: string }>;
  selectedYear: string;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, @Inject(APP_STATE) public appState: AppState , private route: Router ) { 
    appState.data.set("studentYear","reception");
    this.selectedYear = appState.data.get("studentYear").toString();
    this.subjects = [
      {code: 'counting-to-three',name: 'Counting to 3',year: 'reception'}, 
      {code: 'counting-to-five',name: 'Counting to 5',year: 'reception'}, 
      {code: 'counting-to-ten',name: 'Counting to 10',year: 'reception'}, 
      {code: 'counting-to-twenty',name: 'Counting to 20',year: 'reception'}, 
      {code: 'comparing-numbers',name: 'Comparing Numbers',year: 'reception'}, 
      {code: 'addition-to-five',name: 'Addition up to 5',year: 'reception'}, 
      {code: 'addition-to-ten',name: 'Addition up to 10',year: 'reception'}, 
      {code: 'substraction-to-five',name: 'Subtraction up to 5',year: 'reception'}, 
      {code: 'substraction-to-ten',name: 'Subtraction up to 10',year: 'reception'}, 
      {code: 'fractions',name: 'Fractions',year: 'reception'}, 
      {code: 'positions',name: 'Positions',year: 'reception'}, 
      {code: 'classify',name: 'Classify',year: 'reception'}, 
      {code: 'patterns',name: 'Patterns',year: 'reception'}, 
      {code: 'size',name: 'Size',year: 'reception'}, 
      {code: 'money',name: 'Money',year: 'reception'}, 
      {code: 'flat-shapes',name: 'Flat shapes',year: 'reception'}, 
      {code: 'solid-shapes',name: 'Solid shapes',year: 'reception'},

      {code: 'numbers-and-counting-to-three',name: 'Numbers and counting to 3',year: 'year1'}, 
      {code: 'numbers-and-counting-to-five',name: 'Numbers and counting to 5',year: 'year1'}, 
      {code: 'numbers-and-counting-to-ten',name: 'Numbers and counting to 10',year: 'year1'}, 
      {code: 'numbers-and-counting-to-twenty',name: 'Numbers and counting to 20',year: 'year1'}, 
      {code: 'numbers-and-counting-beyong-20',name: 'Numbers and comparing beyond 20',year: 'year1'}, 
      {code: 'skip-counting',name: 'Skip counting',year: 'year1'}, 
      {code: 'comparing',name: 'Comparing',year: 'year1'}, 
      {code: 'sorting-ordering-and-classifying',name: 'Sorting, ordering and classifying',year: 'year1'}, 
      {code: 'patterns',name: 'Patterns',year: 'year1'}, 
      {code: 'positions',name: 'Positions',year: 'year1'}, 
      {code: 'addition-skill-builders',name: 'Addition skill builders',year: 'year1'}, 
      {code: 'addition-up-to-5',name: 'Addition up to 5',year: 'year1'}, 
      {code: 'addition-up-to-10-and-20',name: 'Addition up to 10 and 20',year: 'year1'}, 
      {code: 'substraction-skill-builders',name: 'Substraction skill builders',year: 'year1'}, 
      {code: 'substraction-up-to-5',name: 'Substraction up to 5',year: 'year1'}, 
      {code: 'substraction-up-to-10-and-20',name: 'Substraction up to 10 and 20',year: 'year1'}, 
      {code: 'fractions',name: 'Fractions',year: 'year1'},
      {code: 'time',name: 'Time',year: 'year1'},
      {code: 'data-and-graphs',name: 'Data and graphs',year: 'year1'},
      {code: 'probability',name: 'Probability',year: 'year1'},
      {code: 'measurement',name: 'Measurement',year: 'year1'},
      {code: 'money',name: 'Money',year: 'year1'},
      {code: 'two-dimensional-shapes',name: 'Two-dimensional shapes',year: 'year1'},
      {code: 'three-dimensional-shapes',name: 'Three-dimensional shapes',year: 'year1'},
      {code: 'vocabulary',name: 'Vocabulary',year: 'year1'},
      {code: 'understand-multiplication',name: 'Understand multiplication',year: 'year1'},
      {code: 'understand division',name: 'Understand division',year: 'year1'}
    ];
  }

  ngOnInit(): void {}

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
  tests(subject) {
    this.appState.data.set("studentYear", this.selectedYear);
    this.route.navigate(['./tests'], {state: {data: subject}});
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
