import { Element } from '@angular/compiler';
import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { Category } from 'src/app/models/categories';
import { HighlightDirectiveDirective } from 'src/app/highlight-directive.directive';
import { ProductComponent } from '../product/product.component';
import { ProductModuleModule } from 'src/app/features/product-module/product-module.module';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  title:string=''
categories : Category[]=[
  {
    "id": 1,
    "title": "Grand électroménager",
    "image": "assets/1.jpeg",
    "description": "Les grands appareils électroménagers incluent réfrigérateurs, machines à laver, et cuisinières, essentiels pour le confort domestique.",
    "available": true
  },
  {
    "id": 2,
    "title": "Petit électroménager",
    "image": "assets/2.jpeg",
    "description": "Le petit électroménager inclut mixeurs, cafetières et grille-pains, parfaits pour les tâches quotidiennes en cuisine.",
    "available": true
  },
  {
    "id": 3,
    "title": "Produits informatiques",
    "image": "assets/3.jpeg",
    "description": "Ordinateurs, imprimantes et accessoires pour améliorer votre productivité, à la maison ou au bureau.",
    "available": true
  },
  {
    "id": 4,
    "title": "Smartphones",
    "image": "assets/4.jpeg",
    "description": "Découvrez les derniers smartphones avec des fonctionnalités avancées, adaptés à tous vos besoins de communication.",
    "available": true
  },
  {
    "id": 5,
    "title": "TV, images et son",
    "image": "assets/5.jpeg",
    "description": "Téléviseurs HD, systèmes audio et équipements multimédias pour une expérience de divertissement ultime à domicile.",
    "available": true
  },
  {
    "id": 6,
    "title": "Produits voiture",
    "image": "assets/6.jpeg",
    "description": "Accessoires et produits d'entretien pour voitures, garantissant leur bon fonctionnement et une apparence soignée.",
    "available": false
  }
];

listProducts : ProductModuleModule[]=[
  {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
  {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
  {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
  {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
  {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
  {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
]
afficheDescription(id:number) {
  this.categories.forEach(element =>{
    if (element.id==id) {
      alert(element.description)
    }
  })
  let category =this.categories.filter(element=>element.id ==id)[0]
  alert(category.description)
}
titre :string='';

}
