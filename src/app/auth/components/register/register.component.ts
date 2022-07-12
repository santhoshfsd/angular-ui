import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    const registerObserver = {
      next: (x: any) => {        
        console.log('User created')
        f.resetForm();
        this.router.navigate(["/login"])
      },
      error: (err :any) => {
        console.log(err);
      }
    };
    this.authService.register(f.value).subscribe(registerObserver);
  }
}
