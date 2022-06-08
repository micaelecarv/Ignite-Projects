import style from './style.module.css';

export function Avatar({ hasBorder = true, src }) {

  return (
    <img 
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={src}
    />

  );
}