import { Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import { LoginDetails } from './loginDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'app';
  allDetails : LoginDetails[];
  status;
  message : string;

  constructor(private appService: AppService) { }

  ngOnInit() : void {
    this.getWelcomeMessage();
  }


  getWelcomeMessage() {
    this.appService.getWelcomeMessage()
     .subscribe(
                data => this.message = data,
                error => this.status = error);   
   }

  getAllDetails() {
    this.appService.getAllDetails()
     .subscribe(
                data => this.allDetails = data,
                error => this.status = error);   
   }
}
