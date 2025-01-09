import { TypeProduct } from "@/pages";

export const getApiData = async (
  url: string
): Promise<TypeProduct[] | undefined> => {
  try {
    const response = await fetch(url).then((response: Response) => {
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
