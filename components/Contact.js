import Image from "next/image";

function Contact({src, name}) {
    return (
        <div className='flex items-center space-x-3 mb-2 hover:bg-gray-200 cursor-pointer 
            rounded-xl p-2 relative'>
            <Image src={src} alt='' width={50} height={50} 
                objectFit='cover' 
                layout='fixed' // doesnot shrink
                className='rounded-full'
            />
            <p>{name}</p>
            <div className='absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full animate-bounce' />
        </div>
    )
}

export default Contact
