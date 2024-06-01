'use client'

import { Icons } from '@/components/Icons'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validator'
import { trpc } from '@/trpc/client'
import { toast } from 'sonner'
import { ZodError } from 'zod'
import { useRouter } from 'next/navigation'

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const router = useRouter()

  const { mutate, isLoading } =
    trpc.auth.createPayloadUser.useMutation({
      onError: (err) => {
        if (err.data?.code === 'CONFLICT') {
          toast.error(
            'This email is already in use. Sign in instead?'
          )

          return
        }

        if (err instanceof ZodError) {
          toast.error(err.issues[0].message)

          return
        }

        toast.error(
          'Something went wrong. Please try again.'
        )
      },
      onSuccess: ({ sentToEmail }) => {
        toast.success(
          `Verification email sent to ${sentToEmail}.`
        )
        router.push('/verify-email?to=' + sentToEmail)
      },
    })

  const onSubmit = ({
    email,
    password,
  }: TAuthCredentialsValidator) => {
    mutate({ email, password })
  }
