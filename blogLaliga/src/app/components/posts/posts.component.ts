import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/providers/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  loading: boolean = true; //Já começa com estado carregando
  posts: any[any];
  constructor(public blog: BlogService) { }

  ngOnInit() {
    //Aqui vamos chamar os posts do provider/serviço do blog que criamos anteriormente
    //Quando for resovido retornará um array (lista) de posts do tipo any
    this.blog.posts().then((posts:any[any]) =>{ //acessa,os this.blog pois instanciamos no constructor desta classe a variável blog do tipo BlogService
      setTimeout(() =>{//
        this.posts = posts;//
        this.loading = false;//
      },1 * 1000) //Define o tempo de carregamento para 1 segundo
    })
  }
}
