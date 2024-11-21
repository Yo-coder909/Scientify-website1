import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Player } from "video-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const style = {
  position: "absolute",
  top: "22%",
  left: "78%",
  transform: "translate(-50%, -50%)",
  width: 190,
  height: 190,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 28,
  p: 4,
};
const style1 = {
  position: "absolute",
  top: "25%",
  left: "67%",
  transform: "translate(-50%, -50%)",
  width: 190,
  height: 190,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 28,
  p: 4,
};
/* Basic styling for the app */

function Edu() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  

  return (
    <div className=" w-[100%] bg-gradient-to-r from-blue-200 to-cyan-200">
      <div className="header p-4  bg-gradient-to-r from-indigo-400 to-cyan-400  h-[12vh] flex flex-row justify-evenly items-center  shadow-md  ">
        <div className="text-4xl w-100 h-[12vh] mt-4 text-blue-700 font-bold hover:cursor-pointer p-2">
          Scien<span className="text-blue-700">tify</span>
        </div>
        <div className="relative header_Second w-[36%]    ">
          <input
            type="text"
            placeholder="Search"
            className=" w-[100%] rounded-xl pl-8 focus:outline-none p-2 bg-slate-100"
          />

          <SearchIcon className="absolute top-2 left-2 text-center text-slate-600 bottom-0  " />
        </div>

        <div onClick={handleOpen1}>
          <p className="text-lg font-bold  leading-2 ">Class</p>
        </div>
        <div>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style1}>
              <Typography id="modal-modal-description">
                <p className="text-lg font-extralight mb-2">Class9</p>
                <p className="text-lg font-extralight mb-2">Class10</p>
                <p className="text-lg font-extralight mb-2">Class11</p>
                <p className="text-lg font-extralight mb-2">Class12</p>
              </Typography>
            </Box>
          </Modal>
        </div>

        <div
          onClick={handleOpen}
          className="hover:cursor-pointer font-bold text-black leading-5 text-lg "
        >
          Subject
        </div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description">
                <p className="text-lg font-extralight mb-2">Physics</p>
                <p className="text-lg font-extralight mb-2">Chemistry</p>
                <p className="text-lg font-extralight mb-2">Maths</p>
                <p className="text-lg font-extralight mb-2">Biology</p>
              </Typography>
            </Box>
          </Modal>
        </div>

        <div className="App">
          <button onClick={openModal}>Login</button>

          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-btn" onClick={closeModal}>
                  &times;
                </span>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          )}
        </div>
        
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-5 px-4 gap-4 lg:gap-16  ">
        <div
          onClick={() => navigate("/Class9")}
          className=" pl-1.5 pb-3 mt-8  "
        >
          <p className="text-3xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-center lg:text-left mb-4 lg:mb-6 mt-4 lg:mt-8 tracking-tight px-8 py-4 rounded-full">
            Class 9
          </p>
        </div>
        <div
          onClick={() => navigate("/Class10")}
          className=" pl-1.5 pb-3 mt-8  "
        >
          <p className="text-3xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-center lg:text-left mb-4 lg:mb-6 mt-4 lg:mt-8 tracking-tight px-8 py-4 rounded-full">
            Class10
          </p>
        </div>
        <div
          onClick={() => navigate("/Class11")}
          className=" pl-1.5  pb-3 mt-8 "
        >
          <p className="text-3xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-center lg:text-left mb-4 lg:mb-6 mt-4 lg:mt-8 tracking-tight px-8 py-4 rounded-full">
            Class11
          </p>
        </div>
        <div
          onClick={() => navigate("/Class12")}
          className="pl-1.5 pb-3  mt-8  "
        >
          <p className="text-3xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-center lg:text-left mb-4 lg:mb-6 mt-4 lg:mt-8 tracking-tight px-8 py-4 rounded-full">
            Class12
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-12 ">
        <div className="ml-16 mt-20">
          <p className="text-slate-400">LEARNERS AND STUDENTS</p>
          <p className="text-4xl font-bold mb-12">You can learn anything.</p>
          <p>
            Build a deep, solid understanding in math,
            <p className="mb-5"> Physics, Chemistry, Biology, and more.</p>
          </p>
          <div className="header_fifth flex flex-row bg-blue-700 rounded-lg items-center h-12 w-[32%]">
            <p className="text-sm pl-1 text-white font-bold !text-center ">
              {" "}
              Learners, Start here
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.kastatic.org/images/lohp/laptop_collage@2x.png"
            className="w-80 h-80 mr-56 mt-4"
          ></img>
        </div>
      </div>
      <div className="flex gap-44 mb-36">
        <div>
          <img
            src="https://images.prismic.io/quizlet-web/ZpWfEh5LeNNTxK_T_study-guides-image.png?auto=format,compress"
            className="lg:w-92 lg:h-80 lg:ml-12 w-92 ml-8 h-80"
          />
        </div>
        <div>
          <p className="lg:text-3xl text-xl font-bold">Make class material</p>
          <p className="text-3xl font-bold mb-16">instantly studiable</p>
          <p className=" lg:text-lg text-md text-wrap text-slate-700">
            Turn your slides, videos, and notes into flashcard sets,
          </p>
          <p className=" text-lg text-wrap text-slate-700 mb-16">
            practice tests, and study guides.
          </p>
          <div className="header_fifth flex flex-row bg-blue-700 lg:rounded-lg rounded-sm items-center h-8 w-[56%] lg:h-16 lg:w-[28%]">
            <p className="lg:text-md text-sm lg:pl-6 p-3 text-white font-bold text-center ">
              {" "}
              Try it out
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          {/* <Player>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
          </Player> */}
          {/* <video controls width="100%">
            ''
            <source
               src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              type="video/mp4"
            />
            Sorry, your browser doesn't support videos.
          </video> */}
        </div>
        {/* <video width="600" controls>
          <source src="../../../public/VEED.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div>
          <p className="text-3xl font-bold text-center justify-evenly">
            Why Scientify works?
          </p>
          <div className=" flex grid-cols-3 ">
            <div className="ml-48">
              <img
                src="https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png"
                className="w-56 h-52 "
              ></img>
              <p className="text-xl font-normal ">Personalized learning</p>
            </div>
            <div className="ml-48">
              <img
                src="https://cdn.kastatic.org/images/lohp/trusted_content_icon.png"
                className="w-56 h-52 "
              ></img>
              <p className="text-xl font-normal ">Trusted content</p>
            </div>
            <div className="ml-48">
              <img
                src="https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png"
                className="w-56 h-52 "
              ></img>
              <p className="text-xl font-normal ">Empower teachers</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-950 pt-4 h-92 mt-8  ">
          <div className=" border-l pl-4 leading-5 text-xs ">
            <div className="  lg:gap-5 gap-8"></div>
          </div>
          <div className="grid lg:grid-cols-6  grid-cols-4 mt-10 px-24 border-b  pb-8">
            <div className="leading-2 text-md ">
              <p className="text-gray-500 mb-2">About</p>
              <p className="text-slate-50 mb-2">Our team</p>
              <p className="text-slate-50 mb-2">Our Intern</p>
              <p className="text-slate-50 mb-2">Our Teacher</p>
              <p className="text-slate-50 mb-2">Our Contributors</p>
              <p className="text-slate-50 mb-2">Our fianances</p>
            </div>
            <div className=" leading-5 text-md ">
              <p className="text-gray-500 mb-2">Courses</p>
              <p className="text-slate-50 mb-2">Physics</p>
              <p className="text-slate-50 mb-2">Chemistry</p>
              <p className="text-slate-50 mb-2">Biology</p>
            </div>
            <div className="leading-5 text-md">
              <p className="text-gray-500 mb-2">Help</p>
              <p className="text-slate-50 mb-2">Contact Us</p>
              <p className="text-slate-50 mb-2">Scientify</p>
              <p className="text-slate-50 mb-2">Press</p>
              <p className="text-slate-50 mb-2">Career Us</p>
            </div>
            <div className="leading-5 text-md">
              <p className="text-gray-500 mb-2">policy</p>
              <p className="text-slate-50 mb-2">Contact Us</p>
              <p className="text-slate-50 mb-2">Scientify</p>
              <p className="text-slate-50 mb-2">Press</p>
              <p className="text-slate-50 mb-2">Career Us</p>
            </div>

            <div className="border-1 lg:pl-4 lg:leading-5  ">
              <div className=" lg:text-blue-800 lg:text-2xl ">
                Our mission is to provide a free, world-class education to
                anyone, anywhere.
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Edu;
