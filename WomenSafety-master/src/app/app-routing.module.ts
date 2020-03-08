import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {
    path: '',
    
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },{
    path:'history',
    component : HistoryComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
