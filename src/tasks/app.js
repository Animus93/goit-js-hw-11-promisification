const refs = {
task: document.querySelector('.boxTask1'),
task2: document.querySelector('.boxTask2'),
task3: document.querySelector('.boxTask3'),
clear: document.querySelector('.consoleClear')
};

refs.clear.addEventListener('click', console.clear)

// Task 1

refs.task.addEventListener('click', () => {
  const delay = ms => {
    return new Promise(() => {
       setTimeout(() => {
            logger(ms);
        }, ms);
    });
  };

  const logger = time => console.log(`Resolved after ${time}ms`);
     // Вызовы функции для проверки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms
  });

// Task 2

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

refs.task2.addEventListener('click', () => {
  const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve)=> {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      );
      resolve(Promise.all(updatedUsers));
    })
  
  };
  
  const Thelogger = updatedUsers => console.table(updatedUsers);
  toggleUserState(users, 'Mango').then(Thelogger);
  toggleUserState(users, 'Lux').then(Thelogger);
});

//Task 3

refs.task3.addEventListener('click', () =>{
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
        if (canProcess) {
         resolve({id: transaction.id, time: delay});
          } else {
          reject(transaction.id);
        }
      }, delay);
    })
  };
  
  const logSuccess = ({id, time}) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
})
