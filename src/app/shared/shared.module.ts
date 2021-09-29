import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
//import { DemoComponent } from './../demo/demo.component';
import { FooterComponent } from './components/header/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { GroupProductsPipe } from './pipes/group-products.pipe';
import { CountItemsPipe } from './pipes/count-items.pipe';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    FooterComponent,
    HeaderComponent,
    GroupProductsPipe,
    CountItemsPipe,
    //DemoComponent,
  ],
  exports: [
    ExponentialPipe,
    GroupProductsPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule,
    CountItemsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,

  ],
})
export class SharedModule {}
