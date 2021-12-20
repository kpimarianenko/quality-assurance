import time
from selenium import webdriver
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

browser = webdriver.Chrome(executable_path="C:\\projects\\quality-assurance\\lab3\\chromedriver.exe")
browser.maximize_window()
wait = WebDriverWait(browser, 10)

initial_url = "http://www.fb.com"
target_url = "http://www.facebook.com"


class User:
    firstname = 'Petro'
    lastname = 'Danylchenko'
    email = 'petro.danylchenko.fake1@mail.ru'
    password = 'Qwerty_1340'
    birth_day = '10'
    birth_month = 'мар'
    birth_year = '1993'
    sex = "Мужчина"


def find_button_by_text(text = ''):
    browser.find_element(By.XPATH, f"//*[text()='{text}']")


user = User()

try:
    browser.get(initial_url)
    wait.until(lambda driver: driver.current_url != target_url)
    browser.find_element(By.XPATH, f"//*[text()='Создать новый аккаунт']").click()
    time.sleep(1)
    browser.find_element(By.NAME, "firstname").send_keys(user.firstname)
    browser.find_element(By.NAME, "lastname").send_keys(user.lastname)
    browser.find_element(By.NAME, "reg_email__").send_keys(user.email)
    time.sleep(1)
    browser.find_element(By.NAME, "reg_email_confirmation__").send_keys(user.email)
    browser.find_element(By.ID, "password_step_input").send_keys(user.password)

    Select(browser.find_element(By.NAME, "birthday_day")).select_by_visible_text(user.birth_day)
    Select(browser.find_element(By.NAME, "birthday_month")).select_by_visible_text(user.birth_month)
    Select(browser.find_element(By.NAME, "birthday_year")).select_by_visible_text(user.birth_year)
    browser.find_element(By.XPATH, "//input[@name='sex' and @value='2']").click()

    browser.find_element(By.XPATH, f"//button[text()='Регистрация']").click()
    time.sleep(30)
except Exception as ex:
    print(ex)
finally:
    browser.close()
    browser.quit()
