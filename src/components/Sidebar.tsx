import React from 'react'
import NewDocumentButton from './NewDocumentButton'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'



const Sidebar = () => {

  const menuOptions = () => {
    <>
      <NewDocumentButton/>

      {/* My Documents */}
      {/* List... */}
      {/* Shared with me */}
      {/* List....  */}
    </>

  }
  return (
    <div className='p-2 md:p-5 bg-gray-300'> 
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger>
            <MenuIcon className='p-2 hover:opacity-30 rounded-lg' size={40}/>
          </SheetTrigger>
          <SheetContent side='left' className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>
                {/*options*/}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className='hidden md:inline'>
        <NewDocumentButton/>
      </div>
    </div>
  )
}

export default Sidebar