import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {FileServiceService} from "./services/serviceFile/file-service.service";

@Component({
  selector: 'app-root', //селектор - селектор HTML, используемый для привязки компонента к файлу шаблона HTML
  templateUrl: './app.component.html', //templateUrl - файл шаблона HTML, связанный с компонентом
  styleUrls: ['./app.component.scss'] //styleUrls - один или несколько файлов CSS, связанных с компонентом
})
export class AppComponent {
  title = 'angular-and-nodejs-data';

  public displayLoader: Observable<boolean> = this.fileService.isLoading();

  constructor(private fileService: FileServiceService) {}
}
