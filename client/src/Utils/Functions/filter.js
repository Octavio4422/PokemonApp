import order from "./order";

export default function filter(array, filter, lastOrder) {
  if (filter === "EXISTING") {
    let response = array.filter((p) => p.created === false);
    if (!lastOrder) return response;

    if (lastOrder !== "") {
      response = order(response, lastOrder);
      return response;
    }
  }

  if (filter === "CREATED") {
    let response = array.filter((p) => p.created === true);
    if (!lastOrder) return response;

    if (lastOrder !== "") {
      response = order(response, lastOrder);
      return response;
    }
  }

  let response = array.filter((p) => p.types.includes(filter.toLowerCase()));

  if (!lastOrder) return response;

  if (lastOrder !== "") {
    response = order(response, lastOrder);
    return response;
  }
}
