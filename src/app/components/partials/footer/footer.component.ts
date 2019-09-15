import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    private isLoggedIn : boolean = false;
    private user : string = "";

    constructor()
    {

    }

    ngOnInit()
    {
    }

}
