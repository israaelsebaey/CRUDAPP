import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-std-edit',
  templateUrl: './std-edit.component.html',
  styleUrls: ['./std-edit.component.css']
})
export class StdEditComponent implements OnInit {
  std:Student={id:0,name:"",age:0};
  id:number=1;
  constructor(public ar:ActivatedRoute,public stdSer:StudentService,public router:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
    this.std=this.stdSer.getStdById(this.id);
  }
  Edit(){
    this.stdSer.editStudent(this.std);
    this.router.navigate(['/students']);
  }

}
