import React, { useEffect, useState } from "react";
import classes from "../upcoming/upcoming.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Details(props) {
  const [data, setData] = useState([]);

  const fetchDetails = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/rockets");
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchDetails();
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <div className={classes.upComing}>
      {data.map((data) => (
        <div data-aos="fade-up" className={classes.card}>
          <div className={classes.img}>
            <img src={data.flickr_images[0]} alt="err" />
          </div>
          <div className={classes.details}>
            <h4>
              Name: <span> {data.name}</span>
            </h4>
            <h4>
              Flight number: <span> {data.flight_number}</span>
            </h4>
            <h4>
              Launch date:{" "}
              <span>
                {new Date(data.date_local).toLocaleDateString("en-US")}
              </span>
            </h4>{" "}
            <h4>
              Cost per launch: <span> {data.cost_per_launch}</span>
            </h4>
            <h4>
              Success rate: <span> {data.success_rate_pct}</span>
            </h4>
            <h4>
              Payload:
              <li>name: {data.payload_weights[0].name}</li>
              <li>id: {data.payload_weights[0].id}</li>
              <li>kg: {data.payload_weights[0].kg}</li>
              <li> lb:{data.payload_weights[0].lb}</li>
            </h4>
            <h4>
              Details: <span>{data.description}</span>
            </h4>
            <h4>
              wikipedia:{" "}
              <span>
                <a href={data.wikipedia} target="_blank">
                  {data.wikipedia}
                </a>
              </span>
            </h4>
          </div>
          <button onClick={props.onHide}>Close</button>
        </div>
      ))}
    </div>
  );
}

export default Details;
