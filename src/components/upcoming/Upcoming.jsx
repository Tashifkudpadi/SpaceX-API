import React, { useEffect, useState } from "react";
import classes from "./upcoming.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Upcoming(props) {
  const [uLaunch, setULaunch] = useState([]);

  const fetchUpcomingLaunch = async () => {
    const response = await fetch(
      "https://api.spacexdata.com/v5/launches/upcoming"
    );
    const data = await response.json();
    setULaunch(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchUpcomingLaunch();

    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <div className={classes.upComing}>
      {uLaunch.map((data) => (
        <div data-aos="fade-up" className={classes.card}>
          <div className={classes.img}>
            <img src={data.links.patch.small} alt="err" />
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
              <span>
                {new Date(data.date_local).toLocaleDateString("en-US")}
              </span>
            </h4>

            <h4>
              Details: <span>{data.details}</span>
            </h4>
          </div>
          <button onClick={props.onShow}>More details</button>
        </div>
      ))}
    </div>
  );
}

export default Upcoming;
