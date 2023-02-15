const db= require('./query')
const productDb= require('./product')
async function addOrder(id_user,phone,address,status) {
  var today = new Date();
  var dateNow=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
  await db.DbQuery(`insert into user_order (id_user,phone,address,status,order_date) values(${id_user},'${phone}','${address}','${status}','${dateNow}')`);
}
async function idOrder(id_user) {
  var idOders=await db.DbQuery(`select id from user_order where id_user=${id_user} and status=1`);
  return idOders;
}
async function infoOrder(id_user) {
  var idOders=await db.DbQuery(`select od.id,us.fullname, DATE_FORMAT(order_date, '%d-%m-%y') as order_date, address 
  from user_order od inner join user us on us.id = od.id_user 
  where od.id_user=${id_user}`);
  return idOders; 
}
async function infoOrder2() {
  var idOders=await db.DbQuery(`select od.id,us.fullname, DATE_FORMAT(order_date, '%d-%m-%y') as order_date, address 
  from user_order od inner join user us on us.id = od.id_user `);
  return idOders; 
}

async function updateStatus(idOders) {
  await db.DbQuery(`update user_order set status=0 where id=${idOders}`);
}

async function addOrderDetail(id_user,infoProducts) {
  var idOders= await idOrder(id_user)
  for(let i=0;i<idOders.length;i++){
    for(let j=0;j<infoProducts.length;j++){
      await db.DbQuery(`insert into order_detail (id_order,id_product,quanlity, price_order) 
      values(${idOders[i].id},'${infoProducts[j].id}','${infoProducts[j].quanlityOrder}','${infoProducts[j].priceOder}')`);
      updateStatus(idOders[i].id)
      await productDb.reduceQuanlityProduct(infoProducts[j].id,infoProducts[j].quanlityOrder)
    }
  }
}

async function infoProducts(cartItem){
  var infos=[]
  for(let i=0;i<cartItem.length;i++){
    infos[i]={
      id:cartItem[i].id,
      name:cartItem[i].name,
      quanlityOrder:cartItem[i].quanlityOrder,
      priceOder:cartItem[i].price*cartItem[i].quanlityOrder
    }
  }
  return infos
}
 
async function test(id_user){
  var idOders= await infoOrder(id_user)
  var rows=[];
  for(let i=0;i<idOders.length;i++){
    rows[i]= {
      infos:await db.DbQuery(`select p.name, od.quanlity,od.price_order,p.name,p.price from user_order u 
      inner join order_detail od on od.id_order=u.id 
      inner join product p on od.id_product=p.id 
      inner join user us on u.id_user=us.id 
      where id_order=${idOders[i].id}`),
      id_order:idOders[i].id,
      address:idOders[i].address,
      order_date:idOders[i].order_date,
      fullname:idOders[i].fullname,
    }
  }
  return rows
}

async function allOrder(){
  var idOders= await infoOrder2()
  var rows=[];
  for(let i=0;i<idOders.length;i++){
    rows[i]= {
      infos:await db.DbQuery(`select u.id, p.name, od.quanlity,od.price_order,p.name,p.price from user_order u 
      inner join order_detail od on od.id_order=u.id 
      inner join product p on od.id_product=p.id 
      inner join user us on u.id_user=us.id 
      where id_order=${idOders[i].id}`),
      id_order:idOders[i].id,
      address:idOders[i].address,
      order_date:idOders[i].order_date,
      fullname:idOders[i].fullname,
    }
  }
  return rows
}

async function historyOder(id_user){
  var rows= await db.DbQuery(`select u.address , od.quanlity,od.price_order,DATE_FORMAT(u.order_date, '%d-%m-%Y') as order_date,p.name from order_detail od inner join user_order u on od.id_order=u.id inner join product p on od.id_product=p.id where u.id_user=${id_user}`);
  return rows;
}

module.exports= {addOrder,addOrderDetail,infoProducts,allOrder,test,historyOder}
  