import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd';
import s from './navbar.module.scss'

interface NavLink {
    path: string
    title: string
}

const navList: NavLink[] = [
    {
        path: '/savings?account',
        title: 'Накопительный счет',
    },
    {
        path: '/reviews',
        title: 'Отзывы',
    },
    {
        path: '/guarantees',
        title: 'Гарантии',
    },
    {
        path: 'how?to?buy',
        title: 'Как купить',
    },
    {
        path: '/cumulative',
        title: 'Накопительная',
    },
    {
        path: '/earn',
        title: 'Заработай',
    },
]

export const Navbar = () => {
    return (
        <nav>
            <Row>
                {navList.map(({ path, title }) => (
                    <Col key={path} span={6}><Link className={s.link} to={path}>{title}</Link></Col>
                ))}
            </Row>
        </nav>
    )
}
