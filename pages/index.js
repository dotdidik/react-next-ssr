import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import NextHead from './components/common/NextHead';
import AppHome from './components/view/AppHome';
export default () => (
  <div>
    <NextHead 
      nexthead='home'
    />    
    <AppHome />
  </div>
)
