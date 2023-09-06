// destructuring props 


const Card = ({src, rating, starCount, country, caption, price, openSpots}) => {
  let badgeText;
  if (openSpots == "0") {
      badgeText = "SOLD OUT"
  } 
  else {
    badgeText = "ONLINE"
}
  
  return (
    <div className="card flex items-center justify-center text-xs">
      <figure className="fig-1 relative flex flex-col gap-3">
        <div className="absolute  right-2 top-2">
          {badgeText && <div className="card-badge bg-white rounded-sm px-1">{badgeText}</div>}
        </div>
        <img
          className="rounded-lg h-[235px]"
          src={src}
          alt=""
          width={176}
          height={235}
        />
        <figcaption>
          <ul>
            <li key="0" className="inline-flex gap-1 justify-center items-center">
              <img src="/star.png" width={14} height={14} alt="" />
              <span>
                {rating}
                <span className="pl-1 text-[#918E9B]">
                  ({starCount}) • {country}
                </span>
              </span>
            </li>
            <li key="1" className="py-2">{caption}</li>
            <li>
              <strong>From ${price} </strong>
              <abbr className="no-underline" title="per">
                /
              </abbr>
              person
            </li>
          </ul>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
