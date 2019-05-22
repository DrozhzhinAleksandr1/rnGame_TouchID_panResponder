import wd from 'wd';
import config from '../e2e-config';

const port = 4723;
const driver = wd.promiseChainRemote('localhost', port);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000000;

describe('Simple Appium Example', () => {
  beforeAll(async () => {
    await driver.init(config)
    // await driver.sleep(5000) // Wait for loading Splash Screen
  });
  afterEach(async () => driver.resetApp());
  afterAll(async () => driver.quit());




  it('check Search', async () => {                                                                   // Поиск
    expect(await driver.waitForElementById('openSearchInputID'));
    // console.log("Поиск есть")
    await driver.elementByAccessibilityId('openSearchInputID').click();
    // console.log("Поиск открыт")
    expect(await driver.waitForElementById('searchInput_TitleID'));
    // console.log("Строка ввода есть")
    expect(await driver.waitForElementById('searchFocus_mainID'));
    // console.log("Боковая лупа есть")
    expect(await driver.waitForElementById('search_closeID'));
    // console.log("Закрытие поиска есть")
    await driver.elementByAccessibilityId('searchInput_TitleID').type("CHF/JPY");
    expect(await driver.waitForElementById("CHF/JPYID"))
    // console.log("Элемент найден")
    let element = await driver.elementByAccessibilityId("CHF/JPYFullNameID");
    let text = await element.text();
    // console.log(text);
    expect(text).toEqual('CHF/JPY');
    // console.log("Текст соответствует")
    await driver.elementByAccessibilityId('search_closeID').click();
  });

  it('check Autorization', async () => {                                                         //Войти в авторизации
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    await driver.elementByAccessibilityId('ButtonMenuID').click();
    // console.log("Меню открыто")
    expect(await driver.waitForElementById('LogInMenuID'));
    // console.log("Войти есть!")
    await driver.elementByAccessibilityId('LogInMenuID').click();
    // console.log("Войти открыто")
    expect(await driver.waitForElementById('LoginAuthorizationID'));
    // console.log("Поле логин есть!")
    expect(await driver.waitForElementById('PasswordInputAuthorizationID'));
    // console.log("Поле пароль есть!")
    await driver.elementByAccessibilityId('LoginAuthorizationID').type("testviktoriya@gmail.com");
    // console.log("Логин введён")
    await driver.elementByAccessibilityId('PasswordInputAuthorizationID').type("123qwe");
    // console.log("Пароль введён")
    expect(await driver.waitForElementById('BtnShowPassAuthorizationID'));
    // console.log("Скрыть пароль Есть")
    await driver.elementByAccessibilityId('BtnShowPassAuthorizationID').click();
    // console.log("Пароль скрыт!")
    await driver.elementByAccessibilityId('BtnShowPassAuthorizationID').click();
    // console.log("Пароль показан")
    expect(await driver.waitForElementById('BtnLoginAuthorizationID'));
    // console.log('Кнопка "Войти" есть')
    await driver.elementByAccessibilityId('BtnLoginAuthorizationID').click();
    // console.log("Авторизировано")
    await driver.sleep(3000) // Костыль
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    expect(await driver.waitForElementById('openSearchInputID'));
    // console.log("Поиск есть")
    expect(await driver.waitForElementById('TabTitleID'));
    // console.log("Заголовок есть")
    // Проверка popup
    let element = await driver.elementByAccessibilityId("TabTitleID");
    let text = await element.text();
    // console.log(text);
    expect(text).toEqual('Валюты');
    // console.log("Текст соответствует")
  });

  it('check Autorization', async () => {                                                 //Выход из авторизированого пользователя
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    await driver.elementByAccessibilityId('ButtonMenuID').click();
    // console.log("Меню открыто")
    expect(await driver.waitForElementById('LogInMenuID'));
    // console.log("Войти есть!")
    await driver.elementByAccessibilityId('LogInMenuID').click();
    // console.log("Войти открыто")
    expect(await driver.waitForElementById('LoginAuthorizationID'));
    // console.log("Поле логин есть!")
    expect(await driver.waitForElementById('PasswordInputAuthorizationID'));
    // console.log("Поле пароль есть!")
    await driver.elementByAccessibilityId('LoginAuthorizationID').type("testviktoriya@gmail.com");
    // console.log("Логин введён")
    await driver.elementByAccessibilityId('PasswordInputAuthorizationID').type("123qwe");
    // console.log("Пароль введён")
    expect(await driver.waitForElementById('BtnShowPassAuthorizationID'));
    // console.log("Скрыть пароль Есть")
    await driver.elementByAccessibilityId('BtnShowPassAuthorizationID').click();
    // console.log("Пароль скрыт!")
    await driver.elementByAccessibilityId('BtnShowPassAuthorizationID').click();
    // console.log("Пароль показан")
    expect(await driver.waitForElementById('BtnLoginAuthorizationID'));
    // console.log('Кнопка "Войти" есть')
    await driver.elementByAccessibilityId('BtnLoginAuthorizationID').click();
    // console.log("Авторизировано")
    await driver.sleep(3000) // Костыль
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    expect(await driver.waitForElementById('openSearchInputID'));
    // console.log("Поиск есть")
    expect(await driver.waitForElementById('TabTitleID'));
    // console.log("Заголовок есть")
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    await driver.elementByAccessibilityId('ButtonMenuID').click();
    // console.log("Меню открыто")
    expect(await driver.waitForElementById('BtnExitMenuID'));
    // console.log("Выход есть!")
    await driver.elementByAccessibilityId('BtnExitMenuID').click();
    // console.log("Выход нажато")
    expect(await driver.waitForElementById('BtnRegistrationPopupID'));
    // console.log("Кнопка 'ДА' есть!")
    await driver.elementByAccessibilityId('BtnRegistrationPopupID').click();
    // console.log("Выйдено")
  });

  it('check Invalid data', async () => {                                                             // Проверка ошибки окна Авторизации
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    await driver.elementByAccessibilityId('ButtonMenuID').click();
    // console.log("Меню открыто")
    expect(await driver.waitForElementById('BtnEnMenuID'));         // Переключение на английский
    // console.log("Переключение на английский язык есть")
    await driver.elementByAccessibilityId('BtnEnMenuID').click();
    // console.log("Приложение на английском")
    expect(await driver.waitForElementById('LogInMenuID'));
    // console.log("Войти есть!")
    await driver.elementByAccessibilityId('LogInMenuID').click();
    // console.log("Войти открыто")
    expect(await driver.waitForElementById('LoginAuthorizationID'));
    // console.log("Поле логин есть!")
    expect(await driver.waitForElementById('PasswordInputAuthorizationID'));
    // console.log("Поле пароль есть!")
    await driver.elementByAccessibilityId('LoginAuthorizationID').type("testviktoriya@gmail.com");
    // console.log("Логин введён")
    await driver.elementByAccessibilityId('PasswordInputAuthorizationID').type("123qwerty");
    // console.log("Пароль введён")
    expect(await driver.waitForElementById('BtnShowPassAuthorizationID'));
    // console.log("Скрыть пароль Есть")
    await driver.elementByAccessibilityId('BtnShowPassAuthorizationID').click();
    // console.log("Пароль скрыт!")
    await driver.elementByAccessibilityId('BtnShowPassAuthorizationID').click();
    // console.log("Пароль показан")
    expect(await driver.waitForElementById('BtnLoginAuthorizationID'));
    // console.log('Кнопка "Войти" есть')
    await driver.elementByAccessibilityId('BtnLoginAuthorizationID').click();
    expect(await driver.waitForElementById('AuthorizationBtnId'));
    // console.log('Ошибка валидация показана')
    // Проверка popup
    let element = await driver.elementByAccessibilityId("AuthorizationTextId");
    let text = await element.text();
    // console.log(text);
    expect(text).toEqual('Incorrect email address or password.');
    // console.log("Текст соответствует")
    await driver.elementByAccessibilityId('AuthorizationBtnId').click();
    // console.log("Ошибка скрыта")
  });

  it('check Validation Autorization', async () => {                                  //  Проверка валидации авторизации
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    await driver.elementByAccessibilityId('ButtonMenuID').click();
    // console.log("Меню открыто")
    expect(await driver.waitForElementById('BtnEnMenuID'));         // Переключение на английский
    // console.log("Переключение на английский язык есть")
    await driver.elementByAccessibilityId('BtnEnMenuID').click();
    // console.log("Приложение на английском")
    expect(await driver.waitForElementById('LogInMenuID'));
    // console.log("Войти есть!")
    await driver.elementByAccessibilityId('LogInMenuID').click();
    // console.log("Войти открыто")
    expect(await driver.waitForElementById('LoginAuthorizationID'));
    // console.log("Поле логин есть!")
    expect(await driver.waitForElementById('PasswordInputAuthorizationID'));
    // console.log("Поле пароль есть!")
    await driver.elementByAccessibilityId('LoginAuthorizationID').type("123");
    // console.log("Логин введён")
    await driver.elementByAccessibilityId('PasswordInputAuthorizationID').type("123");
    // console.log("Пароль введён")
    expect(await driver.waitForElementById('LoginErrorAuthorizationID'));
    // console.log("Ошибка логина есть")
    await driver.elementByAccessibilityId('BtnShowPassAuthorizationID').click();
    expect(await driver.waitForElementById('PasswordInputAuthorizationID'));
    // console.log("Ошибка пароля есть")
    await driver.elementByAccessibilityId('LoginAuthorizationID').click();
    let LogInError = await driver.elementByAccessibilityId("LoginErrorAuthorizationID");    // Проверка popup
    let textLogIn = await LogInError.text();
    // console.log(textLogIn);
    expect(textLogIn).toEqual('Email-entry error');
    // console.log("Текст соответствует")    
    let PasswordError = await driver.elementByAccessibilityId("PasswordErrorAuthorizationID");  //Провека popup
    let textPassword = await PasswordError.text();
    // console.log(textPassword);
    expect(textPassword).toEqual('Password failed');
    // console.log("Текст соответствует")
    // console.log("Валидация работает")
  });

  it('check Registration', async () => {                                           // Регистрация с существующей почтой         
    await driver.sleep(5000)
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    await driver.elementByAccessibilityId('ButtonMenuID').click();
    // console.log("Меню открыто")
    expect(await driver.waitForElementById('LogInMenuID'));
    // console.log("Войти есть!")
    expect(await driver.waitForElementById('BtnEnMenuID'));         // Переключение на английский
    // console.log("Переключение на английский язык есть")
    await driver.elementByAccessibilityId('BtnEnMenuID').click();
    // console.log("Приложение на английском")
    await driver.elementByAccessibilityId('LogInMenuID').click();
    // console.log("Войти открыто")
    expect(await driver.waitForElementById('BtnRegistrationAuthorizationID'));
    // console.log("Зарегестрироваться есть!")
    await driver.elementByAccessibilityId('BtnRegistrationAuthorizationID').click();
    // console.log("Пользователь в меню регистрации")
    expect(await driver.waitForElementById('InputFirstNameRegistrationID'));   //Имя
    // console.log("Строка Имя есть")
    expect(await driver.waitForElementById('InputLastNameRegistrationID'));   // Фамилия
    // console.log("Строка Фамилия есть")
    expect(await driver.waitForElementById('InputEmailRegistrationID'));     // Почта
    // console.log("Строка E-mail есть")
    expect(await driver.waitForElementById('BtnCountryListRegistrationID'));  // Страна
    // console.log("Страны  есть")
    expect(await driver.waitForElementById('InputPhoneRegistrationID'));    // Телефон
    // console.log("Ввод телефона есть")
    await driver.elementByAccessibilityId('BtnCountryListRegistrationID').click();
    // console.log("В меню выбора страны")
    await driver.sleep(3000) //костыль
    await driver.elementByAccessibilityId('SearchInputCountryID').click();
    await driver.elementByAccessibilityId('SearchInputCountryID').type("russ");
    expect(await driver.waitForElementById('RUID'));
    await driver.elementByAccessibilityId('RUID').click();
    // console.log("Россия есть")
    await driver.sleep(3000) //костыль
    // console.log(" Выбор страны = Россия")
    await driver.elementByAccessibilityId('InputFirstNameRegistrationID').type("Barak");
    await driver.elementByAccessibilityId('InputLastNameRegistrationID').type("O'Bama");
    await driver.elementByAccessibilityId('InputEmailRegistrationID').type("test-rn-qfx@gmail.com");
    driver.hideKeyboard();
    await driver.elementByAccessibilityId('InputPhoneRegistrationID').type("14881488");
    driver.hideKeyboard();
    // console.log("Зарегестрировано есть")
    expect(await driver.waitForElementById('BtnCheckBoxRegistrationID'));
    await driver.elementByAccessibilityId('BtnCheckBoxRegistrationID').click();
    expect(await driver.waitForElementById('BtnRegistrationInRegistrationID'));
    // console.log("Кнопка Зарегестрироваться есть")
    await driver.elementByAccessibilityId('BtnRegistrationInRegistrationID').click();
    let RegPopup = await driver.elementByAccessibilityId("RegistrationTextId");     // Регистрация с одной и той же почтой будет выдавать ошибку
    let textPopup = await RegPopup.text();
    // console.log(textPopup);
    expect(textPopup).toEqual('Unfortunately, the account with this email already exists.');
    // console.log("Текст соответстует")
    expect(await driver.waitForElementById('RegistrationBtnId'));
    // console.log("Popup о том что такая почта уже есть появился")
    await driver.elementByAccessibilityId('RegistrationBtnId').click()
  });

  it('check Registration Пустые поля', async () => {                                                 // Валидация регистрации
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    await driver.elementByAccessibilityId('ButtonMenuID').click();
    // console.log("Меню открыто")
    expect(await driver.waitForElementById('BtnEnMenuID'));
    // console.log("Переключение на английский язык есть")
    await driver.elementByAccessibilityId('BtnEnMenuID').click();
    // console.log("Приложение на английском")
    expect(await driver.waitForElementById('LogInMenuID'));
    // console.log("Войти есть!")
    await driver.elementByAccessibilityId('LogInMenuID').click();
    // console.log("Войти открыто")
    expect(await driver.waitForElementById('BtnRegistrationAuthorizationID'));
    // console.log("Зарегестрироваться есть!")
    await driver.elementByAccessibilityId('BtnRegistrationAuthorizationID').click();
    // console.log("Пользователь в меню регистрации")
    expect(await driver.waitForElementById('InputFirstNameRegistrationID'));   //Имя
    // console.log("Строка Имя есть")
    expect(await driver.waitForElementById('InputLastNameRegistrationID'));   // Фамилия
    // console.log("Строка Фамилия есть")
    expect(await driver.waitForElementById('InputEmailRegistrationID'));     // Почта
    // console.log("Строка E-mail есть")
    expect(await driver.waitForElementById('BtnCountryListRegistrationID'));  // Страна
    // console.log("Страны  есть")
    expect(await driver.waitForElementById('InputPhoneRegistrationID'));    // Телефон
    await driver.elementByAccessibilityId('InputFirstNameRegistrationID').type("$");
    await driver.elementByAccessibilityId('InputLastNameRegistrationID').type("$");
    await driver.elementByAccessibilityId('InputEmailRegistrationID').type("barak_obama$prisident.cherniy");
    driver.hideKeyboard();
    await driver.elementByAccessibilityId('InputPhoneRegistrationID').type(";");
    driver.hideKeyboard();
    await driver.elementByAccessibilityId('BtnRegistrationInRegistrationID').click();
    expect(await driver.waitForElementById('FirstNameErrorRegostrationID'))
    expect(await driver.waitForElementById('LastNameErrorRegostrationID'))
    expect(await driver.waitForElementById('EmailErrorRegostrationID'))
    expect(await driver.waitForElementById('PasswordErrorRegistrationID'))
    // console.log("Все ошибки появились")
    let FirstNameError = await driver.elementByAccessibilityId("FirstNameErrorRegostrationID"); // Проверка ошибки в Поле "Имя"
    let textFirstName = await FirstNameError.text();
    // console.log(textFirstName);
    expect(textFirstName).toEqual('Name-entry error');
    // console.log("Валидация поля 'Имя' есть")
    let LastNameError = await driver.elementByAccessibilityId("LastNameErrorRegostrationID"); // Проверка ошибки в Поле "Фамилия"
    let textLastName = await LastNameError.text();
    // console.log(textLastName);
    expect(textLastName).toEqual('Last name-entry error');
    // console.log("Валидация поля 'Фамилия' есть")
    let emailError = await driver.elementByAccessibilityId("EmailErrorRegostrationID"); // Проверка ошибки в Поле "Почта"
    let textEmail = await emailError.text();
    // console.log(textEmail);
    expect(textEmail).toEqual('Email-entry error');
    // console.log("Валидация поля 'Email' есть")
    let TelError = await driver.elementByAccessibilityId("PasswordErrorRegistrationID");           // Проверка ошибки в Поле "Пароль"
    let textTel = await TelError.text();
    // console.log(textTel);
    expect(textTel).toEqual('Invalid phone number');
    // console.log("Валидация поля 'Телефона' есть")
  });

  it('check Password recovery', async () => {                                                   // Восстановлеине пароля
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    await driver.elementByAccessibilityId('ButtonMenuID').click();
    // console.log("Меню открыто")
    expect(await driver.waitForElementById('BtnEnMenuID'));   // Переключение на английский
    // console.log("Переключение на английский язык есть")
    await driver.elementByAccessibilityId('BtnEnMenuID').click();
    // console.log("Приложение на английском")
    expect(await driver.waitForElementById('LogInMenuID'));
    // console.log("Войти есть!")
    await driver.elementByAccessibilityId('LogInMenuID').click();
    // console.log("Войти открыто")
    expect(await driver.waitForElementById('ForgotPasswordAuthorizationID'));
    // console.log("Забыли пароль есть!")
    await driver.elementByAccessibilityId('ForgotPasswordAuthorizationID').click();
    // console.log("Окно восстнановления открыто")
    expect(await driver.waitForElementById('ForgotPasswordInputID'));
    // console.log("Строка ввода почты есть!")
    await driver.elementByAccessibilityId('ForgotPasswordInputID').type("testviktoriya@gmail.com");
    driver.hideKeyboard();
    await driver.elementByAccessibilityId('ForgotPasswordSubmitID').click();
    await driver.elementByAccessibilityId('ForgotPasswordSubmitID').click();
    expect(await driver.waitForElementById('BtnForgotPasswordPopUpID'));
    // console.log("Popup появился")
    let RecPopup = await driver.elementByAccessibilityId("TextRecoveryPopupID");     // Проверка popup 
    let textPopup = await RecPopup.text();  
    // console.log(textPopup);
    expect(textPopup).toEqual("Instructions\n\r for password recovery have been sent to the user's email");
    // console.log("Текст соответстует")
    await driver.elementByAccessibilityId('BtnForgotPasswordPopUpID').click()
    expect(await driver.waitForElementById('LoginAuthorizationID'));  // Перекидывание на поле авторизации
    // console.log("Поле логин есть!")
    expect(await driver.waitForElementById('PasswordInputAuthorizationID'));
    // console.log("Поле пароль есть!")
    // console.log("Восстановление пароля сработало успешно")
  });

  it('check Password recovery non valid', async () => {                                                   // Невалидное восстановлеин пароля
    expect(await driver.waitForElementById('ButtonMenuID'));
    // console.log("Меню есть!")
    await driver.elementByAccessibilityId('ButtonMenuID').click();
    // console.log("Меню открыто")
    expect(await driver.waitForElementById('BtnEnMenuID'));
    // console.log("Переключение на английский язык есть")
    await driver.elementByAccessibilityId('BtnEnMenuID').click();
    // console.log("Приложение на английском")
    expect(await driver.waitForElementById('LogInMenuID'));
    // console.log("Войти есть!")
    await driver.elementByAccessibilityId('LogInMenuID').click();
    // console.log("Войти открыто")
    expect(await driver.waitForElementById('ForgotPasswordAuthorizationID'));
    // console.log("Забыли пароль есть!")
    await driver.elementByAccessibilityId('ForgotPasswordAuthorizationID').click();
    // console.log("Окно восстнановления открыто")
    expect(await driver.waitForElementById('ForgotPasswordInputID'));
    // console.log("Строка ввода почты есть!")
    await driver.elementByAccessibilityId('ForgotPasswordInputID').type("nevalidnii@gmail.com");
    driver.hideKeyboard();
    await driver.elementByAccessibilityId('ForgotPasswordSubmitID').click();
    await driver.elementByAccessibilityId('ForgotPasswordSubmitID').click();
    expect(await driver.waitForElementById('ForgotPasswordBtnId'));
    // console.log("Popup появился")
    let element = await driver.elementByAccessibilityId("ForgotPasswordTextId"); // Проверка popup
    let textError = await element.text();
    // console.log(textError);
    expect(textError).toEqual('Incorrect email address.');
    // console.log("Ошибка соответствует")
    await driver.elementByAccessibilityId('ForgotPasswordBtnId').click();
  });

  it('check Minimize all open charts', async () => {                                                   // Свернуть все окна
    expect(await driver.waitForElementById('AUD/CADID'));
    expect(await driver.waitForElementById('AUD/CHFID'));
    expect(await driver.waitForElementById('AUD/JPYID'));
    expect(await driver.waitForElementById('AUD/NZDID'));
    expect(await driver.waitForElementById('AUD/USDID'));
    await driver.elementByAccessibilityId('AUD/CADID').click();
    await driver.elementByAccessibilityId('AUD/CHFID').click();
    await driver.elementByAccessibilityId('AUD/JPYID').click();
    // console.log("Открыты ячейки")
    await driver.elementByAccessibilityId('ButtonMenuID').click();
    // console.log("В меню")
    await driver.elementByAccessibilityId('BtnTurnAll').click();
    // console.log("Скрыты ячейки")
    driver.back();
    expect(await driver.waitForElementById('AUD/CADID'));
    expect(await driver.waitForElementById('AUD/CHFID'));
    expect(await driver.waitForElementById('AUD/JPYID'));
    expect(await driver.waitForElementById('AUD/NZDID'));
    expect(await driver.waitForElementById('AUD/USDID'));
  });

});