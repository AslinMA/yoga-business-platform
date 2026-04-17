type FooterProps = {
  brandName: string
  footerText: string
}

function Footer({ brandName, footerText }: FooterProps) {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-stone-700">{brandName}</p>
        <p>{footerText}</p>
      </div>
    </footer>
  )
}

export default Footer