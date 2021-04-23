import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const Profile = (props) => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users" +
            props.match.params.userID
        ); //ask how
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [props.match.params.userID]);
  return <div>
      <ProfileCard profile={profile}/>
  </div>;
};

export default Profile;
