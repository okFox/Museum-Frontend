const request = url => {
  return fetch(url)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getQuery = () => {
  request('https://www.rijksmuseum.nl/api/en/collection?key=O38ESSI9&imgonly=true&q=${query}')
    .then(({ results }) => {
      return results.artObjects.map((art) => {
        return {
          id: art.id,
          url: art.url,
          title: art.title,
          longtitle: art.longtitle,
          link: art.links.web
        };
      });
    });
};
