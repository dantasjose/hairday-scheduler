import dayjs from "dayjs"

import { scheduleNew} from "../../services/schedule-new.js"
import { schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carregar a data atual e Defeinir data minima
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    // Previni o comportamento padrão de carregar a página.
    event.preventDefault()

    try{
      // Recupera o nome do cliente
      const name = clientName.value.trim()
      
      if (!name) {
        return alert("Informe o nome do clinte!")
      }
      //Recuperar horário selecionado
      const hourSelected = document.querySelector(".hour-selected")
      
      // Recuperando o horário selcionado.
      if (!hourSelected) {
        return alert("Selecione a hora.")        
      }

      // Recupera somente a hora
      const [hour] = hourSelected.innerText.split(":")

      // Insere a hora na data.
      const when = dayjs(selectedDate.value).add(hour,"hour")

      // Grera um Id.
      const id = new Date().getTime()

      //  Faz agendamento
      await scheduleNew({
        id,
        name,
        when,
      })

      // Recarregar agendamento.
      await schedulesDay()

      // Limpa o input do cliente.
      clientName.value = ""

    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}