import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { of, retry, tap } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  dropdownTimeout: any;
  selectedOptions: string[] = [];
  hideFirstDrop:boolean=false;

   constructor(private authService:AuthService,private router:Router){}

  selectOption(option: string): void {
    if (!this.selectedOptions.includes(option)) {
      this.selectedOptions.push(option);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }

  

  startDropdownTimeout() {
    this.dropdownTimeout = setTimeout(() => {
      const dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownMenus.forEach(menu => {
        menu.classList.remove('opacity-100', 'visible');
        menu.classList.add('opacity-0', 'invisible');
      });
    }, 300); 
  }

  clearDropdownTimeout() {
    if (this.dropdownTimeout) {
      clearTimeout(this.dropdownTimeout);
    }
  }

}
