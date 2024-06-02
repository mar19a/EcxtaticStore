import { getServerSideUser } from '@/lib/payload-utils'
import Image from 'next/image'
import { cookies } from 'next/headers'
import { getPayloadClient } from '@/get-payload'
import { notFound, redirect } from 'next/navigation'
import { Product, ProductFile, User } from '@/payload-types'
import { PRODUCT_CATEGORIES } from '@/config'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import PaymentStatus from '@/components/PaymentStatus'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const ThankYouPage = async ({
  searchParams,
}: PageProps) => {
  const orderId = searchParams.orderId
  const nextCookies = cookies()

  const { user } = await getServerSideUser(nextCookies)
  const payload = await getPayloadClient()

  const { docs: orders } = await payload.find({
    collection: 'orders',
    depth: 2,
    where: {
      id: {
        equals: orderId,
      },
    },
  })

  export default ThankYouPage