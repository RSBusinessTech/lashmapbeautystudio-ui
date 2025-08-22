import { Component } from '@angular/core';

interface ServiceItem {
  name: string;
  description: string;
  image: string;
  juniorPrice?: string;
  seniorPrice?: string;
  price?: string;
  duration: string;
  bookUrl: string;
  readUrl: string;
}

interface ServiceCategory {
  category: string;
  services: ServiceItem[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  serviceCategories: ServiceCategory[] = [
    {
      category: 'Eyebrow Services',
      services: [
        {
          name: 'Brow Tinting',
          description:
            'Enhance your brows with a natural tint that lasts up to 4 weeks on hair and a few days on skin. Smudge-proof and water-resistant.',
          juniorPrice: '$24',
          seniorPrice: '$24',
          duration: '15 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-tinting',
          readUrl: '/services/brow-tinting'
        },
        {
          name: 'Brow Sculpt',
          description:
            'Includes brow mapping, precision waxing, trimming, and tweezing for a perfectly defined shape.',
          juniorPrice: '$25',
          seniorPrice: '$29',
          duration: '20 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt',
          readUrl: '/services/brow-sculpt'
        },
        {
          name: 'Brow Sculpt & Tint',
          description:
            'Combination of brow sculpting and tinting for a defined, fuller look. Tint lasts up to 4 weeks on hair.',
          juniorPrice: '$40',
          seniorPrice: '$50',
          duration: '30 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt-tint',
          readUrl: '/services/brow-sculpt-tint'
        },
        {
          name: 'Brow Sculpt & Dye ',
          description:
            'Brow sculpt and hybrid dye service, followed by cleansing the brows area, mapping precision waxing, tinting, trimming, tweezing. Eyebrows dye as henna effect that provide intense and long lasting effect, in a different colour options that are customised to suit you. Extra long-term effect lasts up to 7 days on skin and up to 7 weeks on hairs.',
          juniorPrice: '$50',
          seniorPrice: '$60',
          duration: '40 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt-tint',
          readUrl: '/services/brow-sculpt-tint'
        },
        {
          name: 'Brow Laminate ',
          description:
            'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          juniorPrice: '$69',
          seniorPrice: '$79',
          duration: '35 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt-tint',
          readUrl: '/services/brow-sculpt-tint'
        },
        {
          name: 'Brow Lamination & Sculpt ',
          description:
            'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          juniorPrice: '$79',
          seniorPrice: '$89',
          duration: '50 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt-tint',
          readUrl: '/services/brow-sculpt-tint'
        },
        {
          name: 'Brow Lamination, Sculpt and Dye',
          description:
            'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period of time. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          juniorPrice: '$89',
          seniorPrice: '$99',
          duration: '1 hour',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt-tint',
          readUrl: '/services/brow-sculpt-tint'
        }
      ]
    },
    {
      category: 'Lash & Brow Services',
      services: [
        {
          name: 'Lash Tint/Dye ',
          description:
            'A semi-permanent treatment that enhances your natural lashes by adding deep, rich color from root to tip. Perfect for those with lighter or fine lashes, a lash tint creates the appearance of darker, fuller, and more defined lashes without the need for daily mascara. It’s a quick, painless treatment that leaves your eyes looking brighter and more expressive for weeks.',
          juniorPrice: '$24',
          seniorPrice: '$24',
          duration: '40 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/lash-lift',
          readUrl: '/services/lash-lift'
        },
        {
          name: 'Lash Lift',
          description:
            'Lash lifting solution reshapes lashes at the root for a natural curl that lasts 4–6 weeks.',
          juniorPrice: '$89',
          seniorPrice: '$99',
          duration: '40 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/lash-lift',
          readUrl: '/services/lash-lift'
        },
        {
          name: 'Lash Lift & Tint',
          description:
            'Lift plus tint for darker, fuller-looking lashes. Results last 4–6 weeks.',
          juniorPrice: '$99',
          seniorPrice: '$109',
          duration: '1 hour',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/lash-lift-tint',
          readUrl: '/services/lash-lift-tint'
        },
        {
          name: 'Lash Lift & Brow Laminate',
          description:
            'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period of time. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          juniorPrice: '$149',
          seniorPrice: '$159',
          duration: '1 hour',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/lash-lift-tint',
          readUrl: '/services/lash-lift-tint'
        },
        {
          name: 'Lash Lift & Tint or dye, Brow sculp Lamination & Tint or Dye',
          description:'Lash lift using solution to the base of lashes to help restructure the hair into place. The lift lasts about 4-6 weeks, duration varies depending on your skin type. Tinting results provide dark colour look for your eyelashes',
          juniorPrice: '$169',
          seniorPrice: '$189',
          duration: '1 hour 15 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/lash-lift-tint',
          readUrl: '/services/lash-lift-tint'
        }
      ]
    },
    {
      category: 'Waxing Services',
      services: [
        {
          name: 'Full Face Waxing',
          description: 'Includes eyebrows, lip, chin, hairline, and full face.',
          price: '$60',
          duration: '40 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/full-face-wax',
          readUrl: '/services/full-face-wax'
        },
        {
          name: 'Hair line waxing',
          description: 'Includes eyebrows, lip, chin, hairline, and full face.',
          price: '$20',
          duration: '10 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/full-face-wax',
          readUrl: '/services/full-face-wax'
        },
        {
          name: 'Top Lip Waxing',
          description: 'Quick waxing service for upper lip hair.',
          price: '$9',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        },
        {
          name: 'Chin waxing ',
          description: 'Quick waxing service for chin hair.',
          price: '$9',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        }
      ]
    }
  ];
}
