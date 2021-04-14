import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private routing: Router) { }

  back() {
    this.routing.navigate(['backgrounds']);
  }

  time() {
    this.routing.navigate(['timer']);
  }

  nasa() {
    this.routing.navigate(['nasa']);
  }

  ngOnInit(): void {
  }

}
