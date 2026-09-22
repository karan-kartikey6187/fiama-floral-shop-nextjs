import axios from "axios";


// Products - Dummy Json
export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL
})

export const getProducts = async () => {
     try {
        const response = await api.get("/products?limit=200")
        return response;
        
    } catch (error) {
        return {
            data: {
                products: []
            }
        };
    }
}

export const getProduct = async (id) => {
    try {
        const response = await api.get(`/products/${id}`)
        return response;

    } catch (error) {
        return {
            data: null
        };
    }
}

export const getCategory = async () => {
    try {
        const response = await api.get("/products/categories");
        return response;

    } catch (error) {
        return {
            data: []
        };
    }
};

export const getListProducts = async (categorySlug) => {
    try {
        const response = await api.get(`/products/category/${categorySlug}`);
        return response;

    } catch (error) {
        return {
            data: {
                products: []
            }
        };
    }
};



// Users - MockAPI
export const mockApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MOCKAPI_BASEURL
});


export const getUsers = async () => {
    try {
        const response = await mockApi.get("/users")
        return response;

    } catch (error) {
        return {
            data: []
        };
    }
};

export const createUser = async (data) => {
     try {
        const response = await mockApi.post("/users", data)
        return response;

    } catch (error) {
        return {
            data: null
        };
    }
};

export const getUser = async (data) => {
    try {
        const response = await mockApi.get("/users?email=" + data.email)
        return response;

    } catch (error) {
        return {
            data: []
        };
    }
};

export const getUserById = async (id) => {
    try {
        if (!id) {
            return null;
        }
        const response = await mockApi.get("/users/" + id)
        return response;

    } catch (error) {
        return {
            data: null
        };
    }

};

export const updateUser = async (data) => {
    try {
        const response = await mockApi.put("/users/" + data.id, data)
        return response;

    } catch (error) {
        return {
            data: null
        };
    }
};


// Orders - MockAPI
export const getOrder = async (id) => {
     try {
        const response = await mockApi.get(`/orders/${id}`);
        return response;

    } catch (error) {
        return {
            data: null
        };
    }
};

export const getOrderItems = async (orderId) => {
    try {
        const response = await mockApi.get(`/orderItems?orderId=${orderId}`);
        return response;

    } catch (error) {
        return {
            data: []
        };
    }
};

export const createOrder = async (data) => {
    try {
        const response = await mockApi.post("/orders", data);
        return response;
    } catch (error) {
        return {
            data: null
        };
    }
};

export const getOrdersByUser = async (userId) => {
     try {
        const response = await mockApi.get(`/orders?userId=${userId}`);
        return response;
    } catch (error) {
        if (error.response?.status === 404) {
            return {
                data: []
            };
        }
    }
};