import { toast } from "react-toastify";
import { productService } from "../http-common";

export const products = async (currentPage, pageSize) => {
  const res = await productService.get(
    `/product/list?currentPage=${currentPage}&pageSize=${pageSize}`
  );

  return res.data;
};
export const searchProduct = async (
  currentPage = 1,
  pageSize = 20,
  keyword
) => {
  try {
    const res = await productService.post(
      `product/searchProduct?currentPage=${currentPage}&pageSize=${pageSize}`,
      { searchKeyword: keyword }
    );

    return res.data;
  } catch (err) {
    toast.warn("something went wrong, try again");
  }
};

export const productsUnpaginated = async () => {
  const res = await productService.get(`/product/listByCategory`);

  return res.data;
};

export const productById = async (id) => {
  const res = await productService.get(`/product/${id}`);

  return res.data;
};

export const mock_top_deals = [
  {
    Id: 13,
    Name: "Exotic Conference Table ",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 8,
    Kind: "Direct",
    Price: "349999",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1651069505/products/kfavtxxkramgem6xflk1.jpg",
    ],
    EntryDate: "2022-04-27T14:26:12.940Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 35,
        Name: "Color",
        Value: "Green",
        ProductId: 13,
      },
      {
        Id: 36,
        Name: "Weight",
        Value: "100",
        ProductId: 13,
      },
      {
        Id: 37,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 13,
      },
    ],
    Category: {
      Id: 8,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:41:59.885Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
    ProductStore: {
      Id: 13,
      ProductId: 13,
      Quantity: 20,
      OutOfStock: false,
      EntryDate: "2022-04-27T14:26:12.940Z",
      UpdatedBy: null,
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 10,
    Name: "Bar Table 4 stands",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 8,
    Kind: "Direct",
    Price: "10000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1651067655/products/calshteqcmdkgoz7rnk2.jpg",
    ],
    EntryDate: "2022-04-27T13:55:11.557Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 26,
        Name: "Color",
        Value: "Brown",
        ProductId: 10,
      },
      {
        Id: 27,
        Name: "Weight",
        Value: "10",
        ProductId: 10,
      },
      {
        Id: 28,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 10,
      },
    ],
    Category: {
      Id: 8,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:41:59.885Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
    ProductStore: {
      Id: 10,
      ProductId: 10,
      Quantity: 99,
      OutOfStock: false,
      EntryDate: "2022-04-27T13:55:11.557Z",
      UpdatedBy: null,
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 9,
    Name: "Green chair",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 5,
    Kind: "Direct",
    Price: "30000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1651060634/products/arvettewqhbubpz0wski.jpg",
    ],
    EntryDate: "2022-04-27T13:32:29.275Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 23,
        Name: "Color",
        Value: "Green",
        ProductId: 9,
      },
      {
        Id: 24,
        Name: "Weight",
        Value: "10",
        ProductId: 9,
      },
      {
        Id: 25,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 9,
      },
    ],
    Category: {
      Id: 5,
      Name: "Shutter",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:41:24.209Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
    ProductStore: {
      Id: 9,
      ProductId: 9,
      Quantity: 9,
      OutOfStock: false,
      EntryDate: "2022-04-27T13:32:29.275Z",
      UpdatedBy: null,
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 7,
    Name: "Brown web staircase",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 4,
    Kind: "OnInspection",
    Price: "4000000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1651059358/products/ll8oatkgjuw7peerqeqj.jpg",
    ],
    EntryDate: "2022-04-27T11:36:06.926Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 17,
        Name: "Color",
        Value: "brown",
        ProductId: 7,
      },
      {
        Id: 18,
        Name: "Weight",
        Value: "200",
        ProductId: 7,
      },
      {
        Id: 19,
        Name: "IsInstallable",
        Value: "yes",
        ProductId: 7,
      },
    ],
    Category: {
      Id: 4,
      Name: "Stainless Steels",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:41:08.048Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
    ProductStore: {
      Id: 7,
      ProductId: 7,
      Quantity: 199,
      OutOfStock: false,
      EntryDate: "2022-04-27T11:36:06.926Z",
      UpdatedBy: null,
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 5,
    Name: "Wall shelf",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 8,
    Kind: "Direct",
    Price: "100000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1651057739/products/dqolzabopgcx3psy4tgn.png",
    ],
    EntryDate: "2022-04-27T11:09:38.183Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 11,
        Name: "Color",
        Value: "white",
        ProductId: 5,
      },
      {
        Id: 12,
        Name: "Weight",
        Value: "60",
        ProductId: 5,
      },
      {
        Id: 13,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 5,
      },
    ],
    Category: {
      Id: 8,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:41:59.885Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
    ProductStore: {
      Id: 5,
      ProductId: 5,
      Quantity: 10,
      OutOfStock: false,
      EntryDate: "2022-04-27T11:09:38.183Z",
      UpdatedBy: null,
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 18,
    Name: "Outdoor bench for parks",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 8,
    Kind: "Direct",
    Price: "200000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1651072781/products/mwtl8x2xmy1vsxl2qaqw.jpg",
    ],
    EntryDate: "2022-04-27T15:20:27.612Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 50,
        Name: "Color",
        Value: "black",
        ProductId: 18,
      },
      {
        Id: 51,
        Name: "Weight",
        Value: "100",
        ProductId: 18,
      },
      {
        Id: 52,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 18,
      },
    ],
    Category: {
      Id: 8,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:41:59.885Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
    ProductStore: {
      Id: 18,
      ProductId: 18,
      Quantity: 100,
      OutOfStock: false,
      EntryDate: "2022-04-27T15:20:27.612Z",
      UpdatedBy: null,
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 2,
    Name: "Cabinet with sliding doors",
    Description:
      "Store things like papers, binders and chargers hidden behind the doors to enjoy a clutter-free space. Lockable storage for your private things. The back wall of the cabinet can be mounted to the back or middle of the cabinet if you want the cabinet to be accessible from both sides, with sliding doors on one side and open shelves on the other.\\n\\nThe freestanding cabinet is perfect to use as a divider between different activities in the same room. Creates privacy without blocking the workspace entirely and is great for small and large areas. The sliding doors are lockable, so you can keep your private belongings safe. You can adjust your storage according to your needs, as the shelves are adjustable. The storage unit stands steady also on uneven floors since it has adjustable feet. Possible to separate for recycling or energy recovery if available in your community.,\n",
    CategoryId: 8,
    Kind: "Direct",
    Price: "120000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1651053527/products/t0pbzs8gasea89n6malr.png",
    ],
    EntryDate: "2022-04-27T09:59:16.018Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 2,
        Name: "Color",
        Value: "White",
        ProductId: 2,
      },
      {
        Id: 3,
        Name: "Weight",
        Value: "500",
        ProductId: 2,
      },
      {
        Id: 4,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 2,
      },
    ],
    Category: {
      Id: 8,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:41:59.885Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
    ProductStore: {
      Id: 2,
      ProductId: 2,
      Quantity: 99,
      OutOfStock: false,
      EntryDate: "2022-04-27T09:59:16.018Z",
      UpdatedBy: null,
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 16,
    Name: "Round steel chair",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 8,
    Kind: "Direct",
    Price: "43000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1651071350/products/fzuqf9jj2tunlmay5udc.jpg",
    ],
    EntryDate: "2022-04-27T14:56:40.602Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 44,
        Name: "Color",
        Value: "black",
        ProductId: 16,
      },
      {
        Id: 45,
        Name: "Weight",
        Value: "100",
        ProductId: 16,
      },
      {
        Id: 46,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 16,
      },
    ],
    Category: {
      Id: 8,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:41:59.885Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
    ProductStore: {
      Id: 16,
      ProductId: 16,
      Quantity: 99,
      OutOfStock: false,
      EntryDate: "2022-04-27T14:56:40.602Z",
      UpdatedBy: null,
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 15,
    Name: "Outside Fabricated bench",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 8,
    Kind: "Direct",
    Price: "130000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1651070362/products/q1gkedehfndbapkufxay.jpg",
    ],
    EntryDate: "2022-04-27T14:40:35.524Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 41,
        Name: "Color",
        Value: "yellow",
        ProductId: 15,
      },
      {
        Id: 42,
        Name: "Weight",
        Value: "120",
        ProductId: 15,
      },
      {
        Id: 43,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 15,
      },
    ],
    Category: {
      Id: 8,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:41:59.885Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
    ProductStore: {
      Id: 15,
      ProductId: 15,
      Quantity: 19,
      OutOfStock: false,
      EntryDate: "2022-04-27T14:40:35.524Z",
      UpdatedBy: null,
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 6,
    Name: "brown luxury staircase",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 4,
    Kind: "OnInspection",
    Price: "400000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1651057788/products/qqc26sauve9n15t8gk2u.jpg",
    ],
    EntryDate: "2022-04-27T11:30:26.186Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 14,
        Name: "Color",
        Value: "200",
        ProductId: 6,
      },
      {
        Id: 15,
        Name: "Weight",
        Value: "300",
        ProductId: 6,
      },
      {
        Id: 16,
        Name: "IsInstallable",
        Value: "yes",
        ProductId: 6,
      },
    ],
    Category: {
      Id: 4,
      Name: "Stainless Steels",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:41:08.048Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
    ProductStore: {
      Id: 6,
      ProductId: 6,
      Quantity: 99,
      OutOfStock: false,
      EntryDate: "2022-04-27T11:30:26.186Z",
      UpdatedBy: null,
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
];
