export default function formatAmount(num) {
  let options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
    decimal: ".",
    grouping: ",",
  };
  return num.toLocaleString("en-US", options);
}
