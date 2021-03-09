const getToken = () => {
  const token = localStorage.getItem("accessToken");
  return token;
};

export default getToken;
