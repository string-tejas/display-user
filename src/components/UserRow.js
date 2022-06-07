import { UserRow as Row, RowHeading as Heading, RowInfo as Info } from "./styles";
import { GrMapLocation } from "react-icons/gr";
import { BsGenderMale, BsGenderFemale, BsFlag } from "react-icons/bs";

const UserRow = (props) => {
   const { user, link } = props;

   return (
      <Row to={link}>
         <img src={user.picture.large} />
         <div>
            <Heading>
               {`${user.name.first} ${user.name.last}`}
               <code>@{user.login.username}</code>
            </Heading>
            <Info>
               <span>
                  {user.gender.toLowerCase() === "male" ? <BsGenderMale /> : <BsGenderFemale />}{" "}
                  {user.gender}, {user.dob.age} years old
               </span>
               <span>
                  <GrMapLocation /> {user.location.city}, {user.location.state}
               </span>
               <span>
                  <BsFlag /> {user.location.country}
               </span>
            </Info>
         </div>
      </Row>
   );
};

export default UserRow;
