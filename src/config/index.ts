export const PRODUCT_CATEGORIES = [
  {
    label: 'Merch',
    value: 'Merch' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=ui_kits`,
        imageSrc: '/nav/ui-kits/editors.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/nav/ui-kits/newarrival.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
        imageSrc: '/nav/ui-kits/bestselling.jpg',
      },
    ],
  },
  {
    label: 'Digital Assets',
    value: 'Digital_Assets' as const,
    featured: [
      {
        name: 'Bestselling Photo Collections',
        href: `/products?category=icons`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'Best Selling Video Tutorials',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=icons',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
]
