import { Component } from '@angular/core';
import { CarFront, User, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly CarFront = CarFront;
  readonly User = User;

  options = [
    {
      title: 'Aluguel de Carros',
      menus: [
        {
          title: 'Alugar um carro',
          items: [
            {
              title: "Aluguel por diária",
              subMenu: {
                title: "Aluguel de Carros",
                description: "Vai alugar com a Unidas? Encontre aqui o carro ideal para sua viagem a lazer ou a negócios.",
                urlAction: "https://www.unidas.com.br/para-voce/reservas-nacionais",
              }
            },
            {
              title: "Aluguel internacional",
              subMenu: {
                title: "Aluguel de Carros",
                description: "A Unidas se une Avis e Bugdet, duas das maiores locadoras da América do Norte, para proporcionar mais facilidade na sua viagem internacional.",
                urlAction: "https://www.unidas.com.br/para-voce/reservas-nacionais",
              }
            },
            {
              title: "Busque por lojas próximas",
              subMenu: {
                title: "Lojas Unidas",
                description: "Localize a loja Unidas mais próxima de você e alugue seu carro com comodidade.",
                urlAction: "https://www.unidas.com.br/lojas",
              }
            },
            {
              title: "Unidas driver - Motoristas de APP",
              subMenu: {
                title: "Motoristas de APP",
                description: "Conheça os benefícios exclusivos para motoristas de aplicativo alugarem com a Unidas.",
                urlAction: "https://www.unidas.com.br/para-voce/unidas-driver",
              }
            },
            {
              title: "Como Alugar",
              subMenu: {
                title: "Como Funciona",
                description: "Aprenda o passo a passo para alugar um carro com a Unidas sem complicação.",
                urlAction: "https://www.unidas.com.br/como-alugar",
              }
            },
            {
              title: "Proteções e Acessórios",
              subMenu: {
                title: "Proteções e Acessórios",
                description: "Conheça todas as proteções adicionais e acessórios disponíveis para sua locação.",
                urlAction: "https://www.unidas.com.br/protecoes-acessorios",
              }
            },
            {
              title: "Grupos de Carros",
              subMenu: {
                title: "Grupos de Carros",
                description: "Explore todos os grupos de carros disponíveis e escolha o ideal para você.",
                urlAction: "https://www.unidas.com.br/grupos-de-carros",
              }
            },
          ],
        },
        {
          title: 'Carro por assinatura',
          items: [
            {
              title: "Plano mensal - Unidas Mensal Mais",
              subMenu: {
                title: "Mensal Mais",
                description: "Flexibilidade e economia com o plano mensal da Unidas.",
                urlAction: "https://www.unidas.com.br/para-voce/mensal-mais",
              }
            },
            {
              title: "Plano anual - Unidas Livre",
              subMenu: {
                title: "Unidas Livre",
                description: "Assine um carro por um ano com todos os benefícios inclusos.",
                urlAction: "https://www.unidas.com.br/para-voce/unidas-livre",
              }
            }
          ],
        }
      ]
    },
    {
      title: 'Para Empresas',
      menus: [
        {
          title: 'Para sua empresa',
          items: [
            {
              title: "Aluguel Corporativo",
              subMenu: {
                title: "Aluguel Corporativo",
                description: "Vai alugar com a Unidas? Encontre aqui o carro ideal para sua viagem a lazer ou a negócios.",
                urlAction: "https://www.unidas.com.br/para-voce/reservas-nacionais",
              }
            },
          ],
        },
      ]

    },
    {
      title: 'Soluções',
      menus: [
        {
          title: 'Para você',
          items: [
            {
              title: "Unidas Pass",
              subMenu: {
                title: "Unidas Pass",
                description: "Com o Unidas Pass você passa direto pelos pontos de cobrança automática como cancelas de shoppings, estacionamentos e pedágios num piscar de olhos!",
                urlAction: "https://www.unidas.com.br/para-voce/reservas-nacionais",
              }
            },
          ],
        },
      ]

    },
    {
      title: 'A Unidas',
      menus: [
        {
          title: null,
          items: [
            {
              title: "Sobre a Unidas",
              subMenu: {
                title: "Sobre a Unidas",
                description: "Com mais de 180 lojas distribuídas em todo o território nacional, a Unidas Aluguel de Carros está no grupo de empresas líderes do setor de mobilidade no Brasil, com o propósito de simplificar a vida dos clientes e oferecer serviços que entreguem praticidade.",
                urlAction: "https://www.unidas.com.br/para-voce/reservas-nacionais",
              }
            },
          ],
        },
      ]

    },
    {
      title: 'Atendimento',
      menus: [
        {
          title: null,
          items: [
            {
              title: "Nossas Lojas",
              subMenu: {
                title: "Nossas lojas",
                description: "Acionou o Serviço de Atendimento ao Cliente e não ficou satisfeito?",
                urlAction: "https://www.unidas.com.br/para-voce/reservas-nacionais",
              }
            },
          ],
        },
      ]

    }

  ];



}
