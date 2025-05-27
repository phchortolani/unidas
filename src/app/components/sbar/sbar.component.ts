import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sbar',
  imports: [CommonModule],
  templateUrl: './sbar.component.html',
  styleUrl: './sbar.component.css'
})
export class SbarComponent {
  titulo = 'Unidas - Soluções em Tecnologia e Inovação';
  links = [
    {
      label: 'Aluguel de Carros',
      path: '/',
      color: '#016ea7'
    },
    {
      label: 'Gestão de Frotas',
      path: 'https://frotas.unidas.com.br/',
      color: '#005b9e'
    },
    {
      label: 'Gestão de Pesados',
      path: 'https://frotas.unidas.com.br/para-empresa/pesados',
      color: '#1d4d8c'
    },
    {
      label: 'Carro Por Assinatura',
      path: 'https://www.livre.com.br/',
      color: '#00aadb'
    },
    {
      label: 'Vendas de Seminovos',
      path: 'https://seminovos.unidas.com.br/',
      color: 'red'
    },
    {
      label: 'Aluguel Internacional',
      path: 'https://www.unidas.com.br/para-voce/reservas-internacionais/',
      color: '#005b9e'
    },
  ];
}
