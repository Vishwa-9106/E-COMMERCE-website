import { client } from './lib/client'

export const categories = [
  {
    _type: 'category',
    title: 'GADGET ACCESSORIES',
    slug: { _type: 'slug', current: 'gadget-accessories' },
    description: 'All gadget accessories including phones, laptops, and other electronic devices'
  },
  {
    _type: 'category',
    title: 'AIRBUDS',
    slug: { _type: 'slug', current: 'airbuds' },
    description: 'Wireless earbuds and accessories'
  },
  {
    _type: 'category',
    title: 'CAMERAS',
    slug: { _type: 'slug', current: 'cameras' },
    description: 'Digital cameras, lenses and photography equipment'
  }
];

const seedCategories = async () => {
  try {
    console.log('🌱 Seeding categories...')
    
    // Create each category
    for (const category of categories) {
      console.log(`Creating category: ${category.title}`)
      await client.create(category)
    }

    console.log('✅ Categories seeded successfully!')
  } catch (error) {
    console.error('Error seeding categories:', error)
  }
}

export default seedCategories; 