import axios from "axios";
import endpoits from "./endpoints";

export const getBooks = async () => {
    try {
        const { data } = await axios.get(endpoits.library);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}