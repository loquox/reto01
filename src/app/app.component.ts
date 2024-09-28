import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./button/button.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormNewItenComponent } from "./form-new-iten/form-new-iten.component";
import { CitiesComponent } from "./cities/cities.component";
import { FilterPipe } from './pipes/filter.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, FormsModule, CommonModule, FormNewItenComponent, CitiesComponent, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {



  seleccion!: string;

  ciudades: string[] = ['irun', 'donosti', 'Lima'];
 criteria:string='';

  addNewCity(city: string): void {
    this.ciudades.push(city);
  }

  onCityClicked(ciudad: string): void {
    this.seleccion = ciudad;
  }

  onClear(): void {
    this.seleccion = ""
  }

}
