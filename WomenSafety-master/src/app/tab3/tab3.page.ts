import { Component, NgModule, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { HistoryComponent } from '../components/history/history.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import {AngularfirestorageService} from '../services/angularfirestorage.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  api
  user

  constructor(private modal: ModalController,private route : Router,private http:HttpClient,private service: AngularfirestorageService) {}
  ngOnInit(){
    var headers = new Headers();
    const httpOptions = { 
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
   this.http.get("https://d2d5a30c.ngrok.io/reporters", httpOptions)
      .subscribe(data=>{
          //console.log(data);      
              this.api=data       
            } ,
        (error) => console.log(error)
      )
   
  console.log(this.api) 
  }
  clickopen(a){
    this.service.setData(a);
    this.route.navigate(['./history']);
   } 
   
}


