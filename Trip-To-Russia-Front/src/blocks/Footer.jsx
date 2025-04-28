export default function Footer(){
 const CurrentPath = window.location.pathname
  return(
 <footer  className={CurrentPath === "/Login" || CurrentPath === "/Registration"  ? "hidden" : "null"}>
    <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
      <div className="col mb-3">
        <a><img alt="" src='/Photo/logo-black.png' className="logo-black-footer"/></a>
        <p className="text-muted">&copy; 2023-2025, Все права защищены</p>
        <p className="text-muted">Trip To Russia</p>
      </div>
      <div className="col mb-3"></div>
      <div className="col mb-3">
        <h5>Пользователям</h5>
        <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="/TeamSite" className="nav-link p-0 text-muted">О проекте</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Частые вопросы</a></li>
          <li className="nav-item mb-2"><a href="/Login" className="nav-link p-0 text-muted">Войти в профиль</a></li>
          <li className="nav-item mb-2"><a href="/Policy" className="nav-link p-0 text-muted">Политика конфиденциальности</a></li>
          <li className="nav-item mb-2"><a href="/UserPolicy" className="nav-link p-0 text-muted">Пользовательское соглашение</a></li>
        </ul>
      </div>
      <div className="col mb-3">
        <h5>Партнерам</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Стать партнером</a></li>
          <li className="nav-item mb-2"><a href="/Login" className="nav-link p-0 text-muted">Войти в личный кабинет</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Инструкции</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Оферта</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Поддержка</a></li>
        </ul>
      </div>
      <div className="col mb-3">
        <h5>Гидам</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Стать партнером</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Кабинет партнера</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Документация</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Оферта</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Туры</a></li>
        </ul>
      </div>
    </div>
  </div>
  </footer>
)
}