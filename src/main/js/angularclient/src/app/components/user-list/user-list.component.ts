import { Component, OnInit } from '@angular/core';
import {User} from "../../model/userModel/user";
import {UserServiceService} from "../../services/serviceUser/user-service.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserServiceService) { }

  //Реализация класса UserListComponent довольно понятна.
  // Он просто использует метод findAll () UserService для извлечения всех сущностей,
  // сохраненных в базе данных, и сохраняет их в поле пользователей.
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
  //Кроме того, нам нужно отредактировать HTML-файл компонента user-list.component.html,
  //чтобы создать таблицу, отображающую список сущностей:

}
