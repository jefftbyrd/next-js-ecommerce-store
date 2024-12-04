export function cartTotal(virusesInCart) {
  return virusesInCart.reduce((acc, virus) => {
    return (acc += Number(virus.price) * virus.quantity);
  }, 0);
}
