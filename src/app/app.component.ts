import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project-test-candidatos';
  public fullname:string | null
  constructor(
    private router: Router
  ) {
    this.fullname="";
  }

  ngOnInit(): void {
    this.fullname = localStorage.getItem("fullname");
  }

  closeSession(): void{
    localStorage.removeItem("fullname");
    localStorage.removeItem("token");
    this.router.navigate(['searchTuits']);
  }
}
