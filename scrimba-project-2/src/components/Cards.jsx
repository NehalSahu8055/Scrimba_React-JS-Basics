import Card from "./Card";
import cardData from "./cardData";

const card = cardData.map((data,index)=>{
      return <Card
        key={data.id}
        src={data.coverImage}
        rating={data.stats.rating}
        starCount={data.stats.starCount}
        country={data.country}
        caption={data.caption}
        price={data.price}
        openSpots={data.openSpots}
      />
}); 
console.log(card);
const Cards = () => {
  return (
    <div className="flex flex-col gap-7 md:flex-row justify-center items-center p-10">
      {card}
    </div>
  );
};

export default Cards;
