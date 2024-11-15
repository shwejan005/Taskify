'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className='flex items-center justify-between px-2 py-1'>
      {user && 
      <h1 className='text-2xl'>
        {user?.firstName}
        {"'s"} Space
      </h1>}
      {/*Breadcrumbs*/}

      <div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>

        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </div>
  )
}

export default Header