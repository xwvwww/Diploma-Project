import React, { useState } from "react";
import "./MainPage.css";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { Link } from "react-router-dom";

const firebaseConfig = {
  // firebaseConfig
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const MainPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notification, setNotification] = useState(null);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Записываем данные в базу данных Firebase
    database.ref("contacts").push({
      name,
      phoneNumber,
    });

    // Сбросить значения полей формы
    setName("");
    setPhoneNumber("");

    // Показать сообщение об отправке данных
    setNotification("Ваши данные успешно отправлены!");

    // Убрать сообщение через 4 секунды
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleContactClick = () => {
    // Редирект на страницу контактов
    // Например, если путь к компоненту ContactsPage.jsx - "/contacts"
    window.location.href = "/contacts";
  };

  return (
    <div className="main-page">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Школа иностранного языка Harukami</h1>
          <p className="header-description">
            Специализируемся на подготовке к поступлению в учебные заведения
            Японии и Кореи, а также работе в азиатских компаниях.
          </p>
        </div>
        <button className="header-callback-button" onClick={handleButtonClick}>
          Обратная связь
        </button>
      </header>
      <div className="centered-content">
        <h2>Выберите язык обучения:</h2>
        <div className="course-buttons">
          <Link to="/japanese" className="course-button">
            Японский
          </Link>
          <Link to="/korean" className="course-button">
            Корейский
          </Link>
        </div>
      </div>
      <div className="blocks">
        <div className="block">
          <h3>3.5 месяца</h3>
          <div className="line"></div>
          <p>
            Длительность японского и корейского курса, пройдя который, вы
            овладеете начальным уровнем знаний.
          </p>
        </div>
        <div className="block">
          <h3>2 носителя языка</h3>
          <div className="line"></div>
          <p>
            Родной язык или стажировка в азиатском университете - два фактора
            наших преподавателей
          </p>
        </div>
        <div className="block">
          <h3>90%</h3>
          <div className="line"></div>
          <p>
            Наших студентов успешно сдают государственный экзамен и получают
            сертификат.
          </p>
        </div>
      </div>
      <div className="teacher-block">
        <div className="teacher-content">
          <h3>Наши Преподаватели</h3>
          <div className="teacher">
            <h4>Преподаватель Японского языка</h4>
            <p>
              Имя: <b>Азуми Такахаси (安曇高梁)</b>
            </p>
            <p>Опыт: Более 10 лет преподавания японского языка</p>
            <p>Образование: Магистр лингвистики, Токийский университет</p>
            <p>
              Специализация: Подготовка к экзаменам JLPT, общий и деловой
              японский
            </p>
          </div>
          <div className="teacher">
            <h4>Преподаватель Корейского языка</h4>
            <p>
              Имя: <b>Ким Ёнсу (김영수)</b>
            </p>
            <p>Опыт: Более 8 лет преподавания корейского языка</p>
            <p>
              Образование: Бакалавр иностранных языков, Сеульский университет
            </p>
            <p>Специализация: Разговорный корейский, грамматика</p>
          </div>
        </div>
      </div>
      <div className="course-info-block">
        <div className="course-info">
          <h3>Индивидуальные занятия</h3>
          <p>
            Авторские программы и индивидуальный подход - лучший вариант
            изучения языка для начинающих.
          </p>
          <p>
            Репетитор японского и корейского сделает процесс обучения интересным
            и максимально полезным. Японский и корейский язык с нуля - уже через
            два месяца!
          </p>
        </div>
        <div className="course-info">
          <h3>Корпоративные курсы</h3>
          <p>
            Подготовим курс необходимого уровня сложности, исходя из рода
            деятельности компании.
          </p>
          <p>
            Проводим курсы у вас в офисе по всему Казахстану и подбираем удобное
            для вас время.
          </p>
        </div>
        <div className="course-info">
          <h3>Разговорный клуб</h3>
          <p>
            Дает возможность практиковать язык с преподавателями и другими
            участниками клуба посредством обсуждения интересных тем, а также
            закреплять знания, полученные на курсах.
          </p>
        </div>
      </div>
      <div className="free-lesson-block">
        <div className="left-section">
          <h3>
            Пройдите бесплатный урок в самом лучшем центре изучения языка!
          </h3>
        </div>
        <button className="footer-contact-button" onClick={handleContactClick}>
          Контакты
        </button>
        <div className="right-section">
          <button
            className="footer-callback-button"
            onClick={handleButtonClick}
          >
            Обратная связь
          </button>
        </div>
      </div>

      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <button className="close-button" onClick={handleCloseForm}>
              X
            </button>
            <form className="form" onSubmit={handleFormSubmit}>
              <h3>Обратная связь</h3>
              <input
                type="text"
                placeholder="ФИО"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Номер телефона"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      )}
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default MainPage;
