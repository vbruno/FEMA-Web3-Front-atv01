import { Stack } from "../Stack";

import style from "./index.module.css";

// stacks => ["JavaScript", "HTML", "CSS", "Typescript"]
//                stack

export function CardAvatar({ cover, avatar, name, office, stacks }) {
  return (
    <div className={style.card}>
      <img src={cover} alt="Cover" />
      <img className={style.avatar} src={avatar} alt="Avatar" />
      <p className={style.p1}>{name}</p>
      <p className={style.p2}>{office}</p>
      <div className={style.stack}>
        {stacks.map((stack, index) => {
          return <Stack key={index} name={stack.Tec} />;
        })}
      </div>
    </div>
  );
}
