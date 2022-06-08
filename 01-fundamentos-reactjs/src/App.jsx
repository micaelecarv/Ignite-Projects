import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {

  const posts = [
    { 
      id: 1,
      author: {
        avatarUrl: 'http://github.com/micaelecarv.png',
        name: 'Micaele Carvalho',
        role: 'Software Developer @somosTera'
      },
      content: [
        {
          type: 'paragraph', content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link', content: 'jane.design/doctorcare',
        },
      ],
      publishedAt: new Date('2022-05-10 20:00:00'),
    },
    { 
      id: 2,
      author: {
        avatarUrl: 'https://github.com/hurabittencourt.png',
        name: 'Hura Bittencourt',
        role: 'CTO na Investidores.vc'
      },
      content: [
        {
          type: 'paragraph', content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link', content: 'jane.design/doctorcare',
        },
      ],
      publishedAt: new Date('2022-05-26 19:20:01'),
    },
  ];
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
         })}
        </main>
      </div>
    </>
  )
}
