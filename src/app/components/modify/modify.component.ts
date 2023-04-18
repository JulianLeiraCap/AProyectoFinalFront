import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit{
  user: User = new User();
  id:any;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.id = id;
      console.log(this.id)
      if(this.id != undefined ||this.id ){
        this.userService.findById(parseInt(this.id))
       .subscribe(data=>{
        this.user.id=data.id;
         this.user.lastname=data.lastname;
         this.user.name=data.name;
         this.user.year=data.year;
       })
      }
    });
    console.log(this.id);

     
  }
  ModifyUser(user:User):void{
    if(this.user.name==""||this.user.year==""||this.user.lastname==""){
      alert("Debe rellenar todos los campos")
      }else{
        this.userService.createUser(this.user)
        .subscribe(data => {
          alert("Usuario " +this.user.name +" guardado de forma correcta.");
        });
      }
  }

}

