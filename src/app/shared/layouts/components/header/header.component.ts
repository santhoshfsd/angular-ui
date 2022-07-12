import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';
import { AuthService } from 'src/app/shared/services/auth.service';

import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(
    private progress: NgProgress,
    public progressBar :ProgressBarService,
    public authService: AuthService,
    private router: Router
    ) {
  }


  ngOnInit() {
    this.progressBar.progressRef = this.progress.ref('progressBar');
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.authService.currentUser = null;
    this.authService.decodedToken = null;
    this.router.navigate(['/login'])
  }

}
