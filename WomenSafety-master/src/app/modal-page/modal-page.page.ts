import { Component, OnInit } from '@angular/core';
import {ModalController} from  '@ionic/angular';
@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

  constructor(private modal : ModalController) { }

  ngOnInit() {
  }
  async closeModal(){
      await this.modal.dismiss();
  }
}
