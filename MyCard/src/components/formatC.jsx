const Curency_format = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (number) => {
  return Curency_format.format(number);
};

export default formatCurrency;
