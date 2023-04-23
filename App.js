import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity

} from 'react-native';

class App extends Component {

  //função da state
  constructor(props) {
    super(props);

    this.state = { //declarando numero na state

      numero: 0,
      botao: 'Iniciar',
      ultimo: null
    };

    //variavel do timer relogio.
    this.timer = null

    this.iniciar = this.iniciar.bind(this); //declarado função dos botões na state
    this.limpar = this.limpar.bind(this);
  }

  iniciar() { //precisa ser chamado a função declarada 

    if (this.timer != null) {

      //aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botao: 'Iniciar'});

    } else {
      
        //começar girar timer
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })

      }, 100);
      
  this.setState({botao: 'Parar'});
    }

  }

  limpar() {
    if(this.timer != null){
         //aqui vai parar o timer
         clearInterval(this.timer);
         this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'Iniciar'
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.relogio}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <Text style={styles.btnText}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>

        </View>

        
        <View style={styles.areaUltimo}>
              <Text style={styles.ultimo}>
               {this.state.ultimo > 0 ? 'Ultimo Tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
                 
                 </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEFA'
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },

  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'

  },

  areaUltimo:{
    marginTop: 40
  },

  ultimo:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }


});



export default App;