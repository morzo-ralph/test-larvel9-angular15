import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  constructor (private service: ServiceService) {}

  articles: any = [];

  ngOnInit(): void {
    this.showArticles();
  }

  showArticles() {
    this.service.getAllArticle('articles')
      .subscribe((data: any) => {
        this.articles = data;
        console.log(data);
    });
  }
}
