import style from './style.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(content);
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/micaelecarv.png"/>

      <div className={style.commentBox}>
        <div className={style.commentContent}>

          <header>
            <div className={style.authorAndTime}>
              <strong>Micaele Carvalho</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:33:01">Cerca de 2h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}