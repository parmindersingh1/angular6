import { Router } from '@angular/router';
import { AuthService } from './../../pages/auth/_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private titleTagService: Title,
    public auth: AuthService,
    private router: Router ) { }

  ngOnInit() {
    if (this.auth.getToken()) {
      this.auth.getUser().subscribe();
    }
  }

  public setTitle( pageTitle: string) {
    this.titleTagService.setTitle( pageTitle );
  }

  onLogout() {
    this.auth.onLogout().subscribe();
  }

}
