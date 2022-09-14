import { Routes, Route } from 'react-router-dom'

import { Home, MyProfile, ProfileEdit, Devices } from '@pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/edit" element={<ProfileEdit />} />
      <Route path="/devices" element={<Devices />} />
      {/* <Route path="/devices/:id" element={<DevicesDetails />} /> */}
    </Routes>
  )
}
