document.querySelector('button').addEventListener('click', getAffirmation)

async function getAffirmation() {
  const id = Math.floor(Math.random() * 120)
  try {
    const response = await fetch(`https://simple-affirmations-api.herokuapp.com/api/${id}`)
    const data = await response.json()

    console.log(data)
    document.querySelector('p').innerText = data.text
  } catch(error) {
    console.log(error)
  }
}
