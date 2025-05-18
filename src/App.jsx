import { useState } from 'react'
import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';
import HomePage from './pages/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <PageContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* İleride başka sayfalar buraya eklenebilir */}
          </Switch>
        </PageContent>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
