import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterOgj: any={
    userName:'',
    password:'',
    emailId:''
  }  

  userLogin: any ={
    userName:'',
    password:'',

  }

  router = inject(Router);

  onRegister() {
    debugger;
    const isLocalData = localStorage.getItem("localSetData");
    if(isLocalData != null){
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterOgj);
      localStorage.setItem("localSetData",JSON.stringify(localArray));
    }else {
      const localArray=[];
      localArray.push(this.userRegisterOgj);
      localStorage.setItem("localSetData",JSON.stringify(localArray));
    }

    alert("Registration success!!!");
  }

  onLogin() {
    debugger;
    const isLocalData = localStorage.getItem("localSetData");
    if(isLocalData != null){
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find((m:any)=> m.userName == this.userLogin.userName && m.password == this.userLogin.password);
      if(isUserFound!= undefined) {
        this.router.navigateByUrl('dashboard');
      } else {
        alert("Incorrect credentials");
      }
    }else{
      alert("No user Found");
    }

  }

}
