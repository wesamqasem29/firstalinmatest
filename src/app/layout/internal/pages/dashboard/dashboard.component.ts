import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  currencies: string[] = ['SAR', 'JOD', 'USD'];
  selectedCurrency: string = 'SAR'; // Default currency
  isDropdownOpen: boolean = false;
  
  constructor(private router:Router){}
  isDialogOpen = false;

  openDialog(): void {
    this.isDialogOpen = true;
    document.body.classList.add('overflow-hidden'); 

  }
  
  closeDialog(): void {
    this.isDialogOpen = false;
    document.body.classList.remove('overflow-hidden');
  }
  
  proceedWithDismiss(): void {
    this.isDialogOpen = false;
    document.body.classList.remove('overflow-hidden');
    console.log('User confirmed dismissal');
  }
  ngOnInit(): void {
  }

  viewNotification(){
    this.router.navigate(['/dashboard/notification'])
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.isDropdownOpen = false;
  }
}
