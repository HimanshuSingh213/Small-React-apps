import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     async function github() {
    //         const res = await fetch(`https://api.github.com/users/HimanshuSingh213`);
    //         const finalData = await res.json();

    //         console.log(finalData);
    //         setData(finalData);

    //     }

    //     github();
    // }, [])


    return (
        <div className='flex flex-col items-center bg-gray-800 my-2 mx-4 text-gray-300 text-lg font-medium p-4 rounded-2xl'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="github dp" className='w-[300] mt-4 rounded-2xl overflow-hidden' />
            <div className='mt-4 border border-amber-400 rounded-2xl p-4'>
                <p className='text-gray-300 text-lg font-medium'>Name: {data.name}</p>
                <p className='text-gray-300 text-lg font-medium'>Location: {data.location}</p>
                <p className='text-gray-300 text-lg font-medium'>Bio: {data.bio}</p>
            </div>
        </div>
    )
}

export default Github

export async function githubLoader() {
    const res = await fetch(`https://api.github.com/users/HimanshuSingh213`);
    return res.json();

}