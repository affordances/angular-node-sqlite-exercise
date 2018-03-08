import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3001/posts')
    .subscribe(data => {
      this.posts = data.posts;
    });
  }

  onSubmit(form: any): void {
    this.http.post('http://localhost:3001/posts',
    JSON.stringify({
      postBody: form
    }))
    .subscribe((res: Response) => {
     this.ngOnInit();
    })
  }
}
