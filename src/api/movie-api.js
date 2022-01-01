export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const addFavoriteMovie = (userName,movie) => 
{
    return fetch(`/api/users/${userName}/favorites`,
    {
        headers: 
        {
            "Authorization": window.localStorage.getItem("token"),
            'Content-Type' : 'application/json'
        },
        method : 'post',
        body: JSON.stringify({ userName: userName , movie:movie})
    }).then(res => res.json())
};

export const getFavoriteMovie = (username) => 
{
    return fetch(
        `/api/users/${username}/favorites`,{
        headers: 
        {
            "Authorization": window.localStorage.getItem("token"),
            
        }
    }
    ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

