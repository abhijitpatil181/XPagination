export const camelCaseHeader = (header) => {
  if (header.toUpperCase() === "ID") {
    return header.toUpperCase();
  } else {
    let newString = "";
    for (let i = 0; i < header.length; i++) {
      i === 0
        ? (newString += header[i].toUpperCase())
        : (newString += header[i].toLowerCase());
    }
    return newString;
  }
};

export const filterData = (data, pageNumber) => {
  let startIndex = pageNumber * 10;
  let endIndex = startIndex + 10;

  return data.filter((element, index) => {
    if (index >= startIndex && index < endIndex) {
      return element;
    }
  });
};
