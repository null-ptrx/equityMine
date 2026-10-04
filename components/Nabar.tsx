import Image from 'next/image'
import logo from '../public/logo.png'

export function Navbar() {
  return (
    <nav className='flex justify-between py-3 px-10 border-b'>
      <div className='flex justify-center items-center gap-4'>
        <Image src={logo} height={60} alt="logo" placeholder='blur' />
        <span className='text-3xl'>Equity Mine</span>
      </div>

      <div className='flex items-center justify-center'>
        <ul className='flex text-xl gap-8'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Tools</li>
          <li>Resources</li>
          <li>Contact</li>
          <li>Client Login</li>
        </ul>
      </div>

    </nav>
  );
}
