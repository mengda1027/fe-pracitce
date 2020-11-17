// test
const map = new Map()
map.set("key", "value")
map.set("ConardLi", "code秘密花园")

const set = new Set()
set.add("ConardLi")
set.add("code秘密花园")

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
  empty: null,
  map,
  set,
}

// ver. 4
const forEach = require("./demo")
function clone4(target, map = new WeakMap()) {
  let re
  if (typeof target === "object" && target !== null) {
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
      re[key] = clone4(target[key], map)
    })
  } else {
    re = target
  }
  return re
}

const result = clone4(target)
console.log(result)
console.log(result.map === target.map)
