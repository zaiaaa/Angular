import { Routes, RouterModule } from '@angular/router';
import{HomePageComponent} from "./pages/home-page/home-page.component"
import {PostPageComponent} from "./pages/post-page/post-page.component"
import{ErrorPageComponent} from "./pages/error-page/error-page.component"
const routes: Routes =[
  //home
  {
    path: '',
    component: HomePageComponent
  },
  //blog post
  {
    path:':slug/id',
    component: PostPageComponent,
  },
  //handling 404 - Error Page
  {
    path:'**',
    component: ErrorPageComponent
  }
];

export const RoutingModule = RouterModule.forRoot(routes);
