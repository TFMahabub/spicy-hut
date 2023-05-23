const useGetLocalHost = (itemName: string) => {
  const getItem: any = localStorage.getItem(itemName);
  const convertTONormalObject = JSON.parse(getItem);
  return convertTONormalObject;
};

export default useGetLocalHost;
