import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username : string = null;
    password : string = null;
    isInValid : boolean = false;


    constructor(private router : Router)
    {

    }

    ngOnInit()
    {

    }

    public whenClick() : void
    {
        // console.log("Before: isAuth: " + sessionStorage.getItem(HardCodeAuthService.AUTH));
        // console.log(this.username);
        // console.log(this.password);
        console.log("Clicked");
        //TEST
        // this.giveAuth();

        // this.jwtAuth.auth(this.username, this.password).subscribe(
        //     data => {
        //         console.log(data);
        //         this.isInValid = false;
        //         this.router.navigate(['welcome', this.username]);
        //         console.log("After: isAuth: " + sessionStorage.getItem(AUTHUSER));
        //     },
        //     error => {
        //         console.log(error);
        //         this.isInValid = true;
        //     }
        // );

        if(this.username == 'test' && this.password == 'test')
        {
            this.isInValid = false;
            this.router.navigate([this.username, 'odds']);
            sessionStorage.setItem('user', this.username);

        }
        else
        {
            this.isInValid = true;
        }
    }

}
