import React, { useState } from "react";
import JobPrevComp from "./JobPrevComp";
import { Scrollbars } from "rc-scrollbars";
import * as file from "../jobData.json";
import "../index.css";


const Body = () => {
  const [text, setText] = useState(file.default[0].text);
  const [title, setTitle] = useState(file.default[0].title);
  const [link, setLink] = useState(file.default[0].link);
  const [img, setImg] = useState("");


  return (
    <div
      style={{
        height: "90.7vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Scrollbars
        style={{
          height: "100%",
          width: "400px",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        {file.default.map((el) => (
          <JobPrevComp
            style={{ borderRadius: "5px" }}
            el={el}
            setLink={setLink}
            setText={setText}
            setTitle={setTitle}
            setImg={setImg}
          />
        ))}
      </Scrollbars>
      <div style={{ padding: "5px" }}></div>
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          borderRadius: "5px",
          height: "100%"
        }}
      >
        <h3
        style={{height: "10%"}}
        >{title}</h3>
        <Scrollbars style={{ height: "89%", padding: "5px" }}>
          <a href={link}> Link </a>
          <p>{text}</p>
        </Scrollbars>
      </div>
    </div>
  );
};

export default Body;
