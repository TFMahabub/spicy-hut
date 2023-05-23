const useSetLocalHost = (itemName: string, value: string) => {
  localStorage.setItem(itemName, JSON.stringify(value));
  return true;
};

export default useSetLocalHost;
