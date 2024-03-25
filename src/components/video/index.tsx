export const Video = () => {
    return (
        <div className='aspect-video relative rounded w-full'>
            <iframe
                className={`h-full w-full`}
                src="https://www.youtube.com/embed/uCDLfjZnFKc?si=ZZNVTreqn7ENZQSm&vq=hd1080"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                seamless
            >
            </iframe>
        </div>
    );
}

export default Video;