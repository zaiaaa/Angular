import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Route Module
import { RoutingModule } from './app.router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

//Services
import { BlogService } from './providers/blog.service';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostsComponent } from './components/posts/posts.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent,
    ErrorPageComponent,
    HeaderComponent,
    PostCardComponent,
    PostsComponent,
    FooterComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
