import { BiHomeCircle, BiUser } from "react-icons/bi";
import { CgServer } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { FiHash } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBookmarkSharp } from "react-icons/io5";
import { SiTwitter } from "react-icons/si";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Navbar() {
  return (
    <NavDiv>
      <NavSpan to='/home'>
        <SiTwitter size={28} color='#aab8c2' />
      </NavSpan>

      <NavSpan to='/home'>
        <BiHomeCircle size={28} color='#aab8c2' /> Home
      </NavSpan>

      <NavSpan to='/explore'>
        <FiHash size={28} color='#aab8c2' /> Explore
      </NavSpan>

      <NavSpan to='/notifications'>
        <IoMdNotificationsOutline size={28} color='#aab8c2' /> Notifications
      </NavSpan>
      <NavSpan to='/messages'>
        <HiOutlineMail size={28} color='#aab8c2' /> Messages
      </NavSpan>
      <NavSpan to='/bookmarks'>
        <IoBookmarkSharp size={28} color='#aab8c2' /> Bookmarks
      </NavSpan>
      <NavSpan to='/lists'>
        <CgServer size={28} color='#aab8c2' /> Lists
      </NavSpan>
      <NavSpan to='/profile'>
        <BiUser size={28} color='#aab8c2' /> Profile
      </NavSpan>
      <NavSpan to='/more'>
        <CiCircleMore size={28} color='#aab8c2' /> More
      </NavSpan>
    </NavDiv>
  );
}

export default Navbar;

const NavDiv = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  height: 100%;
  align-items: start;
  justify-content: start;
  grid-column: 2 / 3;
`;

const NavSpan = styled(Link)`
  text-deoration: none;
  padding: 10px 20px;
  color: var(--twitter-light-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  gap: 10px;
  cursor: pointer;
  background-color: var(--twitter-blue);
  transition: all 0.2s ease;
  &:not(:first-child) {
    margin-top: 20px;
  }
  &:active {
    color: var(--twitter-extra-light-gray);
  }
  &:hover {
    background-color: var(--twitter-black-secondary);
    border-radius: 100px;
  }
`;
