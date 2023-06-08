import React from 'react'
import s from './avatar.module.scss'

interface AvatarProps {
    image: string
    name: string
}

export const Avatar = ({ image, name }: AvatarProps) => {
    return (
        <div className={s.avatar}>
            <div className={s.name}>{name}</div>
            <div className={s.imageWrapper}>
                <img className={s.image} src={image} alt={`avatar ${name}`} />
            </div>
        </div>
    )
}

