import { NgModule } from '@angular/core';
import { IndexRoutingModule } from './index-routing.module';
import { IndexContainerComponent, IndexDetailComponent } from './components';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [IndexContainerComponent,IndexDetailComponent],
  imports: [
    IndexRoutingModule,
    SharedModule,
   
  ]
})
export class IndexModule { }
