import { NgModule } from '@angular/core';
import { IndexRoutingModule } from './index-routing.module';
import { IndexContainerComponent, IndexDetailComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { IndexService } from './services';


@NgModule({
  declarations: [IndexContainerComponent,IndexDetailComponent],
  imports: [
    IndexRoutingModule,
    SharedModule,
  ],
  providers:[IndexService]
})
export class IndexModule { }
