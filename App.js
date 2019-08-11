import React from 'react';
import { ListView ,ScrollView, Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class FacebookButton extends React.Component {
  scrollToEnd = () => this.carousel.scrollToEnd({ animated: false });
  PosNeg(){
    var num;
    if(this.state.sums == 1 && this.state.ninp != 0){
      if(this.state.ninp > 0){
        num = this.state.ninp * -1;
        this.setState({ninp:num});
      }
      else if(this.state.ninp < 0){
        num = this.state.ninp * -1;
        this.setState({ninp:num});
      }
      this.setState({output:num.toString()});
      //this.setState({sums:0});
    }
    else if(this.state.input != ""){
      if(Number(this.state.input) > 0){
        num = Number(this.state.input) * -1;
        this.setState({input:num.toString()});
      }
      else if(Number(this.state.input) < 0){
        num = Number(this.state.input) * -1;
        this.setState({input:num.toString()});
      }
      this.setState({output:num});
    }
  }
  OnAC() {
    this.setState({input:""});
    this.setState({output:"0"});
    this.setState({ninp:0});
    this.setState({op:0});
    this.setState({sums:0});
    this.setState({zcount:0});
    this.setState({per:0});
  }
  OnNum(num){
    var num1;
    if(this.state.sums == 1){
      this.setState({ninp:0});
      this.setState({op:0});
      this.setState({sums:0});
    }
    if(this.state.per == 1){
      this.setState({ninp:0});
      this.setState({op:0});
      this.setState({per:0});
    }
    if(this.state.zcount < 1 && this.state.input.length < 12 || num != "." && this.state.input.length < 12){
      if(this.state.output == "0" && num == "."){
        num1 = "0" + num;
      }
      else if(this.state.op != 0 && num == "." && this.state.output == "0"){
        num1 = "0" + num;
      }
      else {
        num1 = this.state.input + num;
      }
      if(this.state.output != "0" && num != 0 || num!= 0 || num== 0 && this.state.output != "0"){
        this.setState({input:num1});
        this.setState({output:num1});
      }
      if(num == ".")
        this.setState({zcount:this.state.zcount+1});
    }
   }
  OnPer() {
    var sum;
    if(this.state.output != "0"&&  this.state.ninp == 0){
        sum = Number(this.state.output) /100;
        this.setState({ninp:sum});
        this.setState({output:sum}); 
    }
    if(this.state.output != "0" &&  this.state.ninp != 0){
        if(this.state.input == ""){
          sum = Number(this.state.ninp) /100;
          this.setState({ninp:sum});
          this.setState({output:sum}); 
        }
        else {
        switch(this.state.op){
          case 1: 
            sum = this.state.ninp+((this.state.ninp/100)*Number(this.state.input));
            this.setState({ninp:sum});
            this.setState({output:sum});
            this.setState({oinp:this.state.input});
            break;
          case 2: 
          sum = this.state.ninp-((this.state.ninp/100)*Number(this.state.input));
            this.setState({ninp:sum});
            this.setState({output:sum});
            this.setState({oinp:this.state.input});
            break;
          case 3: 
            sum = this.state.ninp*((this.state.ninp/100)*Number(this.state.input));
            this.setState({ninp:sum});
            this.setState({output:sum});
            this.setState({oinp:this.state.input});
            break;
          case 4: 
            sum = this.state.ninp/((this.state.ninp/100)*Number(this.state.input));
            this.setState({ninp:sum});
            this.setState({output:sum});
            this.setState({oinp:this.state.input});
            break;
        }
        }
    }
    this.setState({input:""});
    this.setState({op:0});
    this.setState({zcount:0});
    this.setState({per:1});
   }
  Onsum2() {
    var sum;
    if(this.state.sums == 1) {
      switch(this.state.op){
        case 1: 
          sum = this.state.ninp + Number(this.state.oinp);
          this.setState({ninp:sum});
          this.setState({output:sum});
          break;
        case 2: 
          sum = this.state.ninp - Number(this.state.oinp);
          this.setState({ninp:sum});
          this.setState({output:sum});
          break;
        case 3: 
          sum = this.state.ninp * Number(this.state.oinp);
          this.setState({ninp:sum});
          this.setState({output:sum});
          break;
        case 4: 
          sum = this.state.ninp / Number(this.state.oinp);
          this.setState({ninp:sum});
          this.setState({output:sum});
          break;
      }
    }
    else if (this.state.input != "") {
      switch(this.state.op){
        case 1: 
          sum = this.state.ninp + Number(this.state.input);
          this.setState({ninp:sum});
          this.setState({output:sum});
          this.setState({oinp:this.state.input});
          this.setState({input:""});
          break;
        case 2: 
          sum = this.state.ninp - Number(this.state.input);
          this.setState({ninp:sum});
          this.setState({output:sum});
          this.setState({oinp:this.state.input});
          this.setState({input:""});
          break;
        case 3: 
          sum = this.state.ninp * Number(this.state.input);
          this.setState({ninp:sum});
          this.setState({output:sum});
          this.setState({oinp:this.state.input});
          this.setState({input:""});
          break;
        case 4: 
          sum = this.state.ninp / Number(this.state.input);
          this.setState({ninp:sum});
          this.setState({output:sum});
          this.setState({oinp:this.state.input});
          this.setState({input:""});
          break;
      }
      //this.setState({op:0});
      this.setState({sums:1});
    }
    this.setState({zcount:0});
  }
  OnSum(st){
    var num2;
    switch(st) {
      case 1:
        if(this.state.ninp == 0 && this.state.input != ""){
          this.setState({ninp:Number(this.state.input)});
          this.setState({output:this.state.input});
        }
        else{
          if(this.state.op != 0 && this.state.op != 1 && this.state.input != ""){
            switch(this.state.op){
              case 2:
                num2 = this.state.ninp-Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
              case 3:
                num2 = this.state.ninp*Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
              case 4:
                num2 = this.state.ninp/Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
            }
          }
         else {
            if(this.state.input != ""){
              num2 = this.state.ninp+Number(this.state.input);
              this.setState({ninp:num2});
              this.setState({output:num2});
           }
         }
        }
        this.setState({input:""});
        this.setState({op:1});
        this.setState({sums:0});
        break;
      case 2:
        if(this.state.ninp == 0 && this.state.input != ""){
          this.setState({ninp:Number(this.state.input)});
          this.setState({output:this.state.input});
        }
        else {
         if(this.state.op != 0 && this.state.op != 2 && this.state.input != ""){
            switch(this.state.op){
              case 1:
                num2 = this.state.ninp+Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
              case 3:
                num2 = this.state.ninp*Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
              case 4:
                num2 = this.state.ninp/Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
            }
          }
         else {
            if(this.state.input != ""){
              num2 = this.state.ninp-Number(this.state.input);
              this.setState({ninp:num2});
              this.setState({output:num2});
           }
         }
        }
        this.setState({input:""});
        this.setState({op:2});
        this.setState({sums:0});
        break;
      case 3:
        if(this.state.ninp == 0 && this.state.input != ""){
          this.setState({ninp:Number(this.state.input)});
          this.setState({output:this.state.input});
        }
        else {
          if(this.state.op != 0 && this.state.op != 3 && this.state.input != ""){
            switch(this.state.op){
              case 1:
                num2 = this.state.ninp+Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
              case 2:
                num2 = this.state.ninp-Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
              case 4:
                num2 = this.state.ninp/Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
            }
          }
         else {
            if(this.state.input != ""){
              num2 = this.state.ninp*Number(this.state.input);
              this.setState({ninp:num2});
              this.setState({output:num2});
           }
         }
        }
        this.setState({input:""});
        this.setState({op:3});
        this.setState({sums:0});
        break;
      case 4:
        if(this.state.ninp == 0 && this.state.input != ""){
          this.setState({ninp:Number(this.state.input)});
          this.setState({output:this.state.input});
        }
        else {
          if(this.state.op != 0 && this.state.op != 4 && this.state.input != ""){
            switch(this.state.op){
              case 1:
                num2 = this.state.ninp+Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
              case 2:
                num2 = this.state.ninp-Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
              case 3:
                num2 = this.state.ninp*Number(this.state.input);
                this.setState({ninp:num2});
                this.setState({output:num2});
                break;
            }
          }
         else {
           if(this.state.input != ""){
              num2 = this.state.ninp/Number(this.state.input);
              this.setState({ninp:num2});
              this.setState({output:num2});
           }
         }
        }
        this.setState({input:""});
        this.setState({op:4});
        this.setState({sums:0});
        break;
    }
    this.setState({zcount:0});
    this.setState({per:0});
  }

  constructor(props) {
    super(props);
    this.state = {
      input :"",
      output : "0",
      ninp :0,
      op:0,
      sums:0,
      oinp:"",
      zcount:0,
      per:0,
    }
  }


  render() {
    return (
      <LinearGradient colors={['black','black']} style={{flex:1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}/>
              <View style={{flex: 1,  backgroundColor: 'black'}} ><ScrollView ><Text style={styles.sumtitleText}>{this.state.output} </Text></ScrollView></View> 
        <View style={styles.container}>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.topButton} onPress={()=>this.OnAC()}> 
              <Text style={styles.toptitleText2}>AC</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.topButton} onPress={()=>this.PosNeg()}>
              <Text style={styles.toptitleText2}>+/-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.topButton} onPress={()=>this.OnPer()}>
              <Text style={styles.toptitleText}>%</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.leftButton} onPress={()=>this.OnSum(4)}>
              <Text style={styles.titleText}>÷</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(7)}>
              <Text style={styles.titleText}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(8)}>
              <Text style={styles.titleText}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(9)}>
              <Text style={styles.titleText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.leftButton} onPress={()=>this.OnSum(3)}>
              <Text style={styles.titleText}>x</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(4)}>
              <Text style={styles.titleText}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(5)}>
              <Text style={styles.titleText}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(6)}>
              <Text style={styles.titleText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.leftButton} onPress={()=>this.OnSum(2)}>
              <Text style={styles.titleText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(1)}>
              <Text style={styles.titleText}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(2)}>
              <Text style={styles.titleText}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(3)}>
              <Text style={styles.titleText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.leftButton} onPress={()=>this.OnSum(1)}>
              <Text style={styles.titleText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.sideContainer2}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(0)}>
              <Text style={styles.titleText}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>this.OnNum(".")}>
              <Text style={styles.titleText}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer}>
            <TouchableOpacity style={styles.leftButton} onPress={()=>this.Onsum2()}>
              <Text style={styles.titleText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </LinearGradient>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sideContainer: {
    flex: 1, 
  },
  sideContainer2: {
    flex: 2, 
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 100,
    justifyContent:'center',
    padding: 18,
    margin: 9,
  },
  leftButton: {
    alignItems: 'center',
    backgroundColor: '#fe9402',
    justifyContent:'center',
    borderRadius: 100,
    padding: 18,
    margin: 9,

  },
  topButton: {
    alignItems: 'center',
    backgroundColor: '#a5a5a5',
    justifyContent:'center',
    borderRadius: 100,
    padding: 24,
    margin: 9,

  },
  titleText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'light'
  },
  toptitleText2: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'light'
  },
  toptitleText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'light'
  },
  sumtitleText: {
    fontSize: 90,
    color: 'white',
    fontWeight: 'light',
    textAlign:'right',
    marginTop: -14,
  },
    
});