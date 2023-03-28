/**
 * @description 防抖函数
 * @param { Function } fn 需要进行限制的函数
 * @param { number | undefined } delay 延时时间 延时多久后执行
 */

export function debounce(
  fn: (...args: any[]) => any,
  delay: number | undefined = 200
): object {
  let timer: [null | number] = null;
  return function (...args: [object | string]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * @description 缓存函数
 * @param { Function } fn 需要进行限制的函数
 */

export const memoize = (fn: (...args: any[]) => any) => {
  const myCatch: any = {};
  console.log("myCatch: ", myCatch);
  console.log("fn: ", fn);
  // return (...arguments: string[]) => {
  //   const arg_str = JSON.stringify(arguments);
  //   myCatch;
  //   fn;
  // };
  // return function () {
  //   const arg_str = JSON.stringify(arguments);
  //   myCatch[arg_str] = myCatch[arg_str] || fn.apply(fn, arguments);
  //   return myCatch[arg_str];
  // };
};
