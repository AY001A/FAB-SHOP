import http from "../http-common";

export const products = async (currentPage, pageSize) => {
  const res = await http.get(
    `/product/list?currentPage=${currentPage}&pageSize=${pageSize}`
  );

  return res.data;
};

export const productsUnpaginated = async () => {
  const res = await http.get(`/product/listByCategory`);

  return res.data;
};

export const productById = async (id) => {
  const res = await http.get(`/product/${id}`);

  return res.data;
};

export const mock_top_deals = [
  {
    Id: 54,
    Name: "Cabinet with sliding doors",
    Description:
      "Store things like papers, binders and chargers hidden behind the doors to enjoy a clutter-free space.\n\nLockable storage for your private things.\n\nThe back wall of the cabinet can be mounted to the back or middle of the cabinet if you want the cabinet to be accessible from both sides, with sliding doors on one side and open shelves on the other.\n\nThe freestanding cabinet is perfect to use as a divider between different activities in the same room. Creates privacy without blocking the workspace entirely and is great for small and large areas.\n\nThe sliding doors are lockable, so you can keep your private belongings safe.\n\nYou can adjust your storage according to your needs, as the shelves are adjustable.\n\nThe storage unit stands steady also on uneven floors since it has adjustable feet.\n\nPossible to separate for recycling or energy recovery if available in your community.",
    CategoryId: 6,
    Kind: "Direct",
    Price: "120000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1650822684/products/ficxitvlzm30ks6jyv2v.png",
    ],
    EntryDate: "2022-04-24T17:51:33.664Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 39,
        Name: "Color",
        Value: "white",
        ProductId: 54,
      },
      {
        Id: 40,
        Name: "Weight",
        Value: "20",
        ProductId: 54,
      },
      {
        Id: 41,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 54,
      },
    ],
    Category: {
      Id: 6,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-13T14:59:20.737Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "string",
      LastModifiedDate: null,
    },
  },
  {
    Id: 53,
    Name: "Staircase ",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush. ",
    CategoryId: 4,
    Kind: "OnInspection",
    Price: "200000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1650821470/products/hmaducuscxh6nmfwwxua.jpg",
    ],
    EntryDate: "2022-04-24T17:31:47.295Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 36,
        Name: "Color",
        Value: "Brown",
        ProductId: 53,
      },
      {
        Id: 37,
        Name: "Weight",
        Value: "300",
        ProductId: 53,
      },
      {
        Id: 38,
        Name: "IsInstallable",
        Value: "yes",
        ProductId: 53,
      },
    ],
    Category: {
      Id: 4,
      Name: "Stainless Steel",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-13T14:56:00.546Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "string",
      LastModifiedDate: null,
    },
  },
  {
    Id: 57,
    Name: "Red brown cabinet",
    Description:
      "An asymmetrical storage solution that becomes personally yours when filled with your belongings.\n\nWith wall-mounted EKET, you make the most of the wall area, while freeing up space on the floor.\n\nAssembly is quick and easy, thanks to the wedge dowel that clicks into the pre-drilled holes.\n\nDifferent wall materials require different types of fasteners. Use fasteners suitable for the walls in your home.\n\n",
    CategoryId: 6,
    Kind: "Direct",
    Price: "35000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1650823760/products/snnf6ccrjpby9gbspamv.png",
    ],
    EntryDate: "2022-04-24T18:09:26.960Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 48,
        Name: "Color",
        Value: "Red brown",
        ProductId: 57,
      },
      {
        Id: 49,
        Name: "Weight",
        Value: "20",
        ProductId: 57,
      },
      {
        Id: 50,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 57,
      },
    ],
    Category: {
      Id: 6,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-13T14:59:20.737Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "string",
      LastModifiedDate: null,
    },
  },
  {
    Id: 59,
    Name: "Luxury staircase with exotic handles",
    Description:
      "Sink made of stainless steel, a hygienic, strong and durable material that's easy to keep clean.\n\nThe shelf is reversible, so you can choose if you want it to the right or left.\n\nIt’s fast and easy to assemble and take apart.\n\nAdjustable feet make it possible to compensate for any irregularities in the floor.\n\nLILLVIKEN strainer is included in the price, but packaged separately.\n\nLAGAN kitchen faucet is included in the price, but packaged separately.\n\nMax. temperature hot water system 176°F.\n\nA tool that makes it easy to screw the kitchen faucet in place is included.\n\n5 hooks included.\n\nIf you are uncertain about the installation, contact a professional. The installation shall be made in accordance with valid local building and plumbing regulations.",
    CategoryId: 4,
    Kind: "OnInspection",
    Price: "1500000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1650825102/products/ewsxgvutmdlihzxzzkph.jpg",
    ],
    EntryDate: "2022-04-24T18:34:09.115Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 54,
        Name: "Color",
        Value: "brown",
        ProductId: 59,
      },
      {
        Id: 55,
        Name: "Weight",
        Value: "500",
        ProductId: 59,
      },
      {
        Id: 56,
        Name: "IsInstallable",
        Value: "yes",
        ProductId: 59,
      },
    ],
    Category: {
      Id: 4,
      Name: "Stainless Steel",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-13T14:56:00.546Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "string",
      LastModifiedDate: null,
    },
  },
  {
    Id: 55,
    Name: "Shelf with 3 sections",
    Description:
      "Adjustable shelves make it simple for you to adjust the space to suit your needs.\n\nWith the cover for shelf, the wire shelf gets an even and stable bottom where you can put small things.\n\nThe connection fitting gives you greater stability if you want to connect several shelf sections or shelving units to create a larger storage solution.\n\nWith the clip-on basket you can transform an unused area into a practical storage space for the small things you want close at hand.\n\nStands evenly on an uneven floor since the feet can be adjusted.",
    CategoryId: 6,
    Kind: "Direct",
    Price: "50000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1650822922/products/u1oaqhl0vnpulgsm798c.png",
    ],
    EntryDate: "2022-04-24T17:56:51.452Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 42,
        Name: "Color",
        Value: "white",
        ProductId: 55,
      },
      {
        Id: 43,
        Name: "Weight",
        Value: "20",
        ProductId: 55,
      },
      {
        Id: 44,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 55,
      },
    ],
    Category: {
      Id: 6,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-13T14:59:20.737Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "string",
      LastModifiedDate: null,
    },
  },
  {
    Id: 56,
    Name: "Mounted wall cabinet",
    Description:
      "An asymmetrical storage solution that becomes personally yours when filled with your belongings.\n\nWith wall-mounted EKET, you make the most of the wall area, while freeing up space on the floor.\n\nAssembly is quick and easy, thanks to the wedge dowel that clicks into the pre-drilled holes.\n\nDifferent wall materials require different types of fasteners. Use fasteners suitable for the walls in your home.\n\n",
    CategoryId: 6,
    Kind: "Direct",
    Price: "25400",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1650823498/products/nxkevdgyatjuqxo1igrn.png",
    ],
    EntryDate: "2022-04-24T18:05:46.291Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 45,
        Name: "Color",
        Value: "white",
        ProductId: 56,
      },
      {
        Id: 46,
        Name: "Weight",
        Value: "20",
        ProductId: 56,
      },
      {
        Id: 47,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 56,
      },
    ],
    Category: {
      Id: 6,
      Name: "Furnitures",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-13T14:59:20.737Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "string",
      LastModifiedDate: null,
    },
  },
  {
    Id: 58,
    Name: "Black staircase with glass sides",
    Description:
      "An asymmetrical storage solution that becomes personally yours when filled with your belongings.\n\nWith wall-mounted EKET, you make the most of the wall area, while freeing up space on the floor.\n\nAssembly is quick and easy, thanks to the wedge dowel that clicks into the pre-drilled holes.\n\nDifferent wall materials require different types of fasteners. Use fasteners suitable for the walls in your home.\n\n",
    CategoryId: 4,
    Kind: "OnInspection",
    Price: "800000",
    IsDeleted: false,
    ImagesUrls: [
      "http://res.cloudinary.com/conclase/image/upload/v1650824381/products/jl2bajynv6i84isb1k0p.jpg",
    ],
    EntryDate: "2022-04-24T18:21:20.843Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 51,
        Name: "Color",
        Value: "Red brown",
        ProductId: 58,
      },
      {
        Id: 52,
        Name: "Weight",
        Value: "20",
        ProductId: 58,
      },
      {
        Id: 53,
        Name: "IsInstallable",
        Value: "no",
        ProductId: 58,
      },
    ],
    Category: {
      Id: 4,
      Name: "Stainless Steel",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-13T14:56:00.546Z",
      CategoryType: "ProductCategory",
      UpdatedBy: "string",
      CreeatedBY: "string",
      LastModifiedDate: null,
    },
  },
];
