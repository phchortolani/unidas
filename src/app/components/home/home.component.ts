import { Component } from '@angular/core';
import { SbarComponent } from '../sbar/sbar.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  imports: [SbarComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo = 'Unidas - Soluções em Tecnologia e Inovação';
}
