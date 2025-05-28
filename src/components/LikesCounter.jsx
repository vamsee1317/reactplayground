import React,{useState} from 'react'

export default function LikesCounter() {

    const [likes, setLikes] = useState(0);

    const handleLike = () =>{

        setLikes(likes + 1);
        setLikes(likes + 1);  // Not recommended when doing multiple updates

    }
        console.log(likes);

    const handleSuperLike = () =>{
        setLikes( prevLikes => prevLikes + 1);
        setLikes( prevLikes => prevLikes + 1); // using prevState ensure both updates are applied
        
    }

  return (
    <div className='p-4 border w-fit text-center m-auto rounded-lg'>
        <h2>Total Likes : {likes} </h2>
        <button className='mr-2 bg-blue-500 text-white px-3 py-1 rounded' onClick={handleLike}>Like</button>
        <button className='mr-2 bg-blue-500 text-white px-3 py-1 rounded' onClick={handleSuperLike}>SuperLike</button>
    </div>
  )
}
