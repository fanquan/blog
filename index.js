export function createElement(type, config, children){
    let propName; // propName 用于储存后面需要用到的元素属性

    // props 用于存储元素属性的键值对集合
    const props = {}

    // 分别存储元素的属性key、ref、self、source
    let key = null;  
    let ref = null; 
    let self = null;
    let source = null;

    // config 对象中是元素的属性
    if(config !=null) {
        // 首先对key、ref、self、source属性赋值
        if(hasValidRef(config)){
            ref = config.ref
        }
        // 将key值转为字符串
        if(hasValidKey(config)){
            key = ''+config.key
        }
        self = config.__self === undefined ? null : config.__self
        source = config.__source === undefined ? null : config.__source

        // 将config中的属性转存到props这个之前声明好的对象中
        // 判断不是对象原型上的，也不是RESERVED_PROPS（key/ref等）,c才赋到props对象上
        for(propName in config) {
            if(hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName) ){

            }
        }

        //childrenLength 指的是当前元素的子元素个数，减去2是type和config两个参数占用的长度
        const childrenLength = arguments.length - 2;
        // 当抛去type和config,就只剩下一个参数，一般意味着是文本节点
        if(childrenLength === 1){
            // 直接将参数赋值给props.children
            props.children = children
        }else if(childrenLength >1){
            // 处理嵌套多个子元素
            // 声明一个子元素数组
            const childArray = Array(childrenLength)
            // 把子元素推进数组里
            for(let i = 0; i < childrenLength; i++){
                childArray[i] = arguments[i + 2]
            }
            // 最后把这个数组赋给 props.children
            props.children = childArray;
        }
    }
}