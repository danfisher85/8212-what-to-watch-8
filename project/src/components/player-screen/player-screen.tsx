import {useEffect, useRef, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCurrentFilmAction} from 'store/api-actions';
import {getCurrentFilm} from 'store/current-film/selectors';
import LoadingScreen from 'components/loading-screen/loading-screen';
import {formatElapsedTime} from 'utils/video';
import IconPlay from 'components/icon-play/icon-play';
import IconPause from 'components/icon-pause/icon-pause';
import IconFullScreen from 'components/icon-fullscreen/icon-fullscreen';

const PERCENTAGE_MAX = 100;
const LOADING_PLACEHOLDER = 'Loading...';

function PlayerScreen(): JSX.Element {
  const film = useSelector(getCurrentFilm);
  const {id: filmId} = useParams<{id: string}>();

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoElement = videoRef.current;

  const progressRef = useRef<HTMLProgressElement>(null);
  const progressElement = progressRef.current;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTimePercentage, setCurrentTimePercentage] = useState(0);
  const [{duration, elapsedTime}, setTimeDuration] = useState({
    duration: 0,
    elapsedTime: 0,
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleVideoExitButtonClick = () => {
    history.goBack();
  };

  const handleFullScreenClick = () => {
    if (videoElement) {
      videoElement.requestFullscreen();
    }
  };

  useEffect(() => {
    if (film?.id === +filmId) {
      return;
    }

    dispatch(fetchCurrentFilmAction(filmId));
  }, [filmId, film?.id, dispatch]);

  useEffect(() => {
    if (!videoElement) {
      return;
    }

    isPlaying ? videoElement.play() : videoElement.pause();
  }, [isPlaying, videoElement]);

  useEffect(() => {
    if (!videoElement) {
      return;
    }

    const videoDuration = Math.round(videoElement.duration);

    setTimeDuration(() => ({
      duration: videoDuration,
      elapsedTime: videoDuration,
    }));
  }, [isLoading, videoElement]);

  if (film === null) {
    return <LoadingScreen />;
  }

  const elapsedVideoTime = !isLoading ? formatElapsedTime(elapsedTime) : LOADING_PLACEHOLDER;

  const handleVideoPlayClick = () => {
    setIsPlaying((prevState) => !prevState);
  };
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleProgressPosition = () => {
    if (!videoElement || !progressElement) {
      return;
    }

    const videoCurrentTime = Math.round(videoElement.currentTime);
    const videoCurrentPercentage = (videoCurrentTime / duration) * PERCENTAGE_MAX;
    const videoCurrentElapsedTime = duration - videoCurrentTime;

    setTimeDuration((state) => ({
      ...state,
      elapsedTime: videoCurrentElapsedTime,
    }));

    setCurrentTimePercentage(videoCurrentPercentage);
    progressElement.value = videoCurrentTime;
  };

  return (
    <div className="player">
      {isLoading && <LoadingScreen />}
      <video
        src={film.videoLink}
        className="player__video"
        poster={film.posterImage}
        ref={videoRef}
        onLoadedData={handleVideoLoaded}
        onTimeUpdate={handleProgressPosition}
      />

      <button type="button" className="player__exit" onClick={handleVideoExitButtonClick}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" max={duration} ref={progressRef}></progress>
            <div className="player__toggler" style={{left: `${currentTimePercentage}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{elapsedVideoTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleVideoPlayClick}>
            {isPlaying ? <IconPause /> : <IconPlay />}
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <IconFullScreen />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
