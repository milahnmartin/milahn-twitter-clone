import AdBar from "@components/AdBar";
import Feedbar from "@components/Feedbar";
import Navbar from "@components/Navbar";
import styled from "styled-components";
enum PageType {
  Home,
  Explore,
  Notifications,
  Messages,
  Bookmarks,
  Lists,
}

function Notification() {
  return (
    <BackGround>
      <Navbar />
      <Feedbar pageBar={PageType.Notifications} />
      <AdBar />
    </BackGround>
  );
}

export default Notification;

const BackGround = styled.div`
  background-color: var(--twitter-black);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
`;
