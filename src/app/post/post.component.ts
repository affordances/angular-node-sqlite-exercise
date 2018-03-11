import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: string;
  @Output() refresh: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onDelete(postId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })}

    this.http.delete('http://localhost:3001/posts/' + postId)
      .subscribe((res: Response) => {
      this.refresh.emit(null);
    })
  }

}
