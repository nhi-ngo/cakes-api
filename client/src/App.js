import React from 'react'
import style from './App.module.css'

function App() {

  // const [cake, setCake] = useState({})

  // useEffect(() => {
  //   fetch('https://my-cake-server.herokuapp.com/api/cake')
  //     .then(res => res.json())
  //     .then(item => setCake(item))
  // }, [])

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1 className={style.title}>It’s cake o’clock</h1>

        <h2 className={style.endPointsHeader}>Endpoints</h2>

      <section className={style.sectionContainer}>
        <h4><em>cake:</em> endpoint pertaining to a single random cake recipe</h4>

        <p className={style.sectionRow}>
          <span>get</span>
          <a className={style.sectionLink} href = "https://my-cake-server.herokuapp.com/api/cake" >
            /api/cake
          </a>
        </p>
      </section>

      <section className={style.sectionContainer}>
        <h4><em>all-cakes</em>: endpoint pertaining to an array of all cake recipes</h4>

        <p className={style.sectionRow}>
          <span>get</span>
          <a className={style.sectionLink} href = "https://my-cake-server.herokuapp.com/api/allcakes" >
            /api/allcakes
          </a>
        </p>
      </section>
      </div>
    </div>
  );
}

export default App;
