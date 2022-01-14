export const url = "https://localhost:44305/api";
export const token = localStorage.getItem("adtoken");
export const viewToken = {
  role: "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
  email: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
  username: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
  Id: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
};

export const oderstatus = (data) => {
  switch (data) {
    case false:
      return {
        msg: "Waiting",
        status: "warning",
      };

    case true:
      return {
        msg: "Confirmed",
        status: "success",
      };
    case null:
      return {
        msg: "Canceled",
        status: "danger",
      };

    default:
      break;
  }
};
