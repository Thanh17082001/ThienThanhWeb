const db= require('./query')

async function addProductToSession(oldSession,newSession) {
          var Items=[];
          for(let i=0 ;i<oldSession.length;i++){
            Items.push(oldSession[i])
          }
          Items.push(newSession)
          return Items;
}

async function findByID(idProduct) {
    const rows = await db.DbQuery(
      `select * from product where id=${idProduct}`
    );
    const data = rows ;
    return data;
}

async function checkProductCart(Items,idProduct){
  var isId=-1;
    for(let i=0; i<Items.length;i++){
        if(Items[i].id==idProduct){
          isId=i;
          break;
        }
        else{
          isId=-1;
        }
    }
    return isId;
}
async function cartDelete(idProduct,Items) {
  var index=await checkProductCart(Items,idProduct)
  for(let i=index;i<Items.length;i++){
      Items[index]=Items[index+1]
  }
  Items.length--
  return Items
}


module.exports= {addProductToSession,checkProductCart,findByID,cartDelete}
  