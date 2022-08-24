import React, {useState} from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { Map, Modal, Panel, List, Input } from './src/components'

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [filterVisibility, setFilterVisibility] = useState('new_punto')
  const [filterPoints, setFilterPoints] = useState(true)
  
  const toggleFilterPoits = () => setFilterPoints(!filterPoints)

  const handleLongPress = ({nativeEvent}) => {
    const newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate })
    setPuntos(newPuntos)
    setFilterVisibility('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = (text) =>{
    setNombre(text)
  }
  // {nombre.length < 1 ?
  // console.log('menor')
  // :
  // console.log('mayor');
  // }
  const handleSubmit = () => {
    // console.log(nombre.length)

    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  };

  const handleLista = () => {
    setFilterVisibility('all_puntos')
    setVisibility(true)
  }
  const next = () => {
    alert('Debe Escribir el nombre del lugar Seleccionado')
  }

  return (
    <View style={styles.container}>
      <Map onLongPress = { handleLongPress } puntos={puntos} filterPoints={filterPoints}/>
      <Panel toggleFilterPoits={toggleFilterPoits} setVisibility={setVisibility} onPressLeft={ handleLista } textLeft='Lista'/>
      <Modal 
        visibility={visibility}
      >
        {filterVisibility === 'new_punto' ?
          <>
            <Input 
              title = 'Nombre' 
              placeholder = 'Lugar'
              onChangeText = {handleChangeText}
            />
            {nombre.length < 1 ? 
              <Button title='Escriba Nombre'
                onPress={next}
              />
              :
              <View>
                <Button title='Aceptar'
                  onPress={handleSubmit}
                />
                <Button title='Cancelar'
                  onPress={handleSubmit}
                />
              </View>
            }


          </>
          :
          <List 
            puntos={puntos} 
            // setVisibility={setVisibility}
            closeModal={()=> setVisibility(false)}
          />}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
