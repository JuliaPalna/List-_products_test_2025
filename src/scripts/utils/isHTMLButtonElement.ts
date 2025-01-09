export const isHTMLButtonElement = (
  element: HTMLElement | null
): element is HTMLButtonElement => {
  return element instanceof HTMLButtonElement;
};
