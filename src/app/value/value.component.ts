import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  apiUrl = environment.apiUrl
  values: any
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    return this.http.get(this.apiUrl + "/dashboard").subscribe(res => {
      console.log(res);
      this.values = res
    }, error => {
      console.log(error)
    });

  }

}
