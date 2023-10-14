import style from "./index.module.css"

import { Stack } from '../Stack'

export function CardAvatar() {

  return (
    <div className={style.card}>
      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="Cover Imagem" />
      <img className={style.avatar} src="https://randomuser.me/api/portraits/lego/4.jpg" alt="Image Profile" />
      <h1>John Wick</h1>
      <h2>Web Developer</h2>
      <div className={style.stacks}>
        <Stack />
      </div>
    </div>
  )
}
