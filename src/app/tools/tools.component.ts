import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
 
  title:string= "Add note";

  titleColor:string ="red";

  TitleBackgroundColor:string ="yellow";

  setTitle() { this.title = "test"; }
  
  setbackground() { this.TitleBackgroundColor ="blue"}
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(): void {

     alert("button Click");

  }


}
