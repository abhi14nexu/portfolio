const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hello Human from the other side of the window, I am Abhishek Yadav (naam toh suna hi hoga ,common jo itna h),I am pursuing B.Tech in CSE from HARCOURT BUTLER TECHNOLOGICAL INSTITUTE KANPUR(india ka harvard xd) ,I love to solve puzzles and explore new stuff ,The thing that excites me the most is travelling and exploring new places.",
  skills:
    '<span class="code">Languages:</span> C++,Python, HTML, CSS, JavaScript,SASS<br><span class="code">Technologies:</span> Git, PostgreSQL,Docker,Github<br><span class="code">Frameworks:</span> Vue.js, Django,Bootstrap,Bulma,Vuetify',
  education:
    "<b>+2:Kendriya Vidyalaya No.1 Armapur,Kanpur </b><br> <br><b>B.Tech:HBTU Kanpur 2nd Sem(Destroyed By China)</b>",
    
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "Coming Soon😁",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.facebook.com/profile.php?id=100005680202761' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/iabhi.y/' class='success link'>Instagram</a>, <a href='https://www.linkedin.com/in/abhishek-yadav-9b3915194/' class='success link'>LinkedIn</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
