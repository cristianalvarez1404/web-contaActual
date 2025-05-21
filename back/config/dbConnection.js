import {Client} from 'pg'

const client = new Client({
  host:'localhost',
  port:5432,
  user:'postgres',
  password:'123',
  database:'blog'
})

export const connectionToPostgresql = async () => {
  try {
    await client.connect()
    console.log('Connection to postgresql has been succesfully 👽')
    //const query = await client.query(`CREATE TABLE `)
  }catch(err){
    console.error('Error in connection to postgresql 😢',err)
  }
  finally {
    await client.end()
  }
}
