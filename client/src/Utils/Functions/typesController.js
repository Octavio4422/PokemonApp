export default function typesController(input) {
  const error = {};
  const limit = 2;

  if (input.types.length > limit) {
    error.types = `A pokemon cannot have more than 2 types, pleace unchoose ${input.types.length - 2} options `;
  }

  return error
}
