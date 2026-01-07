import './App.css'
import blogimage from './assets/images/blog-image.png'
import imageavatar from './assets/images/image-avatar.webp'

function Article() {
    return(<>
    <article className='card'>
        <img className='article-image' src={blogimage} alt="article image" />
        <h3 className='label'>Learning</h3>
        <h2 className='pub-date'>Published 21 Dec 2023</h2>
        <h1 className='heading'>HTML & CSS foundations</h1>
        <p className='explains'>
        These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className='profil'>
            <img className='profil-photo' src={imageavatar} alt="profil photo" />
            <h4 className='name'>Greg Hooper</h4>
        </div>
        
      </article>
    </>)
}

export default Article;



  

  


  
  