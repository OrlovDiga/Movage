import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model/userModel/user";

@Injectable({//Наконец, давайте обратим внимание на использование маркера
// метаданных @Injectable (). Это говорит о том, что сервис должен быть
// создан и внедрен через инжекторы зависимостей Angular.
  providedIn: 'root'
})
export class UserServiceService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl); //Указав тип User в методах запроса HttpClient,
                                                // мы можем использовать внутренние ответы более простым и эффективным способом.
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }
}
