import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from 'lucide-react'
import Link from 'next/link'

const perks = [
  {
    name: 'Instant Delivery & Exclusive Apparel',
    Icon: ArrowDownToLine,
    description:
      'In the fast-paced world of automotive enthusiasts, we understand the importance of speed. That is why Ecxtatic offers instant delivery of digital assets, alongside a diverse range of automotive-themed clothing designed to let you wear your passion. Our apparel line includes everything from t-shirts and hoodies to hats and accessories, each piece reflecting the spirit of the automotive world.',
  },
  {
    name: 'Commitment to Quality and Innovation',
    Icon: CheckCircle,
    description:
      'Our platform is a testament to the fusion of technology and style. Every digital asset and piece of clothing on Ecxtatic undergoes a meticulous verification process, ensuring top-tier quality that meets our rigorous standards. ',
  },
  {
    name: 'Driven by Community and Sustainability',
    Icon: Leaf,
    description:
      "Ecxtatic is more than a brand; it's a community committed to making a difference. We pledge 1% of our sales to environmental preservation, ensuring that with every purchase, you're contributing to the health of our planet. Our commitment extends beyond the digital realm, embracing sustainable practices in our clothing line to minimize our environmental footprint.",
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Dive into our collection today and discover the possibilities that await. {' '}
            <span className='text-blue-600'>
              Clothing & Digital assets
            </span>
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Welcome to the intersection of automotive passion and lifestyle expression — welcome to Ecxtatic.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
              Browse Trending
            </Link>
            
          </div>
        </div>

        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Brand new'
        />
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>
