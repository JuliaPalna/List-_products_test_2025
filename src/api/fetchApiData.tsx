import { TypeProduct } from "@/pages";

export const fetchApiData = async (url: string): Promise<TypeProduct[]> => {
  const response = await fetch(url).then((response: Response) => {
    if (!response.ok) {
      throw response.statusText;
    }

    return response.json();
  });

  return response;
};
