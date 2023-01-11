import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-edit-article-modal',
  templateUrl: './edit-article-modal.component.html',
  styleUrls: ['./edit-article-modal.component.css']
})
export class EditArticleModalComponent{
  articleForm = new FormGroup({
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  payload: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private service: ServiceService
    ) {
    console.log(this.data);
    this.payload = this.data.data;
  }

  get articleControl() {
    console.log(this.articleForm.controls);
    return this.articleForm.controls;
  }

  updateArticle(input: any) {
    console.log(input);
    this.service.put('article', input.id, input)
      .subscribe((data: any) => {
        console.log(data);
      })
  }

  deleteArticle(input: any) {
    console.log(input);
    this.service.delete('article', input.id)
      .subscribe((data: any) => {
        console.log(data);
      })
  }
}
