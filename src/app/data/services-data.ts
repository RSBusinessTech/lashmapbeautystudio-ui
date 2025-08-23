export interface ServiceItem {
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  juniorPrice?: string;
  seniorPrice?: string;
  price?: string;
  duration: string;
  bookUrl: string;
  readUrl: string;
}

export interface ServiceCategory {
  category: string;
  services: ServiceItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
      category: 'Eyebrow Services',
      services: [
        {
          name: 'Brow Tinting',
          description:'Enhance your brows with a natural tint that lasts up to 4 weeks on hair and a few days on skin. Smudge-proof and water-resistant.',
          detailedDescription:'Enhance your brows with a natural tint that lasts up to 4 weeks on hair and a few days on skin. Smudge-proof and water-resistant.',
          juniorPrice: '$24',
          seniorPrice: '$24',
          duration: '15 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-tinting',
          readUrl: '/services/brow-tinting'
        },
        {
          name: 'Brow Sculpt',
          description: 'Includes brow mapping, precision waxing, trimming, and tweezing for a perfectly defined shape.',
          detailedDescription:'Includes brow mapping, precision waxing, trimming, and tweezing for a perfectly defined shape.',
          juniorPrice: '$25',
          seniorPrice: '$29',
          duration: '20 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt',
          readUrl: '/services/brow-sculpt'
        },
        {
          name: 'Brow Sculpt & Tint',
          description:'Combination of brow sculpting and tinting for a defined, fuller look. Tint lasts up to 4 weeks on hair.',
          detailedDescription:'Combination of brow sculpting and tinting for a defined, fuller look. Tint lasts up to 4 weeks on hair.',
          juniorPrice: '$40',
          seniorPrice: '$50',
          duration: '30 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt-tint',
          readUrl: '/services/brow-sculpt-tint'
        },
        {
          name: 'Brow Sculpt & Dye ',
          description:'Brow sculpt and hybrid dye service, followed by cleansing the brows area, mapping precision waxing, tinting, trimming, tweezing. Eyebrows dye as henna effect that provide intense and long lasting effect, in a different colour options that are customised to suit you. Extra long-term effect lasts up to 7 days on skin and up to 7 weeks on hairs.',
          detailedDescription:'Brow sculpt and hybrid dye service, followed by cleansing the brows area, mapping precision waxing, tinting, trimming, tweezing. Eyebrows dye as henna effect that provide intense and long lasting effect, in a different colour options that are customised to suit you. Extra long-term effect lasts up to 7 days on skin and up to 7 weeks on hairs.',
          juniorPrice: '$50',
          seniorPrice: '$60',
          duration: '40 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt-tint',
          readUrl: '/services/brow-sculpt-tint'
        },
        {
          name: 'Brow Laminate ',
          description: 'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          detailedDescription: 'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          juniorPrice: '$69',
          seniorPrice: '$79',
          duration: '35 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt-tint',
          readUrl: '/services/brow-sculpt-tint'
        },
        {
          name: 'Brow Lamination & Sculpt ',
          description: 'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          detailedDescription:'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          juniorPrice: '$79',
          seniorPrice: '$89',
          duration: '50 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/brow-sculpt-tint',
          readUrl: '/services/brow-sculpt-tint'
        },
        {
          name: 'Brow Lamination, Sculpt and Dye',
          description:'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period of time. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          detailedDescription:'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period of time. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
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
      category: 'Lash Brow Services',
      services: [
        {
          name: 'Lash Tint/Dye ',
          description:'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period of time. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          detailedDescription:'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period of time. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          juniorPrice: '$24',
          seniorPrice: '$24',
          duration: '40 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/lash-lift',
          readUrl: '/services/lash-lift'
        },
        {
          name: 'Lash Lift',
          description:'Lash lifting solution reshapes lashes at the root for a natural curl that lasts 4–6 weeks.',
          detailedDescription:'Lash lifting solution reshapes lashes at the root for a natural curl that lasts 4–6 weeks.',
          juniorPrice: '$89',
          seniorPrice: '$99',
          duration: '40 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/lash-lift',
          readUrl: '/services/lash-lift'
        },
        {
          name: 'Lash Lift & Tint',
          description:'Lift plus tint for darker, fuller-looking lashes. Results last 4–6 weeks.',
          detailedDescription:'Lift plus tint for darker, fuller-looking lashes. Results last 4–6 weeks.',
          juniorPrice: '$99',
          seniorPrice: '$109',
          duration: '1 hour',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/lash-lift-tint',
          readUrl: '/services/lash-lift-tint'
        },
        {
          name: 'Lash Lift & Brow Laminate',
          description:'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period of time. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          detailedDescription:'Brow lamination is basically a perm for your brows, as it gives them a set, uniform shape for an extended period of time. Instead of curls, a setting lotion helps brows hair stay brush up and lifted upward for about 4-6 weeks. If you are lucky, you can wake up with bolder, fuller brows in a beautiful shape for up to two months.',
          juniorPrice: '$149',
          seniorPrice: '$159',
          duration: '1 hour',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/lash-lift-tint',
          readUrl: '/services/lash-lift-tint'
        },
        {
          name: 'Lash Lift & Tint or dye, Brow sculp Lamination & Tint or Dye',
          description:'Lash lift using solution to the base of lashes to help restructure the hair into place. The lift lasts about 4-6 weeks, duration varies depending on your skin type. Tinting results provide dark colour look for your eyelashes.',
          detailedDescription:'Lash lift using solution to the base of lashes to help restructure the hair into place. The lift lasts about 4-6 weeks, duration varies depending on your skin type. Tinting results provide dark colour look for your eyelashes.',
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
          detailedDescription:'Includes eyebrows, lip, chin, hairline, and full face.',
          juniorPrice: '$60',
          duration: '40 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/full-face-wax',
          readUrl: '/services/full-face-wax'
        },
        {
          name: 'Hair line waxing',
          description: 'Includes eyebrows, lip, chin, hairline, and full face.',
          detailedDescription:'Includes eyebrows, lip, chin, hairline, and full face.',
          juniorPrice: '$20',
          duration: '10 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/full-face-wax',
          readUrl: '/services/full-face-wax'
        },
        {
          name: 'Top Lip Waxing',
          description: 'Quick waxing service for upper lip hair.',
          detailedDescription:'Quick waxing service for upper lip hair.',
          juniorPrice: '$9',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        },
        {
          name: 'Chin waxing',
          description: 'Quick waxing service for chin hair.',
          detailedDescription:'Quick waxing service for chin hair.',
          juniorPrice: '$9',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        }
      ]
    },
    {
      category: 'Eyelash Extensions',
      services: [
        {
          name: 'Classic Natural Set',
          description: 'Classic eyelash extensions are applied one extension to one natural lash, giving you the most natural appearance. We apply around 60 extensions per eye, creating perfect for everyday wear.',
          detailedDescription:'Classic eyelash extensions are applied one extension to one natural lash, giving you the most natural appearance. We apply around 60 extensions per eye, creating perfect for everyday wear.',
          juniorPrice: '$60',
          duration: '40 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/full-face-wax',
          readUrl: '/services/full-face-wax'
        },
        {
          name: 'Classic Full Set',
          description: 'Classic eyelash extensions are applied one extension to one natural lash, giving a soft, natural look perfect for everyday wear. We apply around 90 extensions per eye, which usually covers nearly all of your available natural lashes.',
          detailedDescription:'Classic eyelash extensions are applied one extension to one natural lash, giving a soft, natural look perfect for everyday wear. We apply around 90 extensions per eye, which usually covers nearly all of your available natural lashes.',
          juniorPrice: '$20',
          duration: '10 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/full-face-wax',
          readUrl: '/services/full-face-wax'
        },
        {
          name: 'Glam Set',
          description: 'Eyelash extensions in the 2D style involve applying two lightweight extensions to each natural lash. This set offers a more defined look than classic lashes. We apply around 160 extensions per eye, creating a fuller appearance that’s thicker than a classic set, yet still softer and more natural than a full volume set.',
          detailedDescription:'Eyelash extensions in the 2D style involve applying two lightweight extensions to each natural lash. This set offers a more defined look than classic lashes. We apply around 160 extensions per eye, creating a fuller appearance that’s thicker than a classic set, yet still softer and more natural than a full volume set.',
          juniorPrice: '$9',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        },
        {
          name: 'Wet Look Set',
          description: 'The Wet Set, a popular trend in 2024, is perfect for adding texture and a spiky effect, making it ideal for clients who love the ‘Kim K’ style. This look is achieved by using narrow, almost closed volume fans placed along the entire lash line to mimic the appearance of wet lashes. Essentially, wet-look extensions are similar to classic lash extensions but with more lash bundles, creating a darker, thicker, and bolder finish.',
          detailedDescription:'The Wet Set, a popular trend in 2024, is perfect for adding texture and a spiky effect, making it ideal for clients who love the ‘Kim K’ style. This look is achieved by using narrow, almost closed volume fans placed along the entire lash line to mimic the appearance of wet lashes. Essentially, wet-look extensions are similar to classic lash extensions but with more lash bundles, creating a darker, thicker, and bolder finish.',
          juniorPrice: '$9',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        },
         {
          name: 'Natural Wet Look Set',
          description: 'Ideal for many eye shapes, this style works best for clients with medium to full natural lashes. Each eye is enhanced with 60 closed-volume fans for a soft, textured finish.',
          detailedDescription:'Ideal for many eye shapes, this style works best for clients with medium to full natural lashes. Each eye is enhanced with 60 closed-volume fans for a soft, textured finish.',
          juniorPrice: '$9',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        },
         {
          name: 'Full Wet Look Set',
          description: 'Also suitable for various eye shapes, this style is perfect for clients with medium to full natural lashes. Each eye is styled with 80 closed-volume fans for a bolder, more dramatic wet-look effect.',
          detailedDescription:'Also suitable for various eye shapes, this style is perfect for clients with medium to full natural lashes. Each eye is styled with 80 closed-volume fans for a bolder, more dramatic wet-look effect.',
          juniorPrice: '$9',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        }
      ]
    },
       {
      category: 'Hybrid Eyelash Extensions',
      services: [
        {
          name: 'Russian Volume Eyelash Extensions - Natural Volume Set',
          description: 'In this set, 3D or 4D volume fans are applied to each natural lash (around 60–65 fans per eye), creating a light and natural volume look with minimal weight on your natural lashes. More noticeable than a Classic Set, yet still soft and wearable.',
          detailedDescription:'In this set,3D or 4D volume fans are applied to each natural lash (around 60–65 fans per eye), creating a light and natural volume look with minimal weight on your natural lashes. More noticeable than a Classic Set, yet still soft and wearable.',
          juniorPrice: '$60',
          duration: '40 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/full-face-wax',
          readUrl: '/services/full-face-wax'
        },
        {
          name: 'Volume Set',
          description: 'Using 3–4D fans per natural lash, this style delivers a fuller, more glamorous look while keeping the weight light on your natural lashes. Bolder than both the Classic and Hybrid sets, this option adds extra lashes for a dramatic, sultry effect.',
          detailedDescription:'Using 3–4D fans per natural lash, this style delivers a fuller, more glamorous look while keeping the weight light on your natural lashes. Bolder than both the Classic and Hybrid sets, this option adds extra lashes for a dramatic, sultry effect.',
          juniorPrice: '$20',
          duration: '10 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/full-face-wax',
          readUrl: '/services/full-face-wax'
        },
        {
          name: 'Russian Volume - Full Set',
          description: 'For maximum impact, 5–10D fans are applied to each natural lash, creating the thickest, fullest lash style available. Best suited for clients with naturally stronger lashes that can support the density of the fans.',
          detailedDescription:'For maximum impact, 5–10D fans are applied to each natural lash, creating the thickest, fullest lash style available. Best suited for clients with naturally stronger lashes that can support the density of the fans.',
          juniorPrice: '$9',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        },
        {
          name: 'Wispy Lash',
          description: 'A creative twist on classic or volume lashes, this advanced technique delivers the famous “Kim K” effect – a textured, spiky, and eye-catching style that stands out.',
          detailedDescription:'A creative twist on classic or volume lashes, this advanced technique delivers the famous “Kim K” effect – a textured, spiky, and eye-catching style that stands out.',
          juniorPrice: '$30- refill $15 (15 min duration)',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        },
         {
          name: 'Coloured Lash extension ',
          description: 'Coloured lash extensions are a fun and creative way to make your eyes pop and express your personality.',
          detailedDescription:'Coloured lash extensions are a fun and creative way to make your eyes pop and express your personality.',
          juniorPrice: '$30- refill $15 (15 min duration)',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        },
         {
          name: 'Just Removal',
          description: 'Safe and gentle removal of eyelash extensions without damaging your natural lashes.',
          detailedDescription:'Safe and gentle removal of eyelash extensions without damaging your natural lashes.',
          juniorPrice: '$30- with ne $15 (15 min duration)',
          duration: '5 min',
          image: 'assets/images/staff2.png',
          bookUrl: '/book/top-lip-wax',
          readUrl: '/services/top-lip-wax'
        }
      ]
    }
  ];
