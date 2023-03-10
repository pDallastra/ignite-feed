import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css';

import './global.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Paulo Dallastra"
          content="Só um conteúdo normal"
          />
          <Post 
          author="Thais Dallastra"
          content="Esse é um outro comentário"
          />
        </main>
      </div>
    </div>
  )
}
