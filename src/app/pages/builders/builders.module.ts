import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildersRoutingModule } from './builders-routing.module';
import { BuildersComponent } from './builders.component';
import { BuilderDetailComponent } from './builder-detail/builder-detail.component';
import { BuilderListComponent } from './builder-list/builder-list.component';

@NgModule({
  imports: [
    CommonModule,
    BuildersRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [BuildersComponent, BuilderDetailComponent, BuilderListComponent]
})
export class BuildersModule { }
