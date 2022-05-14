import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../_models/student';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-std-add',
  templateUrl: './std-add.component.html',
  styleUrls: ['./std-add.component.css']
})
export class StdAddComponent implements OnInit {

  constructor(public stdSer:StudentService,public router:Router) { }
  std:Student={id:0,name:"",age:0};
  @ViewChild('idRef') id:ElementRef|undefined;
  @ViewChild('nameRef') name:ElementRef|undefined;
  @ViewChild('ageRef') age:ElementRef|undefined;
  students:Student[]=this.stdSer.getAllStudents();
  ngOnInit(): void {
    for(let i=0;i<this.students.length;i++){
      console.log(this.students[i]);
    }
  }
  simpleAlert(){
    
    Swal.fire({
      title: "Empty Fields! Plz Enter Data",
      icon: 'warning',
      confirmButtonColor:"#76D4BD"
     
    })
  }
  onSubmit(x:any){
     console.log(x.id);
      this.stdSer.addStudent(new Student(this.std.id,this.std.name,this.std.age));
      this.router.navigate(['/students']);
  } 
}
