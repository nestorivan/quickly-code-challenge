export const useLocalStorage = () => {
  const getValue = (value: string) => localStorage.getItem(value) ?? '';

  const setValue = (value: string, item: unknown) =>
    localStorage.setItem(value, JSON.stringify(item));

  return {
    getValue,
    setValue,
  };
};
