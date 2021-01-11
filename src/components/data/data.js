// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const ProductAPI = {
  players: [
    { 
      number: 1, name: "Heinz", 
      position: "Legendary ketchup, sauces and mayonnaise", 
      img_src:"https://firebasestorage.googleapis.com/v0/b/fortuna-blitz-contact-form.appspot.com/o/Heinz.jpeg?alt=media&token=16686ca7-0a46-4408-8a97-7ced7dcf0fab", 
      id: "product-1",
      inner_description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
  },
    { number: 2, name: "Spilva", position: "Condiments and canned vegetables", img_src:"https://firebasestorage.googleapis.com/v0/b/fortuna-blitz-contact-form.appspot.com/o/Spilva.jpeg?alt=media&token=b876b91a-dcad-461e-8629-2f9eaa2c65c7",
      id: "product-2",
      inner_description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
    { number: 3, name: "Roleski", position: "Sauces, mustards and mayonnaise", img_src:"https://firebasestorage.googleapis.com/v0/b/fortuna-blitz-contact-form.appspot.com/o/Roleski.jpeg?alt=media&token=614da322-592e-492d-bf6f-88de7bb3e37e",
    id: "product-3",
    inner_description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
    { number: 4, name: "Novoukraiinka", position: "Oatflakes, muesli, ready-to-eat meals", img_src:"https://firebasestorage.googleapis.com/v0/b/fortuna-blitz-contact-form.appspot.com/o/Novoukrainka.jpeg?alt=media&token=eac93135-9133-4840-a269-3f408f84040d",
    id: "product-4",
    inner_description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
    // { number: 5, name: "William Winger", position: "M" },
    // { number: 6, name: "Fillipe Forward", position: "F" },
    // { title: "Heinz",
    //   description: "Legendary ketchup, sauces and mayonnaise",
    //   img_src:"https://firebasestorage.googleapis.com/v0/b/fortuna-blitz-contact-form.appspot.com/o/Heinz.jpeg?alt=media&token=16686ca7-0a46-4408-8a97-7ced7dcf0fab",
    //   id: "product-1"
    // },
    // {
    //   title: "Spilva",
    //   description: "Condiments and canned vegetables",
    //   img_src:"https://firebasestorage.googleapis.com/v0/b/fortuna-blitz-contact-form.appspot.com/o/Spilva.jpeg?alt=media&token=b876b91a-dcad-461e-8629-2f9eaa2c65c7",
    //   id: "product-2"
    // },
    // {
    //   title: "Roleski",
    //   description: "Sauces, mustards and mayonnaise",
    //   img_src:"https://firebasestorage.googleapis.com/v0/b/fortuna-blitz-contact-form.appspot.com/o/Roleski.jpeg?alt=media&token=614da322-592e-492d-bf6f-88de7bb3e37e",
    //   id: "product-3"
    // },
    // {
    //   title: "Novoukraiinka",
    //   description: "Oatflakes, muesli, ready-to-eat meals",
    //   img_src:"https://firebasestorage.googleapis.com/v0/b/fortuna-blitz-contact-form.appspot.com/o/Novoukrainka.jpeg?alt=media&token=eac93135-9133-4840-a269-3f408f84040d",
    //   id: "product-4"
    // }
  ],
  all: function () {
    return this.players;
  },
  get: function (id) {
    const isPlayer = (p) => p.number === id;
    return this.players.find(isPlayer);
  }
};

export default ProductAPI;



