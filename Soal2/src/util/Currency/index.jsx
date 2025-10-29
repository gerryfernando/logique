const convertNumberCurrency = (val) => {
  if (!val) {
    return "";
  }
  return `$ ${new Intl.NumberFormat("en-US").format(val)}`;
};

export default convertNumberCurrency;
