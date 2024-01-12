const InfoCard = () => {
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
    <>
      {Data.map((item) => {
        return (
          <div key={item.id} className="card-container">
            <div className="img-container">
              <img src="../../public/oil.jpg" alt="image" />
            </div>
            <div className="body-container">
              <h2>{item.name}</h2>
              <h4>{item.description}</h4>
              <div className="price-con">
                <h3>Price:</h3>
                <p>${item.price}</p>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InfoCard;
