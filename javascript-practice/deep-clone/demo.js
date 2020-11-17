// 深拷贝：将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象

// test
const target1 = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
}

const target2 = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
}
target2.target2 = target2

// 版本 1 - 存在“循环引用”问题

// function clone(target) {
//   let re
//   if (typeof target === "object") {
//     re = Array.isArray(target) ? [] : {}
//     for (const k in target) {
//       re[k] = clone(target[k])
//     }
//   } else {
//     re = target
//   }
//   return re
// }

// console.log(clone(target1)) // pass
// console.log(clone(target2)) // RangeError: Maximum call stack size exceeded

// ********

// 版本 2 - for in 执行效率问题
// 存在 Map 可能会有过多“强引用”，导致内存泄漏问题，所以使用 WeakMap
function clone(target, map = new WeakMap()) {
  let re
  if (typeof target === "object") {
    if (map.get(target)) {
      return map.get(target)
    }
    re = Array.isArray(target) ? [] : {}
    map.set(target, re) // 注意位置，在被初始化后，赋值之前
    for (const k in target) {
      re[k] = clone(target[k], map)
    }
  } else {
    re = target
  }
  return re
}

// console.log(clone(target2)) // pass

// *********

// 版本 3

/**
 * forEach 实现
 * @param {*} arr 原数组
 * @param {*} iterateFn 迭代函数
 */
const forEach = (arr, iterateFn) => {
  let index = -1
  const len = arr.length
  while (++index < len) {
    iterateFn(arr[index], index) // 执行外部函数
  }
  return arr
}
module.exports = forEach

function clone3(target, map = new WeakMap()) {
  let re
  if (typeof target === "object") {
    if (map.get(target)) {
      return map.get(target)
    }
    re = Array.isArray(target) ? [] : {}
    map.set(target, re) // 注意位置，在被初始化后，赋值之前
    const keys = Array.isArray(target) ? undefined : Object.keys(target) // target 是object时获取keys
    forEach(keys || target, (value, key) => {
      if (keys) {
        // target 是 {child: "childVal"} ,则 key 是 1, value 是 child
        key = value
      }
      re[key] = clone3(target[key], map)
    })
  } else {
    re = target
  }
  return re
}

// 耗时测试
// const target = {
//   field1: 1,
//   field2: undefined,
//   field3: {
//     child: "child",
//   },
//   field4: [2, 4, 8],
//   f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
// }

// target.target = target

// console.time()
// const result = clone(target)
// console.timeEnd()

// console.time()
// const result2 = clone3(target)
// console.timeEnd()

// *************
