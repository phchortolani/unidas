import { Component } from '@angular/core';
import { SbarComponent } from '../sbar/sbar.component';

@Component({
  selector: 'app-home',
  imports: [SbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo = 'Unidas - Soluções em Tecnologia e Inovação';
}
