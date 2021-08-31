import Image from "next/image";

function StoryCard({name, source, profile}) {
    return (
        <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32  overflow-x p-3 cursor-pointer
            transition-transform ease-in duration-200 hover:scale-105
            '>
                {/* border-solid border-2 border-black */}
            <Image className='rounded-full opacity-0 lg:opacity-100 absolute top-10 z-40'
                src={profile}
                alt=''
                width={40}
                height={40}
                layout='fixed'
                objectFit='cover'
            />
            <Image className='object-cover filter brightness-75 rounded-full lg:rounded-3xl' 
                src={source}
                alt=''
                layout='fill'
            />
            <p className=' absolute opacity-0 lg:opacity-100 text-white truncate bottom-4 w-5/6 text-sm font-bold
            '>
                {name}
            </p>
        </div>
    )
}

export default StoryCard
