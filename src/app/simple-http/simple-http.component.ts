import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html'
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.get('http://localhost:3001/messages')
    .subscribe(data => {
      this.data = data;
      this.loading = false;
    });
  }
}
