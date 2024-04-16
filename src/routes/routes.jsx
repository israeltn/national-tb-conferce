
import { Users } from '../pages/abstarct-portal/admin/dashboard/Users'
import { Abstracts } from '../pages/abstarct-portal/admin/dashboard/Abstracts'
import { Dashboard } from '../pages/abstarct-portal/admin/dashboard/Dashboard'
import { BoardDashboard } from '../pages/abstarct-portal/board/dashboard/BoardDashboard'


export const routes = () =>  [
     { path: "dashboard", exact:true, element: Dashboard, name: "dashboard"},
     { path: "boarddashboard", exact:true, element: BoardDashboard, name: "dashboard"},
     { path: "users", exact:true, element: Users, name: "users"},
     { path: "abstracts", exact:true, element: Abstracts, name: "abstracts"},
];
 