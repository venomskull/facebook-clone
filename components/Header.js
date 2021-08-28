import Image from "next/image";
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <div>
            {/* LEFT */}
            <div className='flex items-center'>
                <Image src='https://barmee.shop/wp-content/uploads/2020/04/18-185958_transparent-fb-icon-png-transparent-background-facebook-icon.png' 
                    alt=''
                    width={40} height={40}
                    layout='fixed'
                /> 
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />
                    <input className='bg-transparent items-center ml-2 outline-none placeholder-gray-500' type="text" placeholder='Search Facebook' />
                </div>
            </div>

            {/* CENTER */}
            <div className='flex flex-grow justify-center'>
                <div>

                </div>
            </div>

            {/* RIGHT */}


        </div>
    )
}

export default Header
