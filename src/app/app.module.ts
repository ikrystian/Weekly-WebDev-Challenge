import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { TermsModalComponent } from './terms-modal/terms-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TermsModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    TermsModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
