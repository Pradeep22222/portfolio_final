import axios from "axios";
const apiEndPoint = "http://localhost:8000/api/v1/messages";
export const getAPIMessages = async () => {
  try {
    const { data } = await axios.get(apiEndPoint);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: "error.message",
    };
  }
};
export const postAPIMessages = async (obj) => {
  try {
    const { data } = await axios.post(apiEndPoint, obj);
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};

export const deleteAPIMessages = async (id) => {
  try {
    const { data } = await axios.delete(apiEndPoint+ "/" + id);
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};
