require('dotenv').config();

module.exports = async function() {
  try {
    const response = await fetch(`https://${process.env.APIKEY}.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "movie"] {
      title,
      slug,
      poster,
      rating,
      overview,
      popularity,
review,
      publishedAt
    }`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.result; 
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return []; 
  }
};
