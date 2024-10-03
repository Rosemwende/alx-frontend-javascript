function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, body: 'photo-profile-1' });
    }, 1000);
  });
}

export default getResponseFromAPI;
