import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-article-modal',
  templateUrl: './add-article-modal.component.html',
  styleUrls: ['./add-article-modal.component.css']
})
export class AddArticleModalComponent {

  constructor(
    private service: ServiceService,
  ) { }

  payload: any = {};
    articleForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
    });
  addArticle(input: any) {
    console.warn(this.articleForm);
    // this.service.store('articles', input)
    //   .subscribe((data: any) => {
    //     console.log(data);
    //     this.payload.title.reset();
    //   })
  }
}
