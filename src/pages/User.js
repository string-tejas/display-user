import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import {
   UserDetails,
   PageHeading,
   RowHeading as Heading,
   RowInfo as Info,
} from "../components/styles";
import { GrMapLocation } from "react-icons/gr";
import { BsGenderMale, BsGenderFemale, BsFlag } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAlgolia } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const User = () => {
   const [user, setUser] = useState([]);
   const [loading, setLoading] = useState(true);
   const pageNo = useParams().page;
   const username = useParams().username;

   const getUser = async () => {
      setLoading(true);
      const data = await axios
         .get(`https://randomuser.me/api/?page=${pageNo}&results=10&seed=test`)
         .then((res) => res.data);

      const result = data.results.find((obj) => obj.login.username === username);
      
      setUser(result);
      setLoading(false);
   };

   useEffect(() => {
      getUser();
   }, []);

   const daysRemainingForBirthday = (birthdayString) => {
      const dob = new Date(birthdayString);
      const today = new Date();

      dob.setFullYear(today.getFullYear());
      if (today > dob) {
         dob.setFullYear(today.getFullYear() + 1);
      }

      const days = Math.floor((dob - today) / (1000 * 60 * 60 * 24));
      return days;
   };

   return (
      <>
         {loading ? (
            <Loading center loading={loading} />
         ) : (
            <>
               <PageHeading>User Details</PageHeading>
               <UserDetails>
                  <img src={user.picture.large} />
                  <div>
                     <Heading>
                        {`${user.name.first} ${user.name.last}`}
                        <code>@{user.login.username}</code>
                     </Heading>
                     <Info>
                        <span>
                           {user.gender.toLowerCase() === "male" ? (
                              <BsGenderMale />
                           ) : (
                              <BsGenderFemale />
                           )}{" "}
                           {user.gender}
                        </span>
                        <span>
                           <GrMapLocation /> {user.location.city}, {user.location.state}
                        </span>
                        <span>
                           <BsFlag /> {user.location.country}
                        </span>
                        <span>
                           <FaAlgolia /> {user.dob.age} years old
                        </span>
                        <span>
                           <AiOutlineCalendar /> {new Date(user.dob.date).toDateString()}
                        </span>
                        <span>
                           <BsFillTelephoneFill /> {user.phone}
                        </span>
                        <span>
                           <MdAlternateEmail /> <code>{user.email}</code>
                        </span>
                        <div>
                           {daysRemainingForBirthday(user.dob.date)} days Remaining Before{" "}
                           {user.name.first}'s next birthday
                        </div>
                     </Info>
                  </div>
               </UserDetails>
            </>
         )}
      </>
   );
};

export default User;
