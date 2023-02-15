import React, { useState } from "react";
import Containers from "../../atoms/Containers";
import Logo from "../../../../assets/Logo/logo.png";
import "./Navigation.css";
import { IconAlignRight, IconX } from "@tabler/icons-react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    function handleShowCloseMenu() {
        setIsOpen(!isOpen)
    }

  return (
    <nav className="bg-white shadow-md py-2">
      <Containers className="flex justify-between ">
        <div className="navbar-brand">
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className={`navbar-items ${isOpen ? 'show' : ''}`}>
          <div className="navbar-items-head shadow-md">
            <div className="navbar-brand md:hidden">
              <a href="">
                <img src={Logo} alt="" />
              </a>
            </div>
            <div className="navbar-button">
              <button type="button" className="flex justify-center items-center" onClick={handleShowCloseMenu}>
                <IconX  className={'w-8 h-8'}/>
              </button>
            </div>
          </div>
          <div className="items">
            <a href="http://">Home</a>
            <a href="http://">About us</a>
            <a href="http://">Services</a>
            <a href="http://">Join us</a>
            <a href="http://">Contact us</a>
          </div>
        </div>
        <div className="navbar-button">
          <button type="button" className="flex justify-center items-center" onClick={handleShowCloseMenu}>
                <IconAlignRight className={'w-8 h-8'}/>
          </button>
        </div>
      </Containers>
    </nav>
  );
}
