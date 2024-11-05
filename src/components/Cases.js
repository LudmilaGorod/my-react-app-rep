import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import './Cases.css';

function Cases() {
  const casesData = {
    "case1": {
      title: "Избавление от пробелов за две недели",
      description: "Краткое описание того, как за две недели была проведена интенсивная работа для устранения пробелов в знаниях.",
      image: "/case1.png"
    },
    "case2": {
      title: "С двоек до четвёрок + любовь к математике",
      description: "Этот ученик начал понимать математику с нуля, поднял успеваемость и даже полюбил предмет.",
      image: "/case2.png"
    },
    "case3": {
      title: "Сдача ЕГЭ на необходимый балл",
      description: "Благодаря подготовке, ученик смог сдать ЕГЭ и получить необходимый балл для поступления.",
      image: "/case3.png"
    }
  };

  const { caseId } = useParams();
  const navigate = useNavigate();
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    // Устанавливаем выбранный кейс только если есть caseId в URL
    if (caseId && casesData[caseId]) {
      setSelectedCase(caseId);
    } else {
      setSelectedCase(null);
    }
  }, [caseId]);

  const handleHide = () => {
    setSelectedCase(null);
    navigate('/'); // Возвращаемся к начальному URL
  };

  return (
    <div className="cases">
      <h2 className="section-title">Истории учеников</h2>
      <ul className="case-links">
        <li><Link to="/case/case1">Избавление от пробелов за две недели</Link></li>
        <li><Link to="/case/case2">С двоек до четвёрок + любовь к математике</Link></li>
        <li><Link to="/case/case3">Сдача ЕГЭ на необходимый балл</Link></li>
      </ul>

      {/* Показываем детали кейса только если выбран caseId */}
      {selectedCase && (
        <div className="case-details">
          <h3>{casesData[selectedCase].title}</h3>
          <img src={casesData[selectedCase].image} alt={casesData[selectedCase].title} className="case-image" />
          <p>{casesData[selectedCase].description}</p>
          <button onClick={handleHide} className="hide-button">Скрыть</button>
          
          
        </div>
      )}
    </div>
  );
}

export default Cases;

