import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex flex-col gap-7 md:flex-row justify-center items-center p-10">
      <Card
        src="/katie-zaferes.png"
        rating="5.0"
        starCount="25"
        country="USA"
        caption="Life lessons with Katie Zaferes"
        price="$136"
      />
      <Card
        src="/wedding-photography.png"
        rating="5.0"
        starCount="16"
        country="Germany"
        caption="Learn wedding photography"
        price="$125"
      />
      <Card
        src="/mountain-bike.png"
        rating="5.0"
        starCount="40"
        country="USA"
        caption="Group Mountain Biking"
        price="$50"
      />
    </div>
  );
};

export default Cards;
