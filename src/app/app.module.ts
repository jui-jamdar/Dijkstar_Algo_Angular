import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasicComponent } from './ngbd-modal-basic/ngbd-modal-basic.component';
import { NgbdToastGlobalComponent } from './ngbd-toast-global/ngbd-toast-global.component';
import { ToastsContainerComponent } from './ngbd-toast-global/toasts-container/toasts-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    NgbdModalBasicComponent,
    NgbdToastGlobalComponent,
    ToastsContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
