import {useCollection} from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Post from './Post';
import  { useState } from 'react';

function Posts({posts}) {
    const [realtimePosts] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    );

    // const [ posts, setPosts ] = useState([]);
    // useEffect(() => {
    //     db.collection('posts')
    //         .orderBy('timestamp', 'desc')
    //         .onSnapshot((snapshot) => {
    //             setPosts(
    //                 snapshot.docs.map((doc) => ({
    //                     id: doc.id,
    //                     data: doc.data()
    //                 }))
    //             );
    //     });
    // }, []);


    return (
        <div>
            {realtimePosts 
                ? realtimePosts?.docs.map(post => (
                    <Post key={post.id} name={post.data().name} message={post.data().message} email={post.data().email} 
                        timestamp={post.data().timestamp} image={post.data().image} postImage={post.data().postImage}
                    />
                )) 
                : posts.map(post => (
                    <Post key={post.id} name={post.name} message={post.message} email={post.email} 
                        timestamp={post.timestamp} image={post.image} postImage={post.postImage}
                    />
                ))
            }
        </div>
    )
}

export default Posts
