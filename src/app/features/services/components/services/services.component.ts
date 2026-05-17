import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Location } from '@angular/common';
import { SERVICE_CATEGORIES, ServiceCategory } from 'src/app/data/services-data';
import { TrackBookingService } from 'src/app/services/track-booking.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  searchTerm: string = '';
  serviceCategories: ServiceCategory[] = SERVICE_CATEGORIES;
  expandedStates: { [key: string]: boolean } = {};

  constructor(
    private trackBookingService: TrackBookingService,
    private location: Location,
    private route: ActivatedRoute,
    private viewport: ViewportScroller
  ) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Delay ensures the layout is finalized before scrolling
        setTimeout(() => {
          this.viewport.scrollToAnchor(fragment);
        }, 300);
      }
    });
  }

  getFilteredCategories() {
    if (!this.searchTerm.trim()) {
      return this.serviceCategories;
    }
    const term = this.searchTerm.toLowerCase();
    return this.serviceCategories
      .map((category) => ({
        category: category.category,
        services: category.services.filter((service) =>
          service.name.toLowerCase().includes(term)
        )
      }))
      .filter((category) => category.services.length > 0);
  }

  formatId(category: string): string {
    return category.toLowerCase().replace(/\s+/g, '-');
  }

  toggleDescription(categoryIndex: number, serviceIndex: number, categoryName: string) {
    const key = `${categoryIndex}-${serviceIndex}`;
    this.expandedStates[key] = !this.expandedStates[key];
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

     bookAppointment() {
    // Open Fresha immediately.
    window.open(
      'https://www.fresha.com/a/lashmap-beauty-studio-melbourne-level-10-1-elizabeth-st-jj0y3knw',
      '_blank'
    );

    // Call backend API in background
    this.trackBookingService.trackBooking()
      .subscribe({
        next: (response) => {
          console.log('Tracking success', response);
        },
        error: (error) => {
          console.error('Tracking failed', error);
        }
      });
  }
}
