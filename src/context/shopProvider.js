import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: "origin51.myshopify.com",
  storefrontAccessToken: "864aa74c2de985c408f9fd7fbc24b56a",
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
  };

  componentDidMount() {
    // this.createCheckout();

    if (localStorage.checkout) {
      this.fetchCheckout(localStorage.checkout);
    } else {
      this.createCheckout();
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    await this.setState({ checkout: checkout });
  };

  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((err) => console.log(err));
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });
    console.log(checkout);

    this.openCart();
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product: product });
    console.log(JSON.stringify(product));

    return product;
  };
  //remove line item
  removeLineItems = async (variantId) => {
    const lineItemsToRemove = [variantId];
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemsToRemove
    );
    this.setState({ checkout: checkout });
    console.log(checkout);

    this.closeCart();
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  // working on
  increment = async (id, quantity) => {
    const updatedQuantity = [{ id, quantity }];
    const checkout = await client.checkout.updateLineItems(
      this.state.checkout.id,
      updatedQuantity
    );
    this.setState({ checkout: checkout });
  };

  decrement = async (id, quantity) => {
    const updatedQuantity = [{ id, quantity }];
    const checkout = await client.checkout.updateLineItems(
      this.state.checkout.id,
      updatedQuantity
    );
    this.setState({ checkout: checkout });
  };

  Variants;
  changeVariant = async (variantId) => {
    const options = this.variant.options;
    this.variantOptions(variantId, options);
  };
  //work end

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout,
          increment: this.increment,
          decrement: this.decrement,
          removeLineItems: this.removeLineItems,
          changeVariant: this.changeVariant,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
