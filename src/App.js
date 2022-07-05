
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function App() {
  const imgData = [
    {
      "title": "Futurama",
      "id": 1,
      "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },
    {
      "title": "The Interview",
      "id": 2,
      "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },
    {
      "title": "Gilmore Girls",
      "id": 3,
      "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    },
    {
      "title": "Family Guy",
      "id": 4,
      "img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },
    {
      "title": "The Croods",
      "id": 5,
      "img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },
    {
      "title": "Friends",
      "id": 6,
      "img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }

  ];
  const [initialData, setInitialData] = useState(imgData);
  const [addeditems, setAddedItems] = useState([]);
  const [flgBtn, setFlgBtn] = useState('');
  


  const additem = (data) => {
    setAddedItems([...addeditems, data]);
    const values = initialData.filter(initialData => initialData.id !== data.id);
    setInitialData(values);
  }
  const remove = (data) => {
    setInitialData([...initialData, data]);
    const values = addeditems.filter(addeditems => addeditems.id !== data.id);
    setAddedItems(values);
  }

  const btnAppear = (id) => {
    setFlgBtn(id);
  }

  const btnDisapper = () => {
    setFlgBtn('');
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card'>
          <h1>MyList</h1>
          <div className='row btn-none'>
            {
              initialData.map((data, index) => {
                return (
                  <div key={index} className='col-lg-2 text-center' onMouseOver={(e) => btnAppear(data.id)} onMouseLeave={btnDisapper}>
                    <div>
                      <img src={data.img} />
                    </div>
                    <p>{data.title}</p>
                    {
                      flgBtn == data.id ?
                        <button style={{ 'visibility': 'visible' }} onClick={(e) => additem(data)}>Add</button>
                        : <button style={{ 'visibility': 'hidden' }} onClick={(e) => additem(data)}>Add</button>
                    }

                  </div>
                )
              })
            }
          </div>
        </div >
      </div>
      <div className='row'>
        <div className='card'>
          <h1>Recommnendation</h1>
          <div className='row' >
            {
              addeditems.map((data, index) => {
                return (
                  <div key={index} className='col-lg-2 text-center' onMouseOver={(e) => btnAppear(data.id)} onMouseLeave={btnDisapper}>
                    <div>
                      <img src={data.img} />
                    </div>
                    <p>{data.title}</p>
                    {
                      flgBtn == data.id ?
                        <button style={{ 'visibility': 'visible' }} onClick={(e) => remove(data)}>remove</button>
                        : <button style={{ 'visibility': 'hidden' }} onClick={(e) => remove(data)}>remove</button>
                    }

                  </div>
                )
              })
            }
          </div>
        </div >
      </div>
    </div>
  );
}

export default App;
