// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }

//   on(event, listener) {
//     if (!this.events[event]) {
//       this.events[event] = [];
//     }

//     this.events[event].push(listener);
//   }

//   off(event, listenerToRemove) {
//     if (!this.events[event]) return;

//     this.events[event] = this.events[event].filter(
//       (listener) => listener !== listenerToRemove
//     );
//   }

//   emit(event, ...args) {
//     if (this.events[event]) {
//       this.events[event].forEach((listener) => listener(...args));
//     }
//   }

//   once(event, listener) {
//     const wrapper = (...args) => {
//       listener(...args);
//       this.off(event, wrapper);
//     };
//     this.on(event, wrapper);
//   }
// }

// const emitter = new EventEmitter();

// const greet = (name) => console.log(`Hello, ${name}!`);

// emitter.on("greet", greet);
// emitter.emit("greet", "Milad");
// emitter.off("greet", greet);
// emitter.once("greet", greet);

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((fn) => fn(...args));
    }
  }

  off(event, listenerFn) {
    if (this.events[event]) {
      const updated = this.events[event].filter(
        (listener) => listener !== listenerFn
      );
      this.events[event] = updated;
    }
  }

  showEvents() {
    console.log(this.events);
  }
}

const emitter = new EventEmitter();
const welcome = (name) => console.log(`Hello, ${name}!`);

emitter.on("greet", welcome);
emitter.emit("greet", "Milad");
emitter.off("greet", welcome);
emitter.showEvents();
