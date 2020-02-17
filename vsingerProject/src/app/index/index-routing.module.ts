import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexContainerComponent, IndexDetailComponent } from './components';


const routes: Routes = [
  {
    path:'index',
    component:IndexContainerComponent,
    children:[
      {
        path:'',
        redirectTo:'index',
        pathMatch:'full'
      },
      {
        path:':submenuLink',
        component:IndexDetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
