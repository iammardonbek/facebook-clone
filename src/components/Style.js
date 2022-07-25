import styled from "styled-components";
import { Like } from "styled-icons/evil";
import { Comment } from "@styled-icons/fluentui-system-regular/Comment";
import { Share } from "@styled-icons/boxicons-regular/Share";
export const Navbar = styled.div`
  padding: 10px 0px;
  box-shadow: 1px 1px 5px grey;
  background-color: white;
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;
export const LeftNavbar = styled.div`
  display: flex;
  width: 20%;
  padding-left: 20px;
  align-items: center;
  position: relative;
  label {
    font-size: 16px;
    color: rgb(101, 103, 107);
    position: absolute;
    left: 80px;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 60;
  }
  input {
    border-radius: 20px;
    background-color: rgb(228, 230, 235);
    border: none;
    padding: 10px;
    outline: none;
    font-size: 15px;
    width: 250px;
    padding-left: 30px;
  }
`;
export const CentralNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  div {
    position: relative;
    span {
      position: absolute;
      top: -5px;
      left: 80%;
      color: white;
      background-color: rgb(228, 30, 63);
      padding: 0px 5px;
      border-radius: 100px;
      font-weight: 500;
      font-size: 15px;
    }
  }
`;
export const RightNavbar = styled.div`
  display: flex;
  width: 22%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;
export const Avatar = styled.img`
  height: ${(props) => (props.bigger ? "40px" : "35px")};
  width: ${(props) => (props.bigger ? "40px" : "35px")};
  border-radius: 50%;
  position: ${(props) => (props.border ? "absolute" : "static")};
  z-index: ${(props) => (props.border ? 1 : 0)};
  top: 10px;
  left: 10px;
  border: ${(props) => (props.border ? "5px solid rgb(24, 118, 242)" : "none")};
  object-fit: cover;
`;
export const AvatarName = styled.p`
  line-height: 0;
  text-transform: capitalize;
  font-size: 18px;
  margin-left: 10px;
  cursor: pointer;
`;
export const MainBody = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
`;
export const MainLeft = styled.div`
  width: 20%;
  height: 100vh;
  position: sticky;
  top: 0px;
`;
export const MainRight = styled.div`
  width: 20%;
  height: 100vh;
  position: sticky;
  top: 0px;
`;
export const MainMiddle = styled.div`
  width: 50%;
`;
export const Tab = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
export const Stories = styled.div`
  display: grid;
  grid-template-columns: 16% 16% 16% 16% 16% 16%;
  justify-content: space-between;
  cursor: pointer;
`;
export const StoriesChild = styled.div`
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  div {
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const StoriesImg = styled.img`
  height: 100%;
  :hover {
    height: 101%;
  }
`;
export const StoriesName = styled.div`
  position: absolute;
  left: 10px;
  top: 70%;
  color: white;
  text-transform: capitalize;
  font-weight: bold;
`;
export const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const ContactsTitle = styled.div`
  text-transform: capitalize;
  color: grey;
  font-size: 24px;
`;
export const ContactsIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Person = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
export const PersonAvatar = styled.div`
  position: relative;
`;
export const PersonOnline = styled.div`
  position: absolute;
  top: 60%;
  left: 70%;
  background-color: green;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border: 2px solid white;
  z-index: 1;
`;
export const Add = styled.div`
  background-color: white;
  padding: 10px 15px;
  margin-top: 20px;
`;
export const AddUp = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(232, 232, 232);
  padding-bottom: 10px;
`;
export const AddInput = styled.input`
  border-radius: 20px;
  margin-left: 10px;
  width: 100%;
  border: none;
  background-color: rgb(232, 232, 232);
  padding-left: 10px;
  ::placeholder {
    font-size: 16px;
  }
`;
export const AddDown = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;
export const Live = styled.div`
  display: flex;
  align-items: center;
`;
export const Photo = styled.div`
  align-items: center;
  display: flex;
`;
export const Feeling = styled.div`
  align-items: center;
  display: flex;
`;
export const AddText = styled.div``;
export const Post = styled.div`
  margin-top: 20px;
`;
export const PostHeader = styled.div`
  padding: 10px 15px;
  display: flex;
  background-color: white;
`;
export const PostImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;
export const PostFooter = styled.div`
  background-color: white;
  padding: 0px 15px;
`;
export const PostComment = styled.div`
  background-color: white;
  padding: 10px 0;
  color: rgb(101, 103, 107);
  display: flex;
  align-items: center;
  font-size: 17px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const PostLikes = styled.div`
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  div {
    display: flex;
    justify-content: center;
    width: 33%;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    p {
      font-size: 20px;
      line-height: 0;
      margin-left: 5px;
      text-transform: capitalize;
    }
  }
`;
export const LikeMe = styled(Like)`
  width: 30px;
`;
export const CommentMe = styled(Comment)`
  width: 30px;
  color: rgb(101, 103, 107);
`;
export const ShareMe = styled(Share)`
  width: 30px;
  color: rgb(101, 103, 107);
`;
export const MarketTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 20px;
`;
export const Card = styled.div`
  cursor: pointer;
`;
export const Locate = styled.div`
  display: flex;
  align-items: center;
  color: rgb(27, 116, 228);
`;
export const LocateCity = styled.p`
  margin-left: 5px;
  cursor: pointer;
`;
export const CardImg = styled.img`
  height: 70%;
  width: 100%;
  border-radius: 10px;
`;
export const CardText = styled.div`
  border-radius: 5px;
`;
export const ProductPrice = styled.h3`
  line-height: 0px;
`;
export const ProductName = styled.p`
  line-height: 10px;
`;
export const ProductLocate = styled.p`
  line-height: 5px;
  color: grey;
`;
export const Container = styled.div`
  height: 100vh;
  background-color: rgb(27, 116, 228);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: white;
    text-transform: capitalize;
    cursor: pointer;
  }
`;
// login
export const Title = styled.h1`
  font-family: "lucida grande", tahoma, verdana, arial, sans-serif;
  color: white;
  font-size: 60px;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  input {
    font-size: 20px;
    border: none;
    background-color: transparent;
    outline: none;
    border-bottom: 1px solid black;
    padding: 10px;
    color: white;
    ::placeholder {
      color: white;
      opacity: 0.5;
    }
  }
  button {
    background-color: white;
    padding: 10px;
    font-size: 20px;
    text-transform: capitalize;
    cursor: pointer;
    border: none;
  }
  p {
    color: rgb(200, 0, 0);
    font-weight: bold;
  }
`;
