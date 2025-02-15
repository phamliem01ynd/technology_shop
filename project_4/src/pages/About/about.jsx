import React, { useRef, useState, useContext, useEffect } from "react";
import "./about.scss";
import ThemeToggle from "../../components/Theme/theme";
import { ThemeContext } from "../../components/context/themeContext";
import { Button } from "antd";

function About() {
  const aboutRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  const images = [
    { id: 1, image: "images/carousel/iphone.webp" },
    { id: 2, image: "images/carousel/iphone.webp" },
    { id: 3, image: "images/carousel/macbook.jpg" },
    { id: 4, image: "images/carousel/iphone2.png" },
    { id: 5, image: "images/carousel/macbook2.jpg" },
    { id: 6, image: "images/carousel/phone.webp" },
    { id: 7, image: "images/carousel/apple_watch.jpg" },
    { id: 8, image: "images/categories/laptop.jpg" },
    { id: 9, image: "images/categories/phone.webp" },
    { id: 10, image: "images/categories/television.webp" },
  ];
  const handleChangeBackround = () => {
    if(aboutRef.current){
      aboutRef.current.classList.toggle("aboutRef");
    }
  }
  return (
    <>
      <ThemeToggle />
      <div className={`home ${theme}`}>
        <h1>Trang About</h1>
        <p>Chế độ hiện tại: {theme}</p>
      </div>
      <div className="about" ref={aboutRef}>
        <div className="about__list" style={{ "--quantity": images.length }}>
          {images.map((item, index) => (
            <div
              className="item"
              key={item.id}
              style={{ "--possition": index }}
            >
              <img src={item.image} alt="img" />
            </div>
          ))}
        </div>
        <Button onClick={handleChangeBackround}>Đổi màu</Button>
      </div>
    </>
  );
}

export default About;
