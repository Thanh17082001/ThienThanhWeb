const db= require('./query')

async function checkAccount(email, password) {
    const rows = await db.DbQuery(
      `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`
    );
    const data = rows ;
    return data;
}

async function checkAccountAdmin(email, password) {
  const rows = await db.DbQuery(
    `SELECT * FROM user WHERE email = '${email}' AND password = '${password}' And is_admin=1`
  );
  const data = rows ;
  return data;
}

async function findByEmail(email){
  const  rows = await db.DbQuery(
    `SELECT * FROM user WHERE email = '${email}'`
  );
  if(rows.length>0){
    return 1;
  }else{
    return 0;
  }
}

async function getIdUser(email){
  var id;
  if(email){
    const  rows = await db.DbQuery(
      `SELECT id FROM user WHERE email = '${email}'`
    );
    id=Number(rows[0].id);
  }else{
    id=null
  }
  return id;
}

async function createAccout(fullname,email,password) {
  emailUser= await findByEmail(email)
  let message=1
  if(emailUser==1){
    message=0
  }
  else{
    db.DbQuery(`insert into user(fullname,email,password) values('${fullname}','${email}','${password}')`);
  }
  return message
}
  module.exports= {checkAccount,createAccout,getIdUser,checkAccountAdmin}
  