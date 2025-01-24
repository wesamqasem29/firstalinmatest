import { Component, Input } from '@angular/core';

@Component({
  selector: 'billslist',
  templateUrl: './billslist.component.html',
  styleUrl: './billslist.component.scss'
})
export class BillslistComponent {
  @Input() isSkelton : boolean = false;
  @Input() currency: string = '';
  @Input() total: string = '';
  @Input() details: string = '';
  @Input() name: string = '';
  @Input() icon: string = '';
}
