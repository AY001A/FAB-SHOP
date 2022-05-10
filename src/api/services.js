import { productService } from "../http-common";

export const bookService = async (service) => {
  const res = await productService.post(`/servicebooking/create`, service);

  return res.data;
};

export const listServices = async (currentPage = 1, pageSize = 30) => {
  const res = await productService.get(
    `/Service/list?currentPage=${currentPage}&pageSize=${pageSize}`
  );

  return res.data;
};

export const serviceHomepageList = [
  {
    Id: 1,
    Name: "Shutter Technician",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 9,
    DefaultPrice: "0",
    IsDeleted: false,
    EntryDate: "2022-04-28T15:10:47.363Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 1,
        Name: "Image",
        Value:
          "http://res.cloudinary.com/conclase/image/upload/v1651158157/products/v4ri4lfwgjfzldofpbcm.jpg",
        ServiceId: 1,
      },
    ],
    Category: {
      Id: 9,
      Name: "Home Services",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:42:24.580Z",
      CategoryType: "ServiceCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 2,
    Name: "Steel repairing",
    Description:
      "A random placeholder description of a product sold in cucumislush that can be delivered straight to your home by our agents that are available every hour of the day. Shop for quality fabricated products at cucumislush.",
    CategoryId: 9,
    DefaultPrice: "0",
    IsDeleted: false,
    EntryDate: "2022-04-28T15:13:52.764Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 2,
        Name: "Image",
        Value:
          "http://res.cloudinary.com/conclase/image/upload/v1651158772/products/msswphuqya4of7ihpi2n.jpg",
        ServiceId: 2,
      },
    ],
    Category: {
      Id: 9,
      Name: "Home Services",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:42:24.580Z",
      CategoryType: "ServiceCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 3,
    Name: "Weldering Service",
    Description:
      "Our technicians are highly trained to offer you the best service possible, we fix all types of shutter errors no matter how complex and difficult the problem is, our agents are always readily available to handle all form of requests. We offer high class services to all our clients and we guarantee that our professionals are highly trained and will offer the best repair you can ever find in the market",
    CategoryId: 9,
    DefaultPrice: "0",
    IsDeleted: false,
    EntryDate: "2022-05-03T23:15:56.475Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 3,
        Name: "Image",
        Value:
          "http://res.cloudinary.com/conclase/image/upload/v1651619748/products/lrr1wbuwzx9ri2yxtmod.jpg",
        ServiceId: 3,
      },
    ],
    Category: {
      Id: 9,
      Name: "Home Services",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:42:24.580Z",
      CategoryType: "ServiceCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 4,
    Name: "Sheds Maker",
    Description:
      "ur technicians are highly trained to offer you the best service possible, we fix all types of shutter errors no matter how complex and difficult the problem is, our agents are always readily available to handle all form of requests. We offer high class services to all our clients and we guarantee that our professionals are highly trained and will offer the best repair you can ever find in the market",
    CategoryId: 9,
    DefaultPrice: "0",
    IsDeleted: false,
    EntryDate: "2022-05-03T23:19:09.795Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 4,
        Name: "Image",
        Value:
          "http://res.cloudinary.com/conclase/image/upload/v1651619945/products/vw4tkynqfbqrzeuwlw2g.jpg",
        ServiceId: 4,
      },
    ],
    Category: {
      Id: 9,
      Name: "Home Services",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:42:24.580Z",
      CategoryType: "ServiceCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
  {
    Id: 5,
    Name: "Billboard Construction",
    Description:
      "ur technicians are highly trained to offer you the best service possible, we fix all types of shutter errors no matter how complex and difficult the problem is, our agents are always readily available to handle all form of requests. We offer high class services to all our clients and we guarantee that our professionals are highly trained and will offer the best repair you can ever find in the market",
    CategoryId: 10,
    DefaultPrice: "0",
    IsDeleted: false,
    EntryDate: "2022-05-03T23:20:58.335Z",
    UpdatedBy: null,
    CreeatedBY: "admin",
    LastModifiedDate: null,
    MetaData: [
      {
        Id: 5,
        Name: "Image",
        Value:
          "http://res.cloudinary.com/conclase/image/upload/v1651620053/products/ybhrmqtrtsljfkm4fast.jpg",
        ServiceId: 5,
      },
    ],
    Category: {
      Id: 10,
      Name: "Contract Services",
      IsActive: true,
      IsDeleted: false,
      EntryDdate: "2022-04-27T09:42:36.767Z",
      CategoryType: "ServiceCategory",
      UpdatedBy: "string",
      CreeatedBY: "admin",
      LastModifiedDate: null,
    },
  },
];
