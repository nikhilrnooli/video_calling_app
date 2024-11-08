import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();
  const myMeetingContainer = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      const appID = 1182647196;
      const serverSecret = "f6d779d9c0df23e826d879af2a327274";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        id,
        "zk999ad000rz123",
        "Nikhil Nooli"
      );
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: myMeetingContainer.current,  
        sharedLinks: [
          {
            name: "Personal link",
            url: `http://localhost:5173/room/${id}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };

    myMeeting();
  }, [id]);  

  return <div className="myCallContainer" ref={myMeetingContainer}></div>;
};

export default Room;
