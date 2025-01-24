import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Input() customStyle:string='';

}
