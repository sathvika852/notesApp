import { Component, OnInit } from '@angular/core';
import { AngExprService } from '../ang-expr.service';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {
  notes=[]
  date;
  tf=1;
  tn=1;
  title:String
  note:String
  constructor(private us:AngExprService) { }

  ngOnInit(): void {
    let un=localStorage.getItem('username')
    this.us.getNotesfun(un).subscribe(
      res=>
      {
        let x=res.message.userNotes
        this.notes=x
        console.log(this.notes)
      },
      err=>
      {
        alert("err in view-notes.ts...................."+err.message)
      }
    )
  }

  deleteNote(t)
  {
    let un=localStorage.getItem('username')
    let obj={username:un,title:t}
    console.log(obj)
    this.us.deleteNotes(obj).subscribe(
      res=>
      {
        if(res.message==="deleted successfully")
        {
          alert(`your Notes ${t} is deleted successfully`)
        }
        else
        {
          alert("Issue in deleting notes")
        }
      },
      err=>
      {
        alert("err in view-notes.........."+err.message)
      }
    )
    let i=this.notes.findIndex((obj)=>obj.Title===t)
    this.notes.splice(i,1)
    let x=this.notes
    this.notes=[...x]
  }

  editNote(t)
  {
    console.log(t)
    this.tf=0
    this.tn=0
  }

  addEditedNote(obj)
  {
    let t=this.title
    let n=this.note

    let object=obj
    let i=this.notes.findIndex((obj)=>obj.Title===object.Title)
    object.Title=t
    object.note=n
    this.notes.splice(i,1,object)
    let x=this.notes
    this.notes=[...x]
    console.log(object)
    this.tf=1
    this.tn=1
    this.us.updateNotes(object).subscribe(
      res=>
      {
        alert("your edited noted is updated successfully")
      },
      err=>
      {
        alert("err in view-notes........."+err.message)
      }
    )
  }

}
