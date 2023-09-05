const products = [
  { title: "Released in 2013", id: 1 },
  { title: "Created by Jordan Walke", id: 2 },
  { title: "100K stars on Github", id: 3 },
  { title: "Maintained by Facebook", id: 4 },
];

const svgTick = {
  imageUrl: "/tick.svg",
  imageSize: 20,
};

let i = 0;
const listItems = products.map((item) => (
  <li key={i++} className="flex items-center gap-2">
    <img
      className="mr-2"
      src={svgTick.imageUrl}
      width={svgTick.imageSize}
      aria-hidden="true"
      alt=""
    />
    {item.title}
  </li>
));

const ListForm = () => {
  return <ul>{listItems}</ul>;
};

export default ListForm;
