import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SERVICE_CATEGORIES, ServiceCategory } from 'src/app/data/services-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  searchTerm: string = '';
  serviceCategories: ServiceCategory[] = SERVICE_CATEGORIES;

  // Store expanded state for each service card (keyed by "categoryIndex-serviceIndex")
  expandedStates: { [key: string]: boolean } = {};

  constructor(private location: Location) {}

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

  // Toggle Read More/Show Less
  toggleDescription(categoryIndex: number, serviceIndex: number, categoryName: string) {
    const key = `${categoryIndex}-${serviceIndex}`;
    this.expandedStates[key] = !this.expandedStates[key];

    // Optional: update the URL fragment
    if (this.expandedStates[key]) {
      const fragment = this.formatId(categoryName);
      this.location.go(this.location.path(false).split('#')[0] + `#${fragment}`);
    }
  }

  isExpanded(categoryIndex: number, serviceIndex: number): boolean {
    return this.expandedStates[`${categoryIndex}-${serviceIndex}`] || false;
  }

    goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  // This forces the browser URL to update without reloading the page
  this.location.go('/services');
}
}
