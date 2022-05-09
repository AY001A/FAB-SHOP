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
