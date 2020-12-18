FROM node:14-slim
COPY . ./
RUN cd website && npm i 
CMD cd website && npm start