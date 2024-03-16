export const Video = () => {
    return (
        <div className='aspect-video relative rounded w-full 2xl:w-[800px]'>
            <iframe
                title="La Primavera Demo Video"
                className={`h-full w-full`}
                src="https://drive.google.com/file/d/1nRWzX47bfebJ1NUuYX9OQb0fHk5dO3FJ/preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
                seamless
            >
            </iframe>
        </div>
    );
}

export default Video;