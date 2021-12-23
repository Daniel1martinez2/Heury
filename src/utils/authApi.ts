import { CREATE_USER_URL, LOGIN_URL } from './firebaseKeys';

type method = 'login' | 'register'; 

export const handleAuth = async (method: method, email: string, password: string) => {
  let url: string;
  switch (method) {
    case 'login': url = LOGIN_URL;
    break;
    case 'register': url = CREATE_USER_URL; 
  }
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    }), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response; 
}; 


