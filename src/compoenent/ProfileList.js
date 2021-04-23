import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const ProfileList = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUserList(data));
    };

    fetchUsers();
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <div style={{display:'flex' , justifyContent:'center' , flexWrap:'wrap'}}>
          {userList.map((users, index) => (
            <ProfileCard users={users} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileList;
