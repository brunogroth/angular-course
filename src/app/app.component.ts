import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coreCourse = COURSES[0];
  SecondCourse = COURSES[1];
  ThirdCourse = COURSES[2];
}
