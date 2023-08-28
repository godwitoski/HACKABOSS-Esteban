import AddCommentComp from "./ComponentsToPost/AddCommentComp";
import SocialInteractionBar from "./ComponentsToPost/SocialInteractionBar";
import UsersComments from "./ComponentsToPost/UsersComments";
import WhoPostImg from "./ComponentsToPost/WhoPostImg";

function ImagePost() {
  return (
    <>
      <WhoPostImg />
      <UsersComments />
      <SocialInteractionBar />
      <AddCommentComp />
    </>
  );
}

export default ImagePost;
