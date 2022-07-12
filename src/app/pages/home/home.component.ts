import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apiUrl = environment.apiUrl
  values: any
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getValues();
  }

  getValues() {

    

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });

   if(!localStorage.getItem('token')) {
    console.log("Please login to get the token");
    return
   }

    return this.http.get(this.apiUrl + "/dashboard",{ headers: reqHeader }).subscribe(res => {
      console.log(res);
      this.values = res
    }, error => {
      console.log(error)
    });
  }
}
