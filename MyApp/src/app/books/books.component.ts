import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name:String = "Competitive programming"; 
  author:String = "Robert"

  name1:String = "Business book"; 
  author1:String = "David"
  isDisabled:boolean  = true;
  output:String = 'test';
  constructor() {  }

  ngOnInit(): void {
  }
  
}
