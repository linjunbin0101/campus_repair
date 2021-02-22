Page({
   data : {
       current : 4,
       verticalCurrent : 4,
   },
   handleClick () {
       const addCurrent = this.data.current + 1;
       const current = addCurrent > 2 ? 0 : addCurrent;
       this.setData({
           'current' : current
       })
   }
});
