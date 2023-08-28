import AvatarUser from "./AvatarUser";
import ButtonLike from "./ButtonLike";
import CounterComment from "./CounterComment";

function UsersComments() {
  return (
    <div>
      <AvatarUser />
      <div>
        <a href="#">Username</a>
        <p>I started using vueJS, seems easaier</p>
      </div>
      <ButtonLike />
      <CounterComment />
      <button> Reply </button>
    </div>
  );
}

export default UsersComments;
