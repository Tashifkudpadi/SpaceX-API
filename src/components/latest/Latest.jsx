import React, { useEffect, useState } from "react";
import classes from "../upcoming/upcoming.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Latest(props) {
  const [data, setData] = useState([]);

  const fetchLatestLaunch = async () => {
    const response = await fetch(
      "https://api.spacexdata.com/v5/launches/latest"
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchLatestLaunch();
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <div className={classes.upComing}>
      <div data-aos="fade-up" className={classes.card}>
        <div className={classes.img}>
          {/* <img src={data.links.patch.small} alt="err" /> */}
          <img src="" alt="No img" />
        </div>
        <div className={classes.details}>
          <h4>
            Launch name: <span> {data.name}</span>
          </h4>
          <h4>
            Flight number: <span> {data.flight_number}</span>
          </h4>
          <h4>
            Launch date:{" "}
            <span>{new Date(data.date_local).toLocaleDateString("en-US")}</span>
          </h4>
          <h4>
            Details: <span>{data.details}</span>
          </h4>
        </div>
        <button onClick={props.onShow}>More details</button>
      </div>
    </div>
  );
}

export default Latest;
