import axios from "axios";


// Products - Dummy Json
export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL
})

export const getProducts = async () => {
    const response = await api.get("/products?limit=0")
    return response;
}

export const getProduct = async (id) => {
    const response = await api.get(`/products/${id}`)
    return response;
}

export const getCategory = async () => {
    const response = await api.get("/products/categories");
    return response;
};

export const getListProducts = async (categorySlug) => {
    const response = await api.get(`/products/category/${categorySlug}`);
    return response;
};



// Users - MockAPI
export const mockApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MOCKAPI_BASEURL
});


export const getUsers = async () => {
    const response = await mockApi.get("/users")
    return response;
};

export const createUser = async (data) => {
    const response = await mockApi.post("/users", data)
    return response
};

export const getUser = async (data) => {
    const response = await mockApi.get("/users?email=" + data.email)
    return response
};

export const getUserById = async (id) => {
    const response = await mockApi.get("/users/" + id)
    return response
};

export const updateUser = async (data) => {
    const response = await mockApi.put("/users/" + data.id, data)
    return response
};


// Orders - MockAPI
export const getOrder = async (id) => {
    const response = await mockApi.get(`/orders/${id}`);
    return response;
};

export const getOrderItems = async (orderId) => {
    const response = await mockApi.get(`/orderItems?orderId=${orderId}`);
    return response;
};

export const createOrder = async (data) => {
    const response = await mockApi.post("/orders", data);
    return response;
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