import { ComponentType } from 'react'
import { Auth, Cumulative, Earn, Guarantees, Home, HowToBuy, Reviews, SavingsAccount } from '../pages'

export enum RoutesPathName {
    AUTH = '/auth',
    CUMULATIVE = '/cumulative',
    EARN = '/earn',
    GUARANTEES = '/guarantess',
    HOME = '/',
    HOW_TO_BUY = '/how?to?buy',
    REVIEWS = '/reviews',
    SAVINGS_ACCOUNT = './savings?account'
}
interface IRoutes {
    path: string
    component: ComponentType
}

export const routeElements: IRoutes[] = [
    {
        path: RoutesPathName.AUTH,
        component: Auth
    },
    {
        path: RoutesPathName.CUMULATIVE,
        component: Cumulative
    },
    {
        path: RoutesPathName.EARN,
        component: Earn
    },
    {
        path: RoutesPathName.GUARANTEES,
        component: Guarantees
    },
    {
        path: RoutesPathName.HOME,
        component: Home
    },
    {
        path: RoutesPathName.HOW_TO_BUY,
        component: HowToBuy
    },
    {
        path: RoutesPathName.REVIEWS,
        component: Reviews
    },
    {
        path: RoutesPathName.SAVINGS_ACCOUNT,
        component: SavingsAccount
    },
]