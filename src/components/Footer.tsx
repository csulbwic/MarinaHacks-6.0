import Image from 'next/image';
import { Orienta } from 'next/font/google';

const orienta = Orienta({ weight: '400', subsets: ['latin'] });

export const Footer = () => {
  return (
    <footer className="footer p-4 text-neutral-content" style={{backgroundColor: '#FFC8DD'}}>
      <div className="flex items-center w-full place-content-between grid-flow-col">
        <a href="https://csulbwic.com/" target='_blank' rel="noopener noreferrer">
          <Image
            src={"/images/WiC-logo-black.png"}
            alt='wiclogo'
            width={50}
            height={50}
          />
        </a>
        <p className={`text-white text-xl ${orienta.className}`}>Copyright © MarinaHacks. All Rights Reserved</p>
      </div>
    </footer>
  );
};
