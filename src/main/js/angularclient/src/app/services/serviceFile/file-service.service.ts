import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  private fileList: string[] = new Array<string>();
  private fileList$: Subject<string[]> = new Subject<string[]>();
  private displayLoader$: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  public isLoading(): Observable<boolean> {
    return this.displayLoader$;
  }

  public upload(fd: FormData): void {
    this.displayLoader$.next(true);
    this.http.put('/creategif', fd)
      .pipe(finalize(() => this.displayLoader$.next(false)))
      .subscribe(res => {
        this.fileList.push(<string>fd.get('name'));
        this.fileList$.next(this.fileList);
      }, error => {
        this.displayLoader$.next(false);
      });
  }

  public download(fileName: string): void {
    this.http.get('/creategif/${fileName}', { responseType: 'blob'}).subscribe(res => {
      window.open(window.URL.createObjectURL(res));
    });
  }

  public remove(fileName): void {
    this.http.delete('/creategif/${fileName}').subscribe(() => {
      this.fileList.splice(this.fileList.findIndex(name => name === fileName), 1);
      this.fileList$.next(this.fileList);
    });
  }

  public list(): Observable<string[]> {
    return this.fileList$;
  }

  private addFileToList(fileName: string): void {
    this.fileList.push(fileName);
    this.fileList$.next(this.fileList);
  }
}
