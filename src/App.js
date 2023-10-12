import { List } from './components/List/List';
import { Provider } from 'react-redux';
import { store } from './Store';

function App() {

  return (
    <Provider store={store}>
      <div style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhbmslMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width:'100%',
        height:'100%',
        backgroundRepeat:'no-repeat',
        objectFit: 'cover',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>

        <List/>
      </div>
    </Provider>
  );
}

export default App;
