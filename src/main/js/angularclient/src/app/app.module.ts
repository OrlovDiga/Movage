import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {UserServiceService} from "./services/serviceUser/user-service.service";
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FileListComponent } from './components/file-list/file-list.component';
import {FileServiceService} from "./services/serviceFile/file-service.service";
import {APIInterceptor} from "./apiinterceptor";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    FileUploaderComponent,
    FileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService, FileServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
