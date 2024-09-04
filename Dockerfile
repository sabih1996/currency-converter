FROM node:20

WORKDIR /currency_converter

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]