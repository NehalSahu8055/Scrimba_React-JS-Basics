const Card = (props) => {
  return (
    <div className="card flex items-center justify-center text-xs">
      <figure className="fig-1 relative flex flex-col gap-3">
        <button className="absolute right-2 top-2">
          <img src="/heart.svg" alt="" />
        </button>
        <img
          className="rounded-lg"
          src={props.src}
          alt={props.alt}
          width={176}
          height={235}
        />
        <figcaption>
          <ul>
            <li className="inline-flex gap-1 justify-center items-center">
              <img src="/star.png" width={14} height={14} alt="" />
              <span>
                {props.rating}
                <span className="pl-1 text-[#918E9B]">
                  ({props.starCount}) • USA
                </span>
              </span>
            </li>
            <li className="py-2">{props.caption}</li>
            <li>
              <strong>From {props.price}</strong>
              <abbr className="no-underline" title="per">
                /
              </abbr>{" "}
              person
            </li>
          </ul>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
