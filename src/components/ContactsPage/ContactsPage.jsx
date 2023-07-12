import React from "react";
import { Link } from "react-router-dom";
import "./ContactsPage.css";

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <Link to="/" className="back-button">
        Назад
      </Link>

      <div className="contacts-container">
        <div className="contacts">
          <h2 className="contacts-title">Контакты</h2>
          <div className="contact-info">
            <div className="contact">
              <span className="contact-label">Номер телефона администрации:</span>
              <span className="contact-value">87785803838</span>
            </div>
            <div className="contact">
              <span className="contact-label">WhatsApp:</span>
              <span className="contact-value">87785803838</span>
            </div>
            <div className="contact">
              <span className="contact-label">Telegram:</span>
              <span className="contact-value">87785803838</span>
            </div>
          </div>
          <div className="contact-email">
            <span className="contact-label">Email:</span>
            <span className="contact-value">almenalnur7@gmail.com</span>
          </div>
          <div className="working-hours">
            <span className="working-hours-label">Время работы:</span>
            <span className="working-hours-value">Пн-Пт: с 9:00-20:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
