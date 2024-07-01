import zIndex from "@mui/material/styles/zIndex";
import axios from "axios";

const BASE_URL = 'http://localhost:9656';

const token = `Bear ${localStorage.getItem('product-token')}`

export const login = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/log-in`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

   export const addProduct =async(data)=>{
        try{
            const response = await axios.post(` ${BASE_URL}/products`,data,{
                headers:{
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${localStorage.getItem("user-token")}`
                }
        })
            return response.data
    }
    catch(error){
        throw error
        console.log(error);
        }     
        }
      
        export const getAllProduct = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/products`);
                return response.data;
            } catch (error) {
                throw error;
            }
        }

        export const getProductbyId = async (id) => {
            try {
                const response = await axios.get(`${BASE_URL}/products/${id}`);
                return response.data;
            } catch (error) {
                throw error;
            }
        }



        export const deleteProduct = async (id) => {
            try {
                const response = await axios.delete(`${BASE_URL}/products/${id}`);
                return response.data;
            } catch (error) {
                throw error;
            }
        }

        export const updateProduct = async (id,data) => {
            try {
                const response = await axios.put(`${BASE_URL}/products/${id}`,data);
                return response.data;
            } catch (error) {
                throw error;
            }
        }





