import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
declare  let alertify;
@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {

  constructor(   private router :Router,
  ) { }

  ngOnInit(): void {
  }

  click(){
    alertify.success("You have successfully registered");
    if ( alertify.success){
      this.router.navigateByUrl('contact');

    }
  }

}
