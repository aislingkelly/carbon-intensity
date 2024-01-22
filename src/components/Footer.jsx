import { HiOutlineLightBulb } from 'react-icons/hi2';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-20">
      <aside>
        <p>
          Built by{' '}
          <a href="https://aisling.ing/" className='after:content-["_↗"]'>
            Aisling
          </a>{' '}
          <br />
          Data provided by the{' '}
          <a
            href="https://carbonintensity.org.uk/"
            className='after:content-["_↗"]'
          >
            Carbon Intensity API
          </a>
        </p>
        <span className="text-8xl">
          <HiOutlineLightBulb />
        </span>
      </aside>
      <nav>
        <header className="footer-title">Get in touch</header>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/aislinging/" className="text-xl">
            <FaLinkedinIn /> <span className="hidden">LinkedIn</span>
          </a>
          <a href="https://github.com/aislingkelly" className="text-xl">
            <FaGithub />
            <span className="hidden">GitHub</span>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
