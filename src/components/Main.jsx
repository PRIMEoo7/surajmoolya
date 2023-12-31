/* eslint-disable no-unused-vars */
import React from "react";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";
import { useState } from "react";
import Modal from "./Modal";

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  function onClosehandler() {
    setShowModal(false);
  }
  function openModal() {
    setShowModal(true);
  }
  return (
    <div className="p-4 flex flex-col flex-1 md:grid md:grid-cols-4 gap-4 relative overflow-hidden">
      {showModal && <Modal onClose={onClosehandler} />}
      <div className="md:col-span-3 flex flex-col gap-4">
        <AboutMe openModal={openModal} />
        <Experience />
      </div>
      <Skills />
    </div>
  );
}

{
  /* <img
        className="absolute inset-0 z-0 opacity-50"
        src="./whalebg.png"
        alt="whale"
      /> */
}
{
  /* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/3Yei6gf6pykHUYjk/scene.splinecode"></spline-viewer> */
}
