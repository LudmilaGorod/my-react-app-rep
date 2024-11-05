import React, { useState } from 'react'; 
import './Login.css'; // Подключаем стили для компонента

function Login() {
  // Состояние для определения, находится ли пользователь в режиме регистрации
  const [isRegistering, setIsRegistering] = useState(false);

  // Функция для переключения между режимами "Вход" и "Регистрация"
  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Регистрация' : 'Вход'}</h2> {/* Заголовок, меняется в зависимости от режима */}

      {/* Поля для входа */}
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Пароль:
        <input type="password" name="password" required />
      </label>

      {/* Дополнительные поля для регистрации, если выбран режим регистрации */}
      {isRegistering && (
        <>
          <label>
            Имя:
            <input type="text" name="name" required />
          </label>
          <label>
            Подтвердите пароль:
            <input type="password" name="confirmPassword" required />
          </label>
        </>
      )}

      <div className="auth-buttons">
        {/* Кнопка для входа или регистрации, меняется в зависимости от режима */}
        <button type="submit">{isRegistering ? 'Зарегистрироваться' : 'Войти'}</button>

        {/* Кнопка для переключения между режимами */}
        {!isRegistering && (
          <button type="button" className="toggle-register" onClick={handleToggleRegister}>
            Ещё не зарегистрированы?
          </button>
        )}
        {isRegistering && (
          <button type="button" className="toggle-register" onClick={handleToggleRegister}>
            Уже есть аккаунт?
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
