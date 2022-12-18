import styled from "styled-components";
import BookmarkFeedBar from "./Feedbar/BookmarkFeedBar";
import ExploreFeedBar from "./Feedbar/ExploreFeedBar";
import HomeFeedbar from "./Feedbar/HomeFeedbar";
import ListsFeedBar from "./Feedbar/ListsFeedBar";
import NotificationFeedBar from "./Feedbar/NotificationFeedBar";
enum PageType {
  Home,
  Explore,
  Notifications,
  Messages,
  Bookmarks,
  Lists,
}

type Props = {
  pageBar: PageType;
};

function Feedbar({ pageBar }: Props) {
  switch (pageBar) {
    case PageType.Home:
      return (
        <FeedDiv>
          <HomeFeedbar />
        </FeedDiv>
      );

    case PageType.Explore:
      return (
        <FeedDiv>
          <ExploreFeedBar />
        </FeedDiv>
      );

    case PageType.Notifications:
      return (
        <FeedDiv>
          <NotificationFeedBar />
        </FeedDiv>
      );

    case PageType.Lists:
      return (
        <FeedDiv>
          <ListsFeedBar />
        </FeedDiv>
      );
    case PageType.Bookmarks:
      return (
        <FeedDiv>
          <BookmarkFeedBar />
        </FeedDiv>
      );

    default:
      return <FeedDiv>ERROR OCCURED</FeedDiv>;
  }
}

export default Feedbar;

const FeedDiv = styled.div`
  display: flex;
  border: 1px solid red;
  color: white;
`;
