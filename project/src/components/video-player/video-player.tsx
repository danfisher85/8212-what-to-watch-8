import {useRef, useEffect} from 'react';

interface VideoPlayerProps {
  src: string;
  poster: string;
  isPlaying: boolean;
}

function VideoPlayer({src, poster, isPlaying}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return <video ref={videoRef} src={src} poster={poster} muted width="280" height="175"></video>;
}

export default VideoPlayer;
