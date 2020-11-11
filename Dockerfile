FROM node:12-slim
COPY . ./
RUN cd v2-website && npm i 
CMD cd v2-website && npm start