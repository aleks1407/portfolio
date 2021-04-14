import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backgrounds',
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.css']
})
export class BackgroundsComponent implements OnInit {
  @ViewChild('tv', { static: true })
  tv!: ElementRef;

  constructor(private router: Router) { }

  changedColor: string = '';
  color: string = '#';

  projects() {
    this.router.navigate(['projects']);
  }

  changeColor() {
    this.color += Math.random().toString(16).slice(2,8);
    this.tv.nativeElement.style.backgroundColor = this.color;
    this.changedColor = this.color;
    this.later();
  }

  later() {
    this.color = '#';
  }


  ngOnInit(): void {
    this.changeColor();
  }

}
