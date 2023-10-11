import ReactPlayer from "react-player";
import { VideoContainer } from "./style";

const VideoComponent = () => {
  return (
    <VideoContainer>
      <ReactPlayer
        style={{ top: 0, left: 0, marginLeft: "20px" }}
        width="90%"
        height="100%"
        controls={true}
        url="https://www.youtube.com/watch?v=GHrDjZIuGsc]"
      />
    </VideoContainer>
  );
};

export default VideoComponent;
