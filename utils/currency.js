export const formatCurrency = (numb) => {
  return Intl.NumberFormat(
    "id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(numb)
}