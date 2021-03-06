import { useState } from 'react'
import { CircleQuestionIcon } from '../assets/svgs'
import styles from './about.module.scss'
import AboutMenu from './AboutMenu'
import cx from 'classnames'

export default function About() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleClick() {
    setOpenMenu((prev) => !prev)
  }

  return (
    <>
      <h1 className={styles.head}>
        πλ°μ νλ κ°λ°μ <strong>νμλ°°</strong>μλλ€
      </h1>

      <div className={styles.category}>
        <h2>πββοΈ About me</h2>
        <div className={styles.content}>
          <img src='ννν.png' alt='νμλ°°' width='180px' height='180px' />

          <div className={styles.contentIntroduce}>
            <h3>Intorduction</h3>
            <ul>
              <li>μλνμΈμ! μ μ νλ‘ νΈμλ κ°λ°μ νμλ°°μλλ€</li>
              <li>νμ€ν κ°λ°μλ₯Ό κΏκΎΈλ©°, λ§€μΌ κ³΅λΆνκ³  μμ΅λλ€</li>
              <li>λ¬΄μλ³΄λ€λ κΎΈμ€ν¨μ κ°μΉλ₯Ό λ―Ώκ³  νμ΅νλ©° κΈ°μ  λΈμνμ΄μ§λ₯Ό κΈ°λ‘νκ³  μμ΅λλ€</li>
              <li>Clean Codeμ λν κ³ λ―Όμ μνν ν©λλ€</li>
              <li>ν¨κ» νλ μ±μ₯μ κ΄μ¬μ΄ λ§μ΅λλ€</li>
            </ul>

            <h3>Contact</h3>
            <ul>
              <li>Email | shongs27@gmail.com</li>
              <li>
                <a className={styles.linkPage} href='https://github.com/shongs27' target='_blank' rel='noreferrer'>
                  Github
                </a>
                <span> | https://github.com/shongs27</span>
              </li>
              <li>
                <a
                  className={styles.linkPage}
                  href='https://shongs27.github.io/notionBlog/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Blog
                </a>
                <span> | νμλ°°μ κΈ°μ λΈλ‘κ·Έ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.category}>
        <h2>π» Skills</h2>
        <div className={styles.skills}>
          <h3>Fronted</h3>
          <ul>
            <li>Html, CSS, Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Jest</li>
          </ul>
        </div>
        <div className={styles.skills}>
          <h3>Backend</h3>
          <ul>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Amazon Clould</li>
          </ul>
        </div>
      </div>

      <div className={styles.category}>
        <h2>π¨πΌβπ» Projects</h2>
        <div className={styles.container}>
          <h3>κ°μΈ λΈλ‘κ·Έ</h3>
          <p className={styles.date}>2022.01 ~</p>
          <ul>
            <li>TDD κ°λ°λ°©λ²λ‘ μ μ μ©ν κΈ°μ λΈλ‘κ·Έ</li>
            <li>notionμ ν΅ν΄ μ λ¦¬λ κΈμ ν¬μ€νΈλ‘ λ λλ§</li>
            <li>React, redux, mongoose, AWS μ μ©</li>
          </ul>
          <p>
            μ§μμ μΈ λΈλ‘κ·Έ κ΄λ¦¬λ₯Ό μν΄ TDDλ₯Ό μ μ©ν©λλ€ λ¦¬ν©ν λ§μ ν΅ν΄ λ λμ UIμ νμ΅ν κΈμ μ λ¦¬ν΄μ μ½κ²
            μμ ν¨μΌλ‘μ λ€μ νλ² νμ΅νκ³  μ€νμμ€μ κΈ°μ¬ν¨μ λͺ©μ μΌλ‘ ν©λλ€
          </p>
        </div>
      </div>

      <div className={styles.category}>
        <h2>π¨βπ« Education</h2>
        <div className={styles.container}>
          <h3>μ½λμ¨ λ¦¬μ‘νΈ 6κΈ°</h3>
          <p className={styles.date}>2021.12</p>
          <p>μ½λμ¨ κ΅μ‘κΈ°κ΄ λ¦¬μ‘νΈ TDD κ°λ°λ°©λ²λ‘ </p>
          <ul>
            <li>3κ°μ κ³Όμ </li>
            <li>λ¦¬ν©ν λ§μ ν΅ν λ¦¬μ‘νΈ μ€μ΅</li>
            <li>νμ€νΈ κ°λ°λ°©λ²λ‘  νμ΅</li>
            <li>
              <a className={styles.codesoom} href='https://www.codesoom.com/'>
                μ½λμ¨ ννμ΄μ§ λ§ν¬
              </a>
            </li>
          </ul>
          <p>
            λ¦¬ν©ν λ§μ ν΅ν μ½λ κ°μ κ³Ό μλ‘ μν΅ν  μ μλ μ½λμ μ€μμ±μ λ°°μ΄ μμ€ν κ²½νμ΄μμ΅λλ€. λ¦¬μ‘νΈμ
            κΈ°λ³Έμ μΈ μλ¦¬λ₯Ό λ°νμΌλ‘ μμ νλ‘μ νΈλ€μ κ±°λ­νλ©° TDD κ°λ° λ°©λ²μ μ΅νμ΅λλ€. λ¬΄μλ³΄λ€ λλ§μ΄ μ΄ν΄νλ
            μ½λκ° μλ μ½κ³ , νΈνκ³ , λͺννκ² μ΄ν΄ν  μ μλ μ½λμ λν΄μ κ³ λ―Όνλ κ³κΈ°μμ΅λλ€.
          </p>
        </div>

        <div className={styles.container}>
          <h3>μΈνκ³Ό ν¨κ»νλ AI</h3>
          <p className={styles.date}>2020.01</p>
          <p>μΈνμμ μ£Όκ΄νλ μΈκ³΅μ§λ₯ κ΄λ ¨ κ΅μ‘κ³Ό λλ‘ μ μ΄μ©ν μλμ£Όν μ€μ΅</p>
          <ul>
            <li>1κ°μ κ΅μ‘</li>
          </ul>
        </div>

        <div className={styles.container}>
          <h3>λΉλ°μ΄ν° μ²­λμΈμ¬</h3>
          <p className={styles.date}>2019.06</p>
          <p>κ³Όνν΅μ λΆ μ£Όκ΄ λΉλ°μ΄ν° μ²­λμΈμ¬</p>
          <ul>
            <li>3κ°μ κ΅μ‘κ³Όμ </li>
            <li>1κ°μ μ§μ²΄κ΅μ‘ + 2κ°μ νλ‘μ νΈ</li>
            <b>λ―ΈμΈλ¨Όμ§ λλμ λ°λ₯Έ κΈ°μ μμΈ‘ νλ‘μ νΈ 2λ±</b>
          </ul>
          <p>
            νμκ³Ό λλ©μΈμ§μμ μ€μμ±μ λν΄ κΉ¨λ«κ³  νλ‘κ·Έλλ° νλ‘μ νΈλ₯Ό μ μ²΄μ μΌλ‘ κ΄λ§ν  μ μλ κ°λ ₯ν μ²«
            κ²½νμ΄μμ΅λλ€. νλ‘μ νΈ μ΄λ°, νμκ³Όμ λΆμ‘±νλ μν΅μΌλ‘ μΈν΄ λ¨Έμ λ¬λμ νμ΅λͺ¨λΈμ μ μ©μ΄ λμ§ μλ μ μ 
            κ³Όμ μ΄ νμ μλ λ³μλ₯Ό κ°κ³΅νλ©° λ§μ μκ°μ μλͺ¨νκ² λμλλ°μ, κ·Έ ν νλ‘μ νΈλ₯Ό λ¦¬λΉλ©νλ©΄μ μλ‘μ
            μλ¬΄μ λν κ΄μ¬κ³Ό λνλ₯Ό ν΅ν νλμ μ€μμ±μ νμΈνκ³  κ°μ μμΌ λΉ λ₯΄κ² μκ°μ μ μ½ν΄ λκ°κ³  νλμ ν΅ν΄
            νμ΅λͺ¨λΈμ μν μ μ ν λ³μλ₯Ό μ μ νμ¬ μμΈ‘μ¨μ 70νΌμΌνΈκΉμ§ λμ΄μ¬λ¦΄ μ μμμ΅λλ€. νμκ³Ό μλ‘λ₯Ό μν
            νΌλλ°±μ΄ μ€μνλ€λ κ²μ κΉ¨λ«λ κ²½νμ΄μμ΅λλ€.
          </p>
        </div>
      </div>

      <div className={styles.category}>
        <h2>π μκ²©μ¦</h2>
        <div className={styles.certificationContainer}>
          <div className={styles.container}>
            <h3>ν μ΅μ€νΌνΉ LV6</h3>
            <p>μ£Όκ΄: ETS / μ·¨λμΌ : 2020.09</p>
          </div>
          <div className={styles.container}>
            <h3>νκ΅­μ¬ 1κΈ</h3>
            <p>μ£Όκ΄: κ΅­μ¬νΈμ°¬μμν / μ·¨λμΌ : 2019.06</p>
          </div>
          <div className={styles.container}>
            <h3>DSAC 3λ±κΈ</h3>
            <p>λ°μ΄ν°μ¬μ΄μΈν°μ€νΈ λ₯λ ₯κ²μ </p>
            <p>μ£Όκ΄: νκ΅­μμ°μ±λ³ΈλΆ / μ·¨λμΌ : 2019.05</p>
          </div>
          <div className={styles.container}>
            <h3>μ λ³΄μ²λ¦¬κΈ°λ₯μ¬</h3>
            &nbsp;
            <p>μ£Όκ΄: νκ΅­μ°μμΈλ ₯κ³΅λ¨ </p>
          </div>
        </div>
      </div>

      <div className={styles.category}>
        <h2>π¬ Mottos</h2>
        <ul className={styles.mottosList}>
          <li>λ§€μΌ νλ νμ΅</li>
          <li>&quot;μ²&quot; νμ§λ§μ</li>
          <li>λ©νμΈμ§λ₯Ό ν΅ν΄ λͺννκ² νμ΅νμ</li>
        </ul>
      </div>

      <div className={styles.addon}>
        <div className={cx(styles.itemMenu, { [styles.visibleItem]: openMenu })}>
          <AboutMenu />
        </div>

        <button
          className={cx(styles.listMenu, { [styles.openMenu]: openMenu })}
          type='button'
          title='λμλ©λ΄ μ΄κ³  λ«κΈ°'
          onClick={handleClick}
        >
          <CircleQuestionIcon />
        </button>
      </div>
    </>
  )
}
