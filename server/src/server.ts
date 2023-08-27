const App = require('./controllers/app')

const __init__ = () => {
  App().listen(4000, () => {
    console.log(`Server runnig on PORT 4000`)
  })
}

__init__()