import { Component } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  api
  constructor(private http: HttpClient) {}
  ngOnInit(){
    var headers = new Headers();
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
  
    
    this.http.get("https://d2d5a30c.ngrok.io/hits", httpOptions)
      .subscribe(data=>{
          console.log(data);      
              this.api=data
              } ,
        (error) => console.log(error)
      )
   
  console.log(this.api) 
  }
}
  