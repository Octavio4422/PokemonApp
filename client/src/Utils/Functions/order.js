export default function order(array, distribution) {
  if (distribution === "ASCENDENTE" || distribution === "DESCENDENTE") {
    let response = array.sort((a, b) => {
      if (a.name < b.name) {
        return distribution === "ASCENDENTE" ? -1 : 1;
      }
      if (a.name > b.name) {
        return distribution === "ASCENDENTE" ? 1 : -1;
      }
      return 0;
    });
    return response;
  }

  if (distribution === "ATTACK") {
    let response = array.sort((a, b) => {
      if (a.attack < b.attack) {
        return 1;
      }
      if (a.attack > b.attack) {
        return -1;
      }
      return 0;
    });
    return response;
  }

  if (distribution === "DEFENSE") {
    let response = array.sort((a, b) => {
      if (a.defense < b.defense) {
        return 1;
      }
      if (a.defense > b.defense) {
        return -1;
      }
      return 0;
    });
    return response;
  }
}
