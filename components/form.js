import React, {useState} from "react"
import axios from "axios"
import Router from "next/router"
import styles from "../styles/Form.module.css"

const url =
  "https://api.hsforms.com/submissions/v3/integration/submit/7038801/e60f7ec3-0856-47ea-91f2-8e942aea87b2"

const Form = ({home, auto, pet}) => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [id, setId] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [terms, setTerms] = useState(false)

  const handleName = e => {
    setName(e.target.value)
  }

  const handleLastName = e => {
    setLastName(e.target.value)
  }

  const handleId = e => {
    setId(e.target.value)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handleTel = e => {
    setTel(e.target.value)
  }

  const handleTerms = () => {
    setTerms(!terms)
  }

  const submit = e => {
    e.preventDefault()
    const paquets = `${!home ? "HogarZen;" : ""}${!auto ? "AutoConectado;" : ""}${!pet ? "Petsafe;": ""}`
    axios
      .post(url, {
        fields: [
          {
            name: "firstname",
            value: name,
          },
          {
            name: "lastname",
            value: lastName,
          },
          {
            name: "cedula",
            value: id,
          },
          {
            name: "email",
            value: email,
          },
          {
            name: "phone",
            value: tel,
          },
          {
            name: "paquetes_contratados",
            value: paquets,
          },
        ],
      })
      .then(() => {
        Router.push('/thanks')
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div className={styles.formContainer}>
      <p>
        Completa este formulario y nos contactaremos contigo con toda la
        información que necesitas.
      </p>
      <form className={styles.form} onSubmit={e => submit(e)}>
        <input
          name="nombre"
          onChange={e => handleName(e)}
          placeholder="Nombre"
          value={name}
        />
        <input
          name="Apellido"
          onChange={e => handleLastName(e)}
          placeholder="Apellido"
          value={lastName}
        />
        <input
          name="Cedula"
          onChange={e => handleId(e)}
          placeholder="Cédula"
          value={id}
          maxLength={10}
        />
        <input
          name="Correo*"
          type="email"
          onChange={e => handleEmail(e)}
          placeholder="Correo*"
          value={email}
          required
        />
        <input
          name="Teléfono"
          onChange={e => handleTel(e)}
          placeholder="Teléfono"
          value={tel}
        />
        <div className={styles.checkCont}>
          <br />
          <input
            name="checkBox"
            type="checkbox"
            onChange={handleTerms}
            required
          />
          <label>
            Acepto que Seguros Equinoccial utilice todos los datos para
            comunicarse conmigo y para enviarme información
          </label>
        </div>
        <br />
        <input
          name="Enviar"
          type="submit"
          className={styles.submit}
          value="Enviar"
        />
      </form>
    </div>
  )
}

export default Form
