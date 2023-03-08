function startEngine(callback) {
  console.log('Starting engine...');
  setTimeout(() => {
    console.log('Engine started.');
    callback();
  }, 1500);
}

function accelerate(callback) {
  console.log('Accelerating...');
  setTimeout(() => {
    console.log('Car is moving.');
    callback();
  }, 1000);
}

function breakDown(callback) {
  console.log('Car slows down...');
  setTimeout(() => {
    callback();
  }, 1000);
}

function park(callback) {
  console.log('Parking lot has found.');
  setTimeout(() => {
    console.log('Car is parked.');
    callback();
  }, 1000);
}

function stop(callback) {
  console.log('Stopping engine...');
  setTimeout(() => {
    console.log('Engine stopped.');
    callback();
  }, 1500);
}

startEngine(() => {
  accelerate(() => {
    breakDown(() => {
      park(() => {
        stop(() => {
          console.log('Car has stopped.');
        });
      });
    });
  });
});
