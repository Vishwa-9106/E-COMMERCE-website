import { client } from './lib/client'
import { products } from './seed-data'
import seedCategories from './seed-categories'

const seedData = async () => {
  try {
    // First seed categories
    await seedCategories()
    
    // Then seed products
    console.log('🌱 Seeding products...')
    for (const product of products) {
      console.log(`Creating product: ${product.name}`)
      await client.create(product)
    }
    console.log('✅ Products seeded successfully!')

  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seedData() 