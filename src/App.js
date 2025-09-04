import './App.css';
import './css/all.min.css';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import DashBoard from './DashBoard';
import DashBoardHero from './DashBoardHero';
import DashBoardJobs from './DashBoardJobs';
import AddJobs from './AddJobs';
import DashBoardAbout from './DashBoardAbout';
import DashBoardSkills from './DashBoardSkills';
import AddSkills from './AddSkills';
import DashBoardProjects from './DashBoardProjects';
import AddProjects from './AddProjects';
import DashBoardMsg from './DashBoardMsg';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin-login" element={<Login />}></Route>
      <Route path="/admin-dashboard" element={<DashBoard />}></Route>
      <Route path="/admin-dashboard-hero" element={<DashBoardHero />}></Route>
      <Route path="/admin-dashboard-jobs" element={<DashBoardJobs />}></Route>
      <Route path="/admin-dashboard-jobs/:jobId" element={<AddJobs />}></Route>
      <Route path="/admin-dashboard-add-job" element={<AddJobs />}></Route>
      <Route path="/admin-dashboard-about" element={<DashBoardAbout />}></Route>
      <Route path="/admin-dashboard-skills" element={<DashBoardSkills />}></Route>
      <Route path="/admin-dashboard-skills/:skillId" element={<AddSkills />}></Route>
      <Route path="/admin-dashboard-add-skill" element={<AddSkills />}></Route>
      <Route path="/admin-dashboard-projects" element={<DashBoardProjects />}></Route>
      <Route path="/admin-dashboard-projects/:projectId" element={<AddProjects />}></Route>
      <Route path="/admin-dashboard-add-project" element={<AddProjects />}></Route>
      <Route path="/admin-dashboard-messages" element={<DashBoardMsg />}></Route>
      <Analytics />
    </Routes>
  );
}

export default App;
