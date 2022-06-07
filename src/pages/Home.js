import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import UserRow from "../components/UserRow";
import { UserTable, PageHeading as Heading, PageButton, Footer } from "../components/styles";
import { ImPrevious2, ImNext2 } from "react-icons/im";

const Home = () => {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);
   const [pageNo, setPageNo] = useState(1);
   const usersPerPage = 10;

   const getUsers = async (page) => {
      setLoading(true);
      const data = await axios
         .get(`https://randomuser.me/api/?page=${page}&results=${usersPerPage}&seed=test`)
         .then((res) => res.data);
      setUsers(data.results);
      setLoading(false);
   };

   const prevPage = () => {
      if (pageNo <= 1) return pageNo;
      else setPageNo(pageNo - 1);
   };
   const nextPage = () => setPageNo(pageNo + 1);

   useEffect(() => {
      getUsers(pageNo);
   }, [pageNo]);

   return (
      <>
         {loading && <Loading center loading={loading} />}
         {!loading &&
            (users.length === 0 ? (
               "No users Found"
            ) : (
               <>
                  <Heading>Find Users</Heading>
                  <UserTable>
                     {users.map((user) => (
                        <UserRow
                           user={user}
                           key={user.email}
                           link={`/${pageNo}/${user.login.username}`}
                        />
                     ))}
                  </UserTable>
                  <Footer>
                     <PageButton onClick={prevPage}>
                        <ImPrevious2 />
                        Prev
                     </PageButton>
                     <span style={{ color: "white" }}>Page {pageNo}</span>
                     <PageButton onClick={nextPage}>
                        Next
                        <ImNext2 />
                     </PageButton>
                  </Footer>
               </>
            ))}
      </>
   );
};

export default Home;
