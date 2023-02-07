import { useEffect, useRef, useState } from "react";
import { getAverageRating, getStarType } from "./utlis";
import Star1 from "../../../assets/icons/stars/star-1.svg";
import Star2 from "../../../assets/icons/stars/star-2.svg";
import Star3 from "../../../assets/icons/stars/star-3.svg";
import Star4 from "../../../assets/icons/stars/star-4.svg";
import Star5 from "../../../assets/icons/stars/star-5.svg";
import greyStar from "../../../assets/icons/stars/grey-star.svg";

function Rating({ rates }) {
  const imgResult = useRef(null);
  const [rate, setRate] = useState(0);
  useEffect(() => {
    if (rates) {
      let average = getAverageRating(rates);
      setRate(average);
      let starType = getStarType(average);
      if (starType == 1) {
        imgResult.current.src = Star1;
      } else if (starType == 2) {
        imgResult.current.src = Star2;
      } else if (starType == 3) {
        imgResult.current.src = Star3;
      } else if (starType == 4) {
        imgResult.current.src = Star4;
      } else {
        imgResult.current.src = Star5;
      }
    }
  }, [rates]);

  return (
    <div className="rating_container">
      <div className="result_rating">
        <img src={Star5} alt="" ref={imgResult} />
        <span>{rate}</span>
      </div>
      <div className="ratings">
        <div className="rate">
          <img src={Star5} alt="" />
          <img src={Star5} alt="" />
          <img src={Star5} alt="" />
          <img src={Star5} alt="" />
          <img src={Star5} alt="" />
          <span>{Object.values(rates[4])}</span>
        </div>
        <div className="rate">
          <img src={Star4} alt="" />
          <img src={Star4} alt="" />
          <img src={Star4} alt="" />
          <img src={Star4} alt="" />
          <img src={greyStar} alt="" />
          <span>{Object.values(rates[3])}</span>
        </div>
        <div className="rate">
          <img src={Star3} alt="" />
          <img src={Star3} alt="" />
          <img src={Star3} alt="" />
          <img src={greyStar} alt="" />
          <img src={greyStar} alt="" />
          <span>{Object.values(rates[2])}</span>
        </div>
        <div className="rate">
          <img src={Star2} alt="" />
          <img src={Star2} alt="" />
          <img src={greyStar} alt="" />
          <img src={greyStar} alt="" />
          <img src={greyStar} alt="" />
          <span>{Object.values(rates[1])}</span>
        </div>
        <div className="rate">
          <img src={Star1} alt="" />
          <img src={greyStar} alt="" />
          <img src={greyStar} alt="" />
          <img src={greyStar} alt="" />
          <img src={greyStar} alt="" />
          <span>{Object.values(rates[0])}</span>
        </div>
      </div>
    </div>
  );
}

export default Rating;
