import { Component, OnInit } from '@angular/core';
import {User} from "../../model/userModel/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../../services/serviceUser/user-service.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User;

  constructor(private  route: ActivatedRoute,
              private  router: Router,
              private userService: UserServiceService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList())
  }

  ngOnInit() {
  }

  //Поскольку нам нужно повторно отобразить обновленный список сущностей после того,
  // как мы сохранили новый, после вставки мы вызываем метод gotoUserList (),
  // который перенаправляет пользователя на путь / users.
  private gotoUserList() {
    this.router.navigate(['/users']);
  }
}
