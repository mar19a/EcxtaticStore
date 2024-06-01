'use client'

import { Button } from '@/components/ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { useCart } from '@/hooks/use-cart'
import { cn, formatPrice } from '@/lib/utils'
import { trpc } from '@/trpc/client'
import { Check, Loader2, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Page = () => {
  const { items, removeItem } = useCart()

  const router = useRouter()

  const { mutate: createCheckoutSession, isLoading } =
    trpc.payment.createSession.useMutation({
      onSuccess: ({ url }) => {
        if (url) {
          router.push(url);
        } else {

          console.error('No checkout URL returned');
          alert('Failed to initiate checkout session.'); 
        }
      },
      onError: (error) => {

        console.error('Error creating checkout session:', error);
   
        alert('Error creating checkout session. Please try again.'); // Or use a more sophisticated error handling mechanism
      },
    });
  }
  