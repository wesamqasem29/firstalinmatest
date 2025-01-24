import { Component, Input } from '@angular/core';

@Component({
  selector: 'cardbox',
  templateUrl: './cardbox.component.html',
  styleUrl: './cardbox.component.scss'
})
export class CardboxComponent {
  @Input() isSkelton : boolean = false;
  @Input() icon: string = '';
  @Input() details: string = '';
  @Input() cardType: string = '';
  @Input() currency: string = '';
  @Input() total: string = '';
  @Input() status: string = '';


}
