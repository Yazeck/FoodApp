import { Link } from 'react-router';
import MobileNav from './MobileNav';
import MainNav from './MainNav';

export default function Header(){
 return (
  <div className="border-b-2 Dborder-b-orange-500 ру-6">
        <div className="container mx-auto flex
                     justify-between items-center">
            <Link to="/"
               className='text-3xl font-bold tracking-tight
                         • text-orange-500 '>
                AppITZFood.com
            </Link>
            <div className="hidden md">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <MainNav />
            </div>    
        
        </div>
  </div>
  )
}