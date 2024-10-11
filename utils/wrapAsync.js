module.exports = (fn) =>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next)
    }
}

// const x = function wrapAsync(fn){
//     return function(req,res,next){
//         fn(req,res,next).catch((err)=>next(err))
//     }
// }
// module.exports = x
