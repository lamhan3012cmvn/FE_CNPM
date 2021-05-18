export const FormatNumberToMoney = (
  str = "",
  money = "it-IT",
  currency = "VND"
) => {
  return str.toLocaleString(money, { style: "currency", currency: currency })
}
