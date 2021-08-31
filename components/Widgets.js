import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU', name: 'Deepan Premadasan'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU', name: 'Deepan Premadasan'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU', name: 'Deepan Premadasan'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU', name: 'Deepan Premadasan'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU', name: 'Deepan Premadasan'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU', name: 'Deepan Premadasan'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU', name: 'Deepan Premadasan'},
]

function Widgets() {
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 m-5'>
            <div className='flex justify-between items-center text-gray-400 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6'/>
                    <SearchIcon className='h-6'/>
                    <DotsHorizontalIcon className='h-6'/>
                </div>
            </div>
            {contacts.map(contact => (
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
        </div>
    )
}

export default Widgets
