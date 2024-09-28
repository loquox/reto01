import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `<button [ngStyle]="{'color': color }" >{{label}}</button>
  `,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonComponent {


  @Input() color!:string;
  @Input() label!:string;
  @Input() seleccion!:string;

  @Input() ciudad!:string;


  

}
