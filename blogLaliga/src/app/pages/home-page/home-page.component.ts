import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
@Input() post:any;
  constructor() { }

  ngOnInit(): void {
  }

}
const objetoDoPost=
{
  title: 'Lorem ipsum'
}
