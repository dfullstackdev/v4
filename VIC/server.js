const express = require("express");
const app = express();
const db = require("./db.js");
const path = require("path");
const sitesRoute = require('./routes/sitesRoute.js');
const workersRoute = require('./routes/workersRoute.js');
const userRoute = require('./routes/usersRoute.js');
app.use(express.json())
app.use('/api/sites', sitesRoute)
app.use('/api/workers', workersRoute)
app.use('/api/users/' , userRoute)

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production')
{
  app.use('/', express.static('client/build'))

  app.get("*", (req, res) => {

    res.sendFile(path.join(__dirname, 'client/build/index.html'))

  });
}

app.listen(port, () => {
    console.log(`Node JS server running at ${port}`)
  });
