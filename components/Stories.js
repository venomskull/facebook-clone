import StoryCard from "./StoryCard";

const stories = [
    {
        name: 'Deepan Premadasan',
        source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU',
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvl-3e-0zfhAu9fKVI5Ub1Yl3Bc6OxsQBeQ&usqp=CAU'
    },
    {
        name: 'Deepan Premadasan',
        source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU',
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvl-3e-0zfhAu9fKVI5Ub1Yl3Bc6OxsQBeQ&usqp=CAU'
    },
    {
        name: 'Deepan Premadasan',
        source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU',
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvl-3e-0zfhAu9fKVI5Ub1Yl3Bc6OxsQBeQ&usqp=CAU'
    },
    {
        name: 'Deepan Premadasan',
        source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU',
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvl-3e-0zfhAu9fKVI5Ub1Yl3Bc6OxsQBeQ&usqp=CAU'
    },
    {
        name: 'Deepan Premadasan',
        source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU',
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvl-3e-0zfhAu9fKVI5Ub1Yl3Bc6OxsQBeQ&usqp=CAU'
    },
    // {
    //     name: 'Deepan Premadasan',
    //     source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU',
    //     profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvl-3e-0zfhAu9fKVI5Ub1Yl3Bc6OxsQBeQ&usqp=CAU'
    // },
    // {
    //     name: 'Deepan Premadasan',
    //     source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU',
    //     profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvl-3e-0zfhAu9fKVI5Ub1Yl3Bc6OxsQBeQ&usqp=CAU'
    // },
    // {
    //     name: 'Deepan Premadasan',
    //     source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU',
    //     profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvl-3e-0zfhAu9fKVI5Ub1Yl3Bc6OxsQBeQ&usqp=CAU'
    // },
    // {
    //     name: 'Deepan Premadasan',
    //     source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB8hHQh3usGClFfvUNLh4Hr4Qsh-g05tKxQ&usqp=CAU',
    //     profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvl-3e-0zfhAu9fKVI5Ub1Yl3Bc6OxsQBeQ&usqp=CAU'
    // },
];

function Stories() {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {stories.map((story, key) => (
                <StoryCard key={key} name={story.name} source={story.source} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
