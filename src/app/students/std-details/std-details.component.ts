import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-std-details',
  templateUrl: './std-details.component.html',
  styleUrls: ['./std-details.component.css']
})
export class StdDetailsComponent implements OnInit {
  std:Student|null=null;
  constructor(public stdSer:StudentService,public ar:ActivatedRoute) { }
  ngOnInit(): void {
    this.ar.params.subscribe(a=>{a['id'];
    this.std=this.stdSer.getStdById(a['id']);
    })
}



}
