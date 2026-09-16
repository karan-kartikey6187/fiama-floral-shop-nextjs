export const ConvertToCurrency = (amount) => {
  return "$" + Number(amount).toFixed(2);
};

export const toTitleCase = (text) =>
  text
    ?.toLowerCase()
    ?.split(" ")
    ?.map((word) => word.charAt(0)?.toUpperCase() + word?.slice(1))
    ?.join(" ");
