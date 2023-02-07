import Switch from "../../shared/components/Switch";
import infoIcon from "../../assets/icons/info.svg";
import Button from "../../shared/components/Button";
import excelIcon from "../../assets/icons/Excel-file.svg";
import TextInput from "../../shared/components/TextInput";
import Rating from "../../shared/components/Rating";
import { reviews } from "./constant";
import Table from "../../shared/components/Table";

const RestaurantReview = () => {
  console.log(reviews);
  return (
    <div className="restorant_review_page">
      <div className="filters">
        <TextInput label="Chain Selection" onChange={(e) => console.log(e)} />
        <TextInput
          label="Restaurant Selection"
          onChange={(e) => console.log(e)}
        />
        <div className="switch_div">
          <span>Restaurant</span>
          <Switch label="Open" value={true} />
        </div>
      </div>
      <div className="main">
        <div className="info">
          <img src={infoIcon} alt="" />
          <span>
            You can view your restaurant reviews up to the last 6 months. Your
            appeal period is 7 days.
            <br />
            You can write your questions about the evaluations to{" "}
            <span className="bold">Live Help</span> or send an e-mail to{" "}
            <span className="bold">support@migrosyemek.com</span>{" "}
          </span>
        </div>
        <Rating rates={[{ 1: 2 }, { 2: 4 }, { 3: 19 }, { 4: 24 }, { 5: 48 }]} />
        <div className="filter-2">
          <TextInput label="Sort by" onChange={(e) => console.log(e)} />
          <TextInput label="Starting date" onChange={(e) => console.log(e)} />
          <TextInput label="End Date" onChange={(e) => console.log(e)} />
          <div className="btn">
            <Button label="list" />
          </div>
        </div>
        <div className="excel">
          <Button label="Export to Excel" icon={excelIcon} isEmpty={true} />
        </div>
        <Table dataArray={reviews} />
      </div>
    </div>
  );
};

export default RestaurantReview;
