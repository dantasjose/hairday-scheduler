
# Hair Day ✂️

Aplicação web para **agendamento de atendimentos em salão de beleza/barbearia**.  
O usuário pode escolher uma **data, horário** e inserir o **nome do cliente** para criar um agendamento, além de visualizar e cancelar compromissos já registrados.

---

## 🚀 Tecnologias utilizadas
- **HTML5** – Estrutura da aplicação  
- **CSS3** (global, form, schedule) – Estilização responsiva e moderna  
- **JavaScript (ES Modules)** – Regras de negócio e integração com API  
- **Day.js** – Manipulação e formatação de datas  
- **Fetch API** – Comunicação com o backend (CRUD de agendamentos)

---

## ⚙️ Funcionalidades
- Criar novos agendamentos (cliente, data e hora)  
- Listar agendamentos por período do dia (manhã, tarde, noite)  
- Cancelar agendamentos existentes  
- Interface intuitiva e responsiva (desktop e mobile)  

---

## 📂 Estrutura do projeto
```
/
├── index.html           # Estrutura principal da aplicação
├── main.js              # Carregamento de módulos e inicialização
├── api-config.js        # Configuração da API (baseURL)
├── dayjs.js             # Configuração da biblioteca Day.js
├── styles/              # Arquivos de estilo (CSS)
│   ├── global.css
│   ├── form.css
│   └── schedule.css
├── modules/             # Regras de negócio
│   ├── schedule-new.js
│   ├── schedule-cancel.js
│   └── schedule-fetch-by-day.js
└── assets/              # Ícones e imagens
```

---

## ▶️ Como executar o projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/hairday.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd hairday
   ```
3. Instale as dependências (se houver um package.json configurado):
   ```bash
   npm install
   ```
4. Inicie o backend (exemplo com JSON Server):
   ```bash
   npx json-server --watch db.json --port 3333
   ```
5. Abra o arquivo `index.html` no navegador **ou** utilize uma extensão como *Live Server* no VSCode.

---

## 📸 Screenshots (opcional)
Adicione aqui capturas de tela do formulário de agendamento e da listagem de horários.

---

## 📌 Melhorias futuras
- Autenticação de usuários (ex.: login de funcionários)  
- Validação de conflitos entre horários  
- Dashboard administrativo com estatísticas de agendamentos  
- Deploy online (ex.: Vercel, Netlify)

---

## 📝 Licença
Este projeto é de uso educacional, baseado no curso da Rocketseat (trilha Fullstack), mas pode ser adaptado livremente.
