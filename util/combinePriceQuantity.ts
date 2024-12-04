const virusesInCart: [] = viruses
    .filter((virus) =>
      cartItems.map((item: { id: number }) => item.id).includes(virus.id),
    )
    .map(({ virusDesc, tagline, ...item }) => item)
    .reduce((acc, virus: { id: number }) => {
      const cartItem = cartItems.find(
        (item: { id: number }) => item.id === virus.id,
      );
      // acc.push(cartItem ? { ...virus, ...cartItem } : virus);
      acc.push({ ...virus, ...cartItem });
      return acc;
    }, []);
