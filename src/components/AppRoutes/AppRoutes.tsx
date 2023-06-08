import { Routes, Route, Navigate } from 'react-router-dom'
import { routeElements, RoutesPathName } from '../../routes'

export const AppRoutes = () => {
    return (
        <Routes>
            {
                routeElements.map((item) => <Route key={item.path} path={item.path} element={<item.component />} />)
            }
            <Route path='*' element={<Navigate to={RoutesPathName.HOME} />} />
        </Routes>
    )
}
