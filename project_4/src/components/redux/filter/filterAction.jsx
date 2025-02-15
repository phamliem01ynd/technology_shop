
export const sortPrice  = (payload) => {
    return {
        type: 'filter/sortPrice',
        payload:{payload}
    };
};

export const sortQuantity  = (payload) => {
    return {
        type: 'filter/sortQuantity',
        payload:{payload}
    };
};

