require('dotenv').config();

module.exports = async function() {
  try {
    const response = await fetch(`https://${process.env.APIKEY}.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "post"] {
      title,
      summary,
      date,
      content
    }`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
