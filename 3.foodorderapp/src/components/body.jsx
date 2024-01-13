import InfoCard from "./infocard";
import { Data } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      {Data.map((item, index) => (
        <InfoCard key={index} resData={item} />
      ))}
      {/*always use key prop when using map function */}
    </div>
  );
};

export default Body;
