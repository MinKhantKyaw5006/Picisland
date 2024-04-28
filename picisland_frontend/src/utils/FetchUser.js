export const FetchUser = () => {
    const userInfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    //console.log('User Info:', userInfo); // Add this line for debugging
    return userInfo;
}
