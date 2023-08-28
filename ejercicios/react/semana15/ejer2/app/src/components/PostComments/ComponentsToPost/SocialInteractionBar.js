import ButtonLike from "./ButtonLike";

function SocialInteractionBar() {
  return (
    <>
      <div>
        <ButtonLike />
        <button>Comments 🗨</button>
        <button>Send post 💌</button>
        <button>Save 🎁</button>
      </div>
      <div>
        <p>
          <strong>978 Likes</strong>
        </p>
        <p>December 20,2019(post date)</p>
      </div>
    </>
  );
}

export default SocialInteractionBar;
