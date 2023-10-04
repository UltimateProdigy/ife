import "./trending.css";
import Image from "next/image";

type trendingProps = {
  shoe: any;
  name: string;
  description: string;
  width: number;
};

const Trendingcard = ({ shoe, name, description, width }: trendingProps) => {
  return (
    <div className="card">
      <Image
        style={{ borderRadius: "10px" }}
        src={shoe}
        width={width}
        alt="trendingleather"
      />
      <p className="trendingname">{name}</p>
      <p className="trendingdes">
        <svg className="trendingsvg"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
        >
          <path
            d="M8.19 0.1725L1.19 3.2825C0.47 3.6025 0 4.3225 0 5.1125V9.8125C0 15.3625 3.84 20.5525 9 21.8125C14.16 20.5525 18 15.3625 18 9.8125V5.1125C18 4.3225 17.53 3.6025 16.81 3.2825L9.81 0.1725C9.3 -0.0575 8.7 -0.0575 8.19 0.1725ZM6.29 15.1025L3.7 12.5125C3.60742 12.4199 3.53398 12.31 3.48387 12.189C3.43377 12.0681 3.40798 11.9384 3.40798 11.8075C3.40798 11.6766 3.43377 11.5469 3.48387 11.426C3.53398 11.305 3.60742 11.1951 3.7 11.1025C3.79258 11.0099 3.90249 10.9365 4.02346 10.8864C4.14442 10.8363 4.27407 10.8105 4.405 10.8105C4.53593 10.8105 4.66558 10.8363 4.78654 10.8864C4.90751 10.9365 5.01742 11.0099 5.11 11.1025L7 12.9825L12.88 7.1025C12.9726 7.00992 13.0825 6.93648 13.2035 6.88637C13.3244 6.83627 13.4541 6.81048 13.585 6.81048C13.7159 6.81048 13.8456 6.83627 13.9665 6.88637C14.0875 6.93648 14.1974 7.00992 14.29 7.1025C14.3826 7.19508 14.456 7.30499 14.5061 7.42596C14.5562 7.54692 14.582 7.67657 14.582 7.8075C14.582 7.93843 14.5562 8.06808 14.5061 8.18904C14.456 8.31001 14.3826 8.41992 14.29 8.5125L7.7 15.1025C7.60749 15.1952 7.4976 15.2688 7.37662 15.3189C7.25565 15.3691 7.12597 15.3949 6.995 15.3949C6.86403 15.3949 6.73435 15.3691 6.61338 15.3189C6.4924 15.2688 6.38251 15.1952 6.29 15.1025Z"
            fill="#4ECB71"
          />
        </svg>
        {description}
      </p>
      <button className="purchase">Purchase Now</button>
    </div>
  );
};

export default Trendingcard;
