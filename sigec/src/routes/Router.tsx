import { Routes, Route, BrowserRouter } from "react-router-dom"
import AppointmentsPage from "../pages/AppointmentsPage"
import DashboardPage from "../pages/DashboardPage"
import LoginPage from "../pages/LoginPage"
import NewPatientPage from "../pages/NewPatientPage"
import NotificationsPage from "../pages/NotificationsPage"
import PatientsPage from "../pages/PatientsPage"
import RecordDetailPage from "../pages/RecordDetailPage"
import RecordsPage from "../pages/RecordsPage"

export default function Router(){

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/patients/new" element={<NewPatientPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/records" element={<RecordsPage />} />
            <Route path="/records/:id" element={<RecordDetailPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
    </BrowserRouter>
    )
}