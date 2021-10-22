import {useRef, useEffect} from 'react';

const VIDEO_DELAY = 1000;

interface VideoPlayerProps {
  src: string;
  poster: string;
  isActive: boolean;
}

function VideoPlayer({src, poster, isActive}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (videoRef.current === null) {
      return;
    }

    if (isActive) {
      timeout = setTimeout(() => videoRef.current?.play(), VIDEO_DELAY);
    } else {
      videoRef.current?.load();
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      width="280"
      height="175"
      muted
      preload="none"
      style={{objectFit: 'cover'}}
    />
  );
}

export default VideoPlayer;
