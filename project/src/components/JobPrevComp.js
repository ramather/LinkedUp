import React from "react";

const JobPrevComp = ({ setImg, setText, setTitle, setLink, el }) => {
  return (
    <div style={{display: "flex"}}
    className="hoover"
      onClick={() => {
        setText(el.text);
        setTitle(el.title);
        setLink(el.link);
        setImg(el.img)
      }}
    >
      <img style={{padding: "4px"}} width="65" height="65" alt="" src={el.img}></img>
      {/* <div style={{backgroundColor: "grey", height: "99px", width: "1px", paddingLeft: "1px"}}><br/></div> */}
      <p style={{ padding: 0, margin: 0 }}>{el.title}</p>
    </div>
  );
};

export default JobPrevComp;