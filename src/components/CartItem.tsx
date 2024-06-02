import { PRODUCT_CATEGORIES } from '@/config'
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/utils'
import { Product } from '@/payload-types'
import { ImageIcon, X } from 'lucide-react'
import Image from 'next/image'

const CartItem = ({ product }: { product: Product }) => {
  const { image } = product.images[0]

  const { removeItem } = useCart()

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label


export default CartItem
