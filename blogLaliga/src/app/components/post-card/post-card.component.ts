import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.sass']
})
export class PostCardComponent implements OnInit {
  @Input() post:any;
  constructor() { }

  ngOnInit(): void {
  }

}
const objetoDoPost=
{
  title: 'Lorem ipsum'
}
//html

