import axios from "axios";

export const CarService = {
  async getAll() {
    const res = await axios.get();
    return res.data;
  },
};
