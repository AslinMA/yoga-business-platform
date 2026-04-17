import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'

type MainLayoutProps = {
  brandName: string
  children: ReactNode
}

function MainLayout({ brandName, children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar brandName={brandName} />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout