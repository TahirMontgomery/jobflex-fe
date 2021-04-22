import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
});

interface RegisterData {
  firstName: string;
  lastName: string;
  companyName: string;
  companySize: number;
}

class Axios {
  checkRegistration(accessToken: String, uid: String): Promise<AxiosResponse> {
    return axiosInstance.get("user/registration", {
      headers: {
        Authorization: accessToken,
      },
      params: {
        uid,
      },
    });
  }

  register(data: RegisterData, accessToken: string) {
    return axiosInstance.post("user/register", data, {
      headers: {
        Authorization: accessToken,
      },
    });
  }

  registerPlan(plan: string, accessToken: string) {
    return axiosInstance.post(
      "user/plan",
      { plan },
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
  }
}

export default new Axios();
