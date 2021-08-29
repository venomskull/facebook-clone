import Stories from "./Stories";

function Feed() {
    return (
        <div className='h-screen pb-44 pt-6 flex-grow mr-4 xl:mr-40 overflow-y-auto
        border-solid border-2 border-red-500'>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl
                border-solid border-2 border-yellow-500'>
                {/* STORIES */}
                <Stories />

                {/* INPUTBOX */}


                {/* POSTS */}

            </div>
        </div>
    )
}

export default Feed
