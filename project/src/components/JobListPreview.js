import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import * as file from "../jobData.json";
import "../index.css";
import JobDetails from "./JobDetails";

const JobListPreview = ({ className }) => {
  const [text, setText] = useState(file.default[0].text);
  const [title, setTitle] = useState(file.default[0].title);
  const [link, setLink] = useState(file.default[0].link);

  return (
    <div style={{ display: "flex", flexDirection: "row", width: "990px" }}>
      <ListGroup
        style={{
         
          height: "700px",
          width: "300px",
          overflow: "auto",
          padding: "100px"
        }}
      >
        {file.default.map((element) => {
          return (
            <ListGroupItem
                
              onClick={() => {
                setText(element.text);
                setTitle(element.title);
                setLink(element.link);
                console.log(element.link);
              }}
              action
              variant="secondary"
            >
              {element.title}
            </ListGroupItem>
          );
        })}
      </ListGroup>
      <JobDetails
        style={{
          margin: "0 auto",
          height: "700px",
          width: "400px",
          overflow: "auto",
          
        }}
        text={text}
        title={title}
        link={link}
      />
      {/* <button onClick={() => printFile(file)}></button> */}
    </div>
  );
};

export default JobListPreview;
