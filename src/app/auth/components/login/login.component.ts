import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
    private progressBarService:ProgressBarService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.progressBarService.startLoading();
    const loginObserver = {
      next: (x: any) => {
        console.log('User logged in');
        this.progressBarService.setSuccess();
        this.progressBarService.completeLoading();
        this.router.navigate([''])
      },
      error: (err: any) => {
        console.log(err);
        this.progressBarService.setError();
        this.progressBarService.completeLoading();
        
      }
    };
    this.authService.authenticate(f.value).subscribe(loginObserver);
  }

}
