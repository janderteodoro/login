# Use uma imagem base com Node.js instalado
FROM node:14

# Defina o diretório de trabalho como /app
WORKDIR /src

# Copie o código da sua aplicação para o diretório de trabalho
COPY . .

# Instale as dependências
RUN npm install

# Defina o ponto de entrada da sua aplicação
CMD ["npm", "start"]
