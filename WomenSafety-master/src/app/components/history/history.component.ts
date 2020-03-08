import { Component, OnInit, Inject,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { utf8Encode } from '@angular/compiler/src/util';
import {AngularFireStorage} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {AngularfirestorageService} from 'C:/Users/Harishankar/Desktop/police/src/app/services/angularfirestorage.service'
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})

export class HistoryComponent {
  api 
  base
  data
  constructor(private route : Router,private http : HttpClient,private storage: AngularFireStorage,private service : AngularfirestorageService) {
  }
    
  ngOnInit(){
    this.data = this.service.getData();
    var headers = new Headers();
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
    let postData={
      name : this.data
    }
   this.http.put("https://d2d5a30c.ngrok.io/info",postData,httpOptions )
      .subscribe(dt=>{
          //console.log(data);      
              this.api= dt
              } ,
        (error) => console.log(error)
      )
  console.log(this.api) 
  }
   close(){
      this.route.navigate(['tabs/tab3'])
    }
    
    
}
