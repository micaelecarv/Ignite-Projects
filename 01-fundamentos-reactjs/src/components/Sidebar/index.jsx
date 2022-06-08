import styles from './style.module.css';
import { Avatar } from '../Avatar';

import { PencilLine } from 'phosphor-react';
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img 
          className={styles.cover}
          src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" 
          alt="Foto de perfil github"
        />

      <div className={styles.profile}>
        <Avatar src="https://github.com/micaelecarv.png" />
        <strong>Micaele Carvalho</strong>
        <span>Software Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}