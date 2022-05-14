import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 students:Student[]=[
   new Student(100,"Israa",21),
   new Student(200,"Ali",25),
   new Student(300,"Ahmed",23),
   new Student(400,"Omar",24),
   new Student(500,"Sara",26)

 ]
  constructor() { }
  getAllStudents(){
    return this.students;
  }
  getStdById(id:number):Student{
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].id==id){
        return this.students[i];
      }
    } 
    return new Student(0,"",0); 
  }
  addStudent(std:Student){
    this.students.push({ id: std.id, name: std.name ,age:std.age});
  }

  editStudent(std:Student){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].id==std.id){
        this.students[i].name=std.name;
        this.students[i].age=std.age;
      }
    }
  }
  deleteStudent(id:number){
    for(let i=0;i<this.students.length;i++){
         if(this.students[i].id==id){
              this.students.splice(i,1);
         }
        }  
    }

  
}
