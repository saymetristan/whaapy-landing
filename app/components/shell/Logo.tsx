import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Whaapy"
      className={`group inline-flex items-center gap-2 ${className ?? ''}`}
    >
      <Image
        src="/icons/whaapy-icon-128.png"
        alt=""
        width={28}
        height={28}
        priority
        className="h-7 w-7 rounded-md"
      />
      <span className="font-display text-[15px] font-bold tracking-tight text-text">whaapy</span>
    </Link>
  )
}
