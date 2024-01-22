export function FormatNaira(amount: number) {
  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
  // Remove any trailing decimals and return the formatted amount
  const formattedAmountWithoutDecimals = formattedAmount.replace(".00", "");
  return formattedAmountWithoutDecimals;
}
