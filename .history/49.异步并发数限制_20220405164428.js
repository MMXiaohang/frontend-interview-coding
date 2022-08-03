/**
 * 关键点
 * 1. new promise 一经创建，立即执行
 * 2. 使用 Promise.resolve().then 可以把任务加到微任务队列，防止立即执行迭代方法
 * 3. 微任务处理过程中，产生的新的微任务，会在同一事件循环内，追加到微任务队列里
 * 4. 使用 race 在某个任务完成时，继续添加任务，保持任务按照最大并发数进行执行
 * 5. 任务完成后，需要从 doingTasks 中移出
 */
 function limit(count, array, iterateFunc) {
    const tasks = []
    const doingTasks = []
    let i = 0
    const enqueue = () => {
      if (i === array.length) {
        return Promise.resolve()
      }
      const task = Promise.resolve().then(() => iterateFunc(array[i++]))
      tasks.push(task)
      const doing = task.then(() => doingTasks.splice(doingTasks.indexOf(doing), 1))
      doingTasks.push(doing)
      const res = doingTasks.length >= count ? Promise.race(doingTasks) : Promise.resolve()
      return res.then(enqueue)
    };
    return enqueue().then(() => Promise.all(tasks))
  }
  
  // test
  const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i))
  limit(2, [1000, 1000, 1000, 1000], timeout).then((res) => {
    console.log(res)
  })

  async function asyncPool(poolLimit, array){
      const ret = [];
      const executing = [];
      array.forEach(item => {
          const p = Promise.resolve(item);  // 转为promise对象
          ret.push(p);
          if(poolLimit <= array.length){ // 需要限制
            // then回调中，当这个promise状态变为fulfilled后，将其从正在执行的executing列表中删除
            // doing 是正在执行的任务
            const doing = p.then(() => executing.splice(executing.indexOf(e), 1));
            executing.push(doing);
            if(executing.length >= poolLimit){
                // 正在执行的数量等于限制数，就是用Promise.race等待一个promise状态发生变更
                // 状态一旦变更就会执行上面的then回调，将该promise从executing中删除
                await Promise.race(executing);  // 等待executing中状态变更
            }
          }
      })
      return Promise.all(ret);
  }