const {
  iFavourite,
  iWish,
  iChat,
  iGive,
  iAction,
  iWallet,
} = require("../icons/icons");

export const routes = [
  {
    id: 1,
    name: "Favourites",
    items: "10",
    url: "favourites",
    icon: iFavourite,
  },
  {
    id: 2,
    name: "Wise",
    items: "10",
    count: 2,
    url: "wish",
    icon: iWish,
  },
  {
    id: 3,
    name: "Chats",
    items: "10",
    count: 14,
    url: "chats",
    icon: iChat,
  },
  {
    id: 4,
    name: "Give aways",
    items: "10",
    count: 8,
    url: "give-aways",
    icon: iGive,
  },
  {
    id: 5,
    name: "Penny Auction",
    items: "10",
    url: "penny-auction",
    icon: iAction,
  },
  {
    id: 6,
    name: "Wallet",
    items: "10",
    count: 2,
    url: "wallet",
    icon: iWallet,
  },
];
