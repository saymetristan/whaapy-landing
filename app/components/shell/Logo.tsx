import Link from 'next/link'

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Whaapy" className={`group inline-flex items-center gap-2 ${className ?? ''}`}>
      <span className="relative grid h-7 w-7 place-items-center rounded-md bg-accent text-black">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M4 18l1.4-4.2A7 7 0 1 1 9.2 19L4 18z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-[15px] font-medium tracking-tight">whaapy</span>
    </Link>
  )
}
