import { useState } from 'react'
import Marketplace from './components/Marketplace'
import Pharmacy from './components/Pharmacy'

function App() {
  const [currentPage, setCurrentPage] = useState('marketplace')

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName)
  }

  return (
    <>
      {currentPage === 'marketplace' && <Marketplace onPageChange={handlePageChange} />}
      {currentPage === 'pharmacy' && <Pharmacy onPageChange={handlePageChange} />}
    </>
  )
}

export default App;