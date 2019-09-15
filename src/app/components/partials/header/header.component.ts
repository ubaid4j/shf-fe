import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    // isLoggedIn : boolean = false;
    // currentUser : string = "";

    constructor()
    {

    }

    ngOnInit()
    {

    }

    isLoggedIn() : boolean
    {
        return sessionStorage.getItem('user') != null;
    }

    currentUser() : string
    {
        return sessionStorage.getItem('user');
    }
}
