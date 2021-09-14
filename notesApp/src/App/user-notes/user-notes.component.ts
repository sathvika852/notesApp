import { Component, OnInit } from '@angular/core';
import { AngExprService } from '../ang-expr.service';

@Component({
  selector: 'app-user-notes',
  templateUrl: './user-notes.component.html',
  styleUrls: ['./user-notes.component.css']
})
export class UserNotesComponent implements OnInit {

  userNoteObj;
  constructor(private us:AngExprService) { }

  ngOnInit(): void {
  }
  
  addNotesData(ref)
  {
    let un=localStorage.getItem('username')
    this.userNoteObj=ref.value;
    let obj={username:un,userNotes:[this.userNoteObj]}
    this.us.createNotes(obj).subscribe(
      res=>
      {
        if(res.created===1)
        {
          alert("your notes is created :))")
        }
        else
        {
          alert(res.message)
        }
      },
      err=>
      {
         alert("errrrrrr in usernotes......."+err.message)
      }
    )
    console.log(obj);
    ref.reset();
  }
}
