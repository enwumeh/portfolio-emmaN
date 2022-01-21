import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [
    {
      title: "May 2020",
      cardTitle: "Graduated from Washington University",
      // url: "http://www.history.com",
      cardSubtitle: "Degree in Cognitive Brain Science"
      // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "https://www.ofi.com/content/dam/olamofi/products-and-ingredients/nuts/nuts-images/peanuts.jpg"
      //   }
      // }
    },
    {
      title: "November 2020",
      cardTitle: "Completed Bootcamp",
      // url: "http://www.history.com",
      cardSubtitle:
        "Full stack JavaScript certification Bootcamp",
      // cardDetailedText:
      //   "Men of the British Expeditionary Force (BEF) wade out to.."
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "https://i5.walmartimages.com/asr/3570a911-6d22-447d-94e5-7d749ac57195.b308361c583165d9b8bcc8ea03670ba3.jpeg"
      //   }
      // }
    },
    {
      title: "June 2021",
      cardTitle: "Started contributing to Chicago group project",
      // url: "http://www.history.com",
      // cardSubtitle:
      //   "",
      cardSubtitle:
        "Active contributor to Voma Volunteer Management project"
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "https://i5.walmartimages.com/asr/3570a911-6d22-447d-94e5-7d749ac57195.b308361c583165d9b8bcc8ea03670ba3.jpeg"
      //   }
      // }
    },
    {
      title: "November 2021",
      cardTitle: "Began Python training course",
      // url: "http://www.history.com",
      cardSubtitle:
        "Learned Python and strengthened OOP knowledge",
      // cardDetailedText:
      //   "Men of the British Expeditionary Force (BEF) wade out to..",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "https://i5.walmartimages.com/asr/3570a911-6d22-447d-94e5-7d749ac57195.b308361c583165d9b8bcc8ea03670ba3.jpeg"
      //   }
      // }
    },
    {
      title: "Early 2022",
      cardTitle: "Get first full time job as a developer",
      // url: "http://www.history.com",
      cardSubtitle: "Secure full time position as a software developer",
      // cardDetailedText: "ermmmmm..",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "https://i5.walmartimages.com/asr/3570a911-6d22-447d-94e5-7d749ac57195.b308361c583165d9b8bcc8ea03670ba3.jpeg"
      //   }
      // }
    }
  ];

  return (
    <div
      className="timeline-container"
      name="timeline"
      id="timeline"
      style={{ width: "610px", margin: "0 auto", "textAlign": "center"}}

    >
      <h1 className="heading">Timeline</h1>
      <Chrono
        theme={{
          primary: "gray",
          secondary: "rgb(219 187 166);",
          cardBgColor: "white",
          cardForeColor: "rgb(219 187 166);",
          titleColor: "black"
        }}
        id="timeline-card"
        items={items}
        mode="HORIZONTAL"
        // itemWidth="400px"
        // cardWidth="30px"
        style={{fontSize:"993px", width: "900px", margin: "0 auto", textAlign: "center"  }}
      />
    </div>
  );
};

export default Timeline;
