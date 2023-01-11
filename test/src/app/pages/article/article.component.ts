import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditArticleModalComponent } from './edit-article-modal/edit-article-modal.component';
import { AddArticleModalComponent } from './add-article-modal/add-article-modal.component';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit{

  constructor (
    private service: ServiceService,
    private dialog: MatDialog
    ) {}

  articles: any = [];
  data: any = {};
  isEmpty = true;

  ngOnInit(): void {
    this.showArticles();
  }

  showArticles() {
    this.isEmpty = true;
    this.service.get('articles')
      .subscribe((data: any) => {
        this.articles = data;
        console.log(data);
        this.isEmpty = false;
    });
  }

  addArticle() {
    const addArticle = this.dialog.open(AddArticleModalComponent, {
      width: '50%',
      height: '50vh',
    });

    addArticle.afterClosed()
      .subscribe(() => {
        this.showArticles();
      })
  }

  editArticle(data: any){
    const viewArticle = this.dialog.open(EditArticleModalComponent, {
      width: '50%',
      height: '50vh',
      data: { data: data }
      });

      viewArticle.afterClosed()
        .subscribe(() => {
          this.showArticles();
      });

  }
}
