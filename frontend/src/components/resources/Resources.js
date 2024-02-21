import React from "react";
import "./Resources.css";
import mentalHealthImage from "../../images/mental_health.jpg";
import yogaImage from "../../images/yoga_image.jpg";
import marathonImage from "../../images/marathon_image.jpg";

const Resources = () => {
  const resources = [
    {
      title: "Mental Health Awareness Month",
      description: "Learn about the importance of mental health & how to maintain it.",
      imageUrl: mentalHealthImage,
      link: "https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/",
    },
    {
      title: "Yoga for Beginners- Shuruat se he hoga!",
      description: "Discover the benefits of yoga and get started with simple yoga poses.",
      imageUrl: yogaImage,
      link: "https://www.youngliving.com/blog/eu/en/beginners-guide-to-yoga/",
    },
    {
      title: "Upcoming Marathon in Mumbai",
      description: "Join the upcoming marathon event in Mumbai and register now!",
      imageUrl: marathonImage,
      link: "https://geeksonfeet.com/blog/tmmracereport23/",
    },
  ];

  return (
    <div className="resources-container">
      {resources.map((resource, index) => (
        <div key={index} className="resource-card">
          <img src={resource.imageUrl} alt={resource.title} className="resource-image" />
          <div className="resource-details">
            <h2 className="resource-title">{resource.title}</h2>
            <p className="resource-description">{resource.description}</p>
            <a href={resource.link} target="https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/" rel="noopener noreferrer" className="resource-link">
              Learn more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resources;
