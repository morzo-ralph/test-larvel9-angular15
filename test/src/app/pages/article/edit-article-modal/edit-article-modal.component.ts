import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-article-modal',
  templateUrl: './edit-article-modal.component.html',
  styleUrls: ['./edit-article-modal.component.css']
})
export class EditArticleModalComponent implements OnInit {
  articleForm = new FormGroup({
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  payload: any = [];
  author!: string;
  body!: string;
  title!: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    console.log(this.data);
    this.payload = this.data
  }

  ngOnInit(): void {
    this.author = this.payload.author;
    this.body = this.payload.body;
    this.title = this.payload.title;
  }

  get articleControl() {
    console.log(this.articleForm.controls);
    return this.articleForm.controls;
  }
}
