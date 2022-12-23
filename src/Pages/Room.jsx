import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {

    const {roomID} = useParams()

    const meeting = async (element) => {
        const appID = 1001511020;
        const serverSecret = "8a5766c44199c679a9c3a67cf3f32570";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "Name");
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            sharedLinks: [{
                name: 'Copy Link',
                url: `https://smart-connect-app.netlify.app/room/${roomID}`,
            }],
            videoResolutionList: [
                ZegoUIKitPrebuilt.VideoResolution_180P,
                ZegoUIKitPrebuilt.VideoResolution_360P,
                ZegoUIKitPrebuilt.VideoResolution_480P,
                ZegoUIKitPrebuilt.VideoResolution_720P,
              ],
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton: true,
        })
    }

  return (
    <div>
        <div className='w-full h-[100vh]' ref={meeting}/>
    </div>
  )
}

export default Room