import { TypeProduct } from "@/pages";

export const fetchApiProductId = async (
  id: number
): Promise<TypeProduct | undefined> => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${id}`
    ).then((response: Response) => {
      if (!response.ok) {
        throw response.statusText;
      }

      return response.json();
    });

    return response;
  } catch (event) {
    console.error(event);
    return undefined;
  }
};
