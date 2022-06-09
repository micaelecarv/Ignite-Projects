import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import style from './style.module.css';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([
    'Post muito bacana, hein!'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDataFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { 
    locale: ptBr,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
    event.target.setCustomValidity('');
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório');
    console.log(event);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne);
  }
  
  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
          <time title={publishedDateRelativeToNow} dateTime={publishedAt.toISOString()}>
            {publishedDataFormatted}
          </time>
      </header>

        <div className={style.content}>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>;
            }
          })}
        </div>

        <form 
          onSubmit={handleCreateNewComment}
          className={style.commentForm}
        >
          <strong>Deixe seu feedback</strong>
          <textarea
            name = "comment"
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
          </footer>
        </form>
        <div 
          className={style.commentList}
        >
          {comments.map(comment => {
            return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
            );
          })}
        </div>
      </article>
  );
}