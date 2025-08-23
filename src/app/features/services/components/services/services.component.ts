import { Component } from '@angular/core';
import { SERVICE_CATEGORIES, ServiceCategory } from 'src/app/data/services-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  searchTerm: string = '';
  serviceCategories: ServiceCategory[] = SERVICE_CATEGORIES;

  
  filteredCategories() {
    if (!this.searchTerm.trim()) {
      return this.serviceCategories;
    }

    const term = this.searchTerm.toLowerCase();

    return this.serviceCategories
      .map((category) => {
        const filteredServices = category.services.filter((service) =>
          service.name.toLowerCase().includes(term)
        );
        return {
          category: category.category,
          services: filteredServices,
        };
      })
      .filter((category) => category.services.length > 0);
  }
    
}
