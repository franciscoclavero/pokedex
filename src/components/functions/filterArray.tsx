const getFilterArray = (array: any[], filter: string) => {
  return array.filter(( { name } ) => { 
    return name.toLowerCase().indexOf(filter.toLowerCase()) > -1; 
  });
};

export default getFilterArray;