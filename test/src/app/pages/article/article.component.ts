import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditArticleModalComponent } from './edit-article-modal/edit-article-modal.component';

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

  ngOnInit(): void {
    this.showArticles();
  }

  showArticles() {
    this.service.get('articles')
      .subscribe((data: any) => {
        this.articles = data;
        console.log(data);
    });
  }

  editArticle(data: any){
    this.dialog.open(EditArticleModalComponent, {
      width: '50%',
      height: '50vh',
      data: { data: data }
      });
  }
}
