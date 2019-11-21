import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FileServiceService} from "../../services/serviceFile/file-service.service";

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

/*
  Данные в fileList $ observable будут отображены в списке,
   который также включает интерактивные команды для загрузки и удаления каждого файла.
*/
  public fileList$: Observable<string[]> = this.fileService.list();

  constructor(private fileService: FileServiceService) { }

  public download(fileName: string): void {
    this.fileService.download(fileName);
  }

  public remove(fileName: string): void {
    this.fileService.remove(fileName);
  }
  ngOnInit() {
  }

}
