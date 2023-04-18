import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit{
users:User[]=[];
constructor(private router:Router,private userService:UserService){
  
}
ngOnInit(): void {
  this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
    });
};
deleteUser(user: User): void {
  this.userService.deleteUser(user)
    .subscribe(data => {
      this.users = this.users.filter(u => u !== user);
    })
};
};



