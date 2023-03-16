class Kronometre {
  hasStart = false;
  hasStop = false;
  started = null;
  stoped = null;

  start() {
    if (!this.hasStart) {
      // console.log(this.hasStart);
      this.started = new Date().getTime();
      this.hasStart = true;
      //console.log(started);
    } else {
      console.log("Already you started");
    }
  }

  stop() {
    if (!this.hasStop && this.hasStart) {
      // console.log(this.hasStop);
      this.stoped = new Date().getTime();
      // console.log(this.stoped);
      this.hasStop = true;
      //console.log(this.hasStart, this.hasStop);
    } else if (this.hasStop && !this.hasStart) {
      console.log("Already, Stopwatch stoped.");
    } else {
      console.log("Already, Stopwatch not working.");
    }
  }

  result() {
    if (this.started !== null && this.stoped !== null) {
      console.log(`${(this.stoped - this.started) / 1000} sn`);
      //  console.log(this.started, this.stoped);
      this.hasStart = false;
      this.hasStop = false;
    } else {
      console.log("You have to start and stop the stopwatch.");
    }
    //console.log(this.started, this.stoped);
  }
}

const timer = new Kronometre();
