
module.exports = async function() {
  try {
    const response = await fetch(`https://melodic-crumble-610829.netlify.app/.netlify/functions/changeRatings`

    );
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
