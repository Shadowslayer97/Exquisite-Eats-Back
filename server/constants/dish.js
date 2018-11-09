
const dishFilter = {
  1 : { name:"all" ,filter:{

  }},
  2 : { name:"healthy" ,filter:{
    hq:{
        $gte:5
      }
  }},
  3 : { name:"pocket friendly" ,filter:{
    rate:{
        $lte:500
      }
  }},
  4 : {}
}

module.exports = dishFilter;
