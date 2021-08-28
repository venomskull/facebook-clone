import Image from "next/image";
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import HeaderIcon from "./HeaderIcon";

function Header() {
    return (
        <div className='sticky top-0 z-50 flex items-center bg-white shadow-md p-2 lg:p-5'>
            {/* LEFT */}
            <div className='flex items-center'>
                <Image src='https://barmee.shop/wp-content/uploads/2020/04/18-185958_transparent-fb-icon-png-transparent-background-facebook-icon.png' 
                    alt=''
                    width={40} height={40}
                    layout='fixed'
                /> 
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />
                    <input className='bg-transparent items-center ml-2 outline-none 
                        placeholder-gray-500 flex-shrink' type="text" placeholder='Search Facebook' 
                    />
                </div>
            </div>

            {/* CENTER */}
            <div className='flex flex-grow justify-center'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* RIGHT */}


        </div>
    )
}

export default Header
