const { exec } = require('child_process');

const instances = 1;  // Number of instances you want to run
const basePort = 3000; // Base port number

for (let i = 1; i <= instances; i++) {
  const port = basePort + i;
  const command = `PORT=${port} node index.js`;

  const instance = exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting instance on port ${port}:`, error);
      return;
    }
    if (stderr) {
      console.error(`Error output on port ${port}:`, stderr);
    }
    console.log(`Instance on port ${port} output:`, stdout);
  });

  instance.stdout.on('data', data => {
    console.log(`Instance on port ${port}: ${data}`);
  });

  instance.stderr.on('data', data => {
    console.error(`Instance on port ${port} error: ${data}`);
  });
}
