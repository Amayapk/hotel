import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navigate: any;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  menu(){
    this.router.navigateByUrl("menu")
  }
}