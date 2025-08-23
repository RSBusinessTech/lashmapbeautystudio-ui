import { Component } from '@angular/core';
import { Location } from '@angular/common';  // <-- import Location
import { SERVICE_CATEGORIES, ServiceCategory } from 'src/app/data/services-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  searchTerm: string = '';
  serviceCategories: ServiceCategory[] = SERVICE_CATEGORIES;

  constructor(private location: Location) {}  // <-- inject Location

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

  formatId(category: string): string {
    return category.toLowerCase().replace(/\s+/g, '-');
  }

  // New method to update URL fragment without reloading
  updateUrlFragment(category: string) {
    const fragment = this.formatId(category);
    // Update URL fragment, preserving current path
    this.location.go(this.location.path(false).split('#')[0] + `#${fragment}`);
  }
}
