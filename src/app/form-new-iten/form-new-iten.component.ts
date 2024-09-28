import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-iten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-new-iten.component.html',
  styleUrl: './form-new-iten.component.scss'
})
export class FormNewItenComponent {

  @Input() label!:string; 
  @Input() className:string='btn-primary' 

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item:string): void{
    this.newItemEvent.emit(item);
  }

}
