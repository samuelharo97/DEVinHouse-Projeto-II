import { axiosGetUser } from '@services'

export const NotFound = () => {
  return (
    <>
      <h1>not found.</h1>
      <button onClick={() => axiosGetUser('6321091f9b3919ae92c5c825')}></button>
    </>
  )
}


