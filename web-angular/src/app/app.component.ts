import {Component, ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  public title = 'app works!';
  
  
  public constructor(private viewContainerRef: ViewContainerRef,private router: Router) {
      //this.router.navigate(['/auth/login']);
      //localStorage.removeItem('id_token');
      
      
  }

    ngOnInit() {
    
        
    }
  
    }

