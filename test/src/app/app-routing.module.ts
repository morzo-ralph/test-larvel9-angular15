import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ArticleComponent } from './pages/article/article.component';
import { HeaderComponent } from './interface/header/header.component';
import { FooterComponent } from './interface/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent,
    children: [
      { path: '', component: FooterComponent,
        children: [
          {path: '', component: HomepageComponent }
        ]
      }
    ]
  },
  { path: 'article', component: HeaderComponent,
    children: [
      { path: '', component: FooterComponent,
        children: [
          {path: '', component: ArticleComponent }
        ]
      }
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    CommonModule,
  ]
})
export class AppRoutingModule { }
