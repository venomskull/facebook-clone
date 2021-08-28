function HeaderIcon({Icon}) {
    return (
        <div className='flex items-center cursor-pointer md:px-10 sm:h-4 md:hover:bg-gray-100 rounded-xl 
        active:border-b-6  active:border-blue-500 group'>
            <Icon className='h-5 text-center sm:h-7 mx-auto  group-hover:text-blue-500' />
        </div>
    )
}

export default HeaderIcon
