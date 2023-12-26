import config from "../../Config/config.json";
import axios from "axios";

const commonFetch = async (url, Method, bodyData, headerData, paramsData) => {

  const URL = config.SM_DEV_BASE_URL + url;

  let paramsHeader = {};
 
  if (headerData === true) {
   
    const authUser = JSON.parse(sessionStorage.getItem("auth"));
   
    paramsHeader = {
      "x-auth-token": `${authUser.accessToken}`,
    };
  } 


  let headerComponent = {
    method: Method, 
    url: URL,
    headers: {
      "Content-Type": "application/json",
      Host: window.location.host,
      Accept: "*/*",
      Connection: "keep-alive",
      ...paramsHeader,
    },
    data: bodyData ? ("body", bodyData) : null,
    params: paramsData ? ("query", paramsData) : null,
  };

  let result;

  await axios(headerComponent)

    .then((res) => (result = (res.data)))
    .catch(
      (err) =>
        (result = (err.response.data))
      );

      console.log(result)

  return result;
};

export const Service = {
  commonFetch,
};
