import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'accountcard',
  templateUrl: './accountcard.component.html',
  styleUrl: './accountcard.component.scss'
})
export class AccountcardComponent {
  @Input() isSkelton : boolean = false;
  @Input() icon: string = '';
  @Input() accountType: string = '';
  @Input() total: string = '';
  @Input() accountNumber: string = '';
  @Input() currency: string = '';


}
