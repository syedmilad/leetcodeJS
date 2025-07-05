class TaskSchedular {
  constructor(concurrency) {
    this.concurrency = Number(concurrency); /** Concurrently kitny task run karny hain? */
    this.runningTasks = 0; /** Currently running tasks ki ginti */
    this.waitingQueue = []; /** Waiting tasks ki queue */
  }

  getNextTask() {
    if (this.runningTasks < this.concurrency && this.waitingQueue.length > 0) {
      const nextTask = this.waitingQueue.shift();
      nextTask();
    }
  }
  addTask(task) {
    return new Promise((resolve, reject) => {
      async function __taskRunner() {
        this.runningTasks += 1;
        console.log("running task plus (+)",this.runningTasks)
        try {
          const result = await task();
          console.log(`Result: ${result}`);
          resolve(result);
        } catch (error) {
          console.log(`Error: ${error}`);
          reject(error);
        } finally {
          this.runningTasks -= 1;
          console.log("running task minus (-)",this.runningTasks)
          this.getNextTask();
        }
      }

      if (this.runningTasks < this.concurrency) {
        __taskRunner.call(this);
      } else {
        this.waitingQueue.push(__taskRunner.bind(this));
      }

    });
  }
}

const taskSchedular = new TaskSchedular(3);

taskSchedular.addTask(() => new Promise((resolve) => setTimeout(() => resolve("Task 1"), 5 * 1000)));
taskSchedular.addTask(() => new Promise((resolve) => setTimeout(() => resolve("Task 2"), 5 * 1000)));
taskSchedular.addTask(() => new Promise((resolve) => setTimeout(() => resolve("Task 3"), 5 * 1000)));
taskSchedular.addTask(() => new Promise((resolve) => setTimeout(() => resolve("Task 4"), 5 * 1000)));
