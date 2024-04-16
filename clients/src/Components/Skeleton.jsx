import React from 'react'
import style from "../CSS/Skeleton.module.css"

export const Skeleton = () => {
  return (
    <>
    <div className={style.parent}>
    <div className={`${style.card} ${style.cardSkeleton}`}>
    {/* Content of the skeleton card (e.g., placeholders for user details) */}
  </div><div className={`${style.card} ${style.cardSkeleton}`}>
    {/* Content of the skeleton card (e.g., placeholders for user details) */}
  </div><div className={`${style.card} ${style.cardSkeleton}`}>
    {/* Content of the skeleton card (e.g., placeholders for user details) */}
  </div><div className={`${style.card} ${style.cardSkeleton}`}>
    {/* Content of the skeleton card (e.g., placeholders for user details) */}
  </div><div className={`${style.card} ${style.cardSkeleton}`}>
    {/* Content of the skeleton card (e.g., placeholders for user details) */}
  </div><div className={`${style.card} ${style.cardSkeleton}`}>
    {/* Content of the skeleton card (e.g., placeholders for user details) */}
  </div>
    </div>
    </>
  )
}
