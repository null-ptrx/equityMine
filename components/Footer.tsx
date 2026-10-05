import Image from 'next/image'
import logo from '../public/logo.png'
export function Footer () {
  return (
    <div>
              <div className='flex justify-center items-center gap-4'>
                  <Image src={logo} height={60} alt="logo" placeholder='blur' />
                  <span className='text-3xl'>Equity Mine</span>
              </div>

          <p>Helping families across Patna invest with a plan they understand, in plain language and without the jargon.</p>

          <div>
            <span>navigate</span>
            <ul>
                <li>home</li>
                  <li>services</li>
                  <li>resources</li>
                  <li>client login</li>
                  <li>about</li>
                  <li>tools</li>
                  <li>contact</li>
            </ul>

            <div>
                  <span>Contact</span>
                  <span>+91 87893 22694</span>
                  <span>milan.samajder@gmail.com</span>
                  <span>Mon – Sat · 10:00 AM to 7:00 PM</span>

            </div>

            <div>
                  <span>Office</span>
                  <span>Milan Samajder</span>
                  <span>B-72, Peoples Housing Colony, Lohia</span>
                  <span>B-72, Peoples Housing Colony, Lohia</span>
                  <span>Patna, Bihar 800020</span>
            </div>
          </div>

          <div>
              <span>© 2026 Milan Samajder · ARN-175151 · EUIN E353458</span>
              
          </div>
        
    </div>
  )
}

export default Footer