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
