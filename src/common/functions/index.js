export const FormatNumberToMoney = (
  str = 0,
  money = "it-IT",
  currency = "VND"
) => {
  const convertMoney = str.toLocaleString(money, {
    style: "currency",
    currency: currency
  })

  return convertMoney
}
