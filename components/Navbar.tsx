import { Link } from 'react-scroll/modules';

const Navbar = () => {

  return (
   <nav className="grid text-white">
    <Link to='main'>Main</Link>
    <Link to='about'>About</Link>
    <Link to='cases'>Cases</Link>
    <Link to='faq'>FAQ</Link>
    <Link to='contact_us'>Contact Us</Link>
   </nav>
  )
}

export default Navbar;