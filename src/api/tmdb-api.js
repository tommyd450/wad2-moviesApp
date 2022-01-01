
export const getMovies = () => {
  return fetch(
    //`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&include_adult=false&include_video=false&page=1`
    '/api/movies?page=2&limit=2',
    {headers: {
      "Authorization": window.localStorage.getItem("token")
    }}
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};




export const getTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDBKEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};


  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    //`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDBKEY}`
    `/api/movies/${id}`,
    {headers: {
      "Authorization": window.localStorage.getItem("token")
    }}
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getTVShows = () => {
  return fetch(
    //`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    '/api/tv',
    {headers: {
      "Authorization": window.localStorage.getItem("token")
    }}
    ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getTVshow = (args) =>
{
  const [, idPart] = args.queryKey;
  const { id } = idPart;
return fetch(
  `/api/tv/${id}`,
  {headers: {
    "Authorization": window.localStorage.getItem("token")
  }}
).then((response) => {
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
})
.catch((error) => {
  throw error
});
};


export const getShowImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `/api/tv/${id}/images`,
    {headers: {
      "Authorization": window.localStorage.getItem("token")
    }}
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

  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDBKEY +
        "&language=en-US"
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

  export const getTvGenres = async () => {
    return fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US`
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

  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `/api/movies/${id}/images`,
      {headers: {
        "Authorization": window.localStorage.getItem("token")
      }}
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


  

  export const getMovieReviews = (id) => {
    
    return fetch(
     `/api/movies/${id}/reviews`,
     {headers: {
      "Authorization": window.localStorage.getItem("token")
    }}
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

  

    export const getUpcomingMovies = () => {
      return fetch(
        `/api/movies/tmdb/upcoming`,
        {headers: {
          "Authorization": window.localStorage.getItem("token")
        }}
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };

    export const getCredits = (args) => {
      const [, idPart] = args.queryKey;
      const { id } = idPart;
      return fetch(
        //`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US`
        `/api/movies/${id}/credits`,
        {headers: {
          "Authorization": window.localStorage.getItem("token")
        }}
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };



    export const getPerson = (args) => {
      const [, idPart] = args.queryKey;
      const { id } = idPart;
      return fetch(
        `/api/person/${id}`,
        {headers: {
          "Authorization": window.localStorage.getItem("token")
        }}
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };

    export const getPersonCredits = (args) => {
      const [, idPart] = args.queryKey;
      const { id } = idPart;
      return fetch(
        `/api/person/${id}/credits`,
        {headers: {
          "Authorization": window.localStorage.getItem("token")
        }}
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };

    export const getLanguages = () => {
      return fetch(
        `https://api.themoviedb.org/3/configuration/languages?api_key=${process.env.REACT_APP_TMDBKEY}`
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
  
    
