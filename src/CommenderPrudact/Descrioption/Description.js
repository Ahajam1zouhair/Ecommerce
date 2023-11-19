import React from "react";
import { useParams } from "react-router";
import DatePrudits from "../../DatePrudits/Date";
import './Description.css'
import Card from 'react-bootstrap/Card';

export default function Description() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
     <div
        style={{
          width: 120,
          height: 48,
          position: "relative",
          borderBottom: "2px #0D6EFD solid",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#0D6EFD",
            fontSize: 20,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Description
        </div>
      </div>
     <Card>
         

      {DatePrudits.filter((nameID) => nameID.ID == id).map((obj) => (
        <h3 className="description">{obj.Description}</h3>
      ))}
      </Card>
    
    </div>
  );
}
