import kingbot from './src';

const gameworld = 'com1';
const email = 'ilikeyou@gmail.com';
const password = 'verysecret123';
// only change if needed
const sitter_type = ''; // 'sitter' or 'dual'
const sitter_name = ''; // ingame avatar name
const port = 3000;

kingbot.start_server(gameworld, email, password, sitter_type, sitter_name, port);
