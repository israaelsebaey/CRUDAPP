import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from "../_models/student";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-std-delete',
  templateUrl: './std-delete.component.html',
  styleUrls: ['./std-delete.component.css']
})
export class StdDeleteComponent implements OnInit {
  std:Student|null=null;
  id:number=1;
  constructor(public stdSer:StudentService,public ar:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.ar.params.subscribe(a=>{a['id']
    this.std=this.stdSer.getStdById(a['id'])  
  })
  //console.log(res);
  }
  simpleAlert(){
    
    Swal.fire({
      title: `${this.std?.name} Deleted Successfully`,
      icon: 'success',
      confirmButtonColor:"#76D4BD"
     
    })
  }
  Delete(){
    this.ar.params.subscribe(a=>{['id']
      this.stdSer.deleteStudent(a['id']);
      this.simpleAlert(); 
    }) 
  }

}
