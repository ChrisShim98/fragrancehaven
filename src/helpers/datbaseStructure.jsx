// One product has one brand
// One product has many reviews
// Rating is calculated based on all reviews
// One product is in many users cart
const products = [
  {
    id: "1",
    name: "Dylan Blue",
    scent: "Versace Dylan Blue",
    brand: brands[0],
    price: "77.30",
    stock: 5,
    description:
      "Versace Pour Homme Dylan Blue is a fresh and vibrant fragrance for men. It is a blend of citrus notes, including bergamot, grapefruit, and lemon, which create a sparkling and energetic opening. The heart of the fragrance is a blend of lavender, geranium, and cardamom, which add depth and complexity to the scent. The base of the fragrance is a blend of vetiver, cedarwood, and oakmoss, which provide a warm and woody finish. This fragrance is perfect for any occasion, whether it's a day at the office or a night out on the town. It is a versatile fragrance that can be worn year-round and is sure to turn heads.",
    img: "https://res.cloudinary.com/dhpo94oka/image/upload/v1706579964/FragranceHaven/Dev/bpwy5d9k7ixerh9v68wy.webp",
    rating: reviews[0].rating,
    review: [reviews[0]],
    amount: 1,
    inUserCart: [users[0]],
    dateAdded: "2015-05-16T05:50:06"
  },
];

// One brand has many products
const brands = [
  {
    id: "1",
    name: "Versace",
    products: [products[0]]
  },
];

// One review has one product
// One review has one reviewer
const reviews = [
    {
        id: "1",
        review: "This was nice",
        rating: 4,
        product: products[0],
        reviewer: users[0],
        dateAdded: "2015-05-16T05:50:06"
    }
]

// One user has many reviews
// One user has many products in cart
const users = [
    {
        username: "chris",
        email: "chrisshim123@gmail.com",
        password: "this is hashed",
        role: "customer",
        reviews: [reviews[0]],
        cart: [products[0]]
    }
]

