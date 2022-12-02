export const transformTheResults = (arr) =>
  arr.map((item) => ({
    status: item.status === "fulfilled" ? "resolved" : "error",
    data: item.status === "fulfilled" ? item.value : null,
  }));
