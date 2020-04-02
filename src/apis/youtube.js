import axios from 'axios'

const KEY = 'AIzaSyADFfpo6yqwtkqdsK0qkQaGCPrmn0aM4rU'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
