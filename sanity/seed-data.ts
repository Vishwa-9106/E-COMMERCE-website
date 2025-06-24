export const products = [
  {
    _type: 'product',
    name: 'Apple AirPods 3rd generation',
    slug: { _type: 'slug', current: 'apple-airpods-3rd-gen' },
    description: 'Spatial audio with dynamic head tracking, Adaptive EQ, Custom high-excursion driver',
    price: 1700.00,
    originalPrice: 1870.00,
    discount: 170,
    stock: 9,
    status: 'hot',
    variant: 'gadget',
    isFeatured: true,
    categories: [
      {
        _type: 'reference',
        _ref: 'gadget-accessories'
      },
      {
        _type: 'reference',
        _ref: 'airbuds'
      }
    ],
    images: [
      {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-airpods-3rd-gen'
        }
      }
    ],
    reviewCount: 5,
    rating: 4.5
  },
  {
    _type: 'product',
    name: 'Canon EOS 250D 24.1MP Full HD',
    slug: { _type: 'slug', current: 'canon-eos-250d' },
    description: '24.1MP APS-C CMOS sensor, DIGIC 8 processor, 4K video recording',
    price: 750.00,
    originalPrice: 810.00,
    discount: 60,
    stock: 20,
    status: 'sale',
    variant: 'gadget',
    isFeatured: true,
    categories: [
      {
        _type: 'reference',
        _ref: 'gadget-accessories'
      },
      {
        _type: 'reference',
        _ref: 'cameras'
      }
    ],
    images: [
      {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-canon-250d'
        }
      }
    ],
    reviewCount: 5,
    rating: 4.8
  },
  {
    _type: 'product',
    name: 'HP Laptop, AMD Ryzen 5 5500U',
    slug: { _type: 'slug', current: 'hp-laptop-ryzen5' },
    description: 'AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD, 15.6" FHD Display',
    price: 1659.00,
    originalPrice: 1907.85,
    discount: 248.85,
    stock: 17,
    status: 'hot',
    variant: 'gadget',
    isFeatured: true,
    categories: [
      {
        _type: 'reference',
        _ref: 'gadget-accessories'
      }
    ],
    images: [
      {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-hp-laptop'
        }
      }
    ],
    reviewCount: 5,
    rating: 4.6
  },
  {
    _type: 'product',
    name: 'Mpow - CHE2S On-Ear Headphones',
    slug: { _type: 'slug', current: 'mpow-che2s-headphones' },
    description: 'Wired Headphones with Microphone, Lightweight Comfort, Red',
    price: 550.00,
    originalPrice: 605.00,
    discount: 55,
    stock: 5,
    status: 'hot',
    variant: 'gadget',
    isFeatured: true,
    categories: [
      {
        _type: 'reference',
        _ref: 'gadget-accessories'
      }
    ],
    images: [
      {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-mpow-headphones'
        }
      }
    ],
    reviewCount: 5,
    rating: 4.7
  },
  {
    _type: 'product',
    name: 'Realme Note 60x (4/64GB)',
    slug: { _type: 'slug', current: 'realme-note-60x' },
    description: '4GB RAM, 64GB Storage, 50MP Camera, 5000mAh Battery',
    price: 699.00,
    originalPrice: 768.90,
    discount: 69.90,
    stock: 9,
    status: 'sale',
    variant: 'gadget',
    isFeatured: true,
    categories: [
      {
        _type: 'reference',
        _ref: 'gadget-accessories'
      }
    ],
    images: [
      {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-realme-note-60x'
        }
      }
    ],
    reviewCount: 5,
    rating: 4.5
  },
  {
    _type: 'product',
    name: 'iPhone 15 Pro Max',
    slug: { _type: 'slug', current: 'iphone-15-pro-max' },
    description: 'Latest iPhone with A17 Pro chip, titanium design, and 48MP camera system',
    price: 1199,
    discount: 0,
    stock: 50,
    status: 'new',
    variant: 'smartphones',
    isFeatured: true,
  },
  {
    _type: 'product',
    name: 'Samsung Galaxy S24 Ultra',
    slug: { _type: 'slug', current: 'samsung-galaxy-s24-ultra' },
    description: 'Premium Android flagship with S Pen, AI features, and 200MP camera',
    price: 1299,
    discount: 100,
    stock: 35,
    status: 'hot',
    variant: 'smartphones',
    isFeatured: true,
  },
  {
    _type: 'product',
    name: 'Google Pixel 8 Pro',
    slug: { _type: 'slug', current: 'google-pixel-8-pro' },
    description: 'Advanced AI photography and pure Android experience',
    price: 999,
    discount: 50,
    stock: 25,
    status: 'sale',
    variant: 'smartphones',
    isFeatured: true,
  },
  {
    _type: 'product',
    name: 'AirPods Pro (2nd Gen)',
    slug: { _type: 'slug', current: 'airpods-pro-2nd-gen' },
    description: 'Premium wireless earbuds with active noise cancellation',
    price: 249,
    discount: 30,
    stock: 100,
    status: 'hot',
    variant: 'accessories',
    isFeatured: true,
  },
  {
    _type: 'product',
    name: 'Samsung Galaxy Watch 6',
    slug: { _type: 'slug', current: 'samsung-galaxy-watch-6' },
    description: 'Advanced health tracking and smart features',
    price: 329,
    discount: 40,
    stock: 45,
    status: 'sale',
    variant: 'accessories',
    isFeatured: false,
  },
  {
    _type: 'product',
    name: 'Anker 65W GaN Charger',
    slug: { _type: 'slug', current: 'anker-65w-gan-charger' },
    description: 'Fast charging for multiple devices simultaneously',
    price: 49.99,
    discount: 10,
    stock: 150,
    status: 'new',
    variant: 'accessories',
    isFeatured: false,
  },
  {
    _type: 'product',
    name: 'OnePlus 12',
    slug: { _type: 'slug', current: 'oneplus-12' },
    description: 'Flagship killer with Snapdragon 8 Gen 3 and 100W charging',
    price: 899,
    discount: 0,
    stock: 30,
    status: 'new',
    variant: 'smartphones',
    isFeatured: true,
  },
  {
    _type: 'product',
    name: 'Nothing Phone 2',
    slug: { _type: 'slug', current: 'nothing-phone-2' },
    description: 'Unique design with Glyph interface and clean Android',
    price: 699,
    discount: 50,
    stock: 20,
    status: 'sale',
    variant: 'smartphones',
    isFeatured: false,
  },
  {
    _type: 'product',
    name: 'Samsung 45W Super Fast Charger',
    slug: { _type: 'slug', current: 'samsung-45w-super-fast-charger' },
    description: 'Official Samsung super fast charging adapter',
    price: 49.99,
    discount: 10,
    stock: 75,
    status: 'new',
    variant: 'accessories',
    isFeatured: false,
  },
  {
    _type: 'product',
    name: 'Spigen Ultra Hybrid Case',
    slug: { _type: 'slug', current: 'spigen-ultra-hybrid-case' },
    description: 'Crystal clear protection for your smartphone',
    price: 29.99,
    discount: 5,
    stock: 200,
    status: 'hot',
    variant: 'accessories',
    isFeatured: false,
  }
]; 