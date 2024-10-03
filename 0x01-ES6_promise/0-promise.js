function getResponseFromAPI() {
return new promise((resolve, reject) => {
setTimeout(() => {
resolve({status: 200, body: 'photo-profile-1'});
}, 1000);
});
}

export default getResponseFromAPI;
