import Link from 'next/link'


const Navbar = () => {
  return (
   <nav className="grid text-white">
    <Link href='./main'>Main</Link>
    <Link href='./about'>About</Link>
    <Link href='./cases'>Cases</Link>
    <Link href='./faq'>FAQ</Link>
    <Link href='./contact_us'>Contact Us</Link>
   </nav>
  )
}

export default Navbar;