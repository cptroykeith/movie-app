import link from "next/link"
import imgae from "next/image" 

export default function Movie({ title, id, poster_path, release_date }) {
    const imagePath = 'https://image/tmdb.org/t/p/original/'
    return (
        <div>
            <h1>{title}</h1>
            <h2>Release_date</h2>
            <link href={'/${id}'}>
                <image
                 src={imagePath + poster_path}
                 width={800}
                 height={800}
                 alt={title}
                 priority
                />
            </link>
        </div>
    )
}