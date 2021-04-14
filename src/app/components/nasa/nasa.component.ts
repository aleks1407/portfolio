import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Nasa } from 'src/app/models/nasa';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  nasaSubscription: Subscription = new Subscription;
  nasa: Nasa[] = [];

  constructor(private service: NasaService,
              private routing: Router) { }

  ngOnInit(): void {
    this.connectNasa();
  }

  connectNasa() {
    this.nasaSubscription = this.service.getNasa().subscribe((result: any) => {
      console.log('result: ', result);
      this.nasa = result;
    })
  }

  projects() {
    this.routing.navigate(['projects']);
  }

  ngOnDestroy() : void {
    this.nasaSubscription.unsubscribe();
  }

}
