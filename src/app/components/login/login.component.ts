import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private username : string = 'ubaid';
    private password : string = 'test123';
    private isInValid : boolean = false;


    constructor()
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
    }

}
