import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasicComponent } from './components/ngbd-modal-basic/ngbd-modal-basic.component';
import { NgbdToastGlobalComponent } from './components/ngbd-toast-global/ngbd-toast-global.component';
import { ToastsContainerComponent } from './components/ngbd-toast-global/toasts-container/toasts-container.component';

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
