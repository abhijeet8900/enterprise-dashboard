class APIClient {
  constructor(baseURL = import.meta.env.VITE_BACKEND_ENDPOINT) {
    this.baseURL = baseURL;
  }

  async get(endpoint, headers = {}) {
    return this.request(endpoint, "GET", null, headers);
  }

  async post(endpoint, data, headers = {}) {
    return this.request(endpoint, "POST", data, headers);
  }

  async put(endpoint, data, headers = {}) {
    return this.request(endpoint, "PUT", data, headers);
  }

  async delete(endpoint, headers = {}) {
    return this.request(endpoint, "DELETE", null, headers);
  }

  async request(endpoint, method = "GET", body = null, headers = {}) {
    const url = `${this.baseURL}/${endpoint}`;

    const requestOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Request failed with status ${response.status}: ${errorData.message}`
        );
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Error during API request: ${error.message}`);
    }
  }
}

export default APIClient;
