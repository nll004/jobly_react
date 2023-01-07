import axios from "axios";

const JOBLY_BACKEND_URL = process.env.BACKEND_BASE_URL || "http://localhost:3001";
const JOBLY_FRONTEND_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

/** API Class with static methods to communicate with the API  */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${JOBLY_BACKEND_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Send username/password and store the returned token */
  static async login(formData){
    const res = await JoblyApi.request('auth/token', formData, 'post');
    JoblyApi.token = res.token;
  };

  /** Send new user data to register and store the returned token */
  static async signup(formData){
    const userToken = await JoblyApi.request('auth/register', formData, 'post');
    JoblyApi.token = userToken;
  };

  /** Get list of companies that meet the specified query */
  static async searchCompanies(query){
    let res = await this.request('companies', query);
    return res.companies;
  };

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  };

  /** Get list of all jobs */
  static async searchJobs(query){
    let res = await this.request('jobs', query);
    return res.jobs;
  };

  static async getJob(id){
    let res = await this.request(`jobs/${id}`);
    return res.job
  }
}

// for development, can use login ("testuser" / "password" ) and following token
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export { JoblyApi, JOBLY_BACKEND_URL, JOBLY_FRONTEND_URL};
