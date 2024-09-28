import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: ` <li (click)="onCityClicked(ciudad)" [ngClass]="{'alert alert-info ': ciudad=== seleccion}">
  {{ciudad | titlecase}}
</li>

`,
  styleUrl: './cities.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {


  @Input() seleccion!:string;
  @Input() ciudad!:string;

  @Output()  cityClickedEvent = new EventEmitter<string>();


  onCityClicked(ciudad:string):void {
    this.cityClickedEvent.emit(ciudad);
    
  }

}
