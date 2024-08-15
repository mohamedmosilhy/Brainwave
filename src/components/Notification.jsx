import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur
        border border-n-1/10 rounded-2xl gap-5`}
    >
      <img src={notification1} alt="notification1" width={62} height={62} />
      <div className="flex-1">
        <h6 className=" justify-between font-semibold mb-1 text-base">
          {title}
        </h6>
        <div className="flex items-center justify-between ">
          <ul className=" flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex rounded-full border-n-12 overflow-hidden h-6 w-6 border-2"
              >
                <img
                  src={item}
                  alt={item}
                  className="w-full"
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>

          <div className="text-n-13 body-2">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
