const db= require('./query')

async function getProduct() {
    const rows = await db.DbQuery(
      `SELECT * FROM product where quanlity >0 and deleted=0`
    );
    const data = rows ;
    return data;
}

async function deleted() {
  const rows = await db.DbQuery(
    `SELECT * FROM product where quanlity <=0 or deleted=1`
  );
  const data = rows ;
  return data;
}

async function findProduct(id) {
  const rows = await db.DbQuery(
    `SELECT * FROM product WHERE id=${id}`
  );
  const data = rows ;
  return data;
}
async function getQuanlityProduct(id) {
  const rows = await db.DbQuery(
    `select quanlity from product where id=${id}`
  );
  const data = rows ;
  return data;
}

async function QuanlityProductIsOut() {
  const rows = await db.DbQuery(
    `SELECT  FROM product WHERE quanlity = 0`
  );
  const data = rows ;
  return data;
}

async function reduceQuanlityProduct(id,orderQuanlity) {
  var quanlity=await getQuanlityProduct(id)
  console.log(quanlity)
  var newQuanlity=quanlity[0].quanlity-orderQuanlity
  await db.DbQuery(`UPDATE product SET quanlity = ${newQuanlity} WHERE id=${id}`);
}
 async function updateProduct(id,name,quanlity,price){
  var today = new Date();
  var dateNow=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
  await db.DbQuery(
    `UPDATE product
    SET name = '${name}', quanlity = '${quanlity}',price = '${price}', updated_at='${dateNow}' WHERE id='${id}'`
  );
 }
 async function addProduct(infos){
  var today = new Date();
  var dateNow=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
  await db.DbQuery(`insert into product(id_category,img,name,price,quanlity,createed_at,updated_at) 
  values ('1', '${infos.img}', '${infos.name}', '${infos.price}', '${infos.quanlity}', '${dateNow}', '${dateNow}')
  `)
 }

 async function deleteProduct(id){
  await db.DbQuery(`UPDATE product SET deleted='1' WHERE id='${id}'`)
 }
 async function restore(id){
  await db.DbQuery(`UPDATE product SET deleted='0' WHERE id='${id}'`)
 }

module.exports= { 
  getProduct,
  findProduct,
  QuanlityProductIsOut,
  reduceQuanlityProduct,
  updateProduct,
  addProduct,
  deleteProduct,
  deleted,
  restore
}
  