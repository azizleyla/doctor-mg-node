import { serviceFetch } from "../../../utils/serviceFetch";

const safeResponseParse = async (response) => {
  const body = await response.text();
  try {
    return JSON.parse(body);
  } catch (err) {
    return body;
  }
};

export const getAllDoctors = async () => {
  // const url = `http://localhost:8080/`; // Assuming the base URL
  const result = await serviceFetch({
    method: "GET",
    serviceKey: "users",
    restrictErrorHandle: true,
  });

  return result;
};
