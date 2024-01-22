import  { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeScrolled = scrollPosition > 0;

      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-${isScrolled ? 'black' : 'transparent'}   sticky top-0 z-50 transition-colors duration-300`} border>
      <div className='w-[100vw] py-6 px-[50px] flex justify-between'>
        {/* Left Side Navbar */}
        <div className='flex items-center'>
          <div className='mx-3'>
            <img src="/images/logo.png" alt="logo" className='w-[148px] h-[40px]' />
          </div>
          <div className='mx-3 hidden lg:block'>
            <ul className='flex space-x-6'>
              <li className='cursor-pointer hover:text-red-500'>Home</li>
              <li className='cursor-pointer hover:text-red-500'>TV Shows</li>
              <li className='cursor-pointer hover:text-red-500'>Movies</li>
              <li className='cursor-pointer hover:text-red-500'>Webseries</li>
              <li className='cursor-pointer hover:text-red-500'>Documentary</li>
            </ul>
          </div>
        </div>
        {/* Left Side Navbar */}
        {/* Right Side Navbar */}
        <div>
          <div className='lg:hidden'>
             <MenuIcon/>
          </div>
          <div className='lg:flex  hidden items-center space-x-4'>
            <div>
              <SearchIcon />
            </div>
            <div>
              <CardGiftcardOutlinedIcon />
            </div>
            <div>
              <NotificationsNoneOutlinedIcon />
            </div>
            <div className='flex items-center'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className='w-[30px] h-[30px]' alt="account-icon logo" />
              <ArrowDropDownOutlinedIcon />
            </div>
          </div>
        </div>
        {/* Right Side Navbar */}
      </div>
    </div>
  );
}

export default Navbar;
