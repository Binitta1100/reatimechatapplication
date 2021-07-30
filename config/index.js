const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;
const MONGO_HOST = process.env.MONGO_HOST || 'mongodb+srv://userone:userone@ictakfiles.rjjhi.mongodb.net/CHATAPP?retryWrites=true&w=majority';
const SECRET = process.env.SECRET || 'supersecretalltheway';
const ROOT = process.env.ROOT || '';
const CHAT_PATH = process.env.CHAT_PATH || '/chat-path';

const apiPath = `${ROOT !== '/' ? ROOT : ''}/api`;

const config = {
  env: NODE_ENV,
  root: ROOT,
  apiPath,
  server: {
    port: PORT,
  },
  mongo: {
    host: MONGO_HOST,
    options: {
      useNewUrlParser: true,
      reconnectTries: Number.MAX_VALUE,
    },
  },
  secret: SECRET,
  chatPath: CHAT_PATH,
};

module.exports = config;
