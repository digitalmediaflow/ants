import React from 'react'

export default function GitHub({albums}) {
    return (
        <>
        <div>
            <h1>GitHub</h1>
            <ul>
            {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
            ))}
            </ul>
          
        </div>
        </>
    )
}



export async function getStaticProps (context){
const res = await fetch(`https://jsonplaceholder.typicode.com/albums`)
const albums = await res.json()


if(!albums){
    return {
        notFound: true,
    }
}

return {
    props: { albums },
}      
    
}
