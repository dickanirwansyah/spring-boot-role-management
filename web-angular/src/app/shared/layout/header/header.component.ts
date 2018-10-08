import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../../service/auth.service';

declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html',
  providers: [AuthService]
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }

  searchMobileActive = false;

  toggleSearchMobile() {
    this.searchMobileActive = !this.searchMobileActive;

    $('body').toggleClass('search-mobile', this.searchMobileActive);
  }

  onSubmit() {
    this.router.navigate(['/miscellaneous/search']);

  }

  logOut(event) {
    // console.log('EV:', event);
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
