import p1 from "@/data/images/p-1.webp";
import p2 from "@/data/images/p-2.webp";
import p3 from "@/data/images/p-3.webp";
import p4 from "@/data/images/p-4.webp";
import p5 from "@/data/images/p-5.webp";
import p6 from "@/data/images/p-6.webp";
import p7 from "@/data/images/p-7.webp";
import p8 from "@/data/images/p-8.webp";

export const filterList = {
  types: [
    { id: "type1", name: "seating" },
    { id: "type2", name: "lying" },
    { id: "type3", name: "entertainment" },
    { id: "type4", name: "tables" },
    { id: "type5", name: "storage" },
  ],
  categories: [
    { id: "uuid1", name: "Wooden" },
    { id: "uuid2", name: "Bamboo" },
    { id: "uuid3", name: "Metal" },
  ],
};

export const products = [
  {
    id: "uuid1",
    name: "Nordic Chair",
    description:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quam ut purus rutrum lobortis",
    images: [
      { id: "img1", path: p1 },
      { id: "img2", path: p4 },
      { id: "img3", path: p7 },
    ],
    categoryId: "uuid1",
    typeId: "type1", // seating
    price: 230,
    discount: 0,
    rating: 4,
    inventory: 180,
    status: "sold",
  },
  {
    id: "uuid2",
    name: "Kruzo Aero Chair",
    description:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quam ut purus rutrum lobortis",
    images: [
      { id: "img4", path: p2 },
      { id: "img5", path: p5 },
      { id: "img6", path: p8 },
    ],
    categoryId: "uuid2",
    typeId: "type1", // seating
    price: 180.85,
    discount: 200,
    rating: 3.5,
    inventory: 900,
    status: "active",
  },
  {
    id: "uuid3",
    name: "Ergonomic Chair",
    description:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quam ut purus rutrum lobortis",
    images: [
      { id: "img7", path: p3 },
      { id: "img8", path: p1 },
      { id: "img9", path: p6 },
    ],
    categoryId: "uuid1",
    typeId: "type1", // seating
    price: 90,
    discount: 110,
    rating: 4,
    inventory: 90,
    status: "active",
  },
  {
    id: "uuid4",
    name: "Nordic Chair",
    description:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quam ut purus rutrum lobortis",
    images: [
      { id: "img10", path: p4 },
      { id: "img11", path: p2 },
      { id: "img12", path: p7 },
    ],
    categoryId: "uuid3",
    typeId: "type4", // tables
    price: 1500,
    discount: 0,
    rating: 4,
    inventory: 100,
    status: "sold",
  },
  {
    id: "uuid5",
    name: "Kruzo Aero Chair",
    description:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quam ut purus rutrum lobortis",
    images: [
      { id: "img13", path: p5 },
      { id: "img14", path: p3 },
      { id: "img15", path: p8 },
    ],
    categoryId: "uuid1",
    typeId: "type1", // seating
    price: 230,
    discount: 0,
    rating: 4,
    inventory: 180,
    status: "active",
  },
  {
    id: "uuid6",
    name: "Ergonomic Chair",
    description:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quam ut purus rutrum lobortis",
    images: [
      { id: "img16", path: p6 },
      { id: "img17", path: p2 },
      { id: "img18", path: p4 },
    ],
    categoryId: "uuid1",
    typeId: "type1", // seating
    price: 140,
    discount: 150,
    rating: 3,
    inventory: 200,
    status: "sold",
  },
  {
    id: "uuid7",
    name: "Nordic Chair",
    description:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quam ut purus rutrum lobortis",
    images: [
      { id: "img19", path: p7 },
      { id: "img20", path: p1 },
      { id: "img21", path: p3 },
    ],
    categoryId: "uuid3",
    typeId: "type5", // storage
    price: 210,
    discount: 0,
    rating: 4,
    inventory: 100,
    status: "active",
  },
  {
    id: "uuid8",
    name: "Ergonomic Chair",
    description:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quam ut purus rutrum lobortis",
    images: [
      { id: "img22", path: p8 },
      { id: "img23", path: p4 },
      { id: "img24", path: p2 },
    ],
    categoryId: "uuid2",
    typeId: "type2", // lying
    price: 140,
    discount: 150,
    rating: 3,
    inventory: 200,
    status: "active",
  },
  {
    id: "uuid9",
    name: "Kruzo Aero Chair",
    description:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quam ut purus rutrum lobortis",
    images: [
      { id: "img25", path: p5 },
      { id: "img26", path: p3 },
      { id: "img27", path: p8 },
    ],
    categoryId: "uuid1",
    typeId: "type3", // entertainment
    price: 250,
    discount: 260,
    rating: 4,
    inventory: 200,
    status: "active",
  },
];
