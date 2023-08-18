export const useLocalStorage = () => {
  const getValue = (value: string) => localStorage.getItem(value) ?? '';

  const setValue = (value: string, item: unknown) =>
    localStorage.setItem(value, JSON.stringify(item));

  const removeValue = (value: string) => localStorage.removeItem(value);

  return {
    getValue,
    setValue,
    removeValue
  };
};
