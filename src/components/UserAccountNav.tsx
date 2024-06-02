'use client'

import { User } from '@/payload-types'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

const UserAccountNav = ({ user }: { user: User }) => {
  const { signOut } = useAuth()

  return (
    <DropdownMenu>
    <DropdownMenuTrigger
      asChild
      className='overflow-visible'>
      <Button
        variant='ghost'
        size='sm'
        className='relative'>
        My account
      </Button>
    </DropdownMenuTrigger>
  )
}

export default UserAccountNav
