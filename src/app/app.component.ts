import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Array<Object>;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.refreshPosts();
  }

  refreshPosts() {
    this.http.get('http://localhost:3001/posts')
    .subscribe((data: any) => {
      this.posts = data.posts;
    });
  }

  onSubmit(form: any, realForm: any): void {
    if (!form.newPost) {
      return;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })}

    this.http.post('http://localhost:3001/posts',
    JSON.stringify({
      text: form.newPost
    }), httpOptions)
    .subscribe((res: Response) => {
     this.refreshPosts();
    })

    realForm.form.reset();
  }
}
