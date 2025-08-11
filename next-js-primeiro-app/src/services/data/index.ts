export default function fetchData() {
  const payload: RequestInit = {
    method: "GET",
    headers: {
      "x-authorization": "testeExperimento",
      "x-origin": "cloudfrontExperimento",
    },
  };

  return fetch(
    "https://q4oyy0o1gh.execute-api.us-east-2.amazonaws.com/v1/confirmar",
    payload
  );
}
