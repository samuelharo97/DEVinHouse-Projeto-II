import { axiosGetDevices, axiosGetUser } from '@services'

export const NotFound = () => {
  return (
    <>
      <h1>not found.</h1>
      <button onClick={axiosGetDevices}></button>
    </>
  )
}
