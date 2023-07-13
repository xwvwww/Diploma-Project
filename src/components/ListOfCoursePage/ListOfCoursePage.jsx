import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./ListOfCoursePage.css";

const firebaseConfig = {
  apiKey: "AIzaSyBtDfzHSabnWRB9ZyhiF_gA-QEN54Hz9Jk",
  authDomain: "linguistic-project.firebaseapp.com",
  databaseURL: "https://linguistic-project-default-rtdb.firebaseio.com",
  projectId: "linguistic-project",
  storageBucket: "linguistic-project.appspot.com",
  messagingSenderId: "113108361670",
  appId: "1:113108361670:web:e70e4819a28a4ab0fc92c7",
  measurementId: "G-1DSMD2YDR7",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const ListOfCoursePage = () => {
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

  return (
    <div>
      <div className="back-button">
        <Link to="/">Назад</Link>
      </div>

      <div className="groups">
        <div className="header">
          <div className="background-shape"></div>
          <h2>Утренние группы</h2>
        </div>

        <div className="group-block">
          <div className="group-info">
            <h3>Группа 1 (Японский начальный уровень N5)</h3>
            <p>Расписание: Пн, Ср, Пт 10:00 - 12:00</p>
            <p>Преподаватель: Азуми Такахаси (安曇高梁)</p>
            <p>Длительность: 4 месяца</p>
            <p>Цена: 25 000 ₸</p>
            <p><b>Старт: 10 сентября!</b></p>
          </div>
          <div className="group-button">
            <button onClick={handleButtonClick}>Записаться</button>
          </div>
        </div>

        <div className="group-block">
          <div className="group-info">
            <h3>Группа 2 (Корейский начальный уровень 초급)</h3>
            <p>Расписание: Вт, Чт 10:00 - 12:00</p>
            <p>Преподаватель: Ким Ёнсу (김영수)</p>
            <p>Длительность: 3 месяца</p>
            <p>Цена: 20 000 ₸</p>
            <p><b>Старт: 20 сентября!</b></p>
          </div>
          <div className="group-button">
            <button onClick={handleButtonClick}>Записаться</button>
          </div>
        </div>
      </div>

      <div className="groups">
        <div className="header">
          <div className="background-shape"></div>
          <h2>Дневные группы</h2>
        </div>

        <div className="group-block">
          <div className="group-info">
            <h3>Группа 1 (Японский средний уровень N4)</h3>
            <p>Расписание: Пн, Ср, Пт 13:00-15:00</p>
            <p>Преподаватель: Азуми Такахаси (安曇高梁)</p>
            <p>Длительность: 4 месяца</p>
            <p>Цена: 25 000 ₸</p>
            <p><b>Старт: 10 сентября!</b></p>
          </div>
          <div className="group-button">
            <button onClick={handleButtonClick}>Записаться</button>
          </div>
        </div>

        <div className="group-block">
          <div className="group-info">
            <h3>Группа 2 (Корейский средний уровень 중급)</h3>
            <p>Расписание: Вт, Чт 13:00-15:00</p>
            <p>Преподаватель: Ким Ёнсу (김영수)</p>
            <p>Длительность: 3 месяца</p>
            <p>Цена: 20 000 ₸</p>
            <p><b>Старт: 20 сентября!</b></p>
          </div>
          <div className="group-button">
            <button onClick={handleButtonClick}>Записаться</button>
          </div>
        </div>
      </div>

      <div className="groups">
        <div className="header">
          <div className="background-shape"></div>
          <h2>Вечерние группы</h2>
        </div>

        <div className="group-block">
          <div className="group-info">
            <h3>Группа 1 (Японский продвинутый уровень N3)</h3>
            <p>Расписание: Пн, Ср, Пт 18:00-20:00</p>
            <p>Преподаватель: Азуми Такахаси (安曇高梁)</p>
            <p>Длительность: 4 месяца</p>
            <p>Цена: 25 000 ₸</p>
            <p><b>Старт: 10 сентября!</b></p>
          </div>
          <div className="group-button">
            <button onClick={handleButtonClick}>Записаться</button>
          </div>
        </div>

        <div className="group-block">
          <div className="group-info">
            <h3>Группа 2 (Корейский продвинутый уровень 고급)</h3>
            <p>Расписание: Вт, Чт 18:00 - 20:00</p>
            <p>Преподаватель: Ким Ёнсу (김영수)</p>
            <p>Длительность: 3 месяца</p>
            <p>Цена: 20 000 ₸</p>
            <p><b>Старт: 20 сентября!</b></p>
          </div>
          <div className="group-button">
            <button onClick={handleButtonClick}>Записаться</button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <button className="close-button" onClick={handleCloseForm}>
              X
            </button>
            <form className="form" onSubmit={handleFormSubmit}>
              <h3 className="form-title">Форма обратной связи</h3>
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

export default ListOfCoursePage;