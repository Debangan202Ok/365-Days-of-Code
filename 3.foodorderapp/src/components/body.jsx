import InfoCard from "./infocard";

const Body = () => {
  const Data = [
    {
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
  ];

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
