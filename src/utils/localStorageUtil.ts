export const calculateRemainingTime = (expirationTime: string) => {
  const currentTime = new Date().getTime(); 
  const adjExpirationTime = new Date(expirationTime).getTime();
  return adjExpirationTime - currentTime; 
}

export const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  if(!storedExpirationDate) return
  const remainingTime = calculateRemainingTime(storedExpirationDate); 
  if(remainingTime <= 3600){
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null; 
  }
  return {
    token: storedToken,
    duration: remainingTime
  }; 
}