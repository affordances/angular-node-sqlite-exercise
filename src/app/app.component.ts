import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

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
    this.http.get('http://localhost:3001/posts')
    .subscribe((data: any) => {
      this.posts = data.posts;
    });
  }

  onSubmit(form: any): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })}

    this.http.post('http://localhost:3001/posts',
    JSON.stringify({
      postBody: form.newPost
    }), httpOptions)
    .subscribe((res: Response) => {
     this.ngOnInit();
    })
  }
}
