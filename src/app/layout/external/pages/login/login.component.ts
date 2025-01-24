import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,private authService:AuthService) {
    this.loginForm = this.fb.group({
      customerId: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.logout()
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      if(this.loginForm.value.customerId=='123'&&this.loginForm.value.username=='123'&&this.loginForm.value.password=='123'){
        this.authService.login();
        this.router.navigate(['dashboard'])
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
