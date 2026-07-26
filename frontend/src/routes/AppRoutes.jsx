import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Destinations from '../pages/Destinations'
import Packages from '../pages/Packages'
import Booking from '../pages/Booking'
import MyTrips from '../pages/MyTrips'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="packages" element={<Packages />} />
        <Route path="booking" element={<Booking />} />
        <Route path="my-trips" element={<MyTrips />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
