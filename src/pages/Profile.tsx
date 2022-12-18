import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function Profile() {
  const { username } = useParams();
  useEffect(() => {
    console.log("WE MOUNTED");
  }, []);
  return (
    <>
      <button>
        <Link to='/home'>HOME</Link>
      </button>
      <div>{username} - we got</div>
    </>
  );
}

export default Profile;
