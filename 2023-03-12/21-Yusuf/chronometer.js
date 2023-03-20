function Chronometer() {
  let startTime = 0;
  let endTime = 0;
  let duration = 0;
  let isRunning = false;

  this.start = function () {
    if (isRunning) throw new Error('Already running...'); // throw -> return
    isRunning = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!isRunning) throw new Error('Not running even...'); // early error pattern
    isRunning = false;
    endTime = new Date();

    duration = (endTime.getTime() - startTime.getTime()) / 1000;
  };
  this.reset = function () {
    startTime = 0;
    endTime = 0;
    duration = 0;
    isRunning = false;
  };

  Object.defineProperty(this, 'result', {
    get: function () {
      return duration + ' sec';
    },
  });
}

const cron = new Chronometer();
