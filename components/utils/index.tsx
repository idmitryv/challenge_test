export const setArrayWithData = (
  array: any[],
  setArray: any,
  name: string,
  value: any
) => {
  if (value) {
    const ind = array.findIndex((obj) => obj[name]);
    if (ind === -1) {
      setArray((oldData: any) => [...oldData, { [name]: value }]);
    } else {
      const newArray = [...array];
      newArray[ind] = { [name]: value };
      setArray(newArray);
    }
    if (value.length === 0) {
      const newArray = [...array];
      newArray.splice(ind, 1);
      setArray(newArray);
    }
  }
};
export const removeItemFromArray = (
  array: any[],
  setArray: any,
  name: string
) => {
  if (array && array.length > 0) {
    const ind = array.findIndex((obj) => obj[name]);
    const newArray = [...array];
    newArray.splice(ind, 1);
    setArray(newArray);
  }
};

export const getFieldValue = (array: any[], name: string) => {
  if (array && array.length > 0) {
    const ind = array.findIndex((obj) => obj[name]);
    if (ind !== -1) return array[ind][name];
    else return "";
  }
  else return "";
};