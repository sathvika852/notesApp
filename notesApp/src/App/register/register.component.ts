import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngExprService } from '../ang-expr.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private us:AngExprService , private router:Router) { }

  ngOnInit(): void {
  }

  onregister(credentials)
  {
    /*-------------------creating user with above credentials----------------*/
    this.us.createuser(credentials).subscribe(
      res=>
      {
        if(res.message==="user created")
        {
          alert("successfully signed up :)")
          this.router.navigateByUrl("/login")
        }
        else{
          alert("this is from res err    "+res.message)
        }
      },
      err=>
      {
        console.log("errrrrrrrrr in registration  ",err)
        alert("errrrrrr in errrrr one"+err)
      }
    )
  }

}
