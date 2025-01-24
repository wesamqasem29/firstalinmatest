import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent {
  isDropdownOpen = false;
  selectedOption: string | null = null;
  options = ['A', 'B', 'C'];
  enableSecond:boolean=false;
  enableThird:boolean=false;
  enableFirst:boolean=true;
  isHide:boolean=false;
  otp: string[] = ['', '', '', '']; 
  otpBoxes = [0, 1, 2, 3]; 


  firstpayrollForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.firstpayrollForm = this.fb.group({
      associatedCardAccount: [null],
      cardActivation: [false],
      termsAndConditions: [false],
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.isDropdownOpen = false; 
    this.firstpayrollForm.controls['associatedCardAccount'].setValue(option);
  }

  handleKeyDown(event: KeyboardEvent, index: number): void {
    const inputs = document.querySelectorAll<HTMLInputElement>('input[type=text]');

    // Allow only digits, Backspace, Delete, and Tab
    if (
      !/^[0-9]{1}$/.test(event.key) &&
      event.key !== 'Backspace' &&
      event.key !== 'Delete' &&
      event.key !== 'Tab'
    ) {
      event.preventDefault();
    }

    // Handle Backspace/Delete to move to the previous box
    if (event.key === 'Delete' || event.key === 'Backspace') {
      if (index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = '';
        this.otp[index - 1] = '';
      }
    }
  }

  hide(){
    this.isHide = !this.isHide
  }

  handleInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const inputs = document.querySelectorAll<HTMLInputElement>('input[type=text]');

    // Move to the next box if a number is entered
    if (input.value && index < this.otpBoxes.length - 1) {
      inputs[index + 1].focus();
    }
  }

  inputType(){
    if(this.isHide){
      return 'password'
    }else{
      return 'text'
    }
  }

  check(){
    const otpCode = this.otp.join('');
    
    debugger
  }
  handleFocus(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.select(); // Highlight the text for easier editing
  }

  handlePaste(event: ClipboardEvent): void {
    event.preventDefault();
    const text = event.clipboardData?.getData('text') || '';
    const inputs = document.querySelectorAll<HTMLInputElement>('input[type=text]');

    // Ensure the pasted value is a valid OTP
    if (text.match(/^\d{4}$/)) {
      const digits = text.split('');
      digits.forEach((digit, index) => {
        if (inputs[index]) {
          inputs[index].value = digit;
          this.otp[index] = digit;
        }
      });
    }
  }

  verifyAccount(): void {
    const otpCode = this.otp.join('');
    if (otpCode.length === this.otpBoxes.length) {
      console.log('OTP Verified:', otpCode);
    } else {
      console.log('Please complete the OTP.');
    }
  }
  checkDone(){
    if(this.firstpayrollForm.value.cardActivation==true && this.firstpayrollForm.value.termsAndConditions==true && this.firstpayrollForm.value.associatedCardAccount!=null){
       return false
    }else{
      return true
    }
  }


  checkOtp(){
    const otpCode = this.otp.join('');
    if (otpCode.length === this.otpBoxes.length) {
      return false;
    } else {
      return true;
    }
  }

  firstSubmit(){
    this.firstpayrollForm.value
    this.enableFirst=false;
    this.enableSecond=true;
  }

  secondSubmit(){
    this.firstpayrollForm.value
    this.enableFirst=false;
    this.enableSecond=false;
    this.enableThird=true;
  }
}
