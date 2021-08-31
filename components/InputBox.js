/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { useRef, useState } from "react";
import { db, storage } from '../firebase';
import firebase from 'firebase';


function InputBox() {
    const [session] = useSession();
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url');

                removeImage();

                uploadTask.on(
                    'state_change',
                    null,
                    (error) => console.log(error),
                    () => {
                        // When the upload completes
                        storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                            db.collection('posts').doc(doc.id).set({
                                postImage: url
                            }, { merge: true })
                        })

                    });
            }
        })

        inputRef.current.value = '';
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className='bg-white p-2 mt-6 rounded-2xl shadow-md text-gray-500 font-medium'>
            <div className='flex items-center space-x-4 p-4'>
                <Image className='rounded-full'
                    src={session.user.image} alt='' height={40} width={40} layout='fixed'
                />
                <form className='flex flex-1'>
                    <input type="text" placeholder={`What is in your mind, ${session.user.name}?`}
                        ref={inputRef}
                        className='flex-grow h-12 px-5 rounded-full bg-gray-100 focus:outline-none'
                    />
                    <button className='hidden' type='submit' onClick={sendPost} >Submit</button>
                </form>
                {imageToPost && (
                    <div className="flex flex-col filter hover:brightness-110 transition
                 duration-150 transform hover:scale-105">
                        <img className="h-10 object-contain" src={imageToPost} alt="" />
                        <p onClick={removeImage} className="text-xs text-red-500 text-center cursor-pointer">Remove</p>
                    </div>
                )}
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500' />
                    <p className='text-xs sm:text-sm lg:text-base'>Live Video</p>
                </div>
                <div className='inputIcon' onClick={() => filepickerRef.current.click()} >
                    <CameraIcon className='h-7 text-green-400' />
                    <p className='text-xs sm:text-sm lg:text-base'>Photo/Video</p>
                    <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden />
                    {/* here hidden cannot be given in className. it doenot work properly */}
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300' />
                    <p className='text-xs sm:text-sm lg:text-base'>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
