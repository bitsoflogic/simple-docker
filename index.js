const spawn = require('child_process').spawn;

class SimpleDocker {
  raw(args) {
    return new Promise((resolve, reject) => {
      const docker = spawn('docker', args);
      let stdout = '';
      let stderr = '';

      docker.stdout.on('data', (data) => {
        stdout += data;
      });

      docker.stderr.on('data', (data) => {
        stderr += data;
      });

      docker.on('close', (code) => {
        const response = {
          raw: {
            code: code,
            stdout: stdout,
            stderr: stderr
          }
        };

        if (stderr !== '') {
          reject(response);
          return;
        }

        resolve(response);
      });
    });
  }
}

module.exports = SimpleDocker;
