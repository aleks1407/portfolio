import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  rodenden: string = '01 january 2022';
  // rodenden: string = '';

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;


  countdown() {

    const rodenden : any = new Date(this.rodenden);
    const currentDate : any = new Date();

    const totalSeconds = (rodenden - currentDate)/1000;



    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)% 24;
    const minutes = Math.floor(totalSeconds/60) %60;
    const seconds = Math.floor(totalSeconds) % 60;

    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    // console.log(days, hours, minutes ,seconds);
  }

  constructor(private route: Router) { }

  home() {
    this.route.navigate(['projects']);
  }

  x: any;

  ngOnInit(): void {
    this.countdown();
    this.x = setInterval(() => {
      this.countdown();
    }, 1000);

  }

}
