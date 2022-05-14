import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.css']
})
export class StdListComponent implements OnInit {
  students:Student[]=[];
  term:any;
  constructor(public stdSer:StudentService) { }
  flag:boolean=false;
  ngOnInit(): void {
    this.students=this.stdSer.getAllStudents();  
  }
  
}
