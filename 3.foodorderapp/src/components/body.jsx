import InfoCard from "./infocard";

const Body = () => {
  const Data = [
    {
      id: 1,
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      id: 2,
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      id: 3,
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      id: 4,
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      id: 5,
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      id: 6,
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
    {
      id: 7,
      name: "Product Name",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ipsa?",
      price: 100,
      image: "../../public/oil.jpg",
    },
  ];

  return (
    <div className="body">
      {Data.map((i)=>{
        return (
          <InfoCard
            key={i.id}
            name={i.name}
            description={i.description}
            price={i.price}
            image={i.image}
          />
        )
      })}
    </div>
  );
};

export default Body;
