import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageCenter = styled.div`
   width: 100%;
   min-height: max(100vh, 500px);
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;
export const PageHeading = styled.h1`
   display: block;
   text-align: center;
   color: white;
   font-size: 5rem;
`;

export const Footer = styled.div`
   display: flex;
   margin: 1rem 0;
   padding: 1rem;
   justify-content: space-between;
   align-items: center;
`;

export const PageButton = styled.button`
   outline: none;
   border: none;
   padding: 0.5rem 1rem;
   margin: 0 1rem;
   color: white;
   text-transform: uppercase;
   text-decoration: none;
   display: flex;
   align-items: center;
   background: green;
   transition: 200ms;
   transform: scale(1);
   cursor: pointer;
   &:hover {
      background: darkgreen;
   }
   &:active {
      transform: scale(0.98);
   }
   & svg {
      color: white;
   }
`;

export const UserTable = styled.div`
   padding: 1rem;
   width: max(80%, 750px);
   margin: auto;
   @media screen and (max-width: 800px) {
      width: 100%;
   }
`;

export const RowHeading = styled.div`
   font-size: 2rem;
   display: flex;
   padding: 5px;
   align-items: center;
   flex: 0 0;
   & > code {
      font-size: 1.5rem;
      background-color: rgb(180, 180, 180);
      color: rgb(53, 53, 61);
      border: 1px solid rgb(112, 112, 112);
      padding: 2px 8px;
      border-radius: 10px;
      margin-left: 1.5rem;
      opacity: 0;
      transition: 200ms;
   }
   @media screen and (max-width: 700px) {
      & {
         flex-direction: column-reverse;
         text-align: center;
      }
      & > code {
         margin: 0.5rem 0;
         opacity: 1;
      }
   }
`;

export const UserRow = styled(Link)`
   padding: 10px 20px;
   text-decoration: none;
   border: 1px solid gray;
   margin-bottom: -1px;
   color: black;
   background: white;
   display: flex;
   &:hover {
      background-color: rgb(245, 245, 245);
      cursor: pointer;
      border: 1px solid gray;
      box-shadow: inset 0 0 5px rgb(187, 187, 187);
   }
   &:first-child {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
   }
   &:last-child {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
   }
   & > img {
      width: max(8%, 110px);
      border: 2px solid black;
      border-radius: 50%;
   }
   & > div {
      flex-grow: 1;
      margin-left: 1.5rem;
   }
   &:hover ${RowHeading} > code {
      opacity: 1;
   }
   @media screen and (max-width: 700px) {
      & {
         flex-direction: column;
         align-items: center;
         margin-bottom: 1rem;
         border-radius: 20px;
      }
      & > div {
         margin: 0;
      }
      & > img {
         width: 200px;
      }
   }
`;

export const RowInfo = styled.div`
   margin: 5px;
   display: flex;
   justify-content: space-between;
   font-family: Gadugi;
   text-transform: capitalize;
   @media screen and (max-width: 700px) {
      & {
         gap: 1.5rem;
         flex-wrap: wrap;
      }
   }
`;

export const UserDetails = styled(UserRow).attrs({ as: "div" })`
   border-radius: 20px;
   padding: 2rem 3rem;
   width: 70%;
   margin: auto;
   & > img {
      align-self: center;
      width: 400px;
   }
   & ${RowHeading} {
      border-bottom: 2px solid gray;
      font-size: 3rem;
   }
   & ${RowHeading} > code {
      opacity: 1;
   }
   & ${RowInfo} {
      padding: 1rem;
      flex-wrap: wrap;
      gap: 1rem;
      font-size: 1.3rem;
   }
   & ${RowInfo} span svg {
      transform: translateY(2px);
   }
   & ${RowInfo} span > code {
      text-transform: lowercase;
   }
   &:hover {
      background: white;
   }
   @media screen and (max-width: 900px) {
      & {
         flex-direction: column;
         align-items: center;
         margin-bottom: 1rem;
         border-radius: 20px;
      }
   }
   @media screen and (max-width: 800px) {
      & {
         width: 95%;
         margin: 1rem auto;
         padding: 1rem 0.5rem;
         margin-bottom: 2rem;
      }
      & > img {
         width: 200px;
      }
      & ${RowInfo} {
         padding: 1rem 0.5rem;
         gap: 1rem;
         font-size: 1.1rem;
      }
   }
   cursor: default;
`;
