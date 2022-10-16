import { Component, Input, OnInit,  } from '@angular/core';
import * as EventEmitter from 'events';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;
  
  courseSelected = new EventEmitter<Course>();
  constructor() { }

  ngOnInit(): void {
  }

  onCourseView(){
    this.courseSelected.emit(this.course)
  }
}
