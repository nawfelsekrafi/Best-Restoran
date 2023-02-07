import Button from "../Button";
import Star4 from "../../../assets/icons/stars/star-4.svg";
import Star5 from "../../../assets/icons/stars/star-5.svg";

function Table({ dataArray }) {
  return (
    <div className="table_container">
      <div className="header">
        <div>Date</div>
        <div>Delivery</div>
        <div>Service</div>
        <div>Flavor</div>
        <div>Comment</div>
      </div>
      {dataArray.map((item, index) => (
        <div className="item" key={index}>
          <div className="date_time">
            <span>{item.date}</span>
            <span>{item.time}</span>
          </div>
          <div>
            <img src={Star4} alt="" />
            <span>{item.delivery_rate}</span>
          </div>
          <div>
            <img src={Star4} alt="" />
            <span>{item.service_rate}</span>
          </div>
          <div>
            <img src={Star5} alt="" />
            <span>{item.flavor_rate}</span>
          </div>
          <div>
            <span className="comment_text">{item.comment_text}</span>
            <span className="reply_text">{item.reply_text}</span>
            {item.comment_text && !item.reply_text && (
              <Button isEmpty={true} label="Reply" />
            )}
            {item.reply_text && <Button isEmpty={true} label="Edit Answer" />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
