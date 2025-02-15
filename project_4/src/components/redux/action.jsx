
export const addtocart  = (id, product, quantity) => {
    return {
        type: 'cart/add_to_cart',
        payload:{id, product, quantity: 1}
    };
};

export const updateToCart  = (id, quantity = 1) => {
    return {
        type: 'cart/update_quantity',
        payload:{id, quantity}
    };
};

export const reduceToCart  = (id, quantity = 1) => {
    return {
        type: 'cart/reduce_quantity',
        payload:{id, quantity}
    };
};

export const deleteToCart  = (id) => {
    return {
        type: 'cart/delete_to_cart',
        payload:{id}
    };
};

export const deleteAll  = () => {
    return {
        type: 'cart/delete_all',
    };
};

export const Keysearch  = (payload) => {
    return {
        type: 'search',
        payload:{payload}
    };
};

export const productAll = (product) => {
    return {
        type: 'filter/productAll',
        payload:product
    }
}
