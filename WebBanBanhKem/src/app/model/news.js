const db= require('./query')

async function getNews() {
  
    const rows = await db.DbQuery(
      `SELECT * FROM news`
    );
    const data = rows ;
  
    return data;
}
async function findNews(id) {
  
  const rows = await db.DbQuery(
    `SELECT * FROM news WHERE id=${id}`
  );
  const data = rows ;

  return data;
}

async function addNews(infos){
  var today = new Date();
  var dateNow=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
  await db.DbQuery(`insert into news(img,name,description) 
  values ('${infos.img}', '${infos.name}', '${infos.description}')
  `)
 }
  module.exports= {getNews, findNews, addNews}
  